import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        console.log(text);
        newMessageElement.current.value = '';
    };

    let DialogsElement = props.state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    let MessagesElement = props.state.messages
        .map(message => <Message key={message.id} message={message.message} />);

    return (
        <>
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs_name}>
                    <ul className={s.list}>
                        {DialogsElement}
                    </ul>
                </div>
                <div className={s.dialogs_message}>
                    {MessagesElement}
                </div>
            </div>
            <div>
                <div><textarea ref={newMessageElement}></textarea></div>
                <div>
                    <button onClick={addMessage}>create message</button>
                </div>
            </div>
        </>

    );
}
export default Dialogs;