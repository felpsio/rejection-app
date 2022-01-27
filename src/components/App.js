import React, {useState} from 'react';

const STATUS = [
  "Accepted",
  "Rejected",
  "Unanswered"
]

const App = ({
  questions,
  score,
  addQuestion,
  updateQuestionStatus,
  deleteQuestion,
}) => {
  const [askee, setAskee] = useState("");
  const [question, setQuestion] = useState("")

  const onAddQuestion = (status) => {
    if (askee.length < 2 || question.length < 10) return;

    const newQuestion = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      question: question,
      askee: askee,
      status: status
    }

    addQuestion(newQuestion);
    setAskee("")
    setQuestion("")
  }


  return (
    <div>
      <h1>Let's get rejected! :D</h1>

      <h2>
        Score: {score}
      </h2>

      <h2>
        Rejection attempt:
      </h2>
      <div className='long-input'>
        <label>Question:</label>
        <input value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div className="short-input">
        <label>Askee:</label>
        <input value={askee} onChange={(e) => setAskee(e.target.value)} />
      </div>
      <div className="actions">
        {
          STATUS.map(
            (item) => <button
              key={item}
              className={`action-${item}`}
              onClick={() => onAddQuestion(item)}
            >
              {item}
            </button>
          )
        }
      </div>

      <div className="divider" />

      <div className="history">
        <h3>History:</h3>
        {
          questions.length === 0 &&
            <div>no questions yet</div>
        }
        {
          questions.map(
            (question) => <div key={question.id} className="question">
              <div className="action-delete" onClick={() => deleteQuestion(question.id)}>
                delete
              </div>
              <div className="question-text">
                question: <strong>{question.question}</strong>
              </div>
              <div className="question-askee">
                askee: <strong>{question.askee}</strong>
              </div>
              <div className="question-status">
                {
                  STATUS.map(
                    (status) => <div key={status}>
                      <div className={`status-${status} ${status === question.status ? "" : "disabled"}`}
                        onClick={() => updateQuestionStatus(question.id, status)}
                      >
                        {status}
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App