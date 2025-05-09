import React from 'react';
import Header from '../components/Header/Header';

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="aboutContainer">
        <h1>О Кьюрио</h1>
        <div className="aboutContent">
          <img src="/images/curio.png" alt="Кьюрио" className="aboutImage" />
          <div className="aboutText">
            <p>
              «Кьюрио» — это интерактивная образовательная платформа для детей дошкольного возраста (3-7 лет), 
              где обучение превращается в увлекательное приключение вместе с любознательным персонажем Кьюрио.
            </p>
            <p>
              Мы создали этот сайт, чтобы сделать раннее развитие весёлым и доступным, помочь детям 
              полюбить обучение через игры и дать родителям удобный инструмент для занятий.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;