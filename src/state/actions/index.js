export const addQuestion = (question) => ({
  type: "ADD_QUESTION",
  payload: {question}
})

export const updateQuestionStatus = (id, status) => ({
  type: "UPDATE_QUESTION_STATUS",
  payload: {id, status}
})

export const deleteQuestion = (id) => ({
  type: "DELETE_QUESTION",
  payload: {id}
})