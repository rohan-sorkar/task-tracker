import { RiDeleteBin4Line } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";

const ListView = (props) => {
  const { tasks, deleteTask, handleStatus, handleSelect } = props;
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-800 px-3 sm:px-6 py-3 mb-4 rounded-2xl shadow-md shadow-gray-700 flex justify-between items-center"
        >
          <div>
            <div className="flex items-center gap-3">
              <input
                onChange={() => handleSelect(task.id)}
                value={task.isSelect}
                checked={task.isSelect}
                className="accent-purple-400 ring-2 ring-purple-500 h-2 sm:h-4 w-2 sm:w-4"
                type="checkbox"
              />
              <p className="text-gray-400 text-xs sm:text-lg">
                {task.title.slice(0, 22)}...
              </p>
            </div>
            <div className={`${task.isComplete ? 'text-green-500' : 'text-yellow-500'} flex items-center gap-2 ml-5`}>
              <MdDateRange></MdDateRange>
              <p className="text-sm sm:text-base">{task.day}, {task.time}</p>
            </div>
          </div>
          <div onClick={() => deleteTask(task.id)}  className="cursor-pointer bg-gray-700 hover:bg-gray-600 px-1 sm:px-2 py-1 sm:py-2 rounded-full text-red-400 w-6 h-6 sm:w-8 sm:h-8">
            <RiDeleteBin4Line/>
          </div>
          <button onClick={() => handleStatus(task.id)} className={`${task.isComplete ? 'bg-green-500' : 'bg-yellow-500'} text-xs sm:text-base px-2 sm:px-3 py-1 rounded-xl`}>
            {task.isComplete ? 'Completed' : 'Running'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListView;
