import './App.css'
import { TasksProvider } from './TasksContext'
import AddTask from './AddTask'
import TaskList from './TaskList'

function App() {

  return (
   <TasksProvider>
    <h1>Day off in Kyoto</h1>
    <AddTask />
    <TaskList />
   </TasksProvider>
  );
}

export default App
