import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
    return (
        <div className="menu-list__container">
            <ul>
                <li>
                    <button>
                        <Link className="nav-links" to="/">
                            Menu
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link className="nav-links" to="/profile">
                            Profile
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link className="nav-links" to="/logout">
                            Logout
                        </Link>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default MenuList;
