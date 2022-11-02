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
  const handleReload = () => {
    setCountSoal(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <main className="h-screen flex justify-center items-center bg-blue-300">
      <section className="shadow-lg bg-slate-800 rounded-md lg:w-1/3 max-md:max-w-sm max-sm:w-11/12 text-white w-96 px-7 py-4">
        {showScore ? (
          <section className="flex flex-col items-center">
            <h1 className="text-center font-bold text-xl">
              Skormu {score} Dari {question.length} Pertanyaan
            </h1>
            <button className="bg-blue-600 px-3 hover:bg-blue-700 transition-all py-1 font-semibold rounded-md mt-5 text-xl " onClick={handleReload}>
              Coba lagi
            </button>
          </section>
        ) : (
          <section>
            <div>
              <h1 className="font-bold text-center text-2xl">Kuis Pengetahuan Umum</h1>
            </div>
            <div>
              <p className="text-center mt-1 text-base">
                Kamu menjawab {countSoal + 1} Dari {question.length} Pertanyaan
              </p>
            </div>
            <section>
              <div className="font-semibold text-lg mt-3">{question[countSoal].soal}</div>
              <div className="flex flex-col gap-2 mt-2">
                {question[countSoal].jawab.map((jawaban, i) => {
                  return (
                    <button key={i} className="flex text-base font-semibold rounded-md border border-orange-500 hover:bg-orange-500 transition-all px-3 py-1" onClick={() => handleAnswer(jawaban.isCorrect)}>
                      {jawaban.jawaban}
                    </button>
                  );
                })}
              </div>
            </section>
          </section>
        )}
        <h1 className="text-center mt-2">
          Made by {""}
          <a className="font-bold" href="https://www.instagram.com/hmdnubaidillah" target="_blank" rel="noopener noreferrer">
            hmdnubaidillah
          </a>
        </h1>
      </section>
    </main>
  );
};

export default App;
