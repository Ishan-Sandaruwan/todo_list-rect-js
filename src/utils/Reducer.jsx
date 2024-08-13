import { createContext, useReducer } from "react";

const initialState = {
  name: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_name":
      return { ...state, name: action.payload };

    case "add_todo":
      return { ...state, todos: [...state.todos, action.payload] };

    case "remove_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title !== action.payload),
      };

    case "update_todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.title === action.payload.title
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };

    case "remove_all":
      return { ...initialState };

    default:
      return state;
  }
};

const Store = createContext();

function Reducer({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

export { Reducer, Store };
