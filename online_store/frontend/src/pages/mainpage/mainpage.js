import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Items from "../../Components/Items";
import './style.css';
import {Helmet} from "react-helmet";

class Mainpage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:[
        {
          id:1,
          title: 'Конспект',
          img: 'конспект.jpg',
          desc: 'Лучший конспект по физике',
          category: 'Конспект',
          price: '100'
        },
        {
          id:2,
          title: 'Военная форма',
          img: 'военная_форма.jpg',
          desc: 'Форма для военки по дешману',
          category: 'Одежда',
          price: '10000'
        },
        {
          id:3,
          title: 'Кастрюля',
          img: 'кастрюля.jpg',
          desc: 'Новая кастрюля(лишняя)',
          category: 'Разное',
          price: '1000'
        }
      ]
    }
  }  
  render(){
    return (
      <div className="wrapper">
        <Helmet><title>POLYVITO</title></Helmet>
        <Header />
        <Items items = {this.state.items}/>
        <Footer />
      </div>
    )
  }
}

export default Mainpage;
