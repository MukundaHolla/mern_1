import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mukunda Holla",
      image:
        "https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/Gamer_male_avatar_men_character_professions-512.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
