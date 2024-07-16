const TaskListComponent = ({tasks}) => {
  console.log(tasks);


  return (
    <>
      
        <ul className="todo-list">
          {tasks.length==0 ? "No tasks found"
          
          :tasks.map((ele,i) => {
          return(
            <li key={i}>
            {ele.task}
            <button className="delete-button" onClick={()=>tasks.splice(i,1)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>)
          })
       }
        </ul>
    </>
  );
};

export default TaskListComponent;
