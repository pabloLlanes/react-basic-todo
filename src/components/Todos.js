import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, edit, toggleIsCompleted }) => {
  return (
    <div>
      <div class="todos-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            edit={edit}
            toggleIsCompleted={toggleIsCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
