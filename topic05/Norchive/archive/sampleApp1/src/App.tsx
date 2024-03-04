import React, { useState, useEffect } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import './index.css';
import { ChangeEvent } from "react";  
import { friendProps } from "./components/friendProps";

const FriendsApp: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    console.log('fetch effect')
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(json => {
        setFriends(json.results);
      });
  }, []);
  
  const filterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredList = friends.filter((friend: friendProps) => {
    const friendName = friend.name.last.toLowerCase();
    return friendName.search(searchText) !== -1;
  });

  console.log("Render FriendsApp");
  return (
    <>
      <h1>Friends List</h1>
      <input type="text" placeholder="Search" onChange={filterChange} />
      <FilteredFriendList list={filteredList} />
    </>
  );
};

export default FriendsApp;
