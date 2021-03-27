import React from "react";
import UserImage from "../userOptions/userImage/userImage";
import ProfileSettings from "./profile-settings/profileSettings";
import "./profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <UserImage />
            <ProfileSettings />
        </div>
    );
};

export default Profile;
