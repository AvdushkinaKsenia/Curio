import React from 'react';
import Header from '../components/Header/Header';
import GameCard from '../components/GameCard/GameCard';
import { games } from '../data/games';

const GamesPage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="gamesContainer">
        <h1>Игры для тебя</h1>
        <div className="gamesGrid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamesPage;