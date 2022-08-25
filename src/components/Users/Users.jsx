import React from 'react';

const Users = (props) => {
    return (
        <>
            {
                props.users.map(user => <div key={user.id} style={{ display: 'flex' }}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt={user.fullName} width='50px' />
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
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </>
    );
}

export default Users;
