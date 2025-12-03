import json
import numpy as np
from pathlib import Path
from tqdm import tqdm

from app.embedder import TextEmbedder
from app.preprocessing import clean_text
from app.indexer import FaissIndex

# Определяем папку backend/data
BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)  # на случай, если папка не существует

# Инициализация эмбеддера
embedder = TextEmbedder()

# Загружаем игры
with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

# Предобработка текстов
texts = [
    clean_text(
        game.get("title", "") + " " +
        game.get("shortDescription", "") + " " +
        game.get("longDescription", "")
    )
    for game in games
]

# Генерация эмбеддингов
print("Генерация эмбеддингов...")
emb = embedder.encode_batch(texts)

# Сохраняем эмбеддинги
emb_path = DATA_DIR / "game_embeddings.npy"
np.save(emb_path, emb)
print(f"Эмбеддинги сохранены: {emb_path}")

# Создание и сохранение FAISS индекса
index = FaissIndex(dim=emb.shape[1])
index.add(emb)
faiss_path = DATA_DIR / "game_faiss.index"
index.save(str(faiss_path))
print(f"FAISS индекс сохранен: {faiss_path}")

print("Готово!")