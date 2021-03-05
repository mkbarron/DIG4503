import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setPosts] = useState();

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);
    return (
        <div>
            <h1>Michelle's Question of the Day</h1>
            <h3>If you could have one superpower, what would it be and why? Post below!</h3>
            {posts &&
            posts.map((post) => {
                const {id, body} = post;
                return (
                    <div key={id}>
                        <h6>{body}</h6>
                        <h5>User #{id} answered:</h5>
                    </div>
                )
            })}
        </div>
    );
};

export default PostList;
