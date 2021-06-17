import React, { useState } from "react";
import Square from "./Square";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";


let userInput = prompt("Please enter a number between 16 and 100");

while (!/^[0-9]+$/.test(userInput) || userInput < 16 || userInput > 100) {
    alert("You did not enter a number between 16 and 100");
    userInput = prompt("Please Enter a VALID number between 16 and 100: ");
}


const EtchASketch = () => {

    const grid = Array(userInput * userInput).fill(null);

    let gridCss = {
        gridTemplateColumns: `repeat(${userInput}, auto)`,
        gridTemplateRows: `repeat(${userInput}, auto)`,
    }

    const [clear, setClear] = useState(false);
    const [color, setColor] = useState("black");

    const resetGrid = () => {
        window.location.reload();
    }

    const clearGrid = (e) => {
        e.preventDefault();
        if (!clear) {
            setClear(true);
        }
        else {
            setClear(false);
        }
    }

    const getBlackColor = () => {
        setColor("black");
    }

    const getRandomColor = () => {
        setColor("random")
    }

    return (

        <div className="main-container">
            <div className="sketch-pad-container">
                <AppHeader />
                <div className="buttons">
                    <button onClick={resetGrid} className="reset">Reset Board</button>
                    <button onClick={getBlackColor} className="black">Black</button>
                    <button onClick={getRandomColor} className="random">Random Color</button>
                    <button onClick={clearGrid} className="clear">Clear Board</button>
                </div>
                <div className="grid" style={gridCss}>
                    {grid.map((square, i) => <Square clear={clear} color={color} key={i} />)}
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default EtchASketch;