import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

let MyPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newPost" component="textarea" />
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

export default MyPosts;
