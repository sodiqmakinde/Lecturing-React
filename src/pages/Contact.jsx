import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [number, setNumber] = useState(50);
  const [color, setcolor] = useState("red");
  const [currentTime, setcurrentTime] = useState("Hello World");

  let getCurrentHour = new Date().getHours();

  function updatebackground() {
    setcolor("yellow block");
  }

  function sendGreetings() {
    getCurrentHour < 12
      ? setcurrentTime("Good Morning")
      : getCurrentHour < 17
      ? setcurrentTime("Good Afternoon")
      : setcurrentTime("Good Evening");
  }

  function AddtoNumber() {
    setNumber(number + 1);
  }

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function MinusNumber() {
    setNumber(number - 1);
  }

  return (
    <StateStyle>
      <div className={color}>
        <h2>A counter</h2>
        <button onClick={MinusNumber}>Minus</button>
        <h1>{number}</h1>

        <button onClick={updatebackground}>Change Background</button>
        <button onClick={AddtoNumber}>Add</button>
      </div>

      <div>
        <p>{getCurrentHour}</p>
        <p>
          Greet Fawas according to the time, the current time is{" "}
          {formatAMPM(new Date())}.
        </p>
        <h2>{currentTime} Fawaz</h2>
        <button onClick={sendGreetings}>Send Greetings</button>
      </div>
    </StateStyle>
  );
};

export default Contact;

let StateStyle = styled.section`
  .red {
    background: red;
  }

  .yellow {
    background: yellow;
  }
`;
