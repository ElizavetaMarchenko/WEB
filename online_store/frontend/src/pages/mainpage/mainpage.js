import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Items from "../../Components/Items";
import './style.css';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Mainpage = ({logCheck, id, str_search}) => {
  const location = useLocation();
  const [product, setProduct] = useState([]);

  let init_str_search = '';
  if (location.state?.str_search !== undefined)
    init_str_search = location.state?.str_search;

  const [searchTerm, setSearchTerm] = useState(init_str_search);
  console.log(init_str_search)

  console.log(location.state)
  useEffect(() => {
    const get_prod = async () => {
      try {
        let response = [];

        if (location.state?.category_id === undefined) {
          response = await axios.get('getProduct/');
        } else {
          response = await axios.get('get_prod_category/' + location.state.category_id);
        }

        setProduct(response.data);
      } catch (error) {
        alert('Error in get product');
      }
    };

    get_prod();
  }, [location.state?.category_id]);

  const items = product.map(item => {
    return {
      id: item.product_id,
      title: item.product_name,
      img: item.product_image,
      desc: item.product_description,
      category: item.category,
      price: item.product_price
    };
  });

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Helmet><title>POLYVITO</title></Helmet>
      <Header logCheck = {location.state?.logCheck} id = {location.state?.id}  setSearchTerm={setSearchTerm} />
      <div className="presentation">
      <div className="presentation_text">
      <p>Остались конспекты, а уже не нужны?</p>
      <p>У нас есть выход! Продай их людям, которым они понадобятся. </p>
      </div>
      </div>
      <Items items={filteredItems} />
      <Footer />
    </div>
  );
};

export default Mainpage;