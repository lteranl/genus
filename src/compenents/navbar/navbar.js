import React from "react";
import Title from "./title/title";
import MenuList from "./menuList/menuList";
import Logo from "../../resources/logo.png";
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="navbar__container">
            <img className="navbar__container-logo" src={Logo} alt="Logo" />
            <Title />
            <MenuList />
        </div>
    );
};

export default NavBar;
