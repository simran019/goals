"use client";

import { useState } from "react";

const AddGoals = () => {
  const [goal, setGoal] = useState("");
  return (
    <>
      <input className="border-2 border-black w-full md:w-3/4 rounded-sm p-2 text-black" placeholder="Specify goal here..."/>
      <button className="bg-red-950 p-2 w-full md:w-auto">Add Goal</button>
    </>
  );
};

export default AddGoals;
