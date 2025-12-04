from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from app.search_engine import SearchEngine
from pathlib import Path
import json

app = FastAPI(title="Curio Neural Search")

# Разрешаем запросы с фронтенда
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Создаём движок один раз
engine = SearchEngine()
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

@app.get("/search")
async def search_games(q: str = Query(..., min_length=1)):
    results = engine.search(q)
    return {"results": results}

@app.get("/games")
async def get_games():
    """Выдаёт список игр для фронтенда"""
    return engine.games

@app.get("/categories")
async def get_categories():
    """Возвращает список категорий для фронтенда"""
    with open(DATA_DIR / "categories.json", "r", encoding="utf-8") as f:
        categories = json.load(f)
    return categories