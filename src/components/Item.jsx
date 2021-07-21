import React from "react";
import { useState } from "react";
import arrow from "../images/arrow.svg";

function Item({ data }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion-item">
      <div className="btn" onClick={() => setShow(!show)}>
        <p className={show ? "bold" : ""}>{data.question}</p>
        <img className={show ? "rotate" : ""} src={arrow} />
      </div>
      <p className={show ? "text animated" : "text"}>{data.answer}</p>
    </div>
  );
}

export default Item;
