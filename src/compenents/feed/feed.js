import React from "react";

import defaultAvatar from "../../resources/defaultImage.png";
import UserAvatar from "../userAvatar/userAvatar";
import Username from "./username/username";

const Feed = ({ image, data }) => {
    const avatarImage = require(`../../resources/ ${image}`);
    return (
        <div className="feed-container">
            <div className="feed-content">
                <div className="feed__avatar-container">
                    <UserAvatar avatar={avatarImage.default} />
                </div>
                <div className="feed__main">
                    <div className="feed-main-username">
                        <div className="main-username__name">
                            <Username
                                name={data.name}
                                username={data.username}
                                date={data.date}
                            />
                        </div>
                        <div className="main-username__options-btn"></div>
                    </div>
                    <div className="feed__content-text">{data.text}</div>
                </div>
            </div>
        </div>
    );
};

Feed.defaultProps = {
    image: defaultAvatar,
};

export default Feed;
