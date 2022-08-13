import React from 'react';

import { AddMessageActionCreater, UpdateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import storeContext from './../../storeContext';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const DialogsContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addMessage = () => {
                        store.dispatch(AddMessageActionCreater());
                    };
                    let changeMessage = (text) => {
                        store.dispatch(UpdateNewMessageTextActionCreater(text));
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
            }
        </storeContext.Consumer>

    );
}
export default DialogsContainer;