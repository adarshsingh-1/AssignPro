import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskBox = ({data}) => {
  return (
<div id='tasklist'className='h-[55%] flex items-start gap-6 flex-nowrap w-full py-5 px-6 bg-gray-200 mt-10 overflow-x-auto'>
    {data.tasks.map((elem, idx) => {
      if(elem.active){
        return <AcceptTask key={idx} data={elem} />
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }
      if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem} />
      }
    })}
</div>
  )
}

export default TaskBox