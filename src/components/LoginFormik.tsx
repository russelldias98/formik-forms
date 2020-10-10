import React, { useState } from 'react';
import styles from './Login.module.css';
import { Button, Input, Typography, Card } from 'antd';
import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { act } from 'react-dom/test-utils';

const { Password } = Input;

const { Title } = Typography;

type formikTypes = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values: formikTypes, actions: FormikHelpers<formikTypes>) => {
    actions.setSubmitting(true);
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
      setIsLoggedIn(true);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Title>Forms with Formik</Title>
      <Card title="Login" type="inner">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleBlur, handleChange, isValid, dirty, isSubmitting }) => (
            <Form>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify({ isLoggedIn }, null, 2)}</pre>
              {!isLoggedIn ? (
                <>
                  <Input
                    className={styles.margin}
                    size="large"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Add your email"
                  />
                  <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
                  <Password
                    className={styles.margin}
                    size="large"
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Add your password"
                  />
                  <ErrorMessage name="password">{(msg) => <p>{msg}</p>}</ErrorMessage>
                  <Button
                    disabled={!(isValid && dirty)}
                    size="large"
                    htmlType="submit"
                    type="primary"
                    className={styles.fullWidth}
                    loading={isSubmitting}
                  >
                    Login
                  </Button>
                </>
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
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Login;
