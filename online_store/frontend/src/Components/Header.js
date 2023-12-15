import React, {useState, useEffect} from "react";
import { Dropdown, message} from 'antd';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
=======
import { AiOutlineBars } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
import axios from 'axios'


export default function Header() {
<<<<<<< HEAD
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    fetchData();
  };

  const [category, setCategory] = useState([]);

  const fetchData = () => {
    axios.get('getCategory/')
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
=======
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    console.log(key == 13)
    if (key == 13) navigate('/', { state: { category_id: undefined}});
    else navigate('/', { state: { category_id: key}});
  };


  const [category, setCategory] = useState([]);

    // запрос только, когда нажали на категории
    onclick= () => {
        const get_cat = async () =>
        {
        try
        {
        const response = await axios.get('getCategory/')
        setCategory(response.data)
        }
        catch(error) {
            alert('Error in get category')
        }
        }

        get_cat();
    }
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff

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
<<<<<<< HEAD
          <Link to = "/login" style={{ textDecoration: 'none' }}>
            <li>
              <div className="welcome_photo"></div>
=======
          <Link to = "/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li>
              <BiLogIn size={50}/>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
              <p>Войти</p>
            </li>
          </Link>
          <li>
<<<<<<< HEAD
            <div className="category_photo"></div>

            <Dropdown menu={{ items, onClick }}>
              <p className="category_text">Категории</p>
=======
            <AiOutlineBars size={50}/>
            <Dropdown menu={{ items, onClick }}trigger={['click']}>
            <a className="ant-dropdown-link"
             onClick={e => {e.preventDefault();
             onclick();
             }}>
            Категории
            </a>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="presentation"></div>
      <div className="welcome">Добро пожаловать на студенческий маркетплейс! Здесь вы можете покупать и продавать учебные материалы, конспекты, учебники, лабораторные работы и другие учебные услуги. У нас - сообщество студентов, готовых поддержать друг друга и облегчить обучение. Давайте учиться вместе!</div>
<<<<<<< HEAD
    </header>
  );
}
=======

    </header>
  );
}
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
