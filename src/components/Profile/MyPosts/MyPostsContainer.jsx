import React from 'react';
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import storeContext from './../../../storeContext';

const MyPostsContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(AddPostActionCreater());
                    };
                    let PostChange = (text) => {
                        store.dispatch(UpdateNewPostTextActionCreater(text));
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

            }
        </storeContext.Consumer>
    );
}

export default MyPostsContainer;