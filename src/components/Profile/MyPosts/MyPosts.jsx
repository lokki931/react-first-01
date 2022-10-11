import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

import { Element } from '../../common/form/FormControl';
import { maxLengthCreator, required } from '../../../utils/validator/validator';

const Textarea = Element('textarea');
const maxLength = maxLengthCreator(30);

let MyPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPost"
          placeholder="enter you post"
          component={Textarea}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};
MyPostForm = reduxForm({
  form: 'postForm',
})(MyPostForm);

const MyPosts = (props) => {
  let state = props.profilePage;

  let onAddPost = (values) => {
    props.addPost(values.newPost);
    values.newPost = '';
  };

  let PostsElement = state.posts.map((post, index) => (
    <Post key={post.id + index} title={post.title} like={post.like} />
  ));

  return (
    <div>
      <h3>My post</h3>
      <MyPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{PostsElement}</div>
    </div>
  );
};

export default React.memo(MyPosts);
