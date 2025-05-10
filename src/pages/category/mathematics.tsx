import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function MathPage() {
  const mathGames = games.filter(game => game.category === 'Математика');
  
  return (
    <GamesList games={mathGames} categoryTitle="Математика" />
  );
}