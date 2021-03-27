import React from "react";
import Title from "../navbar/title/title";
import "./user-auth.css";

const UserAuth = () => {
    return (
        <div className="userAuth-container">
            <form className="login-form">
                <div className="login-brand">Genus</div>
                <div className="login-title">Please sign in</div>
                <div className="login-email">
                    <input type="email" placeholder="Email address" />
                </div>
                <div className="login-password">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="login-remember-me">
                    <label>
                        <input type="checkbox" value="remember-me" />
                        Remember Me
                    </label>
                </div>
                <button className="sign-in__btn">Sign in</button>
            </form>
        </div>
    );
};

export default UserAuth;
