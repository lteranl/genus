import React from "react";
import "./music.css";

const Music = () => {
    return (
        <div className="music__container">
            <div className="music__container-border">
                <div className="music-name">Don't Take My Money -Bleachers</div>
                <div className="music-controls">
                    <i class="fas fa-arrow-circle-left fa-lg"></i>
                    <i class="fas fa-play-circle fa-lg"></i>
                    <i class="fas fa-arrow-circle-right fa-lg"></i>
                </div>
            </div>
        </div>
    );
};

export default Music;
