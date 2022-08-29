import React from 'react';
import axios from 'axios';
import photoAva from '../../assets/images/ava.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        return (
            <>
                {
                    this.props.users.map(user => <div key={user.id} style={{ display: 'flex' }}>
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
