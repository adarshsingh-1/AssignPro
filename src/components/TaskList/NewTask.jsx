import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0  w-[300px] h-full bg-white rounded-xl shadow-lg border border-gray-300 p-6 flex flex-col ">
        <div className="flex justify-between items-center">
          <h3 className="text-sm bg-red-500 py-1 px-3 rounded-full text-white font-medium">
            {data.category}
          </h3>
          <h4 className="text-sm text-gray-600">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-gray-800">
          {data.title}
        </h2>
        <p className="text-sm mt-6 text-gray-600">
          {data.description}
        </p>
        <div className="flex justify-between mt-4">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                Accept Task
            </button>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                Reject Task
            </button>
        </div>
      </div>
  )
}

export default NewTask