import React from 'react';

import { AddMessageActionCreater, UpdateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreater());
    };
    let changeMessage = (text) => {
        props.store.dispatch(UpdateNewMessageTextActionCreater(text));
    };

    return (
        <Dialogs
            messages={state.dialogsPage.messages}
            dialogs={state.dialogsPage.dialogs}
            onMessageValue={state.dialogsPage.onMessageValue}
            addMessage={addMessage}
            changeMessage={changeMessage}
        />
    );
}
export default DialogsContainer;