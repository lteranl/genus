import React from "react";
// import Avatar from "../../resources/defaultImage.png";

const UserAvatar = ({ avatar }) => {
    return (
        <div>
            <img className="userOptions-avatar" src={avatar} alt="" />
        </div>
    );
};

export default UserAvatar;
