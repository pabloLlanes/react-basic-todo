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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log();
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
    addTodo({ ...task, id: nanoid(), time: getDate() });
    //setTask({});
    setTask({ name: "", description: "" });

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
          <h2 className="text-xl text-center">
            {" "}
            {statusEdit ? "EDIT" : "ADD"}{" "}
          </h2>
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

            <div className="flex justify-end text-white">
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
