const GoalList = (props: any) => {
  const goalList = props.goals;
  return (
    <ul className="flex flex-col gap-2 w-full text-white">
      {goalList.map((item: any) => {
        return (
          <li
            className="bg-red-950 p-2"
            key={item?.id}
            onClick={() => props.onSelect(item?.id)}
          >
            {item?.goalData}
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
