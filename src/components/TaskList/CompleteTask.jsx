import React from 'react'

const CompleteTask = ({ data }) => {
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
      <div className='mt-10'>
        <button className='w-full py-2 bg-green-700 hover:bg-green-800 text-white rounded-md shadow-md transition'>
            Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask

{/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'E
‹div className='flex justify-between items-center'>
<h3 className=' Œbg-red-600 text-sm px-3 py-1 rounded'>High</h>
<h4 className='text-sm'>20 feb 2024</h4>
</div>.
<h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
<p className=' text-sm mt-2'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam. Ea
</p>
‹div className='mt-2'>
<button className='w-full'>Complete</button>
</div>
</div> */}