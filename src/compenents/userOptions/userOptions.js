import React from "react";
import Options from "./options/options";
import UserAvatar from "../userAvatar/userAvatar";
import "./userOptions.css";

const UserOptions = () => {
    return (
        <div className="userOptions__container">
            <UserAvatar />
            <Options />
        </div>
    );
};

export default UserOptions;
