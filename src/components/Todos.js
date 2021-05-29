import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, edit, toggleEnable }) => {
  return (
    <div>
      <div class="todos-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            edit={edit}
            toggleEnable={toggleEnable}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
