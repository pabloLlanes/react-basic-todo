import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Modal = ({
  statusEdit,
  setStatusEdit,
  editTodo,
  setModalOption,
  addTodo,
  task,
  setTask,
}) => {
  const [state, setstate] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTask({
      ...task,
      [name]: value,
    });
  };

  function getDate() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();

    return date;
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();

    //const dateTime = getDate();
    addTodo({ ...task, id: nanoid(), time: getDate(), enable: true });
    //setTask({});
    setModalOption(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    setTask({ ...task, name: task.name });
    editTodo(task);
    setTask({ name: "", description: "" });
    setModalOption(false);
    setStatusEdit(false);
  };

  return (
    <>
      {" "}
      <div class="flex flex-col p-4 items-center justify-center  select-none">
        <div class="bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-8  border-purple-600">
          {statusEdit ? <h2> EDIT</h2> : <h2>ADD </h2>}

          <form onSubmit={statusEdit ? handleEditSubmit : handleAddSubmit}>
            <div class=" w-full  mb-3">
              <label>name</label>
              <input
                type="text"
                name="name"
                className="my-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="name"
                onChange={handleInputChange}
                value={task.name}
              />
            </div>

            <div class=" w-full  mb-3">
              <label> description </label>

              <input
                type="text"
                name="description"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="description"
                onChange={handleInputChange}
                value={task.description}
              />
            </div>
            {statusEdit ? (
              <button type="submit"> Editar</button>
            ) : (
              <button type="submit"> Agregar</button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
