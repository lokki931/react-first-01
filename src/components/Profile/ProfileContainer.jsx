import React from 'react';
import Profile from './Profile';
import axios from 'axios';
// import s from './Profile.module.css';
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
            });

    }
    render() {
        return <Profile profile={this.props.profile} />;
    }

}
const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    setProfile
})(ProfileContainer);