const personReducer = (state = {}, {type, payload}) => {
  if(type === "UPDATE_NAME") {
    return {
      name: payload
    }
  }
  return state;
}

export default personReducer;