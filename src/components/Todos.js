import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, edit, toggleIsCompleted }) => {
  console.log(todos.length);
  return (
    <div class="flex flex-wrap  px-4 gap-4 items-center justify-center select-none">
      {todos.length < 1 && (
        <div class="flex flex-col max-w-lg rounded-2xl py-16 px-24 mt-8 sm:mt-16 bg-red-200">
          <h3 className="text-xl"> no tasks</h3>
        </div>
      )}

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
  );
};

export default Todos;
