import React from "react";

const Square = ({ color, clear }) => {

    const painting = (e) => {
        if (color === "black") {
            e.target.style.backgroundColor = color;
        }
        else if (color === "random") {
            e.target.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
        }
    }


    return (
        <div className="square" onMouseEnter={painting} style={{ backgroundColor: clear ? "white" : "" }}>
        </div>
    )
}

export default Square;