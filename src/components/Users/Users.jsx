import React from 'react';
import classes from './Users.module.css';
import photoAva from '../../assets/images/ava.png';
import { NavLink } from 'react-router-dom';

const UsersList = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <>
      {props.users.length !== 0 ? (
        <div className={classes.pagination}>
          <span>
            <button
              onClick={props.prevHandlerBtn}
              disabled={props.currentPage === pages[0] ? true : false}>
              Prev
            </button>
          </span>
          {pages.map((p) => {
            if (p < props.maxPageNumberLimit + 1 && p > props.minPageNumberLimit) {
              return (
                <span
                  key={p}
                  className={props.currentPage === p ? `${classes.active}` : ''}
                  onClick={() => props.onPageChanged(p)}>
                  {p}
                </span>
              );
            } else {
              return null;
            }
          })}
          <span>
            <button
              onClick={props.nextHandlerBtn}
              disabled={props.currentPage === pages[pages.length - 1] ? true : false}>
              Next
            </button>
          </span>
        </div>
      ) : null}
      {props.users.map((user, index) => (
        <div key={user.id.toString() + index} style={{ display: 'flex' }}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  src={user.photos.small !== null ? user.photos.small : photoAva}
                  alt={user.name}
                  width="100px"
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}>
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.follow(user.id);
                  }}>
                  follow
                </button>
              )}
            </div>
          </span>
          <span style={{ display: 'flex' }}>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              {/* <div>{user.location.country}</div>
                        <div>{user.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </>
  );
};

export default UsersList;
