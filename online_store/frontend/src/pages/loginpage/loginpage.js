import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formValid, setFormValid] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const passwordValidator = (rule, value) => {
    const passwordRegex = /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/;
    if (value && !value.match(passwordRegex)) {
      return Promise.reject('Пароль должен содержать как минимум 8 символов, включая хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру.');
    }
    return Promise.resolve();
  };

  const checkFormValidation = () => {
    const isFormValid = true;
    setFormValid(isFormValid);
  };

  return (
    <Row justify="center" align="middle" className="login-container" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Form
          name="login-form"
          onFinish={onFinish}
          layout="vertical"
          onFieldsChange={checkFormValidation}
        >
          <Form.Item
            name="phoneNumber"
            label="Номер телефона"
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
                <Link to="/profile">Войти</Link>
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
