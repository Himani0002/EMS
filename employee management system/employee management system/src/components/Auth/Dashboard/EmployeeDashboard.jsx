import React from 'react'
import Header from '../../Others/Header'
import TaskListNumber from '../../Others/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
      <div class="p-10 bg-[#1c1c1c] h-screen">

        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  )
}

export default EmployeeDashboard
