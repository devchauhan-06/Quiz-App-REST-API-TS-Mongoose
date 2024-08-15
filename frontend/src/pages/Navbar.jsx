import React, { useState } from 'react';
import '../styles/navbar.css'; // Import your CSS file
import profileImg from '../assets/images/QuizIt.png'; // Import your profile image

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus icon'></i>
                <div className="logo_name">QuizIt</div>
                <i className={`bx ${isOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user'></i>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-chat'></i>
                        <span className="links_name">Messages</span>
                    </a>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="links_name">Analytics</span>
                    </a>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-folder'></i>
                        <span className="links_name">File Manager</span>
                    </a>
                    <span className="tooltip">Files</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cart-alt'></i>
                        <span className="links_name">Order</span>
                    </a>
                    <span className="tooltip">Order</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">Saved</span>
                    </a>
                    <span className="tooltip">Saved</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog'></i>
                        <span className="links_name">Setting</span>
                    </a>
                    <span className="tooltip">Setting</span>
                </li>
                <li className="logOut">
                    <a href="#">
                        <i className='bx bx-log-out' id="log_out"></i>
                        <span className="links_name">Log Out</span>
                    </a>
                    <span className="tooltip">Log Out</span>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
