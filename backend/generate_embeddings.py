import json
import numpy as np
from pathlib import Path
from tqdm import tqdm

from app.embedder import TextEmbedder
from app.preprocessing import clean_text
from app.indexer import FaissIndex

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"

embedder = TextEmbedder()

with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

texts = [
    clean_text(game["title"] + " " + game["description"])
    for game in games
]

print("Генерация эмбеддингов...")
emb = embedder.encode_batch(texts)
np.save(DATA_DIR / "game_embeddings.npy", emb)

index = FaissIndex(dim=emb.shape[1])
index.add(emb)
index.save(str(DATA_DIR / "game_faiss.index"))

print("Готово!")