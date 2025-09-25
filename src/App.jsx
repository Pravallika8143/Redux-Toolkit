import Counter from "./features/counter/Counter"
import TodoList from "./features/todolist/Todolist"

function App() {
  return (
    <div className="border border-2 m-3 p-3 border-dark rounded-3">
      <h1>Redux ToolKit</h1>
      <Counter></Counter>
      <TodoList></TodoList>
    </div>
  )
}

export default App;
