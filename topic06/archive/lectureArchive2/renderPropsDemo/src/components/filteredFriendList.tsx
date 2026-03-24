// import Friend from ....  STATIC DEPENDENCY
import { FilteredFriendListProps } from "./friendProps";

const FilteredFriendList = ({list, render}: FilteredFriendListProps) => {
  const friends = list.map((item) => 
      render(item)
  );
  return <ul>{friends}</ul>;
};

export default FilteredFriendList;
