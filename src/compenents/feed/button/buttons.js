import React from "react";

export const OptionsBtn = () => {
    return (
        <div className="options-btn">
            <i className="fas fa-ellipsis-h"></i>
        </div>
    );
};
export const FavoritesBtn = ({ handleLikeBtn, feedId }) => {
    return (
        <div className="options-btn" onClick={() => handleLikeBtn(feedId)}>
            <i className="far fa-heart"></i>
        </div>
    );
};
export const CommentBtn = () => {
    return (
        <div className="options-btn">
            <i className="far fa-comment"></i>
        </div>
    );
};

export const ShareBtn = ({ handleShareBtn, feedId }) => {
    return (
        <div className="options-btn" onClick={() => handleShareBtn(feedId)}>
            <i class="fas fa-share"></i>
        </div>
    );
};
