(() => {
  const START_BTN = document.getElementById("start_btn");
  const FIRST_PG = document.getElementById("first_pg");
  const EXIT_BTN = document.getElementById("exit");
  const INFO_BOX = document.getElementById("info_box");
  const CONTINUE_BTN = document.getElementById("continue");
  const QUIZ_BOX = document.getElementById("quiz_box");

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
  });
})();

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

// const question = document.querySelector('.question');
// const option1 = document.querySelector('#option1');
// const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');
// const next = document.querySelector('.next');

// const loadQuestion = () => {
//     question.innerText = quizDB[0].question;
// }
// loadQuestion();
