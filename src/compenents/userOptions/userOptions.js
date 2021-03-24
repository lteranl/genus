import React from "react";
import Options from "./options/options";
import "./userOptions.css";
import UserImage from "./userImage/userImage";

const UserOptions = ({ handlePostClicked }) => {
    return (
        <div className="userOptions__container">
            <UserImage />
            <Options handlePostClicked={handlePostClicked} />
        </div>
    );
};

export default UserOptions;
