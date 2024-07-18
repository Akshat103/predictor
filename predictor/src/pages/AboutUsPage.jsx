import React from 'react';
import { Typography, Card, Space } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutUsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>About Us</Title>
      
      <Card title="Our Mission" style={{ marginBottom: '20px' }}>
        <Paragraph>
          CollegeXpert is dedicated to providing accurate predictions and insights into college admissions in Madhya Pradesh (MP). Our mission is to simplify the college selection process for students by offering comprehensive tools based on MP Directorate of Technical Education (MPDTE) data.
        </Paragraph>
        <Paragraph>
          We aim to empower students with the information they need to make informed decisions about their educational journey. Through our platform, students can predict their chances of admission to various B.Tech colleges in MP's first round of counselling.
        </Paragraph>
      </Card>
      
      <Card title="Our Team" style={{ marginBottom: '20px' }}>
        <Space size={16}>
          <TeamOutlined style={{ fontSize: '24px' }} />
          <Typography>
            CollegeXpert's team comprises passionate individuals with extensive experience in education and technology. We are committed to excellence and dedicated to supporting students in achieving their academic goals.
          </Typography>
        </Space>
      </Card>
      
      <Card title="Our Vision" style={{ marginBottom: '20px' }}>
        <Paragraph>
          Our vision is to become the leading platform for college admissions predictions in Madhya Pradesh. We envision a future where every student has access to reliable data and insights that facilitate seamless college admissions.
        </Paragraph>
        <Paragraph>
          By leveraging cutting-edge technology and a deep understanding of MPDTE's admissions criteria, we strive to continuously improve our platform's accuracy and usefulness for students across the state.
        </Paragraph>
      </Card>
    </div>
  );
};

export default AboutUsPage;
