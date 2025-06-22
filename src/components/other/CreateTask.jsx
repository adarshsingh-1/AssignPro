import React, { useContext } from "react";
import { useState } from "react";
import  { AuthContext } from "../../context/AuthProvider";


const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [taskCategory, setTaskCategory] = useState('');


  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, taskCategory, active: false, newTask: true, failed: false, completed: false })
        const updatedData = userData.map(user => {
          if (user.firstName === assignTo) {
            return {
              ...user,
              tasks: [...user.tasks, newTask],
              taskCount: {
                ...user.taskCount,
                newTask: user.taskCount.newTask + 1
              }
            };
          }
          return user;
        });

        setUserData(updatedData);
        console.log("🔁 Updated user data:");
        console.log(updatedData);

        



        


        setTaskTitle('')
        setTaskCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')
  };

  return (
<div className="p-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Task</h2>

  <form onSubmit={(e) => {
    submitHandler(e)
  }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Enter task title"
            className="mt-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 w-full rounded-md outline-none transition-all duration-200"
            // required
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="mt-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 w-full rounded-md outline-none transition-all duration-200"
            // required
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700">Assign To</h3>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            type="text"
            placeholder="Assign to (username or email)"
            className="mt-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 w-full rounded-md outline-none transition-all duration-200"
            // required
          >
          </input>
        </div>
      </div>

  
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Description of Task</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Describe the task in detail"
            rows="6"
            className="mt-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 w-full rounded-md outline-none transition-all duration-200 resize-none"
            // required
          ></textarea>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700">Category</h3>
          <input
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            type="text"
            placeholder="Debugging, Development, Design, etc."
            className="mt-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 w-full rounded-md outline-none transition-all duration-200"
            // required
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white p-3 w-full rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg mt-6"
    >
      Create Task
    </button>
  </form>
</div>

  );
};

export default CreateTask;
