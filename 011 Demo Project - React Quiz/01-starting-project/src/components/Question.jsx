import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question() {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={15000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        key={activeQuestionIndex}
        answerState={answerState}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
