// GamesPage.tsx
import React from 'react';
import Header from '../components/Header/Header';
import GameCard from '../components/GameCard/GameCard';
import { games } from '../data/games';

const GamesPage: React.FC = () => {
  const handleGameClick = (link: string) => {
    window.open(link, '_blank')
  };

  return (
    <div className="page">
      <Header />
      <main className="gamesContainer">
        <h1>Игры для тебя</h1>
        <div className="gamesGrid">
          {games.map((game) => (
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