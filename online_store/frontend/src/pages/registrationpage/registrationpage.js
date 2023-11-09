import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Registrationpage = () => {
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
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={8}>
          <Card title="Регистрация" style={{ borderRadius: '12px' }}>
            <Form
              name="registration"
              onFinish={onFinish}
              layout="vertical"
              onFieldsChange={handleFormChange}
            >
              <Form.Item
                name="username"
                label="Имя пользователя"
                rules={[
                  { required: true, message: 'Введите имя пользователя' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="socialLink"
                label="Ссылка на соц. сеть (Вк, Тг, Инста)"
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

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
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

export default Registrationpage;
