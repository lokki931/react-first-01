import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageActionCreater, UpdateNewMessageTextActionCreater } from './../../redux/dialogs-reducer';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = (props) => {

    let addMessage = () => {
        props.dispatch(AddMessageActionCreater());
    };
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(UpdateNewMessageTextActionCreater(text));
    }

    let DialogsElement = props.state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    let MessagesElement = props.state.messages
        .map((message, index) => <Message key={message.id + index} message={message.message} />);

    return (
        <>
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs_name}>
                    <ul className={s.list}>
                        {DialogsElement}
                    </ul>
                </div>
                <div className={s.dialogs_message}>
                    <div>{MessagesElement}</div>
                    <div>
                        <div>
                            <textarea
                                value={props.state.onMessageValue}
                                onChange={onChangeMessage}
                            />
                        </div>
                        <div>
                            <button onClick={addMessage}>create message</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Dialogs;