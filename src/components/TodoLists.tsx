import React from 'react';
import {TodosModel} from '../interface';
import SingleTodo from './SingleTodo';

interface Props{
    todos:TodosModel[],
    setTodos:React.Dispatch<React.SetStateAction<TodosModel[]>>,
}

const TodoLists:React.FC<Props> = ({todos,setTodos}:Props) => {
 
  return (
    <>
    {
        todos.length > 0 ?  todos.map(todo=><SingleTodo todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />) :
        <p className='text-lg text-red-600 font-semibold'>There is no todo</p>
    }
</>
  )
}

export default TodoLists