import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validator/validator';
import { Element } from '../common/form/FormControl';
const Input = Element('input');
let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="login"
          validate={[required]}
          name="login"
          component={Input}
          type="text"
        />
      </div>
      <div>
        <Field
          placeholder="password"
          validate={[required]}
          name="password"
          component={Input}
          type="text"
        />
      </div>
      <div>
        <Field name="rememberMe" component={'input'} type="checkbox" />
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
    values.login = '';
    values.password = '';
    values.rememberMe = false;
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={submit} />
    </div>
  );
};

export default Login;
