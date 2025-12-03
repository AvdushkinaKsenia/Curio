import json
import numpy as np
from pathlib import Path
from tqdm import tqdm
import faiss

from app.embedder import TextEmbedder
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

# Объединяем текст для каждой игры (title + shortDescription + longDescription + category)
texts = [
    " ".join([
        game.get("title", ""),
        game.get("shortDescription", ""),
        game.get("longDescription", ""),
        game.get("category", "")
    ])
    for game in games
]

# Генерация эмбеддингов с прогрессбаром
print("Генерация эмбеддингов...")
embeddings = embedder.encode_batch(texts)
print(f"Эмбеддинги сгенерированы: {embeddings.shape}")

# Сохраняем эмбеддинги
emb_path = DATA_DIR / "game_embeddings.npy"
np.save(emb_path, embeddings)
print(f"Эмбеддинги сохранены: {emb_path}")

# Создание FAISS индекса
index = FaissIndex(dim=embeddings.shape[1])
index.add(embeddings)

# Сохраняем индекс
faiss_path = DATA_DIR / "game_faiss.index"
index.save(str(faiss_path))
print(f"FAISS индекс сохранен: {faiss_path}")

print("Готово!")