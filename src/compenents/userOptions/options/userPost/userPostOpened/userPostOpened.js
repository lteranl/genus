import React from "react";
import "./userPostOpened.css";

const UserPostOpened = () => {
    return (
        <div className="userOptions-post__opened">
            <textarea
                className="post__opened-textarea"
                name="userPostInput"
                id=""
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
            ></textarea>
            <button className="post-opened-btn">Post</button>
        </div>
    );
};

export default UserPostOpened;
