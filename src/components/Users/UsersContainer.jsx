import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setMinPageNumberAC, setMaxPageNumberAC } from './../../redux/users-reducer';


class UsersContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });

    }
    onPageChanged = (pageNum) => {
        this.props.setCurentPage(pageNum);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));

    }
    nextHandlerBtn = () => {
        this.props.setCurentPage(this.props.currentPage + 1);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));

        if (this.props.currentPage + 1 > this.props.maxPageNumberLimit) {
            this.props.setMaxPageNumber(this.props.maxPageNumberLimit + this.props.pageNumberLimit);
            this.props.setMinPageNumber(this.props.minPageNumberLimit + this.props.pageNumberLimit);
        }
    }

    prevHandlerBtn = () => {
        this.props.setCurentPage(this.props.currentPage - 1);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage - 1}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));

        if ((this.props.currentPage - 1) % this.props.pageNumberLimit === 0) {
            this.props.setMaxPageNumber(this.props.maxPageNumberLimit - this.props.pageNumberLimit);
            this.props.setMinPageNumber(this.props.minPageNumberLimit - this.props.pageNumberLimit);
        }
    }
    render() {
        return <Users
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


        />
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageNumberLimit: state.usersPage.pageNumberLimit,
        maxPageNumberLimit: state.usersPage.maxPageNumberLimit,
        minPageNumberLimit: state.usersPage.minPageNumberLimit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setMaxPageNumber: (maxPageNumberLimit) => {
            dispatch(setMaxPageNumberAC(maxPageNumberLimit))
        },
        setMinPageNumber: (minPageNumberLimit) => {
            dispatch(setMinPageNumberAC(minPageNumberLimit))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);