import React from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
  }


  return (
    <div className="flex items-center justify-between p-6 bg-blue-600 text-white  shadow-md">
      <div>
        <h1 className="text-2xl font-semibold">Hello</h1>
        <h1 className="text-2xl font-medium">
          <span className="text-3xl">Adarsh</span>👋
        </h1>
      </div>
      <button  onClick={logOutUser}  className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
        Log Out
      </button>
    </div>
  );
};

export default Header;
