import React from "react";

const UserPost = ({ handlePostClicked }) => {
    return (
        <div className="userOptions-post" onClick={handlePostClicked}>
            <i class="fas fa-edit fa-2x"></i>
            <p>Post</p>
        </div>
    );
};

export default UserPost;
