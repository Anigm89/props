import {useState} from 'react';


function AddTaskForm({tasks, setTasks}){

    const [newtask, setNewtask] = useState('');

    const handleChange = (e) => {
        setNewtask(e.target.value)
    };

    const AddTask = (e) =>{
        e.preventDefault();
        if(newtask !== ''){
            const newTaskObject = {
                id: tasks.length + 1,
                text: newtask,
                completed: false
            }
        setTasks([...tasks, newTaskObject]);
        setNewtask('');
        }

    }


    return (
        <>
        <form onSubmit={AddTask}>
            <input type="text" placeholder="Agregar nueva tarea" value={newtask} onChange={handleChange}  />
            <button type="submit" >Agregar</button>
        </form>
        </>
    )
}

export default AddTaskForm;


