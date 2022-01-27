import { connect } from "react-redux";
import App from '../components/App';
import {scoreSelector, questionsSelector} from "../state/selectors"
import {addQuestion, deleteQuestion, updateQuestionStatus} from "../state/actions"

const mapStateToProps = (state, props) => {
  return {
    questions: questionsSelector(state),
    score: scoreSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => dispatch(addQuestion(question)),
    updateQuestionStatus: (id, status) => dispatch(updateQuestionStatus(id, status)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id))
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(App)