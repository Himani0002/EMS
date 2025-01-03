import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl">Hello <br /> <spna className="text-3xl font-semibold">Himani 👋</spna>  </h1>
        <button className="bg-red-900 text-lg font-medium text-white px-3 py-1 rounded-md ">Log out</button>
      </div>
    </>
  )
}

export default Header
