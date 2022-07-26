import { React } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <article key={props.id} className={s.item}>
            <img src="https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg" alt="ava" />
            <p>{props.title}</p>
            <span>like: {props.like}</span>
        </article>
    );
}

export default Post;