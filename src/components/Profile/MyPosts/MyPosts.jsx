import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

        newPostElement.current.value = '';
    };

    let PostsElement = props.posts
        .map((post, index) => <Post key={post.id + index} title={post.title} like={post.like} />);

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder='Write you post'></textarea>
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