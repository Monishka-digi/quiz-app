export const answerMaker = () => {
    const ANSWERS = document.querySelectorAll("ul.answers li input");
    [...ANSWERS].map((radio) =>
      radio.addEventListener("change", (e) => {
        userAnswers[currentQuestionIndex] = e.target.id;
      })
    );
  }