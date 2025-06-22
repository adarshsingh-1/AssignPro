import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-8 mx-6 justify-between gap-6 w-auto'>
        <div className='rounded-xl flex-1 py-6 px-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
            <h2 className='text-3xl font-bold mb-2'>{data.taskCount.newTask}</h2>
            <h3 className='text-lg font-medium opacity-90'>New Tasks</h3>
        </div>
        <div className='rounded-xl flex-1 py-6 px-6 bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
            <h2 className="text-4xl font-bold text-center">{data.taskCount.active}</h2>
            <h3 className='text-lg font-medium opacity-90'>Active Tasks</h3>
        </div>
        <div className='rounded-xl flex-1 py-6 px-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
            <h2 className='text-3xl font-bold mb-2'>{data.taskCount.completed}</h2>
            <h3 className='text-lg font-medium opacity-90'>Completed</h3>
        </div>
        <div className='rounded-xl flex-1 py-6 px-6 bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
            <h2 className='text-3xl font-bold mb-2'>{data.taskCount.failed}</h2>
            <h3 className='text-lg font-medium opacity-90'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber