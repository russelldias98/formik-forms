import React, { memo, FocusEventHandler, ChangeEventHandler } from 'react';
import { Input } from 'antd';
import { ErrorMessage } from 'formik';
const { Password } = Input;

interface Props {
  handleBlur: FocusEventHandler;
  handleChange: ChangeEventHandler;
  nameFormik: string;
  value: string | number;
  label: string;
  placeholder: string;
  isPassword?: boolean;
}

const InputLabelFormik: React.FC<Props> = memo(function InputAndLabel({
  handleBlur,
  handleChange,
  nameFormik,
  value,
  label,
  placeholder,
  isPassword,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '15px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginBottom: '5px' }}>{label}</div>
        <ErrorMessage name={nameFormik}>
          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>
      </div>
      {!isPassword ? (
        <Input
          name={nameFormik}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          size="large"
        />
      ) : (
        <Password
          name={nameFormik}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          size="large"
        />
      )}
    </div>
  );
});

export default InputLabelFormik;
