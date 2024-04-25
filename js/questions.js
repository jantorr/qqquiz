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
    question: "What does RAM stand for?",
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
    question: "What does CPU stand for?",
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
    question: "The first search engine on the internet was:",
    answer: "Archie",
    options: [
      "Google",
      "Archie",
      "Yahoo",
      "Bing"
    ]
  },
  {
    id: 4,
    question: "The number of bits used by IPv6 address is:",
    answer: "128",
    options: [
      "256",
      "32",
      "64",
      "128"
    ]
  },
  {
    id: 5,
    question: "Which technology is used to record cryptocurrency transactions?",
    answer: "Blockchain",
    options: [
      "Mining",
      "Digital Wallet",
      "Blockchain",
      "Token"
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
    question: "The first computer virus was known as:",
    answer: "Creeper program",
    options: [
      "Creeper program",
      "Rabbit",
      "SCA virus",
      "Elk cloner"
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
    question: "The main circuit board in a computer is:",
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
    answer:"Helsinki",
    options: [
        "Oslo",
        "Stockholm",
        "Riga",
        "Helsinki"
    ]   
  },
  {
    id: 12,
    question: "Which animal appears on the flag of Sri Lanka?",
    answer: "Lion",
    options: [
      "Lion",
      "Eagle",
      "Bear",
      "Mosquito"
    ]
  },
  {
    id: 13,
    question: "In which UK city would you find the river Clyde?",
    answer: "Glasgow",
    options: [
      "London",
      "Glasgow",
      "Liverpool",
      "Bristol"
    ]
  },
  {
    id: 14,
    question: "What is the capital of Peru?",
    answer: "Lima",
    options: [
      "Cuzco",
      "Bogotá",
      "La Paz",
      "Lima"
    ]
  },
  {
    id: 15,
    question: "What is the name of the microstate located between Spain and France?",
    answer: "Andorra",
    options: [
      "Aragón",
      "Monaco",
      "Andorra",
      "Biarritz"
    ]
  },
  {
    id: 16,
    question: "What is the highest peak in Africa?",
    answer: "Mount Kilimanjaro",
    options: [
      "Aconcagua",
      "Mount Kilimanjaro",
      "Mount Kenya",
      "Mount Toubkal"
    ]
  },
  {
    id: 17,
    question: "What is the longest river in the UK?",
    answer: "River Severn",
    options: [
      "River Clyde",
      "River Thames",
      "River Severn",
      "River Tay"
    ]
  },
  {
    id: 18,
    question: "What is the capital of Canada?",
    answer: "Ottawa",
    options: [
      "Ottawa",
      "Toronto",
      "Montreal",
      "Vancouver"
    ]
  },
  {
    id: 19,
    question: "What is the name of the smallest country in the world?",
    answer: "The Vatican City",
    options: [
      "Luxembourg",
      "The Vatican City",
      "Monaco",
      "Nauru"
    ]
  },
  {
    id: 20,
    question: "How many stars are on the Australian flag?",
    answer: "6",
    options: [
      "3",
      "5",
      "4",
      "6"
    ]
  },
  //Physics questions 21 to 30
  {
    id: 21,
    question: "Electrons carry a :",
    answer:"Negative charge",
    options: [
        "Positive charge",
        "Negative charge",
        "Neutral charge",
        "None of these"
    ]   
  },
  {
    id: 22,
    question: "Light-year is a unit of:",
    answer: "Length",
    options: [
      "Length",
      "Speed",
      "Magnetic field",
      "None of these"
    ]
  },
  {
    id: 23,
    question: "Light from Sun reaches Earth in approximately:",
    answer: "8 minutes",
    options: [
      "8 minutes",
      "6 minutes",
      "24 seconds",
      "None of these"
    ]
  },
  {
    id: 24,
    question: "The velocity of the sound is highest in:",
    answer: "Metal",
    options: [
      "Metal",
      "Air",
      "Water",
      "Vacuum"
    ]
  },
  {
    id: 25,
    question: "Which type of radiation has the longest wave length?",
    answer: "Radio wave",
    options: [
      "X-ray",
      "Radio wave",
      "Infrared",
      "Ultraviolet"
    ]
  },
  {
    id: 26,
    question: "Which physicist is the author of the book 'A Brief History of Time'?",
    answer: "Stephen Hawking",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Max Planck",
      "Stephen Hawking"
    ]
  },
  {
    id: 27,
    question: "Who is know as the 'father of quantum theory'?",
    answer: "Max Planck",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Max Planck",
      "Stephen Hawking"
    ]
  },
  {
    id: 28,
    question: "An atom with more neutrons than protons is called:",
    answer: "Isotope",
    options: [
      "Ion",
      "Isotope",
      "Neutrino",
      "None of these"
    ]
  },
  {
    id: 29,
    question: "What is the average diameter of a neutron star?",
    answer: "12 miles",
    options: [
      "100 million miles",
      "100 billion miles",
      "10,000 miles",
      "12 miles"
    ]
  },
  {
    id: 30,
    question: "What is inside a black hole?",
    answer: "Unknown",
    options: [
      "Anti-matter",
      "Dark matter",
      "Anti-gravity field",
      "Unknown"
    ]
  },
  //Entertainment questions 31 to 40
  {
    id: 31,
    question: "What was Disney's first film?",
    answer:"Snow White",
    options: [
        "Little Mermaid",
        "Dumbo",
        "Mickey Mouse",
        "Snow White"
    ]   
  },
  {
    id: 32,
    question: "What city do The Beatles come from?",
    answer: "Liverpool",
    options: [
      "London",
      "Liverpool",
      "New York",
      "Manchester"
    ]
  },
  {
    id: 33,
    question: "Which Bob Dylan song did Adele include on her first album?",
    answer: "Make You Feel My Love",
    options: [
      "Make You Feel My Love",
      "Like a Rolling Stone",
      "Visions of Johanna",
      "Idiot Wind"
    ]
  },
  {
    id: 34,
    question: "Who played Han Solo in 'Star Wars'?",
    answer: "Harrison Ford",
    options: [
      "Ewan McGregor",
      "Kevin Costner",
      "Kevin Bacon",
      "Harrison Ford"
    ]
  },
  {
    id: 35,
    question: "In which decade did Sylvester Stallone first play Rambo?",
    answer: "80s",
    options: [
      "90s",
      "80s",
      "70s",
      "00s"
    ]
  },
  {
    id: 36,
    question: "What's the name of the puppy in the children's animated TV series 'Pocoyo'?",
    answer: "Loula",
    options: [
      "Pato",
      "Loula",
      "Fred",
      "Elly"
    ]
  },
  {
    id: 37,
    question: "Who played the Saint in the 90s film?",
    answer: "Val Kilmer",
    options: [
      "Val Kilmer",
      "Sean Connery",
      "Harrison Ford",
      "Pierce Brosnan"
    ]
  },
  {
    id: 38,
    question: "Who was the director of the film '2001: A Space Odyssey'?",
    answer: "Stanley Kubrick",
    options: [
      "Steven Spielberg",
      "James Cameron",
      "Stanley Kubrick",
      "Martin Scorsese"
    ]
  },
  {
    id: 39,
    question: "Who is the author of the book 'Anna Karenina'?",
    answer: "Leo Tolstoy",
    options: [
      "Franz Kafka",
      "Leo Tolstoy",
      "Stephen King",
      "Fyodor Dostoyevsky"
    ]
  },
  {
    id: 40,
    question: "What is the name of the manufacturer that provides the gadgets that Coyote uses to catch the Road Runner?",
    answer: "ACME",
    options: [
      "Amazon",
      "Intel",
      "ACME",
      "SpaceX"
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
let time = setTime - 1;
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
    let[first, second, third, fourth] = questions[question_count + add_count].options;

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

  if(user_answer === questions[question_count + add_count].answer){
    questionPoints = 10;
    points += 10;

  } else {
    questionPoints = 0;
    if (user_answer === ""){
      /*user has selected no answer and hit the next button*/
      user_answer = "No answer";
    }
    console.log("Question points:", questionPoints);
  }

  console.log("Points:", points);
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
    /*user has run out of time without hitting the next button*/
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
    sessionStorage.setItem("points", points);
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
  let questionList = new Array(questions[question_count + add_count].question, user_answer, questions[question_count + add_count].answer, time, questionPoints);
  resultsList.push(questionList);
  sessionStorage.setItem("resultsList",JSON.stringify(resultsList));
  questionPoints = 0;
}