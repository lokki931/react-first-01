import React from 'react';
import Profile from './Profile';
// import s from './Profile.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter } from './../../hoc/whithRouter';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    //|| 25928
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        return setTimeout(() => this.props.router.navigate('/login', { replace: true }));
      }
    }
    if (userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        profile={this.props.profile}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
)(ProfileContainer);
