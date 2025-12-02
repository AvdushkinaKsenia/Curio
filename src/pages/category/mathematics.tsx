import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function MathPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const mathGames = games.filter(game => game.category === 'Буквы');

  return <GamesList games={mathGames} categoryTitle="Буквы" />;
}