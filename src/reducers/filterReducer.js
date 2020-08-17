function filter(state = "name", action) {
  switch (action.type) {
    case "FILTER_NAME":
      return "name";

    case "FILTER_AGE":
      return "age";

    default:
      return state;
  }
}

export default filter;
