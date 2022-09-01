import React from 'react'

const Form = ({handleAddTodo, closeForm}) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-[#121111]'>
      <div className='bg-slate-800 p-8 rounded-xl shadow-md shadow-gray-600'>
        <h4 className='text-center text-xl text-gray-400 font-medium mb-6'>Add new Task</h4>
        <form className='flex flex-col'>
          <input className='outline-none px-6 py-2 rounded-full bg-gray-700 caret-purple-500 text-gray-300 shadow-md shadow-gray-600' type="text" placeholder='Write a title...'/>
          <textarea className='outline-none px-6 py-2 rounded-lg bg-gray-700 caret-purple-500 text-gray-300 resize-none mt-3 mb-5 shadow-md shadow-gray-600' rows="3" placeholder='Write a description...'></textarea>
          <button onClick={handleAddTodo} className='border bg-purple-600 text-gray-400 rounded-full py-1 border-none mb-2 shadow-sm shadow-green-500'>Add task</button>
          <button onClick={closeForm} className='border bg-red-400 text-red-700 rounded-full py-1 border-none shadow-sm shadow-red-200'>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default Form