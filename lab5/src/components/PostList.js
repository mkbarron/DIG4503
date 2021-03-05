import React, { useState, useEffect } from "react";
import axios from "axios";

function voteMe() {
    alert('Thanks for voting!');
  }


const PostList = () => {
    const [posts, setPosts] = useState();

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);
    return (
        <div style={{ padding: "30px 20px", textAlign: "center", backgroundColor: "#255957", color: "white"}} >
            <h1 style={{ paddingTop: "30px", paddingBottom: "10px", textAlign: "center", backgroundColor: "#255957", color: "#EEEBD3"}}>Michelle's Question for February</h1>
            <p style={{ paddingTop: "30px", paddingBottom: "50px", marginLeft: "420px", marginRight: "420px", textAlign: "center", color: "#EEEBD3"}}>Last month I asked you this question and I was blown away by your answers! Now it's time to vote
             for your favorite responses. Winner will be awarded with a $25 gift card to a restaurant of their choice via email. Contest ends March 6th, 2020 at 11:59PM EST. </p>
            <h3 style={{ padding: "20px 100px", textAlign: "center", backgroundColor: "#F7C548", color: "#255957"}}>If you could have one superpower, what would it be and why? Post below!</h3>
            {posts &&
            posts.map((post) => {
                const {id, body} = post;
                return (
                    <div style={{ paddingLeft: "50px", paddingRight: "50px", marginLeft: "420px", marginRight: "420px", textAlign: "center", backgroundColor: "#EEEBD3"}} key={id}>
                        <h6 style={{ paddingTop: "30px", textAlign: "center", color: "#255957"}}>User #{id} answered:</h6>
                        <h5 style={{ paddingBottom: "10px", textAlign: "center", color: "#255957"}}>{body}</h5>
                        <button style={{ marginBottom: "10px", textAlign: "center", backgroundColor: "#EEEBD3", color: "#255957"}} onClick={voteMe}>Vote</button>;
                    </div>
                )
            })}
        </div>
    );
};

export default PostList;