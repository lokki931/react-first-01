import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    };
    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
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
                                ref={newMessageElement}
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