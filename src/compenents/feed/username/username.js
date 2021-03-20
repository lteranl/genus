import React from "react";

const Username = ({ name, username, date }) => {
    return (
        <>
            <div className="username__name">{name}</div>
            <div className="username__username">@{username}</div>
            <div className="username__date">• {date}</div>
        </>
    );
};

export default Username;
