import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
import {Helmet} from "react-helmet";

=======
import axios from 'axios'
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff


const LoginPage = () => {
  const async = require('async');
  const [seller, Setseller] = useState({
    login_form_telephone : "",
    login_form_password : "",
  });
  const [id_sel, setId] = useState(-1);

  function handle(e){
        const newSeller = {...seller};
        newSeller[e.target.id] = e.target.value;
        Setseller(newSeller);
        console.log(newSeller);
  }

    async function response_result(response)
    {
        console.log("data:", response.data);
        if (response.data.length === 0)
            return -1;
        else
        {
        if (response.data[0]["seller_password"] === seller.login_form_password)
        {
            console.log("data:", response.data);
            return 0;
        }
        else
        {
        return 1;
        }
        }
    }

    async function submit(){
        let response = await axios.get('get_tel/'+seller.login_form_telephone)
        const id = await response.data[0]["seller_id"] ;
        await setId(id);
        let result = await response_result(response);
        return result;
    }

  const [formValid, setFormValid] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const passwordValidator = async(rule, value) => {
    const passwordRegex = /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/;
    if (value && !value.match(passwordRegex)) {
      return Promise.reject('Пароль должен содержать как минимум 8 символов, включая хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру.');
    }
    let s = await submit();
    if (s === 1) {
      return Promise.reject('Неверный пароль');
    }
    return Promise.resolve();
  };

  const telephoneValidator = async(_, value) =>{
    const phoneNumberRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/;
    if (value && !value.match(phoneNumberRegex)) {
      return Promise.reject('Неправильный формат номера телефона.');
    }
     let s = await submit();
    if (s === -1) {
      return Promise.reject('Неверный номер телефона');
    }
    return Promise.resolve();
  };

  const checkFormValidation = () => {
    const isFormValid = true;
    setFormValid(isFormValid);
  };

  return (
    <Row justify="center" align="middle" className="login-container" style={{ minHeight: '100vh' }}>
<<<<<<< HEAD
      <Helmet><title>Authentication</title></Helmet>
=======
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
      <Col span={8}>
        <Form
          name="login_form"
          onFinish={onFinish}
          layout="vertical"
          onFieldsChange={checkFormValidation}
        >
          <Form.Item
            name="telephone"
            label="Номер телефона"
            onChange = {(e)=>handle(e)} id="telephone" value={seller.seller_telephone}
            rules={[
              { required: true, message: 'Введите номер телефона' },
              { validator: telephoneValidator },
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
              { required: true, message: 'Пожалуйста, введите пароль' },
              { validator: passwordValidator },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: '12px', width: '100%' }}
                disabled={!formValid}
              >
                <Link to="/profile" state={{ id: id_sel }}>
                      Войти</Link>
              </Button>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: 'center', paddingTop: '8px' }}>
                У вас нет учетной записи? <Link to="/registration">Регистрируйтесь скорее!</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
