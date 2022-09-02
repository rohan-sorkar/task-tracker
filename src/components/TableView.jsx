import React from 'react'

const TableView = (props) => {
  const { tasks, deleteTask, handleStatus, handleSelect } = props;
  return (
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
              {
                tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-500 hover:bg-gray-800 text-gray-400">
                    <td className="py-3 px-2 sm:px-6 text-left">
                      <input 
                      onChange={() => handleSelect(task.id)}
                      value={task.isSelect}
                      checked={task.isSelect}
                      className={`${task.isComplete ? 'accent-green-400 ring-green-500' : 'accent-yellow-400 ring-yellow-500'} ring-2 h-2 sm:h-4 w-2 sm:w-4 `}type="checkbox" />
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-left">
                      <p>{task.title.slice(0, 22)}...</p>
                    </td>
                    <td className="py-3 text-center">
                      <p>{task.day}, {task.time}</p>
                    </td>
                    <td className="py-3 px-2 sm:px-6 text-right">
                      <button onClick={() => handleStatus(task.id)} className={`${task.isComplete ? 'bg-green-500' : 'bg-yellow-500'} text-xs sm:text-base px-2 sm:px-3 py-1 rounded-xl text-white`}>{ task.isComplete ? 'Completed' : 'Running'}</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
  )
}

export default TableView