import React from "react";

const Username = ({ name, username, date }) => {
    console.log(typeof date);
    return (
        <>
            <div className="username__name">{name}</div>
            <div className="username__username">@{username}</div>
            <div className="username__date">• {date.toLocaleString()}</div>
        </>
    );
};

export default Username;
