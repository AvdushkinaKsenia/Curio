import React from 'react';
import styles from './GameSelectionModal.module.css';

interface GameSelectionModalProps {
  onClose: () => void;
}

const GameSelectionModal: React.FC<GameSelectionModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src="/images/curio.png" alt="Кьюрио" className={styles.modalImage} />
        <h2>Сделал подборку игр специально для тебя!</h2>
        <button onClick={onClose} className={styles.modalButton}>
          Вперед играть →
        </button>
      </div>
    </div>
  );
};

export default GameSelectionModal;