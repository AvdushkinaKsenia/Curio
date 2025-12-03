from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from app.search_engine import SearchEngine

app = FastAPI(title="Curio Neural Search")

# Разрешаем запросы с фронтенда
origins = [
    "http://localhost:3000",  # Адрес твоего React приложения
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# создаём движок один раз
engine = SearchEngine()

@app.get("/search")
async def search_games(q: str = Query(..., min_length=1)):
    results = engine.search(q)
    return {"results": results}

@app.get("/games")
async def get_games():
    """Выдаёт список игр для фронтенда"""
    return engine.games