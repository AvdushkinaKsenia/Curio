import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import GameCard from '../components/GameCard/GameCard';

interface Game {
  id: number;
  title: string;
  image: string;
  category: string;
  ageGroup: number[];
  description: string;
  link: string;
}

const GamesPage: React.FC = () => {
  const location = useLocation();
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Подгрузка JSON
  useEffect(() => {
    fetch('/Curio/data/games.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setFilteredGames(data);
      })
      .catch(err => console.error('Ошибка загрузки игр:', err));
  }, []);

  // Фильтрация по категории и поиску
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    let filtered = games;

    if (category) {
      filtered = filtered.filter(game => game.category === category);
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredGames(filtered);
  }, [games, location.search, searchTerm]);

  const handleGameClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="page">
      {/* Передаём searchTerm и setSearchTerm в Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="gamesContainer">
        <h1>Игры для тебя</h1>
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
      </main>
    </div>
  );
};

export default GamesPage;