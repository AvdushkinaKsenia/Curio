import json
import numpy as np
from pathlib import Path
from app.embedder import TextEmbedder
from app.indexer import FaissIndex

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"

# Загружаем игры
with open(DATA_DIR / "games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

texts = []

for game in games:
    text = f"""
    Название: {game['title']}
    Категория: {game['category']}
    Возраст: {', '.join(map(str, game.get('ageGroup', [])))}
    Кратко: {game.get('shortDescription', '')}
    Описание: {game.get('longDescription', '')}
    """
    texts.append(text)

embedder = TextEmbedder()

print("Генерация эмбеддингов...")
embeddings = embedder.encode_batch(texts)
print("Эмбеддинги сгенерированы:", embeddings.shape)

# Сохраняем эмбеддинги
np.save(DATA_DIR / "game_embeddings.npy", embeddings.astype("float32"))
print("Эмбеддинги сохранены в game_embeddings.npy")

# Создаём FAISS индекс
index = FaissIndex(embeddings.shape[1])
index.add(embeddings)
index.save(DATA_DIR / "game_faiss.index")  # Path приводим к str внутри метода save
print("FAISS индекс сохранён в game_faiss.index")