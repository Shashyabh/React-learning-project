import React from "react";
import "./Pending.css";

const Pending = ({
  pendingList,
  setPendingList,
  completedList,
  setCompletedList,
}) => {
  var completed;
  function handlePendingCheckbox(id) {
    const updatePendingList = pendingList.filter((flt, idx) => {
      if (id !== idx) {
        return flt;
      } else {
        completed = flt;
      }
    });
    setPendingList(updatePendingList);
    setCompletedList([...completedList, completed]);
  }

  return (
    <div className="pending">
      {pendingList.map((m, index) => {
        return (
          <div className="pending-sublist">
            <div key={index}>{index + 1}</div>
            <div>{m.username}</div>
            <div>{m.time}</div>
            <div>
              <input
                type="checkbox"
                checked={false}
                onClick={() => handlePendingCheckbox(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pending;
