import React, {useState, useEffect} from 'react';
import { Card, Typography, Space } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Items from "./Item/Items";
import '../style.css';
import axios from 'axios'

const { Title } = Typography;

const MaterialBlock = ({ className, title, id }) => {
  const navigate = useNavigate();
  const handleAddProductClick = () => {
    navigate('/addproduct', { state: { id: id}});
  };
  const SetSearch = () =>
  {
  setSearch(!search)
  }
  const [search, setSearch] = useState(false);
  const [product, setProduct] = useState([]);
  const [items, SetItems] = useState({})

  useEffect(() =>
  {
    const my_product = async () =>
    {
    try
    {
    let response = []
    response = await axios.get('getProduct/'+ id)
    //setProduct(response.data)
    const items = response.data.map(item =>
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
    SetItems(items)
    console.log(items)
    console.log(search)
    }
    catch(error) {
            alert('Error in get you product')
        }
    }

    if (className == "my_product_block")
    {
        my_product();
    }

  },[className, id, search])




  return (
    <Card
      className={className}
      cover={
        <div className={`${className}__head`} style={{ position: 'relative', textAlign: 'center' }}>
          <Title level={3} style={{ fontSize: '50px', color: '#fff', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Playfair Display' }}>
            {title}
          </Title>
          <Space
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '145px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EditOutlined style={{ fontSize: '60px' }} onClick={SetSearch}/>
            <PlusOutlined style={{ fontSize: '60px' }} onClick={handleAddProductClick} />
          </Space>
        </div>
      }
    >
    <div>
    <Items items = {items} SetSearch = {() => {setSearch(!search)}}/>
    </div>
    </Card>
  );
};

export default MaterialBlock;
