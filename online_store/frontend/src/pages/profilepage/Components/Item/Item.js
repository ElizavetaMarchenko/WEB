import React, {useState} from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
import {Button, Modal} from 'antd';
import {useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const click_edit = () => {
    navigate("/editproduct", {state:{id: props.item.seller_id, item: props.item}});
  }
    return (
      <div className='item'>
        <img src={props.item.img}/>
        <div className='item_content'>
        <div className='item_text'>
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}р</b>
        </div>

        <div className = "btn">
        <button className="edit-cart"
         onClick = {click_edit}
        >
        <AiOutlineEdit  size = {20} color = {"white"} transform = {"translate(0,1)"}
            />
        </button>

        <button className="remove-cart"
         onClick = {showModal}>
        <CiCircleRemove size = {30} color = {"white"} transform = {"translate(0,1)"}
            />
        </button>
        </div>
        </div>
        <Modal title="Удаление товара" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Удалить товар?</p>
        </Modal>
      </div>
    )
}

export default Item;