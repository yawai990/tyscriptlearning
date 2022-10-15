import React from 'react';

interface Todo{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  addTodo: (e: React.FormEvent)=>void
};

const AddForm = ({setTodo,todo,addTodo}:Todo) => {

  return (
   <form onSubmit={addTodo}>
    <input type='text' name='todo'
    value={todo}
    onChange={e=>setTodo(e.target.value)}
     placeholder='Enter Your Todo List'
    className='rounded-md border border-1 border-grey-400 outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500 bg-blend-multiply mix-blend-multiply px-2 py-1 form-input placeholder:italic placeholder:text-slate-500' 
    />  
    <button className='ml-1 px-2 py-1 rounded-md bg-transparent hover:bg-blue-500 duration-150 outline-none border border-1 hover:text-white'>Add Todo</button>
   </form>
  )
}

export default AddForm