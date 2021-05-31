import { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Modal from "./components/Modal";

function App() {
  //initital state for todos
  const initial = [
    {
      id: 1,
      name: "comer ",
      description: "hay que almorzar",
      time: "",
      priority: "low",
      isCompleted: false,
    },
    {
      id: 2,
      name: "estudiar",
      description: "hay que estudiar vaguito ",
      time: "",
      priority: "red alert",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initial);
  const [modalOption, setModalOption] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);
  const [countLessTask, setCountLessTask] = useState(0);

  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    time: "",
    priority: "low",
    isCompleted: false,
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

  //change task status
  const toggleIsCompleted = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
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

  //count completed task todo

  const checkIsCompleted = todos.filter((task) => task.isCompleted === true);

  useEffect(() => {
    setCountLessTask(checkIsCompleted.length);
  }, [todos]);

  return (
    <div className="App ">
      <div className="flex text-white justify-center items-center gap-4 w-full h-24 bg-black">
        {!modalOption && (
          <div className="flex gap-4 items-center">
            <p> new task</p>

            <button
              onClick={openModal}
              className=" h-12 w-12 rounded-full bg-green-300"
            >
              ➕
            </button>
          </div>
        )}

        <p>
          {" "}
          completed tasks: {countLessTask} of {todos.length}{" "}
        </p>
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
          toggleIsCompleted={toggleIsCompleted}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;
