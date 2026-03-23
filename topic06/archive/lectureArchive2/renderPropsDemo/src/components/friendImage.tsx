import {friendProps} from "./friendProps"

const FriendImage = (props: friendProps) => {
 
  return (
    <li>
      <h3>{` ${props.name.first} ${props.name.last}`}</h3>
      <img src={props.picture.medium} />
    </li>
  );
};

export default FriendImage