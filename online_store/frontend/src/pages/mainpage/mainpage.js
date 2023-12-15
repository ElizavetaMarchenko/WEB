<<<<<<< HEAD
import React from "react";
=======
import React, {useState, useEffect} from "react";
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Items from "../../Components/Items";
import './style.css';
import {Helmet} from "react-helmet";
<<<<<<< HEAD

class Mainpage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:[
        {
          id:1,
          title: 'Конспект',
          img: 'konspekt.jpg',
          desc: 'Лучший конспект по физике',
          category: 'Конспект',
          price: '100'
        },
        {
          id:2,
          title: 'Военная форма',
          img: 'voennaiforma.jpg',
          desc: 'Форма для военки по дешману',
          category: 'Одежда',
          price: '10000'
        },
        {
          id:3,
          title: 'Кастрюля',
          img: 'kastrili.jpg',
          desc: 'Новая кастрюля(лишняя)',
          category: 'Разное',
          price: '1000'
        }
      ]
    }
  }  
  render(){
=======
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


>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
    return (
      <div className="wrapper">
        <Helmet><title>POLYVITO</title></Helmet>
        <Header />
<<<<<<< HEAD
        <Items items = {this.state.items}/>
        <Footer />
      </div>
    )
  }
}

export default Mainpage;
=======
        <Items items = {items}/>
        <Footer />
      </div>
     )
}

export default Mainpage;
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
