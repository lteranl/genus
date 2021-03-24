import React from "react";

import defaultAvatar from "../../resources/defaultImage.png";
import UserAvatar from "../userAvatar/userAvatar";
import Username from "./username/username";

import "./feed.css";
import {
    CommentBtn,
    FavoritesBtn,
    OptionsBtn,
    ShareBtn,
} from "./button/buttons";
import FeedInfo from "./feedInfo/feedInfo";

const Feed = ({ image, data, handleLikeBtn, handleShareBtn }) => {
    const avatarImage = require(`../../resources/${image}`);
    console.log(data);
    return (
        <div className="feed-container">
            <div className="feed__content">
                <div className="feed__avatar-container">
                    <UserAvatar avatar={avatarImage.default} />
                </div>
                <div className="feed__main">
                    <div className="main-username__name">
                        <div className="main-username__name">
                            <Username
                                name={data.name}
                                username={data.username}
                                date={data.date}
                            />
                        </div>
                        <div className="main-username__options-btn">
                            <OptionsBtn />
                        </div>
                    </div>

                    <div className="feed__content-text">{data.text}</div>
                </div>
            </div>
            <div className="feed__info-text">
                <FeedInfo label="Comments" count={data.comments.length} />
                <FeedInfo label="Likes" count={data.likes} />
                <FeedInfo label="Shares" count={data.shares} />
            </div>
            <div className="feed__menu">
                <CommentBtn />
                <FavoritesBtn handleLikeBtn={handleLikeBtn} feedId={data.id} />
                <ShareBtn handleShareBtn={handleShareBtn} feedId={data.id} />
            </div>
        </div>
    );
};

Feed.defaultProps = {
    image: defaultAvatar,
};

export default Feed;
