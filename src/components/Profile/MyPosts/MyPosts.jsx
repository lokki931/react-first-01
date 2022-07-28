import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from './../../../redux/state';



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(AddPostActionCreater());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreater(text));
    };

    let PostsElement = props.posts
        .map((post, index) => <Post key={post.id + index} title={post.title} like={post.like} />);

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.onPostValue}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;