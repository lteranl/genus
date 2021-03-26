import React, { useState } from "react";
import "./App.css";
import Feed from "./compenents/feed/feed";
import posts from "./resources/mockData/postData";
import NavBar from "./compenents/navbar/navbar";
import UserPostOpened from "./compenents/userOptions/options/userPost/userPostOpened/userPostOpened";
import UserOptions from "./compenents/userOptions/userOptions";
import Scroll from "./compenents/feed/scroll/scroll";
import Music from "./compenents/musicDisplay/music";

function App() {
    const [postData, setPostData] = useState(posts);

    const addToFeed = (userData, FeedText) => {
        const tempFeedData = [...postData];

        const newFeed = {
            id: postData.length + 1,
            ...userData,
            date: new Date(),
            text: FeedText,
            likes: 0,
            shares: 0,
            comments: [],
        };
        tempFeedData.push(newFeed);
        setPostData(tempFeedData);
    };

    const addLikes = (id) => {
        const tempPostData = [...postData];
        const flattempPostData = tempPostData.map((posts) => posts.id);
        const postsIndex = flattempPostData.indexOf(id);
        tempPostData[postsIndex].likes += 1;
        setPostData(tempPostData);
    };
    const addShare = (id) => {
        const tempPostData = [...postData];
        const flattempPostData = tempPostData.map((posts) => posts.id);
        const postsIndex = flattempPostData.indexOf(id);
        tempPostData[postsIndex].shares += 1;
        setPostData(tempPostData);
    };

    const [postClick, setPostClick] = useState(false);

    const handlePostClicked = () => {
        setPostClick(!postClick);
    };

    return (
        <div className="App">
            <NavBar />
            <UserOptions handlePostClicked={handlePostClicked} />
            {postClick && (
                <UserPostOpened
                    addToFeed={addToFeed}
                    handlePostClicked={handlePostClicked}
                />
            )}
            <Scroll>
                {postData.map((post) => {
                    console.log(post);
                    return (
                        <Feed
                            key={post.id}
                            image={post.avatarImage}
                            data={post}
                            handleLikeBtn={addLikes}
                            handleShareBtn={addShare}
                        />
                    );
                })}
            </Scroll>
            <Music />
        </div>
    );
}

export default App;
