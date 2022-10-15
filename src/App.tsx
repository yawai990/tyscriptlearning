import React,{useState} from 'react';
import AddForm from './components/AddForm';
import TodoLists from './components/TodoLists';
import {TodosModel} from './interface';

const App:React.FC = () => {

  const [todo,setTodo] = useState<string>('');
  const [todos,setTodos] = useState<TodosModel[]>([]);

  const addTodo=(e: React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,complete:false}])
    };
    setTodo('')
  }

  return (
    <div className='w-screen min-h-screen'>

      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-lg capitalize my-3 text-center font-semibold'>Tyscript ToDo App</h1>
      <AddForm setTodo={setTodo} todo={todo} addTodo={addTodo} />
      </div>

      <div className='mt-5 flex flex-col justify-center items-center gap-3'>

        <TodoLists todos={todos} setTodos={setTodos} />

          </div>
      </div>
  )
}

export default App
