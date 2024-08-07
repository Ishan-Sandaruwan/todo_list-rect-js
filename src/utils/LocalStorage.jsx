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
    window.localStorage.setItem(key, JSON.stringify(value));
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

export {save, remove, get};

//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const data = window.localStorage.getItem(key);
//       return item ? JSON.parse(data) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });
