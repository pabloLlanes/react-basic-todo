import { colorPriority } from "../utils/utils";

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
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    edit({ id, name, description, priority, isCompleted });
  };

  const handleIsCompleted = (e) => {
    e.preventDefault();
    toggleIsCompleted(id);
  };

  return (
    <>
      <div class="flex flex-col max-w-lg items-center justify-center mt-4 py-4">
        <div
          class={`relative  py-2 px-6 rounded-3xl  my-4 shadow-xl ${
            isCompleted
              ? "bg-green-100"
              : "border-l-8 border-green-400 bg-white"
          } `}
        >
          {!isCompleted && (
            <div
              class={`flex items-center  text-white absolute rounded-full py-4 px-4 shadow-xl ${colorPriority(
                priority
              )} right-4 -top-6`}
            >
              {priority}
            </div>
          )}
          <div class="mt-8">
            <h3 class="text-xl my-2">{name}</h3>

            {!isCompleted && (
              <div class="flex flex-col  text-sm">
                <p className="ml-4">{description}</p>
                <p className="py-4 text-xs text-bold">{time}</p>
              </div>
            )}
            <div class="border-t-2"></div>

            <div class="flex justify-between items-center gap-4 my-2">
              <p>{isCompleted ? "🏆completed🏅" : "😴no completed 😟"}</p>

              <div class="font-semibold ">
                <button
                  className="rounded-full py-2 px-2 shadow-xl bg-white"
                  onClick={handleIsCompleted}
                >
                  {" "}
                  {isCompleted ? "➕" : "✔"}{" "}
                </button>

                {!isCompleted && (
                  <>
                    <button
                      className="rounded-full py-2 px-2 mx-2 shadow-xl"
                      onClick={handleEdit}
                    >
                      {" "}
                      🖊{" "}
                    </button>
                    <button
                      className="rounded-full py-2 px-2 shadow-xl"
                      onClick={handleDelete}
                    >
                      {" "}
                      🗑{" "}
                    </button>
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
