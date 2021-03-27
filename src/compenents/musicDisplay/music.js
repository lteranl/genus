import React, { useState } from "react";
import airforceone from "../../resources/airforceone.mp3";
import "./music.css";

const Music = () => {
    const [play, setPlay] = useState(false);
    const [audio, setAudio] = useState(new Audio(airforceone));

    const handleSound = () => {
        if (!play) {
            audio.volume = 0.1;
            audio.play();
            setPlay(true);
        }
        if (play) {
            audio.pause();
            setPlay(false);
        }
    };
    return (
        <div className="music__container">
            <div className="music__container-border">
                <div className="music-name">
                    Air Force One - Lopez Undercover
                </div>
                <div className="music-controls">
                    <i class="fas fa-arrow-circle-left fa-lg"></i>
                    <i
                        class="fas fa-play-circle fa-lg"
                        onClick={handleSound}
                    ></i>
                    <i class="fas fa-arrow-circle-right fa-lg"></i>
                </div>
            </div>
        </div>
    );
};

export default Music;
