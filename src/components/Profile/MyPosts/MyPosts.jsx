import { React } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            like: 7,
            title: 'Hi'
        },
        {
            id: 2,
            like: 1,
            title: 'How are you?'
        },
        {
            id: 3,
            like: 4,
            title: 'Hi Nick'
        },
        {
            id: 4,
            like: 3,
            title: 'Oh'
        },
        {
            id: 5,
            like: 2,
            title: 'Haha'
        }
    ];

    let PostsElement = postsData
        .map(post => <Post title={post.title} like={post.like} />);
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