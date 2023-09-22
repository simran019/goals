"use client";

import { useState } from "react";

const AddGoals = (props: any) => {
  const [goal, setGoal] = useState("");
  const [error, showError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const submitHandler = () => {
    setSubmit(true);
    const newGoal = goal.charAt(0).toUpperCase() + goal.slice(1);
    const goalInfo = {
      id: Math.random(),
      goalData: newGoal,
    };
    if (newGoal !== "") {
      showError(false);
      props.onSaveHandler(goalInfo);
    } else {
      showError(true);
    }
  };
  return (
    <>
      <input
        className={`border-2 w-full md:w-3/4 rounded-sm p-2 text-black border-black ${
          goal === "" && submit && "border-red-400"
        }`}
        placeholder="Specify goal here..."
        onChange={(event) => setGoal(event.target.value)}
      />
      <span className="text-black text-red-400">
        {goal === "" && submit && "* Enter a goal"}
      </span>
      <button
        className="bg-red-950 p-2 w-full md:w-auto"
        onClick={submitHandler}
      >
        Add Goal
      </button>
    </>
  );
};

export default AddGoals;
