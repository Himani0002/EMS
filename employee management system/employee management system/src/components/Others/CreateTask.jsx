import React from 'react'

const CreateTask = () => {
  return (
    <>
      <div className="mt-8">
        <form
          className="flex flex-wrap w-full  shadow-lg p-8 gap-8 items-start justify-center rounded-lg"
          action=""
        >
          {/* Left Column */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="w-full border border-emerald-500 rounded-md py-2 px-4 outline-none bg-transparent text-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Date</h3>
              <input
                type="date"
                className="w-full border border-emerald-500 rounded-md py-2 px-4 outline-none bg-transparent text-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full border border-emerald-500 rounded-md py-2 px-4 outline-none bg-transparent text-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Category</h3>
              <input
                type="text"
                placeholder="Design, Development, etc."
                className="w-full border border-emerald-500 rounded-md py-2 px-4 outline-none bg-transparent text-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Task Description</h3>
              <textarea
                placeholder="Write task description here..."
                className="w-full border border-emerald-500 rounded-md py-2 px-4 h-32 resize-none outline-none bg-transparent text-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500 transition"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border border-emerald-500 bg-emerald-500 text-black font-medium py-3 px-6 rounded-md hover:bg-emerald-600 hover:text-white transition"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </>



  )
}

export default CreateTask
