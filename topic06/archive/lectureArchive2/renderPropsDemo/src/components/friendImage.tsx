import {friendProps} from "./friendProps"

const FriendImage = ({name,picture}: friendProps) => {
  return (
    <li>
      <h3>{` ${name.first} ${name.last}`}</h3>
      <img src={picture.medium} />
    </li>
  );
};

export default FriendImage