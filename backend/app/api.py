from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from app.search_engine import SearchEngine
from pathlib import Path
import json

app = FastAPI(title="Curio Neural Search")

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

engine = SearchEngine()
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"


@app.get("/search")
async def search_games(query: str = Query(..., min_length=1)):
    """
    Нейронный поиск игр по текстовому запросу.
    Для коротких запросов используется сначала
    лексический поиск, затем семантический.
    """
    return engine.search(query)


@app.get("/games")
async def get_games():
    """Выдаёт список всех игр"""
    return engine.games


@app.get("/categories")
async def get_categories():
    """Возвращает список категорий"""
    with open(DATA_DIR / "categories.json", "r", encoding="utf-8") as f:
        return json.load(f)