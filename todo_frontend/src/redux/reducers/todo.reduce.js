const initialState = {
  todo: {},
  errors: [],
  error: "",
  todos: [],
  loading: true,
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case "POST_TODO":
      return {
        ...state,
        loading: true,
      };
    case "POST_TODO_SUCCESSFUL":
      return {
        ...state,
        loading: false,
      };
    case "POST_TODO_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case "UPDATE_TODO":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_TODO_SUCCESSFUL":
      return {
        ...state,
        loading: false,
      };
    case "UPDATE_TODO_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_TODO_SUCCESSFUL":
      return {
        ...state,
        loading: false,
      };
    case "DELETE_TODO_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case "FETCH_TODOS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TODOS_SUCCESSFUL":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case "FETCH_TODOS_FAIL":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
}
