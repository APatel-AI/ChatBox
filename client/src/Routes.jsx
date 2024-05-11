import Register from "./Register";
import { useContext } from "react";
import { UserContext } from "./UserContext";


import React from 'react'

const Routes = () => {

    const {username, id } = useContext(UserContext);

    if (username) {
        return "logged in!";
      }
  return (
    <Register />
  )
}

export default Routes
