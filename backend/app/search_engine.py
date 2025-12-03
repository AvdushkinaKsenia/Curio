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
        results = []

        # Если короткий запрос (1-2 слова) → поиск по ключевым словам
        if len(query.split()) <= 2:
            q_lower = query.lower()
            for g in self.games:
                title = g.get("title", "").lower()
                category = g.get("category", "").lower()
                if q_lower in title or q_lower in category:
                    results.append({
                        "id": g["id"],
                        "title": g["title"],
                        "description": g.get("description", ""),
                        "shortDescription": g.get("shortDescription", ""),
                        "longDescription": g.get("longDescription", ""),
                        "category": g.get("category", ""),
                        "image": g.get("image", ""),
                        "link": g.get("link", ""),
                        "distance": 0
                    })

            # Если ничего не найдено по ключевым словам → fallback на эмбеддинги
            if results:
                return results[:top_k]
            # else → fall through на эмбеддинговый поиск ниже

        # Эмбеддинговый поиск
        emb = self.embedder.encode(query)
        ids, dist = self.index.search(emb, top_k)

        for j, i in enumerate(ids):
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

        return results[:top_k]