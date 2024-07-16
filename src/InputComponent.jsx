import { useState } from "react";
import TaskListComponent from "./TaskListComponent";
const InputComponent = () => {
  const [Tasks,SetTasks]=useState([])
  const [inputvalue,setinputvalue]=useState("");
  const [value,setvalue]=useState(true)
  const setinput=()=>{
   if(inputvalue!==""){
    SetTasks([...Tasks,{
      task: inputvalue,
      isComplete: false,
    }])
    console.log(Tasks);
   }
   else{
    setvalue(false)
   }
  }

  return (
    <>
      <div className="main-inputs">
        <input type="text" className="input" onChange={(e)=>setinputvalue(e.target.value)}/>
        <button className="button" onClick={setinput}>Add</button>
      </div>
      <TaskListComponent tasks={Tasks}/>
      <div className="error-message">{value?"":"Please enter a task name"}</div>
    </>
  );
};

export default InputComponent;
