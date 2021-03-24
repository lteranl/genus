import React from "react";
import "./userAvatar.css";

const UserAvatar = ({ avatar }) => {
    return (
        <div>
            <img className="user-avatar" src={avatar} alt="" />
        </div>
    );
};

export default UserAvatar;
