import React, { useEffect } from 'react';
import styles from './Registration.module.css';
import CurioPlay from '../../assets/CurioPlay.svg';

interface LoadingStepProps {
  onComplete: () => void;
}

const LoadingStep: React.FC<LoadingStepProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={styles.loadingContainer}>
      <img src={CurioPlay} alt="Кьюрио" className={styles.loadingCharacter} />
      <h1>Ищу для тебя игры...</h1>
      <div className={styles.loadingBar}>
        <div className={styles.loadingProgress} />
      </div>
    </div>
  );
};

export default LoadingStep;