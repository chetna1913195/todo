import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState(props.change ? props.change.value : '');
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handlechange=e=>{
        setInput(e.target.value)
    };
    const submit=e=>{
e.preventDefault();
     props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text:input
    });
    setInput('');
};
    return (
        <div>
         <form class="todo-form" onSubmit={submit}>
         {props.change ? (
             <>
             <input type="text"
          placeholder="Update a To-Do" 
          value={input}
         name="text" 
         className="todo-input edit"
        onChange={handlechange}
         ref={inputRef}></input>
         <button className="todo-button edit">Update</button>
         </>
         ) :
         (<>
            <input type="text"
          placeholder="Add a To-Do" 
          value={input}
         name="text" 
         className="todo-input"
        onChange={handlechange}
         ref={inputRef}></input>
         <button className="todo-button">Add To-Do</button>
         </>
         )}
         
         </form>   
        </div>
    )
}

export default TodoForm
