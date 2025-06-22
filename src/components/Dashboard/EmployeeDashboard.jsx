import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskBox from '../TaskList/TaskBox'

const EmployeeDashboard = (props) => {
  
 
  
  return (
    
    <div className='flex flex-col h-screen p-10'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskBox data={props.data} />
    </div>
  )
}

export default EmployeeDashboard