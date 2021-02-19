import React, { useState, useEffect } from "react";
import axios from "axios";


const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("The use effect ran");
}, []);

return (
        <div>
            <h6>Post</h6>
            <p>Current Posts: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment the count</button>

        </div>
    );
};

export default Counter;