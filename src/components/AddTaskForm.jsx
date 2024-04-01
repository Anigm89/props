import {useState} from 'react';


function AddTaskForm({AddTask}){

    const [newtask, setNewtask] = useState('');

    const handleChange = (e) => {
        setNewtask(e.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( !newtask.trim() ) return;
    
        AddTask(newtask)
        setNewtask('');
    }


    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Agregar nueva tarea" value={newtask} onChange={handleChange}  />
            <button type="submit" >Agregar</button>
        </form>
    )
}

export default AddTaskForm;


