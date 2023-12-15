import React, {useState, useEffect} from "react";
import { Dropdown, message} from 'antd';
<<<<<<< HEAD
import axios from 'axios';

export default function Header(props) {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    fetchData();
  };

  const [category, setCategory] = useState([]);
  const [sellerName, setSellerName] = useState('fgdfg');

  const fetchData = () => {
    axios.get('getCategory/')
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
        alert('Error in get');
      });
    axios.get(`get_seller_name/${props.id}`)
    .then((response) => {
      setSellerName(response.data.seller_login);
=======
import { AiOutlineBars } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Header(props) {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    console.log(key == 13)
    if (key == 13) navigate('/', { state: { category_id: undefined}});
    else navigate('/', { state: { category_id: key}});
  };

  console.log(props.id)
  const [category, setCategory] = useState([]);
  const [sellerName, setSellerName] = useState('fgfg');

  const fetchData = async () => {
    await axios.get('get_seller_name/' + props.id)
    .then((response) => {
      setSellerName(response.data[0]["seller_login"]);
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
    })
    .catch(() => {
      alert('Error in get seller name');
    });
<<<<<<< HEAD
=======

>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
  };
  useEffect(()=>{
    fetchData();
  },[props.id]);

<<<<<<< HEAD
=======
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
          <li>
<<<<<<< HEAD
            <div className="welcome_photo"></div>
            <p>{sellerName}</p>
          </li>
          <li>
            <div className="category_photo"></div>
            <Dropdown menu={{ items, onClick }}>
              <p className="category_text">Категории</p>
=======
            <FaUserSecret size={50}/>
            <p>{sellerName}</p>
          </li>
          <li>
            <AiOutlineBars size={50}/>
            <Dropdown menu={{ items, onClick }}trigger={['click']}>
            <a className="ant-dropdown-link"
             onClick={e => {e.preventDefault();
             onclick();}}>
            Категории
            </a>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
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
<<<<<<< HEAD
}

=======
}
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
