import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <li key={props.id} className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;