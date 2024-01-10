import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";

export default function Footer() {
  return (
    <div className='about'>
      <div className='about_sale'>
        <p className='about_sale__title'>О продажах на <span className='POLYVITO'>POLYVITO</span></p>
        <p className='about_sale__text'>Для размещения объявления или получения контактов продавца, необходимо зарегистрироваться на нашей платформе. При покупке, пожалуйста, связывайтесь напрямую с продавцом. Важно отметить, что мы не можем гарантировать безопасность сделок и не несем ответственность за качество товаров или услуг, предлагаемых нашими пользователями. Пожалуйста, будьте осторожны и заботьтесь о своей безопасности. Все, как обычно. Безопасные сделки – в ваших руках</p>
      </div>
      <div className='addition'>
        <p>Остались вопросы, пиши нам!</p>
        <h1>StudentHubExchange.com</h1>
      </div>
      <div className="icon-container">
        <div class="icon">
          <a href="https://vk.com/rmn.evgen">
          <SlSocialVkontakte size = {50}/>
           </a> 
        </div>
        <div class="icon">
          <a href="https://t.me/rmnev">
          <FaTelegramPlane size={50}/>
          </a>
        </div>
        <div class="icon">
         <a href="https://www.instagram.com/_rmn.ev_/">
          <FaInstagram size={50}/>
        </a>
        </div>
      </div>
    </div>
  )
}
