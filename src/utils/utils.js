import { nanoid } from "nanoid";

export const freeVersion = 10;

export const initial = [
  {
    id: nanoid(),
    name: "volver a casa ",
    description: "tenes que estar en tu casa antes de las 20hs arg campeón",
    time: getDate(),
    priority: "red alert",
    isCompleted: true,
  },
  {
    id: nanoid(),
    name: "Terminar este ToDo",
    description: "agregar test y otras funcionalidades",
    time: getDate(),
    priority: "low",
    isCompleted: false,
  },
  {
    id: nanoid(),
    name: "Guardar los datos de este ToDo",
    description:
      "preservar los datos en db o, minimo en localStorage Guardar los datos de este ToDoGuardar los datos de este ToDoGuardar los datos de este ToDoGuardar los datos de este ToDoGuardar los datos de este ToDoGuardar los datos de este ToDo",
    time: getDate(),
    priority: "medium",
    isCompleted: false,
  },
];

export function getDate() {
  const today = new Date();
  const date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

  return date;
}
export function validateForm(obj) {
  const errors = [];
  if (obj.name.length < 3 || obj.name.length > 40) {
    errors.push("min:3, max:40");
  }
  if (obj.description.length > 300) {
    errors.push("max:300");
  }
  if (!obj.name.trim()) {
    errors.push("name is required");
  }
  if (!obj.priority.trim()) {
    errors.push("priority is required");
  }

  return errors;
}

export const colorPriority = (priority) => {
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
