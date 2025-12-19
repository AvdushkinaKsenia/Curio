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

        self.embeddings = np.load(DATA_DIR / "game_embeddings.npy")
        self.index = FaissIndex.load(DATA_DIR / "game_faiss.index")

    def search(self, query: str, top_k=10):
        results = []
        seen_ids = set()

        emb = self.embedder.encode(query)
        ids, scores = self.index.search(emb, top_k * 2)

        q_lower = query.lower()

        for i, score in zip(ids, scores):
            if i < 0:
                continue

            game = self.games[i]
            final_score = float(score)

            title = game["title"].lower()
            category = game["category"].lower()

            # keyword boost
            if q_lower in title:
                final_score += 0.25
            if q_lower in category:
                final_score += 0.15

            if final_score < 0.3:
                continue

            if game["id"] in seen_ids:
                continue

            results.append({
                "id": game["id"],
                "title": game["title"],
                "shortDescription": game.get("shortDescription", ""),
                "longDescription": game.get("longDescription", ""),
                "category": game.get("category", ""),
                "image": game.get("image", ""),
                "link": game.get("link", ""),
                "score": round(final_score, 3)
            })

            seen_ids.add(game["id"])

            if len(results) >= top_k:
                break

        # fallback
        if not results:
            for game in self.games[:top_k]:
                results.append({
                    "id": game["id"],
                    "title": game["title"],
                    "shortDescription": game.get("shortDescription", ""),
                    "category": game.get("category", ""),
                    "image": game.get("image", ""),
                    "link": game.get("link", ""),
                    "score": 0
                })

        return results
