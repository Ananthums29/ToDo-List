const NewTodo = ({ value, updateText, handleAction }) => {
    return (
     <>
      <h1 className="fw-bolder text-danger mt-5">To Do List</h1>
      
      <label>
        <input
        style={{width:'400px'}}
          className="rounded shadow mt-4 p-1"
          placeholder="enter your todo..."
          value={value}
          onChange={(e) => updateText(e.target.value)}
          
        />
        
      </label>
      <button  className=" btn btn-primary ms-3 " onClick={handleAction}>Create</button>

     </>
    );
  };
  
  export default NewTodo;