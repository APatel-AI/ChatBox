import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <form className="w-64 mx-auto ">
        <input
          value={username}
          onChange={ev => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm"
        />

        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm"
        />

        <button className="bg-gray-600 w-full p-2 text-white block rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
