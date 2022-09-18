import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  unfollow,
  setUsers,
  setCurentPage,
  setTotalUsersCount,
  setMinPageNumber,
  setMaxPageNumber,
  toggleIsFetching,
  toggleFollowingProgress,
} from './../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  onPageChanged = (pageNum) => {
    this.props.setCurentPage(pageNum);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNum, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };
  nextHandlerBtn = () => {
    this.props.setCurentPage(this.props.currentPage + 1);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage + 1, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });

    if (this.props.currentPage + 1 > this.props.maxPageNumberLimit) {
      this.props.setMaxPageNumber(this.props.maxPageNumberLimit + this.props.pageNumberLimit);
      this.props.setMinPageNumber(this.props.minPageNumberLimit + this.props.pageNumberLimit);
    }
  };

  prevHandlerBtn = () => {
    this.props.setCurentPage(this.props.currentPage - 1);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage - 1, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });

    if ((this.props.currentPage - 1) % this.props.pageNumberLimit === 0) {
      this.props.setMaxPageNumber(this.props.maxPageNumberLimit - this.props.pageNumberLimit);
      this.props.setMinPageNumber(this.props.minPageNumberLimit - this.props.pageNumberLimit);
    }
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <>
          <Users
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            maxPageNumberLimit={this.props.maxPageNumberLimit}
            minPageNumberLimit={this.props.minPageNumberLimit}
            prevHandlerBtn={this.prevHandlerBtn}
            nextHandlerBtn={this.nextHandlerBtn}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
          />
        </>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageNumberLimit: state.usersPage.pageNumberLimit,
    maxPageNumberLimit: state.usersPage.maxPageNumberLimit,
    minPageNumberLimit: state.usersPage.minPageNumberLimit,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurentPage,
  setTotalUsersCount,
  setMaxPageNumber,
  setMinPageNumber,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
