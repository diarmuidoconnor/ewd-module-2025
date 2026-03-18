import Friend from "./friend";
import { friendProps } from "./friendProps";

interface FilteredFriendListProps {
    list:friendProps[];
}

const FilteredFriendList = (props: FilteredFriendListProps) => {
 console.log('Render of FilteredFriendList')
  const friends = props.list.map(item => (
    <Friend key={item.email} {...item} />
  ));
  return <ul>{friends}</ul>;
};

export default FilteredFriendList;