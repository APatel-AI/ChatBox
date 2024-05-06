import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post('/register', {username, password});
      // Handle success response here (e.g., display success message or redirect)
      console.log("Registration successful", response);
    } catch (err) {
      // Handle error
      setError(err.message);
    }
  }

  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <form className="w-64 mx-auto " onSubmit={register}>
        <input
          value={username}
          onChange={ev => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm"
          required
        />

        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
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
