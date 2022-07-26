import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let PostsElement = props.posts
        .map(post => <Post key={post.id} title={post.title} like={post.like} />);
    return (
        <div>
            My post
            <div>
                <textarea placeholder='Write you post'></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {PostsElement}
            </div>
        </div>
    );
}

export default MyPosts;