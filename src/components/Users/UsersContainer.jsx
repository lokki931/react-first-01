import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  unfollow,
  getUsers,
  setCurentPage,
  setTotalUsersCount,
  setMinPageNumber,
  setMaxPageNumber,
} from './../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {
  pageSize,
  userFilter,
  totalUsersCount,
  currentPage,
  isFetching,
} from './../../redux/user-selects';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNum) => {
    this.props.setCurentPage(pageNum);
    this.props.getUsers(pageNum, this.props.pageSize);
  };
  nextHandlerBtn = () => {
    this.props.setCurentPage(this.props.currentPage + 1);
    this.props.getUsers(this.props.currentPage + 1, this.props.pageSize);

    if (this.props.currentPage + 1 > this.props.maxPageNumberLimit) {
      this.props.setMaxPageNumber(this.props.maxPageNumberLimit + this.props.pageNumberLimit);
      this.props.setMinPageNumber(this.props.minPageNumberLimit + this.props.pageNumberLimit);
    }
  };

  prevHandlerBtn = () => {
    this.props.setCurentPage(this.props.currentPage - 1);
    this.props.getUsers(this.props.currentPage - 1, this.props.pageSize);

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
            followingInProgress={this.props.followingInProgress}
          />
        </>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: userFilter(state),
    pageSize: pageSize(state),
    totalUsersCount: totalUsersCount(state),
    currentPage: currentPage(state),
    pageNumberLimit: state.usersPage.pageNumberLimit,
    maxPageNumberLimit: state.usersPage.maxPageNumberLimit,
    minPageNumberLimit: state.usersPage.minPageNumberLimit,
    isFetching: isFetching(state),
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
  setCurentPage,
  setTotalUsersCount,
  setMaxPageNumber,
  setMinPageNumber,
})(UsersContainer);
