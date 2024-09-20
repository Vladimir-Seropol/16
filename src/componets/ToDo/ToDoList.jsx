import React, { useState } from 'react';
import { useUnit } from 'effector-react';
import { todosStore, addTodo, removeTodo  } from '../../store/itemsStore.js';



const ToDoList = () => {


  const todos = useUnit(todosStore);

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div >
      <div className="flex justify-between gap-5 my-10">
        <input 
          className='flex-1 py-2 px-4 border border-gray-500 rounded required:border-red-500  '
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавте задачу"
          required
        />
        <button className='border rounded border-gray-500 p-2 transition-colors hover:bg-slate-500 hover:text-white shadow-black shadow-lg active:shadow-none'
          onClick={handleAddTodo}>Добавить</button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}
          className='flex justify-between items-center my-8 border-b-[0px]' >
            {todo} 
            <button className='border rounded border-gray-500 p-2 transition-colors hover:bg-slate-500 hover:text-white shadow-black shadow-md active:shadow-none'
              onClick={() => removeTodo(index)}>Удалить</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;

