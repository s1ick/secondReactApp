import React from "react";
const Sidebar = () => {
    return (
        <nav className='nav'>
            <ul className='list'>
                <li className='list__item list-item'><a className='list-item__link' href="">Messages</a></li>
                <li className='list__item list-item'><a className='list-item__link' href="">News</a></li>
                <li className='list__item list-item'><a className='list-item__link' href="">Music</a></li>
            </ul>
        </nav>
    )
}
export default Sidebar;