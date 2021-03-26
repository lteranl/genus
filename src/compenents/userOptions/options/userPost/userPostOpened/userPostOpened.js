import React, { useState } from "react";
import "./userPostOpened.css";

const UserPostOpened = ({ handlePostClicked, addToFeed }) => {
    const [postInput, setPostInput] = useState("");
    const handlePost = () => {
        console.log(postInput);
        const user = {
            avatarImage: "defaultImage.png",
            name: "Bobinator",
            username: "bob da builder",
        };
        addToFeed(user, postInput);
        handlePostClicked();
    };

    return (
        <div className="userOptions-post__opened">
            <textarea
                className="post__opened-textarea"
                name="userPostInput"
                id=""
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
                value={postInput}
                onChange={(e) => setPostInput(e.target.value)}
            ></textarea>
            <button className="post-opened-btn" onClick={handlePost}>
                Post
            </button>
            <div className="close-icon" onClick={handlePost}>
                <i class="far fa-times-circle fa-lg"></i>
            </div>
        </div>
    );
};

// conditional rendering

export default UserPostOpened;
