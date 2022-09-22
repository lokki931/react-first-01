import React from 'react';
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="login" name="login" component="input" type="text" />
      </div>
      <div>
        <Field placeholder="password" name="password" component="input" type="text" />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        <label htmlFor="rememberMe">remember</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = () => {
  let submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={submit} />
    </div>
  );
};

export default Login;
