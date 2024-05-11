import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {setUsername:setLoggedInUsername, setId } = useContext(UserContext);

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post('/register', { username, password });
      const data = response.data;
      setLoggedInUsername(username); // Ensure setLoggedInUsername is defined in the context
      setId(data.id);
      console.log("Registration successful", data);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <form className="w-64 mx-auto " onSubmit={register}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm"
          required
        />

        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm"
          required
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-gray-600 w-full p-2 text-white block rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
