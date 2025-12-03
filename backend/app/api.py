from fastapi import FastAPI, Query
from app.search_engine import SearchEngine

app = FastAPI(title="Curio Neural Search")

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