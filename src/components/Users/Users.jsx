import React from 'react';
import classes from './Users.module.css';
import photoAva from '../../assets/images/ava.png';

const UsersList = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div className={classes.pagination}>
                {pages.map(p => {
                    return <span key={p}
                        className={props.currentPage === p ? `${classes.active}` : ''}
                        onClick={() => (props.onPageChanged(p))}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map((user, index) => <div key={user.id.toString() + index} style={{ display: 'flex' }}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null ?
                                user.photos.small :
                                photoAva} alt={user.name} width='100px' />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => props.unfollow(user.id)}>unfollow</button> :
                                <button onClick={() => props.follow(user.id)}>follow</button>
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

export default UsersList
