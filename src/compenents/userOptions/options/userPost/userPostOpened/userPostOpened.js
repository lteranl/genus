import React, { useState } from "react";
import "./userPostOpened.css";

const UserPostOpened = () => {
    const [postInput, setPostInput] = useState("");
    const handlePost = () => {
        console.log("working");
        const user = {
            userImg: "",
            username: "",
        };
        console.log(postInput);
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
        </div>
    );
};

// conditional rendering

export default UserPostOpened;
