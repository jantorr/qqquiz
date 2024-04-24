let categoryName = document.getElementById("category-name");
let topic = sessionStorage.getItem("category");
categoryName.textContent = topic;

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", (event) => {
  let user_name = document.getElementById('nickname').value;
  //check the nickname field is not empty
  if (user_name.length > 0){
    if (localStorage.getItem("leaderboard") != null){
      let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
      const playerExists = leaderboard.find(player => player.nickname === user_name);
      if (playerExists) {
        const position = leaderboard.findIndex(player => player.nickname === user_name);
        const topicExists = leaderboard[position].categories.includes(topic);      
        if (topicExists){
          alert(`You have already completed the ${topic} quiz.
                Please, select a different quiz.`);
          window.location = "./index.html";
        } else {
          storeUserCategory(user_name, topic);
        }
      } else {
        storeUserCategory(user_name, topic);
      }
    } else {
      storeUserCategory(user_name, topic);
    }
  } else {
    alert("Please, enter your nickname (max. 16 characters)");
  }
});

function categoryLink(category) {
  sessionStorage.setItem("category", category);
}

function storeUserCategory(user_name, topic){
  sessionStorage.setItem("userName", user_name);
  sessionStorage.setItem("category", topic);
  window.location = "./questions.html";
}

function displayLeaderboard(){
  if (localStorage.getItem("leaderboard") != null){
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    let showLeaderboard = document.getElementById("showLeaderboard");
  
    // sort the array leaderboard by the property total_points in descending order.
    leaderboard.sort((a, b) => b.total_points - a.total_points);

    let num = 0;
    for (const x in leaderboard){
        num += 1;
        showLeaderboard.innerHTML += `
        <div class="row">
            <div class="column">
                <p>${num}.- ${leaderboard[x].nickname}</p>
            </div>
            <div class="column">
                <p>${leaderboard[x].total_points} pts</p>
            </div>
        </div>`;
    }
  }
}

