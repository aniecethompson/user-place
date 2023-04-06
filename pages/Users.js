import React from "react";
import UsersList from "../components/UsersList";

//list of users
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ani Thom",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuRDFc7bQYcMUcAqTlkWW3RJFYw-_gq5dZA&usqp=CAU",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
