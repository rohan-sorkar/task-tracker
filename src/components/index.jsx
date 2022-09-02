import useLogic from '../hooks/useLogic';
import { Form, ChangeView, SearchPanel, FilterController, BulkController, AddTask, Heading,ListView, TableView, Container } from './ExportComponents';

function TaskTracker() {
  const {openAddTodoForm, isForm, handleAddTodo, closeForm, searchChange, state, setFilterText, bulkText, clearCompleted, clearSelected, reset, changeView, view, tasks, completed, progress, transFormedTasks, deleteTask, handleSelect, handleStatus } = useLogic();
  
  return (
      <Container>

        <AddTask openAddTodoForm={openAddTodoForm}/>

        {isForm && <Form handleAddTodo={handleAddTodo} closeForm={closeForm} />}

        <SearchPanel searchChange={searchChange} searchTerm={state.searchTerm}/>

        <FilterController filter={state.filter} setFilterText={setFilterText}/>

        <BulkController bulkText={bulkText} clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset}/>

        <ChangeView changeView={changeView} view={view}/>

        {tasks.length && <Heading totalLength={tasks.length} completed={completed} progress={progress}/>}
        
        {view === 'list' ? <ListView tasks={transFormedTasks} deleteTask={deleteTask} handleSelect={handleSelect} handleStatus={handleStatus}/> : <TableView tasks={transFormedTasks} deleteTask={deleteTask} handleSelect={handleSelect} handleStatus={handleStatus}/>}
        
      </Container>
  );
}

export default TaskTracker;
