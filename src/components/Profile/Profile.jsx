import { React } from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
            </div>
            <div>
                ava +description
            </div>
            <div>
                My post
                <div>
                    new post
                </div>
                <div>
                    <article>
                        post1
                    </article>
                    <article>
                        post2
                    </article>
                    <article>
                        post3
                    </article>
                </div>
            </div>
        </main>
    );
}

export default Profile;