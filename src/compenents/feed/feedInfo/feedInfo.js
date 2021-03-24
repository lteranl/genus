import React from "react";


const FeedInfo = ({ label, count }) => {
    return (
        <div className="feed-info-container">
            <div className="feed-info__label">{label}</div>
            <div className="feed-info__count">{count}</div>
        </div>
    );
};

export default FeedInfo;
