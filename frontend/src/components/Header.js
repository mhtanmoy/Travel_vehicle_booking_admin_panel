import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo/Logo.png'
import MenuItem from './MenuItem'
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const menuItems = [
    {
        name: "Home",
        to: "/",

        iconClassName: "bi bi-house-fill",
    },
    {
        name: "Booking",
        to: "/booking",
        iconClassName: "bi bi-window",
    },
    {
        name: "Manage Booking",
        to: "/bookingrequest",
        iconClassName: "bi bi-window",
    },
    {
        name: "Coordination",
        to: "#",

        iconClassName: "bi bi-window-plus",
        subMenus: [
            { name: "Vehicles", to: "/vehicles" },
            { name: "Booking History", to: "/aftercompleted" },
            { name: "Driver's Account Verification", to: "/driversverify" },

        ],
    },
    {
        name: "User's",
        to: "#",

        iconClassName: "bi bi-window-plus",
        subMenus: [
            { name: "Customer's", to: "/customeruser" },
            { name: "Driver's", to: "/driver" },
            { name: "Admin's", to: "/users" },
        ],
    },
    {
        name: "Edit Contact",
        to: "/editcontact",
        iconClassName: "bi bi-window",
    },


];


const Header = (props) => {

    let history = useHistory()

    const loginHandler = () => {
        history.push('/login')
    }


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }


    const [inactive, SetInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
            document.querySelectorAll('.sub-menu').forEach(e => {
                e.classList.remove("active");
            });
        }
        props.onCollapse(inactive);
    }, [inactive])

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={() => {
                    SetInactive(!inactive);
                }} className="toggle-button">
                    {inactive ? <i className="bi bi-plus-square" style={{ color: "black" }}></i> : <i className="bi bi-dash-square"></i>}
                </div>
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                {userInfo ? (
                    <ul>
                        {
                            menuItems.map((menuItem, index) => (
                                <MenuItem
                                    key={index}
                                    to={menuItem.to}
                                    name={menuItem.name}

                                    subMenus={menuItem.subMenus || []}
                                    iconClassName={menuItem.iconClassName}
                                    onClick={() => {
                                        if (inactive) {
                                            SetInactive(false);
                                        }
                                    }}
                                />
                            ))
                        }




                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink
                                to="/register"
                                className="menu-item">
                                <div className="menu-icon">
                                    <i class="bi bi-door-closed-fill"></i>
                                </div>
                                <span>Register</span>
                            </NavLink>
                        </li>
                    </ul>
                )}


            </div>
            {userInfo ? (
                <div className={`side-menu-footer ${inactive ? "inactive" : ""}`}>
                    <a className="footer-item">
                        <div className="footer-icon" onClick={logoutHandler}>
                            <i class="bi bi-door-closed-fill"></i>
                            <span>Logout</span>
                        </div>

                    </a>
                </div>
            ) : (
                <div className={`side-menu-footer ${inactive ? "inactive" : ""}`}>
                    <a className="footer-item">
                        <div className="footer-icon" onClick={loginHandler}>
                            <i class="bi bi-door-closed-fill"></i>
                            <span>Login</span>
                        </div>

                    </a>
                </div>
            )}


        </div>)

};

export default Header;

