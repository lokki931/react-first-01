import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';

let MessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newMessage" component="textarea" />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};
MessageForm = reduxForm({
  form: 'messageForm',
})(MessageForm);

// UI(User Interface) -> react
//BLL(Business Logic Layer)(DATA) -> redux
const Dialogs = (props) => {
  let state = props.dialogsPage;

  let onAddMessage = (values) => {
    props.addMessage(values.newMessage);
  };

  let DialogsElement = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let MessagesElement = state.messages.map((message, index) => (
    <Message key={message.id + index} message={message.message} />
  ));
  return (
    <>
      <div className={s.dialogs_wrap}>
        <div className={s.dialogs_name}>
          <ul className={s.list}>{DialogsElement}</ul>
        </div>
        <div className={s.dialogs_message}>
          <div>{MessagesElement}</div>
          <MessageForm onSubmit={onAddMessage} />
        </div>
      </div>
    </>
  );
};
export default Dialogs;
