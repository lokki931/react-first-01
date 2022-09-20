import React from 'react';
import Profile from './Profile';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
// import s from './Profile.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from './../../redux/profile-reducer';
import { whithAuthRedirect } from '../../hoc/whithAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || 2;
    this.props.getProfile(userId);
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  whithAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    getProfile,
  }),
)(ProfileContainer);
