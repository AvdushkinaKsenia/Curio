import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function SearchNumberPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const numberGames = games.filter(game => game.category === 'Буквы');

  return <GamesList games={numberGames} categoryTitle="Буквы" />;
}