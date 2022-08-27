import axios from 'axios';
import React from 'react';
import photoAva from '../../assets/images/ava.png';

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }
    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => <div key={user.id} style={{ display: 'flex' }}>
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
    );
}

export default Users;
