import { Button, Form, Input } from "antd";
import "styles/login.scss";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      layout="vertical"
      className="login-form"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          { type: "email", message: "Email is not valid!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
