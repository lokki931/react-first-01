import React from 'react';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import s from './Profile.module.css';
import { connect } from 'react-redux';
import { getProfile } from './../../redux/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || 2;
    this.props.getProfile(userId);
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
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

const ComponentWhithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getProfile,
})(ComponentWhithRouter);
