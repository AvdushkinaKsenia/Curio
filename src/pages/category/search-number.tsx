import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function SearchNumberPage() {
  const numberGames = games.filter(game => game.category === 'Поиск числа');
  
  return (
    <GamesList games={numberGames} categoryTitle="Поиск числа" />
  );
}