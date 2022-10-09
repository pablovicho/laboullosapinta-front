const reducer = (globalState = [], action) => {
    switch (action.type) {

      case "GET_ARTICLE":
        return {
          ...globalState,
          article: action.payload,
        };

        case "GET_ARTICLES_DATA":
        return {
          ...globalState,
          articlesData: action.payload,
        };

      default:
        return globalState;
    }
  };

  export default reducer;