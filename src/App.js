import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path='/'
                        element={
                            <Profile />}
                    />
                    <Route path='/dialogs/*' element={
                        <DialogsContainer />
                    } />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;