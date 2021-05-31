const Todo = ({
  edit,
  deleteTodo,
  toggleIsCompleted,
  id,
  description,
  isCompleted,
  name,
  time,
  priority,
}) => {
  //const [color, setColor] = useState();

  const colorPriority = (priority) => {
    switch (priority) {
      case "low":
        return "bg-green-500";

      case "medium":
        return "bg-yellow-300";

      case "hight":
        return "bg-red-300";

      case "red alert":
        return "bg-red-700";

      default:
        return "bg-green-500 ";
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    edit({ id, name, description, isCompleted });
  };

  const handleIsCompleted = (e) => {
    e.preventDefault();
    toggleIsCompleted(id);
  };

  return (
    <>
      <div class="flex flex-col items-center justify-center mt-4 p-4 ">
        <div
          class={`relative  py-2 px-6 rounded-3xl w-64 my-4 shadow-xl ${
            isCompleted ? "bg-gray-300" : "border-l-8 border-green-400 "
          } `}
        >
          {!isCompleted && (
            <div
              class={`flex items-center text-white absolute rounded-full py-4 px-4 shadow-xl ${colorPriority(
                priority
              )} right-4 -top-6`}
            >
              {priority}
            </div>
          )}
          <div class="mt-8">
            <h3 class="text-xl my-2">{name}</h3>
            <div class="flex space-x-2 text-sm">
              😒
              <p>{description}</p>
            </div>
            <div class="flex space-x-2 text-sm my-3">
              😒
              <p>{time}</p>
            </div>
            <div class="border-t-2"></div>

            <div class="flex justify-between my-2">
              {isCompleted ? <p>completed</p> : <p> no completed </p>}
              <div class="font-semibold gap-2">
                <button onClick={handleIsCompleted}>
                  {" "}
                  {isCompleted ? "➕" : "✔"}{" "}
                </button>

                {!isCompleted && (
                  <>
                    <button onClick={handleEdit}> 🖊 </button>
                    <button onClick={handleDelete}> 🗑 </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
