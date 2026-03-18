import { useState, useEffect } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import './index.css';
import { friendProps } from "./components/friendProps";
import SearchBox from "./components/searchBox";

// Main app component that fetches, filters, and displays the friends list.
const FriendsApp = () => {
  const [searchText, setSearchText] = useState("");
  const [friends, setFriends] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    console.log('fetch effect')
    fetch("https://fakerapi.it/api/v1/users?_quantity=10")
      .then(response => response.json())
      .then((json) => {
        setFriends(json.data);
      });
  },[reset]);

  // Updates the current search query used by the filter.
  const filterChange = (text: string) =>
    setSearchText(text.toLowerCase());

  // Toggles reset state to trigger a refetch of friend data.
  const toggleReset = () =>
    setReset(!reset);

  const filteredList = friends.filter((friend: friendProps) => {
    const friendName = friend.lastname.toLowerCase();
    return friendName.search(searchText) !== -1;
  });

  useEffect(() => {
    console.log('Set Title effect')
    document.title = `${filteredList.length} matches`;
  },[filteredList.length]);

  console.log("Render FriendsApp");
  return (
    <>
      <h1>Friends List</h1>
      <SearchBox handleChange={filterChange} handleReset={toggleReset} />
      <FilteredFriendList list={filteredList} />
    </>
  );
};

export default FriendsApp;
