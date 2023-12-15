import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`get_product_details/${productId}`);
        setProduct(response.data);
      } catch (error) {
        alert('Error getting product details');
      }
    };

    getProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.product_name}</h1>
      <p>{product.product_description}</p>
      <p>Price: {product.product_price}р</p>
      {/* Дополнительная информация о продукте */}
    </div>
  );
};

export default ProductPage;
