import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import GameCard from '../components/GameCard/GameCard';
import { games } from '../data/games';

const GamesPage: React.FC = () => {
  const location = useLocation();
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      const filtered = games.filter(game => game.category === category);
      setFilteredGames(filtered);
    }
  }, [location.search]);

  const handleGameClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="page">
      <Header />
      <main className="gamesContainer">
        <h1>Игры для тебя</h1>
        <div className="gamesGrid">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={() => handleGameClick(game.link)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamesPage;
