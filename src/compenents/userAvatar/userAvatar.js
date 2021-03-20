import React from "react";
import Avatar from "../../resources/defaultImage.png";

const UserAvatar = () => {
    return (
        <div>
            <img className="userOptions-avatar" src={Avatar} alt="" />
        </div>
    );
};

export default UserAvatar;
