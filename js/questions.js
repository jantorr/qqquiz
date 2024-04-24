//questions.html
let categoryName = document.getElementById("category-name");
let category2 = sessionStorage.getItem("category");
categoryName.textContent = category2;

function categoryLink(category) {
  sessionStorage.setItem("category", category);
}

let questions = [
//Technology questions 1 to 10
  {
    id: 1,
    question: "What is the Full Form Of RAM?",
    answer:"Random Access Memory",
    options: [
        "Run Accept Memory",
        "Random All Memory",
        "Random Access Memory",
        "None of these"
    ]   
  },
  {
    id: 2,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the Full-Form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 7,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 8,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 9,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"
    ]
  },
//Geography questions 11 to 20
  {
    id: 11,
    question: "What is the capital of Finland?",
    answer:"Random Access Memory",
    options: [
        "Run Accept Memory",
        "Random All Memory",
        "Random Access Memory",
        "None of these"
    ]   
  },
  {
    id: 12,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 13,
    question: "What is the Full-Form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 14,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 15,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 16,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 17,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 18,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 19,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 20,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"
    ]
  },
  //Physics questions 21 to 30
  {
    id: 21,
    question: "What is the capital of Finland?",
    answer:"Random Access Memory",
    options: [
        "Run Accept Memory",
        "Random All Memory",
        "Random Access Memory",
        "None of these"
    ]   
  },
  {
    id: 22,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 23,
    question: "What is the Full-Form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 24,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 25,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 26,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 27,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 28,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 29,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 30,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"
    ]
  },
  //Entertainment questions 31 to 40
  {
    id: 31,
    question: "What is the capital of Finland?",
    answer:"Random Access Memory",
    options: [
        "Run Accept Memory",
        "Random All Memory",
        "Random Access Memory",
        "None of these"
    ]   
  },
  {
    id: 32,
    question: "What is the Full-Form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 33,
    question: "What is the Full-Form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 34,
    question: "'DB' in computer means?",
    answer: "DataBase",
    options: [
      "Double Byte",
      "Data Block",
      "DataBase",
      "None of these"
    ]
  },
  {
    id: 35,
    question: "What is FMD?",
    answer: "Fluorescent Multi-Layer Disc",
    options: [
      "Fluorescent Multi-Layer Disc",
      "Flash Media Driver",
      "Fast-Ethernet Measuring Device",
      "None of these"
    ]
  },
  {
    id: 36,
    question: "How many bits is a byte?",
    answer: "8",
    options: [
      "32",
      "16",
      "8",
      "64"
    ]
  },
  {
    id: 37,
    question: "A JPG stands for:",
    answer: "A format for an image file",
    options: [
      "A format for an image file",
      "A Jumper Programmed Graphic",
      "A type of hard disk",
      "A unit of measure for memory"
    ]
  },
  {
    id: 38,
    question: "Which was an early mainframe computer?",
    answer: "ENIAC",
    options: [
      "ENIAC",
      "EDVAC",
      "UNIC",
      "ABACUS"
    ]
  },
  {
    id: 39,
    question: "Main circuit board in a computer is:",
    answer: "Mother board",
    options: [
      "Harddisk",
      "Mother board",
      "Microprocessor",
      "None of these"
    ]
  },
  {
    id: 40,
    question: "ISP stands for:",
    answer: "Internet Service Provider",
    options: [
      "Internet Survey Period",
      "Integreted Service Provider",
      "Internet Security Protocol",
      "Internet Service Provider"
    ]
  },
];

const resultsList = [];
let user_answer = "";
let question_count = 0;
let add_count = 0;
let points = 0;
let questionPoints = 0;
const setTime = 15;
let time = setTime -1;
let interval;

checkCategory();

function checkCategory(){
  if (category2 === "Geography") {
    add_count = 10;
  } else if (category2 === "Physics") {
    add_count = 20;
  } else if (category2 === "Entertainment") {
    add_count = 30;
  }
}


window.onload = function(){
    show();
}

function show(){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[question_count].options;

    question.innerHTML = `<h2>Q${question_count + 1}. ${questions[question_count + add_count].question}</h2>
    <div class="quiz-buttons">
      <button class="block-button">${first}</button>
      <button class="block-button">${second}</button>
      <button class="block-button">${third}</button>
      <button class="block-button">${fourth}</button>
    </div>`;

    //toggleActive();
    getAnswer();
    countdown();
}


function getAnswer(){
  // select all the buttons with the class name "block-button"
  let option = document.querySelectorAll("button.block-button");
  // loop through each button to add a click event listener
  option.forEach(function(whichButton) {
    whichButton.addEventListener("click", function() {
      // get the text from the clicked button and store it in the user_answer global variable
      console.log(whichButton.innerText);
      user_answer = whichButton.innerText;
    });
  });
}

/*function toggleActive(){
  let option = document.querySelectorAll("button.block-button");
  for(let i=0; i < option.length; i++){
      option[i].onclick = function(){
          for(let i=0; i < option.length; i++){
              if(option[i].classList.contains("active")){
                  option[i].classList.remove("active");
              }
          }
          option[i].classList.add("active");
      }
  }
}*/



function next(){
 
  console.log(question_count);

  /*let user_answer = document.querySelector("button.block-button.active").innerHTML;*/

  if(user_answer == questions[question_count].answer){
    questionPoints = 10;
    points += 10;
    sessionStorage.setItem("points",points);
  } else {
    questionPoints = 0;
  }

  console.log(points);
  stopCount(user_answer);
}

function countdown() {
  if (!interval) {
    interval = setInterval(startCount, 1000);
  }
}

function startCount() {
  if (time >= 0) {
    document.getElementById("countdown").innerText = time;
    document.getElementById("progressBar").value = setTime - time; 
    time -= 1;
  } else {
    user_answer = "No answer";
    questionPoints = 0;
    time = setTime;    
    stopCount(user_answer);
  }
}

function stopCount(user_answer) {
  clearInterval(interval);
  // release interval from the variable
  interval = null;
  createResultsList(user_answer);
  if(question_count == 9){
    window.location = "./results.html";
  } else {
    document.getElementById("countdown").innerText = setTime;
    document.getElementById("progressBar").value = 0; 
    question_count++;
    time = setTime - 1;
    show();
  }
}

function createResultsList(user_answer) {
  let questionList = new Array(questions[question_count].question, user_answer, questions[question_count].answer, time, questionPoints);
  resultsList.push(questionList);
  sessionStorage.setItem("resultsList",JSON.stringify(resultsList));
}