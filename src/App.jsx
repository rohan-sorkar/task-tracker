import React from "react";
import { HiPlus } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  //! form handle
  const [isForm, setForm] = useState(false);
  const openAddTodoForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };
  const handleAddTodo = () => {};
  //! change the view
  const [view, setView] = useState('list')
  const changeView = (text) => {
    setView(text)
  }

  return (
    <div className="my-10 sm:my-24 px-3">
      <div className="w-full max-w-xl mx-auto">
        <button
          onClick={openAddTodoForm}
          className="border-2 border-gray-800 rounded-full px-10 py-2 text-gray-400 flex items-center gap-2 shadow-sm shadow-gray-600 hover:bg-gray-900 mx-auto"
        >
          <div className="bg-pink-500 text-slate-800 rounded-full px-1 py-1">
            <HiPlus></HiPlus>
          </div>
          Add a task
        </button>

        {isForm && <Form handleAddTodo={handleAddTodo} closeForm={closeForm} />}

        <div className="rounded-full pl-6 py-1 sm:py-2 border-2 border-gray-800 shadow-sm shadow-gray-600 caret-gray-300 text-gray-400 flex items-center gap-2 mt-5 max-w-xs mx-auto">
          <BiSearch className="text-teal-500"></BiSearch>
          <input
            className="bg-[#121111] outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="flex gap-2 justify-center mt-5">
          <button className="border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600 hover:bg-purple-900 bg-purple-800">
            All
          </button>
          <button className="border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600">
            Running
          </button>
          <button className="border-2 border-purple-800 rounded-full px-3 sm:px-5 py-1 text-gray-400 shadow-sm shadow-gray-600">
            Completed
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-5">
          <button className="border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600 hover:bg-orange-900 bg-orange-800">
            Clear selected
          </button>
          <button className="border-2 border-orange-800 rounded-full text-xs sm:text-base px-1 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
            Clear Completed
          </button>
          <button className="border-2 border-orange-800 rounded-full text-xs sm:text-base px-2 sm:px-5 py-2 sm:py-1 text-gray-400 shadow-sm shadow-gray-600">
            Reset
          </button>
        </div>

        <div className="flex justify-center gap-3 bg-slate-800 mt-6 w-60 sm:w-64 py-2 rounded-sm mx-auto">
          <button onClick={() => changeView('list')} className={`${view === 'list' && 'bg-indigo-500 text-gray-900'} text-gray-300 px-3 border-2 border-gray-400`}>
            List view
          </button>
          <button onClick={() => changeView('table')} className={`${view === 'table' && 'bg-indigo-500 text-gray-900'} text-gray-300 px-3 border-2 border-gray-400`}>
            Table view
          </button>
        </div>

        <h3 className="mt-7 sm:mt-10 mb-2 sm:mb-4 text-lg sm:text-xl text-gray-400 font-medium italic">
          Tasks - 8
        </h3>
        
        {view == 'list' ? (
        <div>
          <div className="bg-gray-800 px-3 sm:px-6 py-3 mb-4 rounded-2xl shadow-md shadow-gray-700 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3">
                <input className="accent-purple-400 ring-2 ring-purple-500 h-2 sm:h-4 w-2 sm:w-4" type="checkbox"/>
                <p className="text-gray-400 text-xs sm:text-lg">Hello world i am rohan...</p>
              </div>
              <div className="flex items-center gap-2 text-yellow-500 ml-5">
                <MdDateRange></MdDateRange>
                <p className="text-sm sm:text-base">sunday, 10:50 PM</p>
              </div>
            </div>
            <div className='cursor-pointer bg-gray-700 hover:bg-gray-600 px-1 sm:px-2 py-1 sm:py-2 rounded-full text-red-400 w-6 h-6 sm:w-8 sm:h-8'>
              <RiDeleteBin4Line/>
            </div>
            <button className="text-xs sm:text-base bg-yellow-500 px-2 sm:px-3 py-1 rounded-xl">Running</button>
          </div>
          <div className="bg-gray-800 px-3 sm:px-6 py-3 mb-4 rounded-2xl shadow-md shadow-gray-700 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3">
                <input className="accent-purple-400 ring-2 ring-purple-500 h-2 sm:h-4 w-2 sm:w-4" type="checkbox"/>
                <p className="text-gray-400 text-xs sm:text-lg line-through">Hello world i am rohan...</p>
              </div>
              <div className="flex items-center gap-2 ml-5 text-green-500">
                <MdDateRange></MdDateRange>
                <p className="text-sm sm:text-base">monday, 4:00 AM</p>
              </div>
            </div>
            <div className='cursor-pointer bg-gray-700 hover:bg-gray-600 px-1 sm:px-2 py-1 sm:py-2 rounded-full text-red-400 w-6 h-6 sm:w-8 sm:h-8'>
              <RiDeleteBin4Line/>
            </div>
            <button className="text-xs sm:text-base bg-green-500 px-2 sm:px-3 py-1 rounded-xl">Completed</button>
          </div>
        </div> 
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-700 text-gray-200 uppercase text-sm leading-normal">
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">#</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Title</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Time</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-500 hover:bg-gray-800 text-gray-400">
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input className="accent-green-400 ring-2 ring-green-500 h-2 sm:h-4 w-2 sm:w-4" type="checkbox" />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <p>hello iam rohan...</p>
                </td>
                <td className="py-3 text-center">
                  <p>sunday, 10:50 AM</p>
                </td>
                <td className="py-3 px-2 sm:px-6 text-right">
                  <button className="text-xs sm:text-base bg-green-500 text-white px-2 sm:px-3 py-1 rounded-xl">Completed</button>
                </td>
              </tr>
              <tr className="border-b border-gray-500 hover:bg-gray-800 text-gray-400">
                <td className="py-3 px-2 sm:px-6 text-left">
                  <input className="accent-yellow-400 ring-2 ring-yellow-500 h-2 sm:h-4 w-2 sm:w-4" type="checkbox" />
                </td>
                <td className="py-3 px-2 sm:px-6 text-left">
                  <p>hello iam rohan...</p>
                </td>
                <td className="py-3 text-center">
                  <p>sunday, 10:50 AM</p>
                </td>
                <td className="py-3 px-2 sm:px-6 text-right">
                  <button className="text-xs sm:text-base bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-xl">Completed</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
        
      </div>
    </div>
  );
}

export default App;
