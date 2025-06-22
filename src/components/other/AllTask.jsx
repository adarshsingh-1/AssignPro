import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 rounded mt-5 max-h-96 overflow-auto">
     
      <div className="mb-2 py-2 px-4 grid grid-cols-5 gap-4 items-center rounded-md bg-blue-100 text-blue-900 font-semibold text-sm">
        <div className="text-left">Employee Name</div>
        <div className="text-center">New Task</div>
        <div className="text-center">Active Task</div>
        <div className="text-center">Completed</div>
        <div className="text-center">Failed</div>
      </div>

      
      <div className="space-y-2">
        {Array.isArray(userData) ? (
          userData.map((elem, index) => (
            <div
              key={index}
              className="py-2 px-4 grid grid-cols-5 gap-4 items-center rounded-md bg-blue-50 hover:bg-blue-100 transition duration-200 text-sm text-blue-900"
            >
              <div className="text-left font-medium">{elem.firstName}</div>
              <div className="text-center">{elem.taskCount.newTask}</div>
              <div className="text-center">{elem.taskCount.active}</div>
              <div className="text-center">{elem.taskCount.completed}</div>
              <div className="text-center">{elem.taskCount.failed}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">Loading or no employee data found.</div>
        )}
      </div>
    </div>
  );
};

export default AllTask;
