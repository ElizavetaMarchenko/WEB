import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Row, Col, Card } from "antd";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const { Option } = Select;

const AddProductPage = () => {
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
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
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
    label: item.category_name,
    value: item.category_id,
  }));

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Helmet><title>Add product</title></Helmet>
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
            >
              <Input.TextArea />
            </Form.Item>

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

              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary"
               htmlType="submit"
               onClick = {(e) => submit(e)}>
                <Link to="/profile" state={{ id: location.state.id }}>Add Product</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddProductPage;
