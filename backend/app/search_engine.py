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
        seen_ids = set()

        # --- 1. Поиск по ключевым словам для коротких запросов ---
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
                    seen_ids.add(g["id"])

        # --- 2. Эмбеддинговый поиск ---
        emb = self.embedder.encode(query)
        ids, dist = self.index.search(emb, top_k*2)  # берём больше, чтобы компенсировать дубликаты

        for j, i in enumerate(ids):
            g = self.games[i]
            if g["id"] in seen_ids:
                continue  # пропускаем уже добавленные
            if dist[j] > max_distance:
                continue
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
            seen_ids.add(g["id"])
            if len(results) >= top_k:
                break

        # --- 3. Если результата нет — выдаём просто топ-K любых игр ---
        if not results:
            for g in self.games[:top_k]:
                results.append({
                    "id": g["id"],
                    "title": g["title"],
                    "description": g.get("description", ""),
                    "shortDescription": g.get("shortDescription", ""),
                    "longDescription": g.get("longDescription", ""),
                    "category": g.get("category", ""),
                    "image": g.get("image", ""),
                    "link": g.get("link", ""),
                    "distance": -1  # показывает, что совпадений по запросу нет
                })

        return results[:top_k]