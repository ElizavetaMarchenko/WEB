import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const LoginPage = () => {

  const async = require('async');

  const [formValid, setFormValid] = useState(false);

  const [seller, Setseller] = useState({
    login_form_telephone : "",
    login_form_password : "",
  });

  const navigate = useNavigate()

  function handle(e){
        const newSeller = {...seller};
        newSeller[e.target.id] = e.target.value;
        Setseller(newSeller);
        console.log(newSeller);
  }

    const [form] = Form.useForm()

    const initValues = {
    telephone: "",
    password: ""
    }

    const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Incorrect phone number or password',
      duration: 10,
      style: {
        marginTop: '15vh',
      },
    });
  };

    async function submit(){
        let response = await axios.get('get_tel/'+seller.login_form_telephone+'/'+seller.login_form_password)
        console.log(response.data)
        if (response.data.length == 0)
            {
            console.log("ERTYUI")
            form.setFieldsValue( { password: initValues.password } )
            error()
            return
            }
        const id = await response.data[0]["seller_id"] ;
        navigate("/profile", {state:{id: id}});
    }


  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  /*
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
  */



  const checkFormValidation = () => {
    if ((seller.login_form_telephone != "") && (seller.login_form_password != ""))
        setFormValid(true);
    else
        setFormValid(false);
  };


  return (
    <Row justify="center" align="middle" className="login-container" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Form
          form={form}
          name="login_form"
          onFinish={onFinish}
          layout="vertical"
          initialValues= {initValues}
          onFieldsChange={checkFormValidation}
        >
        {contextHolder}
          <Form.Item
            name="telephone"
            label="Номер телефона"
            onChange = {(e)=>handle(e)} id="telephone" value={seller.seller_telephone}
            rules={[
              { required: true, message: 'Введите номер телефона' },

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
                onClick={submit}
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
