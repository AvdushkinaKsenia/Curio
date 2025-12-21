import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import GameCard from "../components/GameCard/GameCard";
import CategoriesSidebar from "../components/CategorySidebar/CategoriesSidebar";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { Category } from "../types/game";

export interface Game {
  id: number;
  title: string;
  image: string;
  category: string;
  ageGroup: number[];
  shortDescription: string;
  longDescription: string;
  link: string;
}

const GamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [loading, setLoading] = useState(false);

  /* -------------------- Загрузка игр -------------------- */
  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then(res => res.json())
      .then((data: Game[]) => {
        const formatted = data.map(game => ({
          ...game,
          shortDescription:
            game.shortDescription || game.longDescription || "",
          longDescription:
            game.longDescription || game.shortDescription || ""
        }));
        setGames(formatted);
        setFilteredGames(formatted);
      })
      .catch(err => console.error("Ошибка загрузки игр:", err));
  }, []);

  /* -------------------- Загрузка категорий -------------------- */
  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch(err => console.error("Ошибка загрузки категорий:", err));
  }, []);

  /* -------------------- Поиск по кнопке -------------------- */
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      applyCategoryFilter(games);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/search?query=${encodeURIComponent(searchTerm)}`
      );
      if (!res.ok) throw new Error("Ошибка сервера");

      const data: Game[] = await res.json();
      applyCategoryFilter(data);
    } catch (err) {
      console.error("Ошибка поиска:", err);
      setFilteredGames([]);
    } finally {
      setLoading(false);
    }
  };

  /* -------------------- Фильтрация по категории -------------------- */
  const applyCategoryFilter = (list: Game[]) => {
    let result = [...list];

    if (selectedCategory && !showAllCategories) {
      result = result.filter(
        game => game.category === selectedCategory
      );
    }

    setFilteredGames(result);
  };

  /* -------------------- Клик по игре -------------------- */
  const handleGameClick = (link: string) => {
    window.open(link, "_blank");
  };

  const headerTitle = showAllCategories
    ? "Все категории"
    : selectedCategory
    ? `Категория: ${selectedCategory}`
    : "Игры для тебя";

  return (
    <div className="page">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      <main className="gamesContainer">
        <div className="gamesPageWrapper">
          <CategoriesSidebar
            categories={categories}
            selectedCategory={
              showAllCategories ? "allCategories" : selectedCategory
            }
            onSelectCategory={(cat: string | null | "allCategories") => {
              if (cat === "allCategories") {
                setShowAllCategories(true);
                setSelectedCategory(null);
              } else {
                setShowAllCategories(false);
                setSelectedCategory(cat);
              }
              applyCategoryFilter(games);
            }}
          />

          <div style={{ flex: 1 }}>
            <h1>{headerTitle}</h1>

            {showAllCategories ? (
              <div className="categoriesGrid">
                {categories.map(category => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onClick={() => {
                      setSelectedCategory(category.title);
                      setShowAllCategories(false);
                      applyCategoryFilter(games);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="gamesGrid">
                {loading ? (
                  <p>Поиск...</p>
                ) : filteredGames.length > 0 ? (
                  filteredGames.map(game => (
                    <GameCard
                      key={game.id}
                      game={game}
                      onClick={() => handleGameClick(game.link)}
                    />
                  ))
                ) : (
                  <p>Игры не найдены 😔</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GamesPage;