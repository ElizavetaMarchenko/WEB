import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios'
<<<<<<< HEAD
import {Helmet} from "react-helmet";
=======
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff

const Registrationpage = () => {

  const [seller, Setseller] = useState({
    seller_name : "",
    seller_login : "",
    seller_social_network : "",
    seller_telephone : "",
    seller_password : "",
  });

  function handle(e){
        const newSeller = {...seller};
        newSeller[e.target.id] = e.target.value;
        console.log("id", e.target.id);
        console.log("value", e.target.value);
        Setseller(newSeller);
        console.log("name", seller.seller_name);
        console.log("login", seller.seller_login);
        console.log(newSeller);
  }

  function submit(e){
        e.preventDefault();
        axios.post('post/',{
            seller_name : seller.seller_name,
            seller_login : seller.seller_login,
            seller_social_network : seller.seller_social_network,
            seller_telephone : seller.seller_telephone,
            seller_password : seller.seller_password,
        })
        .then((response =>{
        console.log("data", response.data);
        }))
        .catch(function (error) {
        console.log(error);
        });
  }

  const [formValid, setFormValid] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

 
  const socialLinkValidator = (rule, value) => {
    const socialLinkRegex =  /^(https?:\/\/)?(www\.)?(instagram|vk|t)\.(com|me)\/.*/i;
    if (value && !value.match(socialLinkRegex)) {
      return Promise.reject('Неправильный формат ссылки на соц. сеть.');
    }
    return Promise.resolve();
  };

  const passwordValidator = (rule, value) => {
    const passwordRegex = /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/;
    if (value && !value.match(passwordRegex)) {
      return Promise.reject('Пароль должен содержать как минимум 8 символов, включая хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру.');
    }
    return Promise.resolve();
  };

  const handleFormChange = (_, allFields) => {
    const isFormValid = allFields.every((field) => field.errors.length === 0 && field.touched && field.value.trim() !== "");
    setFormValid(isFormValid);
  };

  return (
    <div className="registration-container">
<<<<<<< HEAD
      <Helmet><title>Registration</title></Helmet>
=======
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={8}>
          <Card title="Регистрация" style={{ borderRadius: '12px' }}>
            <Form
              name="seller"
              onFinish={onFinish}
              layout="vertical"
              onFieldsChange={handleFormChange}
            >
              <Form.Item
                name="name"
                label="Имя пользователя"
                onChange = {(e)=>handle(e)} id="name" value={seller.seller_name}
                rules={[
                  { required: true, message: 'Введите имя пользователя' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="login"
                label="Логин пользователя"
                onChange = {(e)=>handle(e)} id="login" value={seller.seller_login}
                rules={[
                  { required: true, message: 'Введите логин пользователя' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="social_network"
                label="Ссылка на соц. сеть (Вк, Тг, Инста)"
                onChange = {(e)=>handle(e)} id="social_network" value={seller.seller_social_network}
                rules={[
                  { required: true, message: 'Введите ссылку на соц. сеть' },
                  { validator: socialLinkValidator },
                ]}
              >
                <Input
                  prefix={<GlobalOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="telephone"
                label="Номер телефона"
                onChange = {(e)=>handle(e)} id="phone" value={seller.telephone}
                rules={[
                  { required: true, message: 'Введите номер телефона' },
                  {
                    validator: (_, value) => {
                      const phoneNumberRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/;
                      if (value && !value.match(phoneNumberRegex)) {
                        return Promise.reject('Неправильный формат номера телефона.');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Пароль"
                onChange = {(e)=>handle(e)} id="password" value={seller.seller_password}
                rules={[
                  { required: true, message: 'Введите пароль' },
                  { validator: passwordValidator },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="Повторите пароль"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: 'Повторите пароль' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Пароли не совпадают');
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick = {(e) => submit(e)}
                  style={{ borderRadius: '12px' }}
                  disabled={!formValid}
                >
                  <Link to="/profile">Зарегистрироваться</Link>
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

<<<<<<< HEAD
export default Registrationpage;
=======
export default Registrationpage;
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
