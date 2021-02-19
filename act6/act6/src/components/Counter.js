import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

//componentDidMount
//useEffect(() => {
//    console.log("The use effect ran");
//  }, []);

//componentDidUpdate
//useEffect(() => {
//    console.log("The use effect ran");
//    }, [count]);

//componentWillMount
useEffect(() => {
    console.log("The use effect ran");
    return () => {
        console.log("the return is being ran");
    };
}, []);

return (
    <div>
        <h6>Post</h6>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment the count</button>

    </div>
    );
};

export default Counter;