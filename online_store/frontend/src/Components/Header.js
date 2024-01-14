import React, { useState, useEffect } from "react";
import { Dropdown, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from 'antd';
import { useLocation } from 'react-router-dom'

const { Search } = Input;

const Header = ({ logCheck, setSearchTerm, id }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const onClick = ({ key }) => {
    if (key === '13') {
      navigate('/', { state: { category_id: undefined, logCheck: logCheck, id: id } });
    } else {
      navigate('/', { state: { category_id: key, logCheck: logCheck, id: id } });
    }
  };

  const [link1, setLink] = useState("/login")
  const [str, setStr] = useState("Войти")
  const [sellerName, setSellerName] = useState('fgfg');
  const [display_log, setDisplay_log] = useState('block');
  const [display_user, setDisplay_user] = useState('none');

  const fetchData = async () => {
    await axios.get('get_seller_name/' + id)
    .then((response) => {
      setSellerName(response.data[0]["seller_login"]);
      setLink("/profile")
      setStr(response.data[0]["seller_login"])
    })
    .catch(() => {
      alert('Error in get seller name');
    });

  };

  const displayIcon = () => {
    if (id !== undefined)
    {
        setDisplay_log("none");
        setDisplay_user("block");
    }
    else
    {
        setDisplay_user("none");
        setDisplay_log("block");
    }
  }

  useEffect(()=>{
    if (id !== undefined)
    {
        fetchData();
    }
    displayIcon();
  },[id]);

  const onclick_category = () => {
    const get_cat = async () => {
      try {
        const response = await axios.get('getCategory/');
        setCategory(response.data);
      } catch (error) {
        alert('Error in get category');
      }
    };

    get_cat();
  };

  const items = category.map((item) => {
    return {
      label: item.category_name,
      key: item.category_id,
    };
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    console.log("OKKKK")
    setIsModalOpen(false);
  };

  const click = () => {
    console.log("click")
    showModal()
  };

  const search = (value) =>
  {
    setSearchTerm(value);
    if (id !== undefined)
    {
        navigate("/", {state:{id: id, logCheck: logCheck, str_search: value}});
    }
  }


  return (
    <header>
      <div className="head">

        <div className="place">
          <FaMapLocationDot size = {50}/>
          <p className="place_text">Санкт-Петербург</p>
        </div>
        <button className="info"
         onClick={click}>
        <HiOutlineInformationCircle size = {25}
            />
        </button>
        <Modal title="Информация для пользователя"
        open={isModalOpen}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}>
        <div className="welcome">
        Добро пожаловать на студенческий маркетплейс! Здесь вы можете покупать и продавать учебные материалы, конспекты, учебники, лабораторные работы и другие учебные услуги. У нас - сообщество студентов, готовых поддержать друг друга и облегчить обучение. Давайте учиться вместе!
        </div>
        </Modal>

        <div className="logo"></div>
        <div className="search">
        <Search
          placeholder="Поиск продукта"
          onSearch={search}
        />
        </div>
        <ul className="nav">
          <Link to={link1} state={{id: id}} style={{ textDecoration: 'none', color: 'inherit' }}>
            <li>
              <BiLogIn size={50} display = {display_log}/>
              <FaUserSecret size={50} display = {display_user}/>
              <p>{str}</p>
            </li>
          </Link>

          <li>

            <Dropdown menu={{ items, onClick }} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  onclick_category();
                }}
              >
                <AiOutlineBars size={50} />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;