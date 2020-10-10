import React, { useState } from 'react';
import styles from './Login.module.css';
import { Button, Input, Typography, Card } from 'antd';

const { Password } = Input;

const { Title } = Typography;

const Login: React.FC = () => {
  const [email, setEmail] = useState({ value: '', error: false, touched: false });
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setEmail({ value: '', error: false, touched: false });
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      ...email,
      value: e.target.value,
      error: ValidateEmail(e.target.value),
      touched: true,
    });
  };

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function ValidateEmail(mail: string) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
  }

  return (
    <div className={styles.container}>
      <Title>Forms with ReactJS</Title>
      {!isLoggedIn ? (
        <Card title="Login" type="inner">
          <form onSubmit={handleSubmit}>
            <div className={styles.margin}>
              <Input
                name="email"
                size="large"
                value={email.value}
                onChange={onChangeInputEmail}
                placeholder="Add your email"
              />
              {!email.touched && email.error && 'Opps.. invalid email'}
            </div>
            <Password
              name="password"
              size="large"
              value={password}
              onChange={onChangeInputPassword}
              placeholder="Add your password"
              className={styles.margin}
            />
            <Button
              disabled={!email.touched || !email.error}
              size="large"
              htmlType="submit"
              type="primary"
              className={styles.fullWidth}
            >
              Login
            </Button>
          </form>
        </Card>
      ) : (
        <Button
          className={styles.fullWidth}
          size="large"
          onClick={() => setIsLoggedIn(false)}
          type="primary"
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default Login;
