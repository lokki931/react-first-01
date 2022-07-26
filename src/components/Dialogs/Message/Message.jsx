import { React } from 'react';
import s from './Message.module.css';
const Message = (props) => {
    return (
        <div key={props.id} className={s.message}>{props.message}</div>
    );
}

export default Message;