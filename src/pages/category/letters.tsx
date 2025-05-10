import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function LettersPage() {
  const lettersGames = games.filter(game => game.category === 'Буквы');
  
  return (
    <GamesList games={lettersGames} categoryTitle="Буквы" />
  );
}