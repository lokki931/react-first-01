import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea placeholder='Write you post'></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post title="post 1" like="4"/>
                <Post title="post 2" like="5"/>
                <Post title="post 3" like="3"/>
                <Post title="post 4" like="2"/>
            </div>
        </div>
    );
}

export default MyPosts;