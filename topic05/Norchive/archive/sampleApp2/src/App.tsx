import React, { useState, useEffect } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import './index.css';
import { friendProps } from "./components/friendProps";
import SearchBox from "./components/searchBox";


const FriendsApp: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [friends, setFriends] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    console.log('fetch effect')
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(json => {
        setFriends(json.results);
      });
  },[reset]);

  

  const filterChange = (text: string) =>
    setSearchText(text.toLowerCase());

  const toggleReset = () =>
    setReset(!reset);


  const filteredList = friends.filter((friend: friendProps) => {
    const friendName = friend.name.last.toLowerCase();
    return friendName.search(searchText) !== -1;
  });

  useEffect(() => {
    console.log('set title effect')
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
