import React, { useState, useEffect, ChangeEvent } from "react";
import FilteredFriendList from "./components/filteredFriendList";
import FriendContact from "./components/friendContact";
import FriendImage from "./components/friendImage";
import { friendProps } from "./components/friendProps";

const FriendsApp = () => {
  const [searchText, setSearchText] = useState("");
  const [format, setFormat] = useState("image");
  const [friends, setFriends] = useState<friendProps[]>([]);

  const Friend = format === "image" ? FriendImage : FriendContact;

  useEffect(() => {
    console.log("fetch effect");
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((json) => {
        setFriends(json.results);
      });
  }, []);



  const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredList = friends.filter((friend) => {
    const friendName = friend.name.last.toLowerCase();
    return friendName.search(searchText) !== -1;
  });

  console.log("Render FriendsApp");
  return (
    <div className="container">
      <h1>Friends List</h1>
      <input type="text" placeholder="Search" onChange={filterChange} />
      <br></br>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => setFormat("image")}
      >
        Friend Images
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => setFormat("contact")}
      >
        Friend Contacts
      </button>

      <FilteredFriendList
        list={filteredList}
        render={(friend) => <Friend key={friend.email} {...friend} />}
      />
    </div>
  );
};
export default FriendsApp;
