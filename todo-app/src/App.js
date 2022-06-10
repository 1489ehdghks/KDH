import {useState, useRef,useCallback} from 'react';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoTemplate from './component/TodoTemplate';


function createBulkTodos(){
  const Array=[];
  for( let i =1; i<=2500;i++){
    Array.push({
      id: 1,
      text : `할 일 ${i}`,
      checked : false,
    });
  }
  return Array;
}

const App=()=>{
  const nextId = useRef(2501);
  const [todos,setTodos]=useState(createBulkTodos);
  const onInsert = useCallback(
    text =>{
      const todo={
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current+=1;
    },
    [todos],
  );

    const onToggle = useCallback(
      id => {
        setTodos(
          todos.map(todo =>
            todo.id === id?{...todo, checked : !todos.checked} : todo,)
        );
      },
    [todos],
    )
  
  

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;
