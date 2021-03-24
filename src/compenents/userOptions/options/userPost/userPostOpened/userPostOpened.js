import React, { useState } from "react";
import "./userPostOpened.css";

const UserPostOpened = ({ handlePostClicked, postClick }) => {
    const [postInput, setPostInput] = useState("");
    const handlePost = () => {
        console.log(postInput);
        handlePostClicked();
    };

    return (
        <div>
            {postClick ? (
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
            ) : (
                <></>
            )}
        </div>
    );
};

// conditional rendering

export default UserPostOpened;
