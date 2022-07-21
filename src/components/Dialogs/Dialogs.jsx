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
// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: 'Taras'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Olga'
        },
        {
            id: 4,
            name: 'Yulia'
        },
        {
            id: 5,
            name: 'Anton'
        }
    ];

    let messagesData = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Hi Nick'
        },
        {
            id: 4,
            message: 'Oh'
        },
        {
            id: 5,
            message: 'Haha'
        }
    ];

    return (
        <>
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs_name}>
                    <ul className={s.list}>
                        <DialogItem name={dialogsData[0].name} userId={dialogsData[0].id} />
                        <DialogItem name={dialogsData[1].name} userId={dialogsData[1].id} />
                        <DialogItem name={dialogsData[2].name} userId={dialogsData[2].id} />
                        <DialogItem name={dialogsData[3].name} userId={dialogsData[3].id} />
                        <DialogItem name={dialogsData[4].name} userId={dialogsData[4].id} />
                    </ul>
                </div>
                <div className={s.dialogs_message}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                    <Message message={messagesData[3].message} />
                    <Message message={messagesData[4].message} />
                </div>
            </div>
        </>

    );
}
export default Dialogs;