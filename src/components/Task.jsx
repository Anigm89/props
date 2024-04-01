function Tarea({ id, text, completed, onToggle, deleteTask}){

    const handleCheck = () => {
        onToggle(id)
    }
  
    return (
    
        <li key={id} className="task">
            <p style={completed ? { textDecoration:'line-through'} :  {textDecoration:'none'} }> {text} </p>
            {completed ? <button onClick={() => deleteTask(id)} className="borrar">Eliminar </button> : <button onClick={handleCheck} className="check"> Hecho </button>} 
        </li>
    )

}

export default Tarea;
