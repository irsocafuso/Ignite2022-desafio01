import Header from "./components/header/Header"

import styles from './App.module.css'
import './common.css'
import NewTask from "./components/new-task/NewTask"
import TaskList from "./components/TaskList/TaskList"

function App() {

  return (
    <div className="App" >
      <Header />
      <main>
        <NewTask />
        <TaskList />
      </main>
    </div>
  )
}

export default App
