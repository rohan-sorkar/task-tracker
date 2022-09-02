import { useState } from "react";
import {fakeTasks} from '../constants';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import {genId}  from '../utils';

function useLogic() {
  //! main sourch of data 
  const [tasks, setTask] = useState([...fakeTasks]);
  //! table view and list view handler
  const deleteTask = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You want to delete this task!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      background: '#121111'
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredTasks = tasks.filter(item => item.id !== id)
        setTask([...filteredTasks])
        Swal.fire({
          title: 'Deleted!',
          text: 'Your task has been deleted.',
          icon: 'success',
          background: '#121111'
        })
      }
    })
  }
  const handleSelect = (id) => {
    const task = tasks.find((item) => item.id === id);
    task.isSelect = !task.isSelect
    return setTask([...tasks])
  }
  const handleStatus = (id) => {
    const task = tasks.find(item => item.id === id);
    task.isComplete = !task.isComplete
    return setTask([...tasks])
  }
  //! form handle
  const [isForm, setForm] = useState(false);
  const openAddTodoForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };
  const handleAddTodo = (event, task) => {
    event.preventDefault();
    const newTask = {
      id: genId.next().value,
      title: task.title,
      description: task.description,
      isSelect: false,
      isComplete: false,
      date: new Date()
    }
    if(task.title && task.description) {
      setTask([newTask, ...tasks]);
    }
    setForm(false);
  };
  //! change the view
  const [view, setView] = useState('list')
  const changeView = (text) => {
    setView(text)
  }
  //! heading handler
  const {completed, progress} = tasks.reduce((acc, cur) => {
    if(cur.isComplete) {
      acc.completed += 1
    } else {
      acc.progress += 1
    }
    return acc;
  }, {completed: 0, progress: 0});
  //! search adn filter functionalities
  const [state, setState] = useState({searchTerm: '', filter: 'all'});
  const searchChange = (e) => {
    setState({...state, searchTerm: e.target.value})
  }
  const performSearch = () => {
    const searchedTasks = tasks.filter((task) => task.title.toLowerCase().includes(state.searchTerm));
    return searchedTasks;
  }
  const searchedTasks = performSearch();
  const setFilterText = (text) => {
    setState({...state, filter: text})
  }
  const performFilter = (tasks) => {
    if(state.filter === 'all') {
      return tasks;
    } else if (state.filter === 'running') {
      return tasks.filter(task => !task.isComplete)
    } else if (state.filter === 'completed') {
      return tasks.filter(task => task.isComplete)
    }
  }
  const performedTasks = performFilter(searchedTasks);
  //! bulk control handler
  const [bulkText, setBulkText] = useState('');
  const clearSelected = () => {
    setBulkText('selected')
    const data = tasks.filter(task => !task.isSelect);
    return setTask([...data])
  }
  const clearCompleted = () => {
    setBulkText('completed')
    const data = tasks.filter(task => !task.isComplete);
    return setTask([...data])
  }
  const reset = () => {
    setBulkText('reset')
    setState({searchTerm: '', filter: 'all'})
    setView('list')
  }
   //! transformed data
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const getDay = (date) => {
     const s = date.getDay();
     const day = days[s]
     return day;
   } 
   const transFormedTasks = performedTasks.map(task => ({...task, time: task.date.toLocaleTimeString(), day: getDay(task.date)}));

  return {
    tasks,
    transFormedTasks,
    reset, 
    clearSelected,
    clearCompleted,
    bulkText,
    setFilterText,
    searchChange,
    state,
    completed,
    progress,
    view,
    changeView,
    handleAddTodo,
    closeForm,
    openAddTodoForm,
    isForm,
    handleSelect,
    handleStatus,
    deleteTask
  }
}

export default useLogic;
