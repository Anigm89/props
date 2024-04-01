import './App.css';
import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import Tarea from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);


  const AddTask = (newtask) => {
    const newTaskObject = {
      id: newtask + tasks.length + 1, //para que no se repita el id
      text: newtask,
      completed: false
    }
    setTasks([...tasks, newTaskObject]);
  }

  const updateCheck = (taskId) =>{
    const actualizar = tasks.map(task => { 
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    })
    setTasks(actualizar)
  }

  const deleteTask = (taskId) =>{
      setTasks(tasks.filter(task => task.id !== taskId));
  }


  return (
    <>
    <h1>Lista de tareas</h1>
    <AddTaskForm AddTask={AddTask}  />
    <ul className="tasks">
      {tasks.map((task) => (
          <Tarea id={task.id} text={task.text} completed={task.completed} onToggle={updateCheck} deleteTask={deleteTask} />
      ))}
    </ul>
    </>
  );
};

export default App;
