import json
import numpy as np
from pathlib import Path
from .embedder import TextEmbedder
from .indexer import FaissIndex

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

class SearchEngine:
    def __init__(self):
        self.embedder = TextEmbedder()

        # Загрузка игр
        with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
            self.games = json.load(f)

        # Создание объединённого текста для эмбеддингов
        self.game_texts = [
            f"{g['title']} {g.get('shortDescription','')} {g.get('longDescription','')} {g.get('category','')}"
            for g in self.games
        ]

        # Загрузка эмбеддингов и индекса
        self.embeddings = np.load(DATA_DIR / "game_embeddings.npy")
        self.index = FaissIndex.load(DATA_DIR / "game_faiss.index")

    def search(self, query: str, top_k=10, max_distance=0.85):
        emb = self.embedder.encode(query)
        ids, dist = self.index.search(emb, top_k)

        results = []
        for j, i in enumerate(ids):
            if dist[j] > max_distance:
                continue  # фильтрация нерелевантных
            g = self.games[i]
            results.append({
                "id": g["id"],
                "title": g["title"],
                "description": g.get("description", ""),
                "shortDescription": g.get("shortDescription", ""),
                "longDescription": g.get("longDescription", ""),
                "category": g.get("category", ""),
                "image": g.get("image", ""),
                "link": g.get("link", ""),
                "distance": float(dist[j])
            })

        return results