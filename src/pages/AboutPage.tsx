import React from 'react';
import Header from '../components/Header/Header';
import CurioAbout from '../assets/CurioAbout.svg';

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="aboutContainer">
        <h1>О Кьюрио</h1>
        <div className="aboutContent">
          <img src={CurioAbout}  alt="Кьюрио" className="aboutImage" />
          <div className="aboutText">
            <p>
              <b>«Кьюрио»</b> — это интерактивная образовательная платформа для детей дошкольного возраста (3-7 лет), 
              где обучение превращается в увлекательное приключение вместе с любознательным лисёнком Кьюрио 🦊
            </p>
            <div style={{ margin: '15px 0' }}>
              <p><b>Мы создали этот сайт, чтобы:</b></p>
              <div style={{ marginLeft: '10px' }}>
                <div>🎨 Сделать раннее развитие весёлым</div>
                <div>❤️ Помочь детям полюбить обучение</div>
                <div>🛡️ Дать родителям безопасный инструмент</div>
              </div>
            </div>

            <p>
              Наша система автоматически подбирает игры по возрасту и уровню развития ребенка.
              Чем больше играет малыш - тем точнее становятся рекомендации.
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;