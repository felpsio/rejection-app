export const questionsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case "ADD_QUESTION":
      return [
        ...state,
        payload.question,
      ]
    case "UPDATE_QUESTION_STATUS":
      return state.map(
        (item) => item.id === payload.id
          ? ({
            ...item,
            status: payload.status
          })
          : item
      )
    case "DELETE_QUESTION":
      return state.filter(
        (item) => item.id !== payload.id
      )
    default:
      return state
  }
}