import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

const Dropdown = ({ link, list }) => {
    const { hidden, setHidden } = useState("--hidden");
    const handleHover = () => {
        if (hidden) setHidden("");
        else setHidden("--hidden");
    };
    return (
        <div
            className="dropdown-box-container"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <link>{link}</link>

            <div className={`dropdown-box${hidden}`}>
                {list.map((item) => {
                    return (
                        <div className="link-container">
                            <Link>{item}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dropdown;
