import React from 'react';
import { Card, Typography, Space } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

const MaterialBlock = ({ className, title }) => {
  const navigate = useNavigate();
  const handleAddProductClick = () => {
    navigate('/addproduct');
  };
  return (
    <Card
      className={className}
      cover={
        <div className={`${className}__head`} style={{ position: 'relative', textAlign: 'center' }}>
          <Title level={3} style={{ fontSize: '50px', color: '#fff', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Playfair Display' }}>
            {title}
          </Title>
          <Space
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '145px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EditOutlined style={{ fontSize: '60px' }} />
            <PlusOutlined style={{ fontSize: '60px' }} onClick={handleAddProductClick} />
            <DeleteOutlined style={{ fontSize: '60px' }} />
          </Space>
        </div>
      }
    >
    </Card>
  );
};

export default MaterialBlock;
