import React, {useState, useEffect} from "react";
import { Dropdown, message} from 'antd';
import axios from 'axios';

export default function Header() {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    fetchData();
  };

  const [category, setCategory] = useState([]);

  const fetchData = () => {
    axios.get('get/')
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
        alert('Error in get');
      });
  };
  useEffect(()=>{
    fetchData();
  },[]);

  const items = category.map(item => {
  return {label: item.category_name,
  key: item.category_id
  }
  })
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
      <div className="profile_presentation"></div>
      <div className="profile_welcome">
        <h2 className="profile_welcome__title">Ваши Объявления</h2>
        <p>Добро пожаловать в ваш личный кабинет! Используйте его для редактирования контактных данных, размещения новых объявлений, управления существующими и для просмотра других пользователей. Мы даем вам инструменты для успешных сделок и обогащающего опыта!</p>
      </div>
    </header>
  );
}

