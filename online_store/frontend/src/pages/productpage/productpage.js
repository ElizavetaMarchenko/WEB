import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Row, Col } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [sellerName, setSellerName] = useState('');
  const [sellerDetails, setSellerDetails] = useState(null);

  useEffect(() => {
  const getProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/get_product_details/${productId}`);
      setProduct(response.data);

      // Получение деталей продавца на основе response.data.seller
      const sellerResponse = await axios.get(`http://localhost:8000/product/get_seller_details/${response.data.seller}`);
      const socialMediaLinks = [];

      if (sellerResponse.data.seller_vk !== null) {
        socialMediaLinks.push(<a href={sellerResponse.data.seller_vk} target="_blank" rel="noopener noreferrer">VK</a>);
      }

      if (sellerResponse.data.seller_telegram !== null) {
        socialMediaLinks.push(<a href={sellerResponse.data.seller_telegram} target="_blank" rel="noopener noreferrer">Telegram</a>);
      }

      if (sellerResponse.data.seller_insta !== null) {
        socialMediaLinks.push(<a href={sellerResponse.data.seller_insta} target="_blank" rel="noopener noreferrer">Instagram</a>);
      }

      setSellerDetails(socialMediaLinks);
    } catch (error) {
      alert('Ошибка при получении деталей продукта или продавца');
    }
  };

  getProductDetails();
}, [productId]);



  if (!product || !sellerDetails) {
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
          <Paragraph strong>Стоимость: {product.product_price}р</Paragraph>
          <Paragraph>
            Для связи: {sellerDetails.map((link, index) => <span key={index}>{link} </span>)}
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductPage;
