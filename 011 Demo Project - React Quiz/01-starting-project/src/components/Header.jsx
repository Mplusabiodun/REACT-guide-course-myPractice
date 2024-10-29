import imageLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={imageLogo} alt="quiz logo" />
      <h1>ReacTQuiz</h1>
    </header>
  );
}
