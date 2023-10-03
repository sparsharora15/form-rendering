import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUsername, setUserName } from "../Redux/Slice";
const Username = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  function handleChange(e) {
    setUsername(e.target.value);
  }
  function handleClick() {
    dispatch(setUserName(username));
    dispatch(createUsername({username:username}));
  }
  return (
    <>
      <div className="w-full h-screen backgroundColor  flex items-center justify-center">
        <div className="w-[30%] flex p-5 flex-col h-fit bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] border rounded-lg">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter your username
          </label>
          <input
            type="text"
            id="small-input"
            placeholder="Enter your username"
            onChange={(e) => handleChange(e)}
            className="w-[60%] focus:outline-none block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
          />
          <button
            type="button"
            className="w-[30%] mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
            onClick={() => handleClick()}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Username;
