import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Items from "../../Components/Items";
import './style.css';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Mainpage = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const get_prod = async () => {
      try {
        let response = [];

        if (location.state?.category_id === undefined) {
          response = await axios.get('http://localhost:8000/getProduct/');
        } else {
          response = await axios.get('http://localhost:8000/get_prod_category/' + location.state.category_id);
        }

        setProduct(response.data);
      } catch (error) {
        alert('Error in get category');
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
      <Header setSearchTerm={setSearchTerm} />
      <Items items={filteredItems} />
      <Footer />
    </div>
  );
};

export default Mainpage;
