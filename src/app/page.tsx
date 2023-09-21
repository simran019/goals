import Image from "next/image";
import AddGoals from "./addGoals/page";
import GoalList from "./goalList/page";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center h-screen justify-center text-white">
      <h1 className="text-red-950 font-extrabold text-5xl mb-4">Goals</h1>
      <div className="flex flex-col border-2 w-1/2 border-black p-2 items-center gap-2">
        <AddGoals />
        <GoalList />
      </div>
    </div>
  );
}
