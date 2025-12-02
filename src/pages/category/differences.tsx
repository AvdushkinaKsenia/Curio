import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function DifferencesPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const diffGames = games.filter(game => game.category === 'Отличия');

  return <GamesList games={diffGames} categoryTitle="Найди отличия" />;
}