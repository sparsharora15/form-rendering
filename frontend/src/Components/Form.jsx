import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { createFormData, setUserForm, updateCurrectForm } from "../Redux/Slice";
const Form = () => {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    DOB: "",
  });
  const [Form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    DOB: "",
  });
  function handleChange(e) {

    setForm({ ...Form, [e.target.name]: e.target.value });
  }
  function handleClick() {
    if (user.form !== null) {
      dispatch(updateCurrectForm(Form));
      toast.success("Details updated successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      dispatch(createFormData({ Username: user.userName, ...Form }));
      toast.success("Details created successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  function handleCancel() {
      dispatch(setUserForm(null));
    setForm({
      name: "",
      email: "",
      phoneNo: "",
      DOB: "",
    });
  }
  useEffect(() => {
    setForm(user?.form);
  }, [user?.form]);
  return (
    <>
      <div className="w-full h-screen backgroundColor  flex items-center justify-center">
        <div className="w-[35%] flex p-5 flex-col h-fit bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] border rounded-lg">
          <div className="input">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="small-input"
              name="name"
              value={Form?.name}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your username"
              className="w-full focus:outline-none block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
            />
          </div>
          <div className="input">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              type="text"
              id="small-input"
              name="phoneNo"
              value={Form?.phoneNo}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your username"
              className="w-full focus:outline-none block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
            />
          </div>
          <div className="input">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="small-input"
              name="email"
              value={Form?.email}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your username"
              className="w-full focus:outline-none block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
            />
          </div>
          <div className="input">
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              DOB
            </label>
            <input
              type="date"
              id="small-input"
              name="DOB"
              value={Form?.DOB}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your username"
              className="w-full focus:outline-none block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
            />
          </div>
          <div className="buttons flex">
            <button
              type="button"
              onClick={() => handleCancel()}
              className="w-[30%] mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="w-[30%] mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
