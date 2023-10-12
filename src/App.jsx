import { useState } from "react";
import data from "./data";
import FAQ from "./FAQ";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <FAQ questions={questions} />
    </main>
  );
}

export default App;
