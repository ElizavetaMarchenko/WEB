import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Row, Col, Card } from "antd";
import axios from "axios";
import { Helmet } from "react-helmet";

const { Option } = Select;

const AddProductPage = () => {
  const [form] = Form.useForm();
  const [category, setCategory] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [status, setStatus] = useState([]);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Загрузка категорий
    axios.get("getCategory/")
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
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
    label: item.category_name,
    value: item.category_id,
  }));

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
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Helmet><title>Add product</title></Helmet>
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
            >
              <Input.TextArea />
            </Form.Item>

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
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
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
