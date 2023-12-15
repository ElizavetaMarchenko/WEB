import React, {useState, useEffect} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Items from "../../Components/Items";
import './style.css';
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Mainpage = () => {
  const location = useLocation()
  const [product, setProduct] = useState([]);

    useEffect(() => {
        const get_prod = async () =>
        {
        try
        {
        let response = []
        console.log("id=", location.state?.category_id)
        if (location.state?.category_id == undefined )
            {
            response = await axios.get('getProduct/')
            console.log(location.state?.category_id)
            }
        else
            response = await axios.get('get_prod_category/' + location.state.category_id)

        setProduct(response.data)
        }
        catch(error) {
            alert('Error in get category')
        }
        }

        get_prod();
    },[location.state?.category_id]
    )

    const items = product.map(item =>
    {
    return {
          id: item.product_id,
          title: item.product_name,
          img: item.product_image,
          desc: item.product_description,
          category: item.category,
          price: item.product_price
    }
    })


    return (
      <div className="wrapper">
        <Helmet><title>POLYVITO</title></Helmet>
        <Header />
        <Items items = {items}/>
        <Footer />
      </div>
     )
}

export default Mainpage;
