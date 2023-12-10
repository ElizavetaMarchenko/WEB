import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Row, Col, Card } from "antd";
import axios from "axios";
import { Helmet } from "react-helmet";

const { Option } = Select;

const AddProductPage = () => {
  const [form] = Form.useForm();
  const [category, setCategory] = useState([]);

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
              rules={[
                { required: true, message: "Please input product name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="productDescription"
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Price"
              name="productPrice"
              rules={[
                { required: true, message: "Please input product price!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Image URL"
              name="productImage"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Comment"
              name="productComment"
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select category!" }]}
            >
              <Select>
                {items.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddProductPage;
