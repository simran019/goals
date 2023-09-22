"use client";

import { useState } from "react";

const AddGoals = (props: any) => {
  const [goal, setGoal] = useState("");

  const submitHandler = () => {
    const goalInfo = {
      id: Math.random(),
      goalData: goal,
    };
    props.onSaveHandler(goalInfo);
  };
  return (
    <>
      <input
        className="border-2 border-black w-full md:w-3/4 rounded-sm p-2 text-black"
        placeholder="Specify goal here..."
        onChange={(event) => setGoal(event.target.value)}
      />
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
