import React, { useState } from "react";
import Completed from "./Completed";
import Pending from "./Pending";
import "./Input.css";

const Input = () => {
  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [input, setInput] = useState([
    {
      username: "",
      time: "",
    },
  ]);

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //console.log(input);
  const handleSubmit = () => {
    if (input.username === "" && input.time === "") {
    } else {
      setPendingList([...pendingList, input]);
      setInput({
        username: "",
        time: "",
      });
    }
  };

  return (
    <div className="input-main">
        <div><h3>Completed</h3></div>
      <div>
        <Completed
          pendingList={pendingList}
          setPendingList={setPendingList}
          completedList={completedList}
          setCompletedList={setCompletedList}
        />
        <div><h3>Pending</h3></div>

        <div>
          <Pending
            pendingList={pendingList}
            setPendingList={setPendingList}
            completedList={completedList}
            setCompletedList={setCompletedList}
          />
        </div>
      </div>

      <div className="subInput">
        <div className="subInput-contents">
          <input
            type="text"
            name="username"
            value={input.username}
            placeholder="Enter here"
            onChange={handleInput}
          />
        </div>
        <div className="subInput-contents">
          <input
            type="time"
            name="time"
            value={input.time}
            onChange={handleInput}
          />
        </div>
        <div className="subInput-contents">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-success"
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
