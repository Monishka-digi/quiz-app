import { quizDB } from "./helper/data.js"
import { answerMaker } from "./helper/answerMarker.js";

(() => {
  const START_BTN = document.getElementById("start_btn");
  const FIRST_PG = document.getElementById("first_pg");
  const EXIT_BTN = document.getElementById("exit");
  const INFO_BOX = document.getElementById("info_box");
  const CONTINUE_BTN = document.getElementById("continue");
  const QUIZ_BOX = document.getElementById("quiz_box");
  const QUESTION_WRAPPER = document.getElementById("question-wrapper");
  const PREVIOUS_BTN = document.getElementById("previous");
  const NEXT_BTN = document.getElementById("next");
  const TIMER = document.getElementById("timer");
  const SUBMIT_BTN = document.getElementById("submit");

  let currentQuestionIndex = 0;
  let timeInterVal;
  let userAnswers = [];

  const setTimer = (timer = 15) => {
    clearInterval(timeInterVal);
    TIMER.innerText = `${timer} sec`;
    timeInterVal = setInterval(() => {
      timer = timer - 1;
      TIMER.innerText = `${timer} sec`;
      if (timer === 0) {
        clearInterval(timeInterVal);
        if (currentQuestionIndex < 0 || currentQuestionIndex >= 9) {
          QUESTION_WRAPPER.innerHTML = `Test End !!`;
          SUBMIT_BTN.classList.remove("d-none");
          return false;
        }
        timer = 15;
        currentQuestionIndex = currentQuestionIndex + 1;
        QUESTION_WRAPPER.innerHTML = nextQuestion();
        answerMaker()
      }
    }, 1000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === 0) {
      PREVIOUS_BTN.classList.add("d-none");
    } else {
      // PREVIOUS_BTN.classList.remove("d-none");
    }
    if (currentQuestionIndex >= 9) {
      NEXT_BTN.classList.add("d-none");
    } else {
      NEXT_BTN.classList.remove("d-none");
    }

    if (currentQuestionIndex === 10) {
      QUESTION_WRAPPER.innerHTML = `Test End !!`;
      SUBMIT_BTN.classList.remove("d-none");
      return;
    }
    const currentQuestion = quizDB[currentQuestionIndex];
    const { question, a, b, c, d } = currentQuestion;

    const newQuestion = `
    <h3 class="question">${question}</h3>
    <ul class="answers">
      <li>
        <input type="radio" name="answer" id="a" class="answer"/>
        <label for="a" id="option1">${a}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="b" class="answer" />
        <label for="b" id="option2">${b}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="c" class="answer" />
        <label for="c" id="option3">${c}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="d" class="answer" />
        <label for="d" id="option4">${d}</label>
      </li>
    </ul>   
  `;
    setTimer(15);
    return newQuestion;
  };

  // Array to store the user's selected answers

  const checkAnswer = () => {
    const answerElements = document.querySelectorAll(".answer");
    let userSelectedAnswer = null;

    answerElements.forEach((element) => {
      if (element.checked) {
        userSelectedAnswer = parseInt(element.id.replace("ans", ""));
      }
    });

    userAnswers[currentQuestionIndex] = userSelectedAnswer;
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizDB.length; i++) {
      if (userAnswers[i] === quizDB[i].correct) {
        score++;
      }
    }
    return score;
  };

  const showResult = () => {
    QUESTION_WRAPPER.innerHTML = `
      <h3>Quiz Finished!</h3>
      <strong>Your Score: ${calculateScore()} out of ${quizDB.length}</strong>
      <p>Correct Answers:</p>
      <ul>
        ${quizDB
          .map((question, index) => {
            return `<li>${question.question} --
              <b>${question[question.correct]}</b>
            </li>`;
          })
          .join("")}
      </ul>
    `;
    NEXT_BTN.classList.add("d-none");
    // PREVIOUS_BTN.classList.add("d-none");
    SUBMIT_BTN.classList.add("d-none");
  };

  START_BTN.addEventListener("click", () => {
    // FIRST_PG.classList.add("d-none")
    FIRST_PG.classList.toggle("d-none");
    INFO_BOX.classList.toggle("d-none");
  });

  EXIT_BTN.addEventListener("click", () => {
    // FIRST_PG.classList.remove("d-none")
    FIRST_PG.classList.toggle("d-none");
    INFO_BOX.classList.toggle("d-none");
  });

  CONTINUE_BTN.addEventListener("click", () => {
    INFO_BOX.classList.toggle("d-none");
    QUIZ_BOX.classList.toggle("d-none");
    QUESTION_WRAPPER.innerHTML = nextQuestion();
    answerMaker();
  });

  // PREVIOUS_BTN.addEventListener("click", () => {
  //   currentQuestionIndex = currentQuestionIndex - 1;
  //   if (currentQuestionIndex < 0 || currentQuestionIndex > 9) {
  //     QUESTION_WRAPPER.innerHTML = `Test End !!`;
  //     SUBMIT_BTN.classList.remove("d-none");
  //     return false;
  //   }
  //   QUESTION_WRAPPER.innerHTML = nextQuestion();
  // });

  NEXT_BTN.addEventListener("click", () => {
    if (currentQuestionIndex < 0 || currentQuestionIndex > 9) {
      QUESTION_WRAPPER.innerHTML = `Test End !!`;
      SUBMIT_BTN.classList.remove("d-none");
      return false;
    }
    currentQuestionIndex = currentQuestionIndex + 1;
    QUESTION_WRAPPER.innerHTML = nextQuestion();
    answerMaker();
  });

  SUBMIT_BTN.addEventListener("click", () => {
    checkAnswer();
    showResult();
  });
})();
