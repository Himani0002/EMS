import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 screen p-10'>
      <div className=" rounded-xl w-[45%] px-5 py-10 bg-[#B1F0F7]">
        <h2 className="text-2xl font-bold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>

      </div>
      <div className=" rounded-xl w-[45%] px-5 py-10 bg-[#81BFDA]">
        <h2 className="text-2xl font-bold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>

      </div>
      <div className=" rounded-xl w-[45%] px-5 py-10 bg-[#F5F0CD]">
        <h2 className="text-2xl font-bold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>

      </div>
      <div className=" rounded-xl w-[45%] px-5 py-10 bg-[#FADA7A]">
        <h2 className="text-2xl font-bold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">New Task</h3>

      </div>
    </div>
  )
}

export default TaskListNumber
