import React from 'react';
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(AddPostActionCreater());
    };

    let PostChange = (text) => {
        props.store.dispatch(UpdateNewPostTextActionCreater(text));
    };

    return (
        <MyPosts
            onPostChange={PostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            onPostValue={state.profilePage.onPostValue}
        />
    );
}

export default MyPostsContainer;