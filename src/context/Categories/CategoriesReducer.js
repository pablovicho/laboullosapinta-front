const reducer = (globalState, action) => {
    switch (action.type) {

      case "GET_CATEGORIES":
        return {
          ...globalState,
          categories: action.payload,
        };

      case "GET_CATEGORY":
        return {
          ...globalState,
          singleCategory: action.payload,
        };

      default:
        return globalState;
    }
  };

  export default reducer;