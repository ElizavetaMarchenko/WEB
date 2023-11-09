import React from "react";
import { Dropdown, message} from 'antd';


export default function Header() {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items= [
    {
      label: 'Учебные материалы',
      key: '1',
    },
    {
      label: 'Одежда',
      key: '2',
    },
    {
      label: 'Разное',
      key: '3',
    },
  ];
  return (
    <header>
      <div className="head">
        <div className="place">
          <div className="place_photo"></div>
          <p className="place_text">Санкт-Петербург</p>
        </div>
        <div className="logo"></div>
        <ul className="nav">
          <li>
            <div className="welcome_photo"></div>
            <p>Вы вошли</p>
          </li>
          <li>
            <div className="category_photo"></div>
            
            <Dropdown menu={{ items, onClick }}>
              <p className="category_text">Категории</p>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="presentation"></div>
      <div className="welcome">Добро пожаловать на студенческий маркетплейс! Здесь вы можете покупать и продавать учебные материалы, конспекты, учебники, лабораторные работы и другие учебные услуги. У нас - сообщество студентов, готовых поддержать друг друга и облегчить обучение. Давайте учиться вместе!</div>
    </header>
  );
}

