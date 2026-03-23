// import Friend from ....  STATIC DEPENDENCY
import { FilteredFriendListProps } from "./friendProps";

const FilteredFriendList = (props: FilteredFriendListProps) => {
  const friends = props.list.map((item) => 
      props.render(item)
  );
  return <ul>{friends}</ul>;
};

export default FilteredFriendList;
