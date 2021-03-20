import React from "react";
import Avatar from "../../../resources/defaultImage.png";

// TODO:change it to the user thats "logged in"

const UserImage = () => {
    return (
        <div>
            <img className="userOptions-avatar" src={Avatar} alt="" />
        </div>
    );
};

export default UserImage;
