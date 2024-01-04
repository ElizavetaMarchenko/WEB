import React, {useState} from 'react'
import { CiCircleRemove } from "react-icons/ci";
import {Button, Modal} from 'antd';
import axios from 'axios'

import SetSearch from "../MaterialBlock.js";

const Item = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const delete_Product = async () =>
  {
    try
        {
        const response = await axios.delete('delete_product/'+props.item.id)
        console.log(response.data)
        }
    catch(error) {
            alert('Error in delete')
        }
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    console.log("OKKKK")
    await delete_Product()
    setIsModalOpen(false);
    props.search();
  };

  const handleCancel = () => {
    setIsModalOpen(false);

  };

  const click = () => {
    console.log("click")
    showModal()
  };

    return (
      <div className='item'>
        <img src={props.item.img}/>
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}р</b>
        <div className='add-to-cart'>+</div>
        <Button name='remove-cart'
         type="default"
         shape="circle"
         color= "red"
         icon={<CiCircleRemove size = '20'/>}
         onClick = {showModal}
        >
        </Button>
        <Modal title="Удаление товара" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Удалить товар?</p>
        </Modal>
      </div>
    )
}

export default Item;