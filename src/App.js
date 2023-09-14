import React, { useState, useEffect } from "react";
import './App.css';

function SelectionApp() {
  const emoji = "\u{1F604}"
  const [number, setnumber] = useState(1);
  const [message, setmessage] = useState([
    `Believe in yourself, have confidence and feel good ${"\u{1F44D}"}`,
     `Expect the best possible outcome for what you do.${'\u{1F60D}'}`,
    `  Set goals so that you can reach them ${"\u{1F604}"}`,
    `Never give up. Keep going and keep trying.${'\u{270C}\u{1F3FB}'}`,
    "Take care of yourself through a healthy diet, exercise"
  ])
  // function for nect btn
  function nextBtnHandler() {
    if (number < 5) {
      setnumber(number + 1)

    }
  }
  // function for previous btn 
  function previousBtnHandler() {
    if (number > 0) {
      setnumber(number - 1)
    }
  }

  return (
    <>

      <div className="parentDiv">

        <div className="mainDiv">


          {
            Array.from([1, 2, 3,4,5], x => (
              <div className="numDiv" style={{ fontSize: "30px", borderRadius: "50%", backgroundColor: number >= x ? "#19a5d8" : "gray", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }} >
                {
                  x
                }
              </div>
            ))
          }



        </div>

        <p style={{ textAlign: "center", fontSize: "20px" }}>
          {
            message[number - 1]
          }
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          {
            Array.from(["previous", "next"], x => (
              <button onClick={x == "previous" ? previousBtnHandler : nextBtnHandler} className="btn">{x}</button>
            ))
          }
        </div>

      </div>

    </>
  )
}

export default SelectionApp;
