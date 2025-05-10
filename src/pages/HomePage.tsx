import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import NameStep from '../components/Registration/NameStep';
import AgeStep from '../components/Registration/AgeStep';
import LoadingStep from '../components/Registration/LoadingStep';
import GameSelectionModal from '../components/GameSelectionModal/GameSelectionModal';

const HomePage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [user, setUser] = useState({
    name: '',
    age: null as number | null
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      setShowModal(true); // Показываем модальное окно после шага 3
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/games'); // Переход при закрытии модального окна
  };

  return (
    <div className="page">
      {step > 3 && <Header />}
      
      {step === 1 && (
        <NameStep
          name={user.name}
          setName={(name) => setUser({...user, name})}
          onNext={handleNext}
        />
      )}
      
      {step === 2 && (
        <AgeStep
          age={user.age}
          setAge={(age) => setUser({...user, age})}
          onNext={handleNext}
          name={user.name}
        />
      )}
      
      {step === 3 && (
        <LoadingStep onComplete={handleNext} />
      )}
      
      {showModal && (
        <GameSelectionModal onClose={handleModalClose} />
      )}
    </div>
  );
};

export default HomePage;