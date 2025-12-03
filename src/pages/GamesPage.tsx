import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import GameCard from '../components/GameCard/GameCard';
import CategoriesSidebar from '../components/CategorySidebar/CategoriesSidebar';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { Category } from '../types/game';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Загрузка игр
  useEffect(() => {
    fetch('/Curio/data/games.json')
      .then(res => res.json())
      .then((data: Game[]) => {
        const formatted = data.map(game => ({
          ...game,
          shortDescription: game.shortDescription || game.longDescription || "",
          longDescription: game.longDescription || game.shortDescription || ""
        }));
        setGames(formatted);
        setFilteredGames(formatted);
      })
      .catch(err => console.error('Ошибка загрузки игр:', err));
  }, []);

  // Загрузка категорий
  useEffect(() => {
    fetch('/Curio/data/categories.json')
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch(err => console.error('Ошибка загрузки категорий:', err));
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchTerm.trim()) {
        // Фильтрация локально по категориям
        let filtered = [...games];
        if (selectedCategory && !showAllCategories) {
          filtered = filtered.filter(game => game.category === selectedCategory);
        }
        setFilteredGames(filtered);
        return;
      }

      try {
        const res = await fetch(`http://localhost:8000/search?q=${encodeURIComponent(searchTerm)}`);
        if (!res.ok) throw new Error('Сервер вернул ошибку');
        const data: { results: Game[] } = await res.json();

        let results = data.results;

        if (selectedCategory && !showAllCategories) {
          results = results.filter(game => game.category === selectedCategory);
        }

        setFilteredGames(results);
      } catch (err) {
        console.error('Ошибка нейропоиска:', err);
        setFilteredGames([]);
      }
    };

    fetchResults();
  }, [searchTerm, selectedCategory, showAllCategories, games]);

  const handleGameClick = (link: string) => {
    window.open(link, '_blank');
  };

  const headerTitle = showAllCategories
    ? 'Все категории'
    : selectedCategory
    ? `Категория: ${selectedCategory}`
    : 'Игры для тебя';

  return (
    <div className="page">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="gamesContainer">
        <div className="gamesPageWrapper">

          {/* Боковое меню */}
          <CategoriesSidebar
            onSelectCategory={(cat: string | null | 'allCategories') => {
              if (cat === 'allCategories') {
                setShowAllCategories(true);
                setSelectedCategory(null);
              } else {
                setShowAllCategories(false);
                setSelectedCategory(cat);
              }
            }}
            selectedCategory={showAllCategories ? 'allCategories' : selectedCategory}
          />

          {/* Правая часть */}
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
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="gamesGrid">
                {filteredGames.length > 0 ? (
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