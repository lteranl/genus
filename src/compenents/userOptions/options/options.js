import React from "react";
import UserChat from "./userChat/userChat";
import UserMusic from "./userMusic/userMusic";
import UserPost from "./userPost/userPost";

const Options = ({ handlePostClicked }) => {
    return (
        <div className="userOptions-options">
            <UserPost handlePostClicked={handlePostClicked} />
            <UserChat />
            <UserMusic />
        </div>
    );
};

export default Options;
