import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let state = props.profilePage;
    //let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onChange(text);
    };

    let PostsElement = state.posts
        .map((post, index) => <Post key={post.id + index} title={post.title} like={post.like} />);

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        //ref={newPostElement}
                        value={state.onPostValue}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;