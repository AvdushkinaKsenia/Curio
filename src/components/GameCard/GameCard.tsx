import React from 'react';
import { Game } from '../../types/game';
import styles from './GameCard.module.css';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className={styles.card}>
      <img src={game.image} alt={game.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{game.title}</h3>
        <p className={styles.description}>{game.description}</p>
        <button className={styles.button}>Играть →</button>
      </div>
    </div>
  );
};

export default GameCard;