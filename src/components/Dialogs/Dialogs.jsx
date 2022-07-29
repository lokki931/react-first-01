import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = (props) => {

    let onAddMessage = () => {
        props.addMessage();
    };
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.changeMessage(text);
    }

    let DialogsElement = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    let MessagesElement = props.messages
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
                                value={props.onMessageValue}
                                onChange={onChangeMessage}
                            />
                        </div>
                        <div>
                            <button onClick={onAddMessage}>create message</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Dialogs;