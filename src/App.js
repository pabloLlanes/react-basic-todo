import { useState } from "react";
import Todos from "./components/Todos";
import Modal from "./components/Modal";

function App() {
  //initital state for todos
  const initial = [
    {
      id: 1,
      name: "comer ",
      description: "a comerla toda",
      time: "",
      priority: "5",
      enable: true,
    },
    {
      id: 2,
      name: "volar",
      description: "vuela vuela  ",
      time: "",
      priority: "3",
      enable: true,
    },
    {
      id: 3,
      name: "correr",
      description: "running..........",
      time: "",
      priority: "1",
      enable: true,
    },
  ];
  const [todos, setTodos] = useState(initial);
  const [modalOption, setModalOption] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    time: "",
    priority: "",
    enable: true,
  });
  //open modal
  const openModal = () => {
    setModalOption(true);
  };

  //add todo
  const addTodo = (obj) => {
    if (todos.length < 10) {
      setTodos([...todos, obj]);
    } else {
      alert("free version permit 10 todos");
    }
  };

  //edit modal
  const edit = (obj) => {
    setStatusEdit(true);
    openModal();
    setTask(obj);
  };

  const toggleEnable = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.enable = !todo.enable;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //edit todo
  const editTodo = (obj) => {
    const newTodos = todos.map((todo) =>
      todo.id === obj.id ? { ...obj } : todo
    );
    setTodos(newTodos);
  };

  //delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App ">
      <div className="flex text-white justify-center items-center gap-4 w-full h-24 bg-black">
        <p> new task</p>

        {!modalOption && (
          <button
            onClick={openModal}
            className=" h-12 w-12 rounded-full bg-green-300"
          >
            ➕
          </button>
        )}

        <p>task: {todos.length}</p>
      </div>

      {modalOption ? (
        <Modal
          setModalOption={setModalOption}
          addTodo={addTodo}
          editTodo={editTodo}
          setStatusEdit={setStatusEdit}
          statusEdit={statusEdit}
          task={task}
          setTask={setTask}
        />
      ) : (
        <Todos
          todos={todos}
          setModalOption={setModalOption}
          edit={edit}
          toggleEnable={toggleEnable}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;
