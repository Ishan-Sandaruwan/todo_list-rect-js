const key = "data";
const initialValue = {
  name: "",
  todos: [],
};

const get = () => {
  try {
    const data = window.localStorage.getItem(key);
    if (data === null) {
      return initialValue;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to parse localStorage data:", error);
    return initialValue;
  }
};

const save = (value) => {
  try {
    let data = get();
    if (typeof value !== "string") {
      data.todos.push(value);
    } else {
      data.name = value;
    }
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to set localStorage data:", error);
  }
};

const remove = () => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove Data", error);
  }
};

const deleteTodo = (value) => {
  try {
    let data = get();
    let updatedData = data.todos.filter((todo) => todo.title !== value);
    window.localStorage.setItem(
      key,
      JSON.stringify({ name: data.name, todos: updatedData })
    );
  } catch (error) {
    console.error("Failed to remove Data", error);
  }
};

const completeTodo = (value) => {
  try {
    let data = get();
    data.todos.forEach(todo => {
      if(todo.title === value){
        todo.completed = true;
      }
    });
    window.localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  } catch (error) {
    console.error("Failed to remove Data", error);
  }
};



export { save, remove, get, deleteTodo,completeTodo };

//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const data = window.localStorage.getItem(key);
//       return item ? JSON.parse(data) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });
