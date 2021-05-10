import React from 'react';
import Input from './components/Input';
import TodoItem from './components/todoItem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      {
        todoList.map(item=>(
            
            <TodoItem 
              name={item.item}
              done = {item.done}
              id = {item.id}
            />

            )
        )
      }
        <Input></Input>
    </div>
  );
}

export default App;
