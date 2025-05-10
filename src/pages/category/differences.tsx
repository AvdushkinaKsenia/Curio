import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function DifferencesPage() {
  const diffGames = games.filter(game => game.category === 'Отличия');
  
  return (
    <GamesList games={diffGames} categoryTitle="Найди отличия" />
  );
}