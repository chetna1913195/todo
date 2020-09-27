import React,{useState} from 'react'
import  TodoForm from './TodoForm';
import Todo from './Todo'
function Todolist() {
    const[lists,setList]=useState([]);
    const addlist=list=>{
        if(!list.text || /^\s*$/.test(list.text)){
            return;
        }
        const newlist=[list,...lists]
        setList(newlist);
        console.log(...lists);
    }
    const editlist=(listId,newvalue)=>{
        if(!newvalue.text || /^\s*$/.test(newvalue.text)){
            return;
        } 
        setList(prev => prev.map(item =>(item.id === listId ? newvalue : item))
        );
    }
    const deletelist=id=>{
        const deleteArr =[...lists].filter(list=>list.id !==id)
setList(deleteArr);
          
    }
    
    const completelists=id=>{
        let updatedlists=lists.map(list =>{
            if(list.id === id) {
                list.isComplete = !list.isComplete;
            }
            return list;
        })
        setList(updatedlists);
    }
    return (
        <div>
           <h1>Lets Plan My Day!</h1> 
           <TodoForm onSubmit={addlist} />
           <Todo lists={lists} completelists={completelists} deletelist={deletelist} editlist={editlist}/>
        </div>
    );
}

export default Todolist
