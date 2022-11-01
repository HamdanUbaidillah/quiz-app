import { useState } from "react";
import question from "./questions.json";

const App = () => {
  const [countSoal, setCountSoal] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = countSoal + 1;
    if (nextQuestion < question.length) {
      setCountSoal(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center bg-blue-300">
      <section className="bg-slate-800 rounded-md text-white w-96 px-7 py-4">
        {showScore ? (
          <section>
            <h1 className="text-center font-bold text-lg">
              You Scored {score} out of {question.length} questions
            </h1>
          </section>
        ) : (
          <section>
            <div>
              <h1 className="font-bold text-center text-3xl">React App Quiz</h1>
            </div>
            <div>
              <p className="text-center mt-1 text-base">
                You Answered {countSoal + 1}/{question.length} Questions
              </p>
            </div>
            <section>
              <div className="font-semibold text-lg mt-3">{question[countSoal].soal}</div>
              <div className="flex flex-col gap-2 mt-2">
                {question[countSoal].jawab.map((jawaban) => {
                  return (
                    <button className="flex text-base font-semibold rounded-md border border-orange-500 hover:bg-orange-500 transition-all px-3 py-1" onClick={() => handleAnswer(jawaban.isCorrect)}>
                      {jawaban.jawaban}
                    </button>
                  );
                })}
              </div>
            </section>
          </section>
        )}
      </section>
    </main>
  );
};

export default App;
