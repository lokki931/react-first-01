import React from 'react';

import { AddMessageActionCreater, UpdateNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreater());
        },
        changeMessage: (text) => {
            dispatch(UpdateNewMessageTextActionCreater(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
