import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const buttonText = "click me!"

    return (
     <div>
        <label htmlFor = "name" className = "label">Enter Name:</label>
        <input id = "name" type = "text" />
        <button style = {{backgroundColor: "black", color: "white"}}>
        {buttonText}
        </button>
     </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
); 