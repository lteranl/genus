import React from "react";
import Options from "./options/options";
import "./userOptions.css";
import UserImage from "./userImage/userImage";

const UserOptions = () => {
    return (
        <div className="userOptions__container">
            <UserImage />
            <Options />
        </div>
    );
};

export default UserOptions;
