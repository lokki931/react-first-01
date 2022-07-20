import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <li className={s.item}>
            <NavLink to={props.userId}>{props.name}</NavLink>
        </li>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <>
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs_name}>
                    <ul className={s.list}>
                        <DialogItem name="Taras" userId="1" />
                        <DialogItem name="Dimas" userId="2" />
                        <DialogItem name="Olga" userId="3" />
                        <DialogItem name="Yulia" userId="4" />
                        <DialogItem name="Anton" userId="5" />
                    </ul>
                </div>
                <div className={s.dialogs_message}>
                    <Message message="HEllo" />
                    <Message message="Hi" />
                    <Message message="Zdorov" />
                    <Message message="Privet" />
                    <Message message="Poka" />
                    <Message message="How are you?" />
                </div>
            </div>
        </>

    );
}
export default Dialogs;