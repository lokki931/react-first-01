import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
const mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export const whithAuthRedirect = (ComponentWrapper) => {
  const Component = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <ComponentWrapper {...props} />;
  };

  const ConnectComponent = connect(mapStateToPropsRedirect)(Component);

  return ConnectComponent;
};
