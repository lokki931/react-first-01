import {
  AddMessageActionCreater,
  UpdateNewMessageTextActionCreater,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { whithAuthRedirect } from '../../hoc/whithAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(AddMessageActionCreater());
    },
    changeMessage: (text) => {
      dispatch(UpdateNewMessageTextActionCreater(text));
    },
  };
};

export default compose(whithAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);
