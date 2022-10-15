import React,{useState,useEffect} from 'react';
import {TodosModel} from '../interface';

type Props ={
    todo:TodosModel,
    todos:TodosModel[],
    setTodos:React.Dispatch<React.SetStateAction<TodosModel[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);

    useEffect(()=>{
        if(isEdit) document.getElementById('edit_input')?.focus()
    },[isEdit])
    
    const handleEdit =(id:number)=>{
    
        if(!todo.complete){
            setIsEdit(prev=>!prev)
            setTodos(todos.map(todo=>todo.id === id ? {...todo,todo:editTodo}:todo))
        }

    }

    const handleDelete =(id:number)=>{
        setTodos(todos.filter(todo=>todo.id !== id && todo))
    }

    const handleComplete =(id:number)=>{
        setTodos(todos.map(todo=>todo.id === id ? {...todo,complete:true}:todo))
    }

  return (
    <div style={{
        border:'1px solid black',
        backgroundColor:todo.complete ? 'green':'transparent',
        minWidth:'320px'
}} key={todo.id}
className="px-3 py-1 flex justify-between items-center rounded-sm text-black">
    {
    isEdit ? <input type='text' 
    className='max-w-60 flex-1outline-none border-none focus:outline-none focus:bg-slate-200 focus:py-1'
     value={editTodo} onChange={e=>setEditTodo(e.target.value)} id='edit_input' />:  <p className={`${todo.complete ? 'line-through decoration-5 decoration-red-400 flex-1 text-white':'flex-1'}`}>{todo.todo}</p>
    }

  <div className='gap-2 flex'>
    <button className='p-1 border border-1 hover:bg-blue-600 hover:text-white duration-100 hover:border-none outline-none'
    onClick={e=>handleEdit(todo.id)}>
        edit</button>

    <button className='p-1 border border-1 hover:bg-green-600 hover:text-white duration-100 hover:border-none outline-none'
    onClick={e=>handleComplete(todo.id)}
    >com
    </button>

    <button className='p-1 border border-1 hover:bg-red-600 hover:text-white duration-100 hover:border-none outline-none'
    onClick={e=>handleDelete(todo.id)}
    >del</button>
  </div>

</div> 
  )
}

export default SingleTodo

