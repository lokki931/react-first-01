import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import photoAva from '../../assets/images/ava.png';

class Users extends React.Component {
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
    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <>
                <div className={classes.pagination}>
                    {pages.map(p => {
                        return <span key={p}
                            className={this.props.currentPage === p ? `${classes.active}` : ''}
                            onClick={() => (this.onPageChanged(p))}
                        >{p}</span>
                    })}
                </div>
                {
                    this.props.users.map((user, index) => <div key={user.id.toString() + index} style={{ display: 'flex' }}>
                        <span>
                            <div>
                                <img src={user.photos.small !== null ?
                                    user.photos.small :
                                    photoAva} alt={user.name} width='100px' />
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>follow</button>
                                }

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
                    </div>)
                }
            </>

        )
    }
}

export default Users;
