function Tarea({ id, text, completed, onToggle, onDelete}){

    const handleCheck = () => {
        onToggle(id)
    }
    const handleDelete = () => {
        onDelete(id)
    }
  
    return (
        <>
            <p style={completed ? { textDecoration:'line-through'} :  {textDecoration:'none'} }> {text} </p>
            {completed ? <button onClick={handleDelete} className="borrar">Eliminar </button> : <button onClick={handleCheck} className="check"> Hecho </button>} 
        </>
    )

}

export default Tarea;
