import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import s from './Profile.module.css';
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data);
            });

    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }

}
const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
}
export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

const ComponentWhithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setProfile
})(ComponentWhithRouter);