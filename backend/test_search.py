# test_search.py
from app.search_engine import SearchEngine

def main():
    engine = SearchEngine()

    queries = [
        "крысок",
        "головоломка",
        "математика",
        "фигуры",
        "творчество"
    ]

    for q in queries:
        print(f"\nПоиск по запросу: '{q}'")
        results = engine.search(q)
        if not results:
            print("  Результатов не найдено.")
            continue

        for r in results:
            title = r.get("title", "?")
            category = r.get("category", "?")
            game_id = r.get("id", "?")
            distance = r.get("distance", "?")
            print(f"  ID {game_id} | {title} | Категория: {category} | Distance: {distance:.4f}")

if __name__ == "__main__":
    main()