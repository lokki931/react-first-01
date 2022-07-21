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
    return (
        <div>
            My post
            <div>
                <textarea placeholder='Write you post'></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post title={postsData[0].title} like={postsData[0].like} />
                <Post title={postsData[1].title} like={postsData[1].like} />
                <Post title={postsData[2].title} like={postsData[2].like} />
                <Post title={postsData[3].title} like={postsData[3].like} />
                <Post title={postsData[4].title} like={postsData[4].like} />
            </div>
        </div>
    );
}

export default MyPosts;