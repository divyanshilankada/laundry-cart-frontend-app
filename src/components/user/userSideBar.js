import React from 'react';
import home from '../../images/home-run.png'
import more from '../../images/more.png'
import list from '../../images/list.png'
import '../../styles/userSideBar.css'

function UserSideBar () {
    return (
        <aside className="userSideBar-container">
            <div className="icon-box">
                <img className='icon' src={home} alt='home-icon'></img>
            </div>
            <div className="icon-box">
                <img className='icon' src={more} alt='more-icon'></img>
            </div>
            <div className="icon-box-white">
                <img className='icon' src={list} alt='list-icon'></img>
            </div>
        </aside>
    );
};

export default UserSideBar;

