import React, { useState } from 'react';
import styles from './Login.module.css';
import { Button, Input, Typography, Card } from 'antd';

const { Password } = Input;

const { Title } = Typography;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setEmail(e.target.value);
  };

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Title>Forms with ReactJS</Title>
      <Card title="Login" type="inner">
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            size="large"
            value={email}
            onChange={onChangeInputEmail}
            placeholder="Add your email"
          />
          <Password
            name="password"
            size="large"
            value={password}
            onChange={onChangeInputPassword}
            placeholder="Add your password"
          />
          <Button size="large" htmlType="submit" type="primary">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
