import { AddPostActionCreater } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(AddPostActionCreater(newPost));
    },
    reset: () => {
      dispatch(reset('myForm'));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
