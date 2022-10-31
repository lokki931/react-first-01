import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/whithSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component {
  componentDidMount() {
    this.props.initialApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<SuspendedProfile />}>
              <Route path=":userId" element={<SuspendedProfile />} />
            </Route>
            <Route path="/dialogs/*" element={<SuspendedDialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initial,
});

export default connect(mapStateToProps, { initialApp })(App);
