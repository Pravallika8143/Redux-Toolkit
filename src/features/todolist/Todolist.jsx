import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";


function TodoList(){
    var {todos}=useSelector(state=>state.todolistR);
    var dispatch= useDispatch();
    var [newTodo,setNewTodo]=React.useState("");
    return (
    <div className="border border-2 m-3 p-3 border-secondary rounded-3">
       <h1 style={{marginLeft:"35%"}}>Todolist</h1>
       <input style={{marginRight:"2px", marginLeft:"15%"}}type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
       <button className=" ms-3 mb-3 rounded-3" onClick={()=>{dispatch(addTodo(newTodo))}}>AddTodo</button>
       <ul className="list-unstyled ms-4 ">
        {
            todos.map((todo)=>{
                return <li className="mb-2">
                     <i class="bi bi-caret-right-fill me-2"></i>
                    {todo}
                    </li>
            })
        }
       </ul>
    </div>
  )
}
export default TodoList;