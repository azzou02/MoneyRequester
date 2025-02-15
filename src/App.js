import "./App.css";
import React, {useState} from "react";

function App() {

    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [yesHeader, setYesHeader] = useState("Give me back my money!!!");
    const [imageSrc, setImageSrc] = useState("/start.gif");
    
    const clickedYes = () => {
        setYesHeader("Yayyyyyy! <3");
        setImageSrc("/end.gif");
        alert(
            "You either couldn't catch the button, or you just wanted to say yes!"
        );
    }

    const popUp = () => {
        alert("I guess you wanted to say no that badly ...");
    }
 
    function mouseOver() {
        if (!isHovered) {
            setIsHovered(true); // Set to true after the first hover
        }

        const randomNum = Math.floor(Math.random() * 4) + 1;
        const randomImage = `/val${randomNum}.gif`;
        setImageSrc(randomImage);

        const newX = Math.random() * 90;
        const newY = Math.random() * 85;

        document.getElementById("no-button").style.left = `${newX}%`;
        document.getElementById("no-button").style.top = `${newY}%`;
    }


    return (
        <div className = "container">
            <img src = {imageSrc} alt = "money" class = "image"/>
            <p className = "money" id = "yes">
                {yesHeader}
            </p>
            <div className = "button-container">
                <button
                type = "submit"
                onClick = {clickedYes}>YES!</button>
                <button
                    onMouseOver = {mouseOver}
                    id = "no-button"
                    onClick = {popUp}
                    className={`${isHovered ? "absolute" : ""}`}>
                    no :/</button>
            </div>
        </div>
    )

}

export default App;
