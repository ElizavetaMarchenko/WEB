import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Row, Col } from 'antd';
import axios from 'axios';
import gsap from 'gsap';

const { Title, Paragraph } = Typography;

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [sellerName, setSellerName] = useState('fgfg');

  useEffect(() => {
    
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`/get_product_details/${productId}`);
        setProduct(response.data);
        animateProductDetails();
      } catch (error) {
        alert('Error getting product details');
      }
    };

    getProductDetails();

    
    // const fetchData = async () => {
    //   await axios.get('get_seller_name/' + product.seller)
    //   .then((response) => {
    //     setSellerName(response.data[0]["seller_social_network"]);
    //   })
    //   .catch(() => {
    //     alert('Error in get seller name');
    //   });
  
    // };
    // fetchData();
  }, [productId]);

  
  const animateProductDetails = () => {
    gsap.from('.product-card', { opacity: 0, duration: 1.5, ease: 'power2.inOut' });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <Card
          cover={<img alt={product.product_name} src={product.product_image} />}
          style={{ borderRadius: 8 }}
          className="product-card"
        >
          <Title level={3}>{product.product_name}</Title>
          <Paragraph>Описание: {product.product_description}</Paragraph>
          <Paragraph strong>Стоимостть: {product.product_price}р</Paragraph>
          <Paragraph>Для связи: {sellerName}</Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductPage;
