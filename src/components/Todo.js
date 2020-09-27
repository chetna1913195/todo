import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { FiDelete } from 'react-icons/fi';
import { RiEditFill } from 'react-icons/ri';
function Todo({lists,completelists,deletelist,editlist}) {
    const[change,setChange]=useState({
        id:null,
        value:''
    })
    const submitEdit=value=>{
        editlist(change.id,value);
        setChange({
            id:null,
            value:''
        });
    }
    if(change.id){
        return<TodoForm change={change} onSubmit={submitEdit} />
    }   
     return lists.map((list,index)=>(
        <div
         className={list.isComplete ? 'todo-row complete': 'todo-row' }
         key={index}>
<div key={list.id} onClick={()=> completelists(list.id)}>
    {list.text}
</div>
<div className="icons">
<FiDelete onClick={()=>deletelist(list.id)} className="delete-icon"></FiDelete>
<RiEditFill  onClick={()=>setChange({id:list.id, value:list.text})} className="edit-icon" />
</div>
    </div>
    ));
}
export default Todo
