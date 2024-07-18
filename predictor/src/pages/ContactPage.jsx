import React, { useState } from 'react';
import { Typography, Form, Input, Button, Card, message, Spin } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const loadEmailJS = async () => {
    const emailjsModule = await import('@emailjs/browser');
    return emailjsModule.default;
  };

  const sendEmail = async (values) => {
    setLoading(true);
    try {
      const emailjs = await loadEmailJS();
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log('SUCCESS!');
      message.success('Your message has been sent successfully!');
    } catch (error) {
      console.log('FAILED...', error);
      message.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    sendEmail(values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Contact Us</Title>
      
      <Card style={{ marginBottom: '20px' }}>
        <Typography.Paragraph>
          Have a question or need support? Reach out to us using the contact information below.
        </Typography.Paragraph>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <PhoneOutlined style={{ marginRight: '10px' }} />
            <span>Phone: +1234567890</span>
          </li>
          <li>
            <MailOutlined style={{ marginRight: '10px' }} />
            <span>Email: contact@example.com</span>
          </li>
          <li>
            <EnvironmentOutlined style={{ marginRight: '10px' }} />
            <span>Address: 123 Street, City, Country</span>
          </li>
        </ul>
      </Card>
      
      <Card title="Send us a Message" style={{ marginBottom: '20px' }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
             label="Name"
             name="user_name"
             rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
             label="Email"
             name="user_email"
             rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
             label="Message"
             name="user_message"
             rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={loading}>
              {loading ? <Spin size="small" /> : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactPage;