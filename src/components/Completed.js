import React from "react";
import "./Completed.css";
const Completed = ({
  pendingList,
  setPendingList,
  completedList,
  setCompletedList,
}) => {
  var pending;
  function handleCompletedCheckbox(id) {
    const updateCompletedList = completedList.filter((flt, idx) => {
      if (id !== idx) {
        return flt;
      } else {
        pending = flt;
      }
    });
    setCompletedList(updateCompletedList);
    setPendingList([...pendingList, pending]);
  }

  return (
    <div className="completed">
      {completedList.map((m, index) => {
        return (
          <div className="completed-list">
            <div key={index}>{index + 1}</div>
            <div>{m.username}</div>
            <div>{m.time}</div>
            <div>
              <input
                type="checkbox"
                checked
                onClick={() => handleCompletedCheckbox(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Completed;
