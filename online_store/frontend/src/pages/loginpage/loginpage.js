import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [seller, setSeller] = useState({
    login_form_telephone: '',
    login_form_password: '',
  });

  const navigate = useNavigate();

  const handle = (e) => {
    const newSeller = { ...seller };
    newSeller[e.target.id] = e.target.value;
    setSeller(newSeller);
  };

  const submit = async () => {
    try {
      const response = await axios.get(`get_tel/${seller.login_form_telephone}/`, {
        params: {
          password: seller.login_form_password,
        },
      });

      const result = responseResult(response.data);
      return result;
    } catch (error) {
      console.error('Error in submit:', error);
      return -1; // или другой код ошибки
    }
  };

  const responseResult = (data) => {
    console.log('data:', data);
    if (data.length === 0) return -1;
    else if (data[0]['seller_password'] === seller.login_form_password) return 0;
    else return 1;
  };

  const onFinish = async () => {
    try {
      await form.validateFields();
      const result = await submit();

      if (result === 0) {
        console.log('Login successful. Redirect to profile page.');
        navigate('/profile'); // Переход на страницу профиля
      } else if (result === 1) {
        console.log('Invalid password');
        message.error('Неверный пароль');
      } else if (result === -1) {
        console.log('Invalid telephone number');
        message.error('Неверный номер телефона');
      }
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  const form = Form.useForm()[0];

  return (
    <Row justify="center" align="middle" className="login-container" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Form form={form} name="login_form" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="telephone"
            label="Номер телефона"
            onChange={(e) => handle(e)}
            id="login_form_telephone"
            value={seller.login_form_telephone}
            rules={[
              { required: true, message: 'Введите номер телефона' },
              { pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/, message: 'Неправильный формат номера телефона.' },
            ]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            onChange={(e) => handle(e)}
            id="login_form_password"
            value={seller.login_form_password}
            rules={[
              { required: true, message: 'Пожалуйста, введите пароль' },
              { pattern: /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/, message: 'Пароль должен содержать как минимум 8 символов, включая хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру.' },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
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
              >
                Войти
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
