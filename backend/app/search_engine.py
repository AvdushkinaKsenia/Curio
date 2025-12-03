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

        # загрузка игр
        with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
            self.games = json.load(f)

        # загрузка эмбеддингов и индекса
        self.embeddings = np.load(DATA_DIR / "game_embeddings.npy")
        self.index = FaissIndex.load(str(DATA_DIR / "game_faiss.index"))

    def search(self, query: str, top_k=5):
        emb = self.embedder.encode(query)
        ids, dist = self.index.search(emb, top_k)

        return [{
            "id": self.games[i]["id"],
            "title": self.games[i]["title"],
            "description": self.games[i].get("description", ""),
            "shortDescription": self.games[i].get("shortDescription", ""),
            "longDescription": self.games[i].get("longDescription", ""),
            "category": self.games[i].get("category", ""),
            "image": self.games[i].get("image", ""),
            "link": self.games[i].get("link", ""),
            "distance": float(dist[j])
        } for j, i in enumerate(ids)]