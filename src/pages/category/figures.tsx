import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function FiguresPage() {
  const figuresGames = games.filter(game => game.category === 'Фигуры');
  
  return (
    <GamesList games={figuresGames} categoryTitle="Фигуры" />
  );
}