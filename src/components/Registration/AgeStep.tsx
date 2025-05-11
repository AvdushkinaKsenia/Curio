import React from 'react';
import styles from './Registration.module.css';
import CurioQuestion from '../../assets/CurioQuestion.svg';

interface AgeStepProps {
  age: number | null;
  setAge: (age: number) => void;
  onNext: () => void;
  name: string;
}

const ageGroups = [
  { id: 1, label: 'Меньше 4', value: 3 },
  { id: 2, label: '4-5 лет', value: 4 },
  { id: 3, label: '6-7 лет', value: 6 },
];

const AgeStep: React.FC<AgeStepProps> = ({ age, setAge, onNext, name }) => {
  return (
    <div className={styles.registrationContainer}>
      <div className={`${styles.characterSection} ${styles.characterSectionAge}`}>
        <img src={CurioQuestion} alt="Кьюрио" className={styles.characterImage} />
      </div>
      <div className={styles.formSection}>
        <h1 className={styles.title}>Отлично! <br></br> <span className={styles.curioText}>{name}</span>, сколько тебе лет?</h1>
        <div className={styles.ageOptions}>
          {ageGroups.map((group) => (
            <label key={group.id} className={styles.ageOption}>
              <input
                type="radio"
                name="age"
                checked={age === group.value}
                onChange={() => setAge(group.value)}
              />
              {group.label}
            </label>
          ))}
        </div>
        <button 
          onClick={onNext} 
          className={styles.nextButton}
          disabled={!age}
        >
          Далее →
        </button>
      </div>
    </div>
  );
};

export default AgeStep;