(() => {
  const quizDB = [
    {
      question: "Q1. Javascript is a _____________ language",
      a: "Object-Oriented",
      b: "Object-Based",
      c: "Procedural",
      d: "None of the Above",
    },
    {
      question:
        "Q2. Which of the following methods is used to access HTML elements using Javascript?",
      a: "getElementbyId()",
      b: "getElementsbyClassName()",
      c: "Both A & B",
      d: "None of the Above",
    },
    {
      question:
        "Q3. Upon encountering empty statements, what does the Javascript Interpreter do?",
      a: "Throws an error",
      b: "Ignores the statement",
      c: "Gives Warning",
      d: "None of the Above",
    },
    {
      question:
        "Q4. Which of the following methods can be used to display data in some form using Javascript?",
      a: "document.write()",
      b: "console.log()",
      c: "window.alert()",
      d: "All of the Above",
    },
    {
      question:
        "Q5. What keyword is used to check whether a given property is valid or not?",
      a: "in",
      b: "is in",
      c: "exists",
      d: "lies",
    },
    {
      question:
        "Q6. When an operators value is NULL, the typeof returned by the unary operator is:",
      a: "Object",
      b: "Boolean",
      c: "Undefined",
      d: "Integer",
    },
    {
      question:
        "Q7. Which function is used to serialize an object into a JSON string in Javascript?",
      a: "stringify()",
      b: "parse()",
      c: "convert()",
      d: "None of the Above",
    },
    {
      question: "Q8. The 3 basic object attributes in Javascript are:",
      a: "Class, prototype, object's parameters",
      b: "Class, prototype, object's extensible flag",
      c: "Class, parameters, object's parameters",
      d: "Class, Native object, Interfaces and Object's extensible flag",
    },
    {
      question: "Q9. How to stop an interval timer in Javascript?",
      a: "clearInterval",
      b: "clearTimer",
      c: "intervalOver",
      d: "None of the Above",
    },
    {
      question: "Q10. Which object in Javascript doesn't have a prototype?",
      a: "Base Object",
      b: "All objects have a prototype",
      c: "None of the ojects have a prototype",
      d: "None of the Above",
    },
  ];

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

  let currentQuestionIndex = 0;
  let timeInterVal;

  const setTimer = (timer = 3) => {
    clearInterval(timeInterVal);
    TIMER.innerText = `${timer} sec`;
    timeInterVal = setInterval(() => {
      timer = timer - 1;
      TIMER.innerText = `${timer} sec`;
      if (timer === 0) {
        clearInterval(timeInterVal);
        if (currentQuestionIndex < 0 || currentQuestionIndex >= 9) {
          QUESTION_WRAPPER.innerHTML = `Test End !!`;
          return false;
        }
        timer = 3;
        currentQuestionIndex = currentQuestionIndex + 1;
        QUESTION_WRAPPER.innerHTML = nextQuestion();
        // setTimer(10)
      }
    }, 1000);
  };

  const nextQuestion = () => {
    if(currentQuestionIndex === 0) {
      PREVIOUS_BTN.classList.add('d-none')
    } else {
      PREVIOUS_BTN.classList.remove('d-none')
    }
    if(currentQuestionIndex >= 9) {
      NEXT_BTN.classList.add('d-none')
    } else {
      NEXT_BTN.classList.remove('d-none')
    }
    

    if (currentQuestionIndex === 10) {
      QUESTION_WRAPPER.innerHTML = `Test End !!`;
      return;
    }
    const currentQuestion = quizDB[currentQuestionIndex];
    const { question, a, b, c, d } = currentQuestion;

    const newQuestion = `
    <h3 class="question">${question}</h3>
    <ul>
      <li>
        <input type="radio" name="answer" id="ans1" class="answer" />
        <label for="ans1" id="option1">${a}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="ans2" class="answer" />
        <label for="ans2" id="option2">${b}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="ans3" class="answer" />
        <label for="ans3" id="option3">${c}</label>
      </li>
      <li>
        <input type="radio" name="answer" id="ans4" class="answer" />
        <label for="ans4" id="option4">${d}</label>
      </li>
    </ul>   
  `;
    setTimer(3);
    return newQuestion;
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
  });

  PREVIOUS_BTN.addEventListener("click", () => {
    currentQuestionIndex = currentQuestionIndex - 1;
    if (currentQuestionIndex < 0 || currentQuestionIndex > 9) {
      QUESTION_WRAPPER.innerHTML = `Test End !!`;
      return false;
    }
    QUESTION_WRAPPER.innerHTML = nextQuestion();
  });

  NEXT_BTN.addEventListener("click", () => {
    if (currentQuestionIndex < 0 || currentQuestionIndex > 9) {
      QUESTION_WRAPPER.innerHTML = `Test End !!`;
      return false;
    }
    currentQuestionIndex = currentQuestionIndex + 1;
    QUESTION_WRAPPER.innerHTML = nextQuestion();
  });
})();
