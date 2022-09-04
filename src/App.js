import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    // setTodos([...todos.filter((todo) => todo.id !== id)]);

    const newList = todos.filter(todo => todo.id !== id);
    setTodos(newList);
  }

  const handleToggle = (id) => {
    // setTodos([
    //   ...todos.map((todo) => 
    //     todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
    //   )
    // ]);

    const index = todos.findIndex(todo => todo.id === id);
    todos[index].complete = !todos[index].complete;
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <h1>Список задач: {todos.length}</h1>

      <TodoForm addTask={addTask} />
 
      {todos.map((todo) => {
        return (
          <Todo
          key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
