import { useState } from "react";
import { nanoid } from "nanoid";
import { getDate, validateForm } from "../utils/utils";

const Modal = ({
  statusEdit,
  setStatusEdit,
  editTodo,
  setModalOption,
  addTodo,
  task,
  setTask,
}) => {
  const [formErrors, setFormErrors] = useState(false);

  function clearInputs() {
    setTask({ name: "", description: "", priority: "" });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log();
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(task);

    if (errors.length > 0) {
      setFormErrors(true);
      return;
    }

    addTodo({ ...task, id: nanoid(), time: getDate() });

    clearInputs();
    setModalOption(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(task);

    if (errors.length > 0) {
      setFormErrors(true);
      return;
    }
    setTask({ ...task, name: task.name });

    editTodo(task);

    clearInputs();
    setModalOption(false);
    setStatusEdit(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    clearInputs();
    setModalOption(false);
    setStatusEdit(false);
  };
  return (
    <>
      {" "}
      <div class="flex flex-col p-4 items-center justify-center  select-none">
        <div class="bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-8  border-purple-600">
          <h2 className="bg-green-500 py-2 px-4 rounded-2xl text-center text-white">
            {" "}
            {statusEdit ? `EDIT 🖊 id: ${task.id}  ` : "ADD ➕"}{" "}
          </h2>
          {formErrors && (
            <h5 className="bg-red-400 p-2 rounded-xl text-center">
              {" "}
              complete form{" "}
            </h5>
          )}

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
            <div class=" w-full  mb-3">
              <label> priority </label>

              <select
                className=" rounded-lg  border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                onChange={handleInputChange}
                name="priority"
                value={task.priority}
              >
                <option value="" className="bg-green-500 text-white">
                  --
                </option>
                <option value="low" className="bg-green-500 text-white">
                  1️⃣ low
                </option>
                <option value="medium" className="bg-yellow-300 ">
                  2️⃣ medium
                </option>
                <option value="hight" className="bg-red-300">
                  3️⃣ hight
                </option>
                <option value="red alert" className="bg-red-700 text-white">
                  4️⃣ red alert
                </option>
              </select>
            </div>

            <div className="flex justify-between text-white">
              {/*  <p>{formErrors}</p> */}
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-full w-24 h-12 mt-4 bg-red-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full w-24 h-12 mt-4 bg-purple-600"
              >
                {" "}
                {statusEdit ? "edit" : "add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
