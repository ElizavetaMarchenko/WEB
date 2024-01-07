import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet";

const Registrationpage = () => {

const [seller, setSeller] = useState({
seller_name: "",
seller_login: "",
seller_telephone: "",
seller_password: "",
seller_vk: "",
seller_telegram: "",
seller_insta: "",
selectedSocialNetworks: [],
});

const [formValid, setFormValid] = useState(false);

const onFinish = (values) => {
console.log('Received values:', values);
};

const socialLinkValidator = (rule, value) => {
const socialLinkRegex = /^(https?:\/\/)?(www\.)?(instagram|vk|t)\.(com|me)\/.*/i;
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
const hasFilledSocialNetwork = ['seller_vk', 'seller_telegram', 'seller_insta'].some(fieldId =>
allFields.find(field => field.name[0] === fieldId && field.touched && field.value.trim() !== "")
);

const hasFilledAllFields = allFields.every(field =>
(field.name[0].startsWith("social_network") && !hasFilledSocialNetwork) || (field.errors.length === 0 && field.touched && field.value.trim() !== "")
);

setFormValid(hasFilledAllFields);
};

const handle = (e) => {
const newSeller = { ...seller };
if (e.target.id === "social_network_vk") {
newSeller.seller_vk = e.target.value;
} else if (e.target.id === "social_network_telegram") {
newSeller.seller_telegram = e.target.value;
} else if (e.target.id === "social_network_insta") {
newSeller.seller_insta = e.target.value;
} else {
newSeller[e.target.id] = e.target.value;
}
setSeller(newSeller);
console.log(newSeller)
};

const submit = (e) => {
e.preventDefault();

// Проверка, что хотя бы одна социальная сеть указана
const hasFilledSocialNetwork = [seller.seller_vk, seller.seller_telegram, seller.seller_insta].some(value => value.trim() !== "");

if (!hasFilledSocialNetwork) {
  console.error('Укажите хотя бы одну социальную сеть.');
  return;
}

axios.post('post/', {
seller_name: seller.seller_name,
seller_login: seller.seller_login,
seller_vk: seller.seller_vk,
seller_telegram: seller.seller_telegram,
seller_insta: seller.seller_insta,
seller_telephone: seller.seller_telephone,
seller_password: seller.seller_password,
})
.then((response) => {
  console.log("data", response.data);
})
.catch(function (error) {
  console.log(error);
});
};

return (
<div className="registration-container">
<Helmet><title>Registration</title></Helmet>
<Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
  <Col span={8}>
    <Card title="Регистрация" style={{ borderRadius: '12px' }}>
      <Form
        name="seller"
        onFinish={onFinish}
        layout="vertical"
        onFieldsChange={handleFormChange}
      >
        {/* Имя пользователя */}
        <Form.Item
          name="name"
          label="Имя пользователя"
          onChange={(e) => handle(e)} id="name" value={seller.seller_name}
          rules={[
            { required: true, message: 'Введите имя пользователя' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Логин пользователя */}
        <Form.Item
          name="login"
          label="Логин пользователя"
          onChange={(e) => handle(e)} id="login" value={seller.seller_login}
          rules={[
            { required: true, message: 'Введите логин пользователя' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Ссылка на ВК */}
        <Form.Item
          name="vk"
          label="ВКонтакте"
          onChange={(e) => handle(e)} id="social_network_vk" value={seller.seller_vk}
          rules={[
            { required: true, message: 'Введите ссылку на ВКонтакте' },
            { validator: socialLinkValidator },
          ]}
        >
          <Input
            prefix={<GlobalOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Ссылка на Телеграм */}
        <Form.Item
          name="telegram"
          label="Telegram"
          onChange={(e) => handle(e)} id="social_network_telegram" value={seller.seller_telegram}
          rules={[
            { required: true, message: 'Введите ссылку на Telegram' },
            { validator: socialLinkValidator },
          ]}
        >
          <Input
            prefix={<GlobalOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Ссылка на Instagram */}
        <Form.Item
          name="insta"
          label="Instagram"
          onChange={(e) => handle(e)} id="social_network_insta" value={seller.seller_insta}
          rules={[
            { required: true, message: 'Введите ссылку на Instagram' },
            { validator: socialLinkValidator },
          ]}
        >
          <Input
            prefix={<GlobalOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Номер телефона */}
        <Form.Item
          name="telephone"
          label="Номер телефона"
          onChange={(e) => handle(e)} id="phone" value={seller.telephone}
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

        {/* Пароль */}
        <Form.Item
          name="password"
          label="Пароль"
          onChange={(e) => handle(e)} id="password" value={seller.seller_password}
          rules={[
            { required: true, message: 'Введите пароль' },
            { validator: passwordValidator },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* Повторите пароль */}
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

        {/* Кнопка регистрации */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => submit(e)}
            style={{ borderRadius: '12px' }}
            disabled={!formValid}
          >
            <Link to="/">Зарегистрироваться</Link>
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
