const Todo = ({
  edit,
  deleteTodo,
  toggleEnable,
  id,
  description,
  enable,
  name,
  time,
  priority,
}) => {
  console.log(enable);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit");
    edit({ id, name, description, enable });
  };

  const handleEnable = (e) => {
    e.preventDefault();
    toggleEnable(id);
    console.log(enable);
  };
  return (
    <>
      <div class="flex flex-col items-center justify-center mt-4 p-4 ">
        <div class="relative bg-white py-2 px-6 rounded-3xl w-64 my-4 shadow-xl border-l-8 border-green-400">
          <div class="flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-purple-500 right-4 -top-6">
            {priority}
          </div>
          <div class="mt-8">
            <p>{id}</p>

            <h3 class="text-xl my-2">{name}</h3>
            <div class="flex space-x-2 text-sm">
              😒
              <p>{description}</p>
            </div>
            <div class="flex space-x-2 text-sm my-3">
              😒
              <p>{time}</p>
              {enable ? <p>enable </p> : <p>disable</p>}
            </div>
            <div class="border-t-2"></div>

            <div class="flex justify-end">
              <div class="my-2">
                <div class="font-semibold gap-2">
                  <button onClick={handleEnable}> ✔ </button>
                  <button onClick={handleEdit}> 🖊 </button>
                  <button onClick={handleDelete}> 🗑 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
