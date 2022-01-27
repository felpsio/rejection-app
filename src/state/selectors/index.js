const getQuestionScore = ({status}) => status === "Accepted"
  ? 1
  : status === "Rejected"
    ? 10
    : 0

export const scoreSelector = (state) => state.questions.reduce(
  (acc, item) => acc + getQuestionScore(item), 0
);

export const questionsSelector = (state) => state.questions;