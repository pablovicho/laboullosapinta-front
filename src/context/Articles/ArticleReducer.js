const reducer = (globalState, action) => {
    switch (action.type) {

      case "GET_ARTICLE":
        return {
          ...globalState,
          about: action.payload,
        };

        case "GET_ARTICLES":
        return {
          ...globalState,
          about: action.payload,
        };

      default:
        return globalState;
    }
  };

  export default reducer;