"use client";

import AddGoals from "./addGoals/page";
import GoalList from "./goalList/page";
import { useState } from "react";

export default function Home() {
  const dataFromAPI = [
    {
      id: 1,
      goalData: "Goal 1",
    },
    {
      id: 2,
      goalData: "Goal 2",
    },
  ];

  const [goalList, setGoalList] = useState(dataFromAPI);

  const updateGoalList = (goalInfo: any) => {
    setGoalList((prevState) => {
      return [goalInfo, ...goalList];
    });
  };

  return (
    <div className="w-full flex flex-col items-center h-screen justify-center text-white">
      <h1 className="text-red-950 font-extrabold text-5xl mb-4">Goals</h1>
      <div className="flex flex-col border-2 w-1/2 border-black p-2 items-center gap-2">
        <AddGoals onSaveHandler={updateGoalList} />
        <GoalList goals={goalList} />
      </div>
    </div>
  );
}
