import './App.css';

function WelcomeBack() {
  return <p>Welcome back, valued customer!</p>;
}

function EncouragingWords() {
  return <p>Believe you can and you’re halfway there.</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

function App() {
  return (
    <>
      <WelcomeBack />
      <WelcomeBack />
      <EncouragingWords />
      <DailyTip />
    </>
  );
}
export default App;