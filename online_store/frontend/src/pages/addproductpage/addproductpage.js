import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Row, Col, Card } from "antd";
import axios from "axios";
import { Helmet } from "react-helmet";
<<<<<<< HEAD
=======
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff

const { Option } = Select;

const AddProductPage = () => {
<<<<<<< HEAD
  const [form] = Form.useForm();
  const [category, setCategory] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [status, setStatus] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Загрузка категорий
    axios.get("getCategory/")
=======
  const location = useLocation()
  console.log(location.state.id)


  const [form] = Form.useForm();
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [product, setProduct] = useState({
    productName : "",
    productDescription : "",
    productPrice : "",
    productImage : "",
    productComment : "",
    seller : location.state.id,
    status : 1,
  });

  const fetchData = () => {
    axios
      .get("getCategory/")
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
<<<<<<< HEAD
        alert("Error in getting categories");
      });

    // Загрузка списка продавцов
    axios.get("getSellers/")
      .then((response) => {
        setSellers(response.data);
      })
      .catch(() => {
        alert("Error in getting sellers");
      });

    // Загрузка списка статусов
    axios.get("getStatus/")
      .then((response) => {
        setStatus(response.data);
      })
      .catch(() => {
        alert("Error in getting status");
      });
  }, []);

  const categoryItems = category.map((item) => ({
=======
        alert("Error in get");
      });
  };

  const handleChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  function handle(e){
        const newProduct = {...product};
        newProduct[e.target.id] = e.target.value;
        setProduct(newProduct);
        console.log(newProduct);
  }

  async function submit(e){
        e.preventDefault();
        await axios.post('post_product/',{
            product_name : product.productName,
            product_description : product.productDescription,
            product_price : product.productPrice,
            product_image : product.productImage,
            product_comment : product.productComment,
            category : selectedCategory,
            seller : product.seller,
            status : product.status,
        })
        .then((response =>{
        console.log("data", response.data);
        }))
        .catch(function (error) {
        console.log(error);
        });
  }


  useEffect(() => {
    fetchData();
  }, []);

  const items = category.map((item) => ({
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
    label: item.category_name,
    value: item.category_id,
  }));

<<<<<<< HEAD
  const sellerItems = sellers.map((seller) => ({
    label: seller.seller_name,
    value: seller.seller_id,
  }));

  const statusItems = status.map((status) => ({
    label: status.status_name,
    value: status.status_id,
  }));

  const onFinish = (values) => {
    setSubmitting(true);
  
    axios.post('addProduct/', {
        productName: values.productName,
        productDescription: values.productDescription,
        productPrice: values.productPrice,
        productImage: values.productImage,
        productComment: values.productComment,
        category: values.category,
        sellerId: values.sellerId,
        status: values.status,
    })
    .then((response) => {
      console.log("Product added successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error adding product:", error);
      // Добавьте обработку ошибок, например, вывод сообщения об ошибке
    })
    .finally(() => {
      setSubmitting(false);
    });
=======
  const onFinish = (values) => {
    console.log("Received values:", values);
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Helmet><title>Add product</title></Helmet>
<<<<<<< HEAD
      <Col span={16}>
        <Card title="Add Product" style={{ borderRadius: '12px' }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Product Name"
                  name="productName"
                  rules={[
                    { required: true, message: "Please input product name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Description"
                  name="productDescription"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Price"
                  name="productPrice"
                  rules={[
                    { required: true, message: "Please input product price!" },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Image URL"
                  name="productImage"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Comment"
              name="productComment"
=======
      <Col span={8}>
        <Card title="Add Product" style={{ borderRadius: '12px' }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Product Name"
              name="productName"
              onChange = {(e)=>handle(e)} id="name" value={product.productName}
              rules={[
                { required: true, message: "Please input product name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="productDescription"
              onChange = {(e)=>handle(e)} id="description" value={product.productDescription}
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
            >
              <Input.TextArea />
            </Form.Item>

<<<<<<< HEAD
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true, message: "Please select category!" }]}
                >
                  <Select>
                    {categoryItems.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Seller"
                  name="sellerId"
                  rules={[{ required: true, message: "Please select seller!" }]}
                >
                  <Select>
                    {sellerItems.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select status!" }]}
            >
              <Select>
                {statusItems.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
=======
            <Form.Item
              label="Price"
              name="productPrice"
              onChange = {(e)=>handle(e)} id="price" value={product.productPrice}
              rules={[
                { required: true, message: "Please input product price!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Image URL"
              name="productImage"
              onChange = {(e)=>handle(e)} id="image" value={product.productImage}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Comment"
              name="productComment"
              onChange = {(e)=>handle(e)} id="comment" value={product.productComment}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select category!" }]}
            >
              <Select
              value = {selectedCategory}
              onChange={handleChange}
              >
                {items.map((item) => (
                  <Option key={item.value} value={item.value} >
                    {item.label}
                  </Option>
                ))}

>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
              </Select>
            </Form.Item>

            <Form.Item>
<<<<<<< HEAD
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Add Product
=======
              <Button type="primary"
               htmlType="submit"
               onClick = {(e) => submit(e)}>
                <Link to="/profile" state={{ id: location.state.id }}>Add Product</Link>
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddProductPage;
