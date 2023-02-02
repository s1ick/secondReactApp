import React from "react";
import './App.css';
import './assets/styles.scss';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Sidebar />
            <Profile />
        </div>
    );
}
export default App;
