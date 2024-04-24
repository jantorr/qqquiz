const tecButton = document.getElementById("tec-main");
const geoButton = document.getElementById("geo-main");
const phyButton = document.getElementById("phy-main");
const entButton = document.getElementById("ent-main");

tecButton.addEventListener("click", (event) => {
  //const category = event.target.textContent;
  sessionStorage.setItem("category", event.target.textContent);
  window.location = "./quiz_start.html";
});

geoButton.addEventListener("click", (event) => {
  sessionStorage.setItem("category", event.target.textContent);
  window.location = "./quiz_start.html";
});

phyButton.addEventListener("click", (event) => {
  sessionStorage.setItem("category", event.target.textContent);
  window.location = "./quiz_start.html";
});

entButton.addEventListener("click", (event) => {
  sessionStorage.setItem("category", event.target.textContent);
  window.location = "./quiz_start.html";
});


function categoryLink(category) {
  sessionStorage.setItem("category", category);
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

