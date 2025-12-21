import json
import numpy as np
from pathlib import Path
from .embedder import TextEmbedder
from .indexer import FaissIndex
from .preprocessing import clean_text

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"


class SearchEngine:
    def __init__(self):
        self.embedder = TextEmbedder()

        with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
            self.games = json.load(f)

        self.embeddings = np.load(DATA_DIR / "game_embeddings.npy")
        self.index = FaissIndex.load(DATA_DIR / "game_faiss.index")

    def lexical_search(self, query: str):
        """Поиск по словам (название + описание)."""
        results = []

        for game in self.games:
            text = " ".join([
                game["title"],
                game.get("shortDescription", ""),
                game.get("longDescription", ""),
                game.get("category", "")
            ]).lower()

            if query in text:
                results.append(game)

        return results

    def search(self, query: str, top_k=10):
        results = []
        seen_ids = set()

        query_clean = clean_text(query)
        word_count = len(query_clean.split())

        # 1️⃣ Lexical search для коротких запросов
        if word_count <= 2:
            lexical_hits = self.lexical_search(query_clean)

            for game in lexical_hits:
                if game["id"] in seen_ids:
                    continue

                results.append({
                    **game,
                    "score": 1.0
                })
                seen_ids.add(game["id"])

                if len(results) >= top_k:
                    return results

        # 2️⃣ Semantic search
        emb = self.embedder.encode(query_clean)
        ids, scores = self.index.search(emb, 30)

        for i, score in zip(ids, scores):
            if i < 0:
                continue

            game = self.games[i]
            if game["id"] in seen_ids:
                continue

            results.append({
                **game,
                "score": round(float(score), 3)
            })
            seen_ids.add(game["id"])

            if len(results) >= top_k:
                break

        # 3️⃣ Fallback — не пустая выдача
        if not results:
            for game in self.games[:top_k]:
                results.append({
                    **game,
                    "score": 0
                })

        return results