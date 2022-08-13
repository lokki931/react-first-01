import React from 'react';
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(UpdateNewPostTextActionCreater(text));
        },
        addPost: () => {
            dispatch(AddPostActionCreater());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;