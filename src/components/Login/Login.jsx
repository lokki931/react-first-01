import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validator/validator';
import { Element } from '../common/form/FormControl';
import { login } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
const Input = Element('input');
let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="email"
          validate={[required]}
          name="email"
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
          type="password"
        />
      </div>
      <div>
        <Field name="rememberMe" component={'input'} type="checkbox" />
        <label htmlFor="rememberMe">remember</label>
      </div>
      {props.error && (
        <div>
          <span style={{ color: 'red' }}>{props.error}</span>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  let submit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
    // values.email = '';
    // values.password = '';
    // values.rememberMe = false;
  };
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={submit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
