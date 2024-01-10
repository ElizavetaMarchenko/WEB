import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card, message } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { FaTelegram } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Registrationpage = () => {

  const navigate = useNavigate()
  const [seller, Setseller] = useState({
    seller_name : "",
    seller_login : "",
    seller_vk : "",
    seller_telegram : "",
    seller_insta : "",
    seller_telephone : "",
    seller_password : "",
  });

  function handle(e){
        const newSeller = {...seller};
        newSeller[e.target.id] = e.target.value;
        Setseller(newSeller);

        console.log(e.target)
        console.log(newSeller);
  }

  function submit(e){
        e.preventDefault();
        axios.post('post/',{
            seller_name : seller.seller_name,
            seller_login : seller.seller_login,
            seller_vk : seller.seller_vk,
            seller_telegram: seller.seller_telegram,
            seller_insta : seller.seller_insta,
            seller_telephone : seller.seller_telephone,
            seller_password : seller.seller_password,
        })
        .then((async (response)=>{
        console.log("data", response.data);
        navigate("/profile", {state:{id: response.data.seller_id}});
        }))
        .catch(function (error) {
        console.log(error);
        });
  }

  const [formValid, setFormValid] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
  };



  const VkValidator = (rule, value) => {
    const socialLinkRegex =  /^(https?:\/\/)?(www\.)?(vk)\.(com)\/.*/i;
    if (value && !value.match(socialLinkRegex)) {
      return Promise.reject('Неправильный формат ссылки на соц. сеть.');
    }
    return Promise.resolve();
  };

  const TgValidator = (rule, value) => {
    const socialLinkRegex =  /^(https?:\/\/)?(www\.)?(t)\.(me)\/.*/i;
    if (value && !value.match(socialLinkRegex)) {
      return Promise.reject('Неправильный формат ссылки на соц. сеть.');
    }
    return Promise.resolve();
  };
 
  const InstValidator = (rule, value) => {
    const socialLinkRegex =  /^(https?:\/\/)?(www\.)?(instagram)\.(com)\/.*/i;
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

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Record at least one social network',
      duration: 20,
      style: {
        backgroundColor: 'FireBrick',
        borderRadius: '10px',
        boxShadow: '0 0 13px grey'
      },
    });
  };


  const [form] = Form.useForm()

  let formSocNet = true


  const handleFormChange = (_, allFields) => {
    //обработка полей на заполненность, кроме полей для соцсетей и обработка ошибое для всех полей
    const isFormValid = allFields.every((field) =>
            {if (field.name[0].trim() == "vk" || field.name[0].trim() == "telegram" || field.name[0].trim() == "insta")
                return field.errors.length == 0
            else
            {
            return field.errors.length == 0  && field.touched && field.value.trim() != ""}});

    console.log("valid= ", isFormValid)
    const socNetw = seller.seller_vk == "" && seller.seller_telegram == "" && seller.seller_insta == ""
    const socNetwError = form.getFieldError("vk").length == 0 && form.getFieldError("telegram").length == 0 && form.getFieldError("insta").length == 0
    if (isFormValid && form.getFieldError("confirmPassword").length == 0 && socNetw  )
    {
        //error();
        formSocNet = false;
        /*
        console.log("error")
        form.getFieldInstance("vk").input.labels[0].style.color= "red"
        form.getFieldInstance("vk").input.labels[0].style.fontWeight= 500
        form.getFieldInstance("telegram").input.labels[0].style.color= "red"
        form.getFieldInstance("telegram").input.labels[0].style.fontWeight= 500
        form.getFieldInstance("insta").input.labels[0].style.color= "red"
        form.getFieldInstance("insta").input.labels[0].style.fontWeight= 500
        */
    }
    else formSocNet = true
    setFormValid(isFormValid && formSocNet);
  };

  return (
    <div className="registration-container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={8}>
          <Card title="Регистрация" style={{ borderRadius: '12px' }}>
            <Form
              form={form}
              name="seller"
              onFinish={onFinish}
              layout="vertical"
              onFieldsChange={handleFormChange}
            >
             {contextHolder}
              <Form.Item
                name="name"
                label="Имя пользователя"
                style={{ color: "red" }}
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
                  prefix={<FaUserSecret className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="vk"
                label="Ссылка на Вк"
                onChange = {(e)=>handle(e)} id="social_network" value={seller.seller_vk}
                rules={[
                  { required: false, message: 'Введите ссылку на соц. сеть' },
                  { validator: VkValidator },
                ]}
              >
                <Input
                  prefix={<SlSocialVkontakte className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="telegram"
                label="Ссылка на Тг"
                onChange = {(e)=>handle(e)} id="social_network" value={seller.seller_telegram}
                rules={[
                  { required: false, message: 'Введите ссылку на соц. сеть' },
                  { validator: TgValidator },
                ]}
              >
                <Input
                  prefix={<FaTelegram className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="insta"
                label="Ссылка на Инстаграм"
                onChange = {(e)=>handle(e)} id="insta" value={seller.seller_insta}
                rules={[
                  { required: false, message: 'Введите ссылку на соц. сеть' },
                  { validator: InstValidator },
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
                  Зарегистрироваться
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
