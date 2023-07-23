import React, { useState } from "react";

const Contact = () => {
  const [number, setNumber] = useState(50);
  const [currentTime, setcurrentTime] = useState(new Date().getTime());

  function AddtoNumber() {
    setNumber(number + 1);
  }

  function MinusNumber() {
    setNumber(number - 1);
  }

  return (
    <section>
      <div>
        <h2>A counter</h2>
        <button onClick={MinusNumber}>Minus</button>
        <h1>{number}</h1>
        <button onClick={AddtoNumber}>Add</button>
      </div>

      <div>
        Greet Fawas according to the time, the current time is 1: 26pm.
        <h2>Good Afternoon Fawaz</h2>
        <button>Send Greetings</button>
      </div>
    </section>
  );
};

export default Contact;
