import React from 'react'


const landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-end pb-5">
  <div className="bg-white rounded-t-xl shadow-md max-w-sm mx-4 p-6 ">
    <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
    <p className="text-gray-500 mb-6 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </p>
    <div className="flex flex-col gap-3">
      <a href="/signup">
        <button className="w-full bg-violet-600 text-white py-3 rounded-md font-semibold text-base cursor-pointer">
          Create Account
        </button>
      </a>
      <a href="/login">
        <button className="w-full bg-violet-200 text-gray-800 py-3 rounded-md font-semibold text-base cursor-pointer">
          Already Registered? Login
        </button>
      </a>
    </div>
  </div>
</div>

  )
}

export default landing
