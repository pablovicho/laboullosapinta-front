const reducer = (globalState, action) => {
    switch (action.type) {

      case "GET_ABOUT":
        return {
          ...globalState,
          about: action.payload,
        };

      default:
        return globalState;
    }
  };

  export default reducer;