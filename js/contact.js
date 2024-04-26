// JavaScript for contact.html

// display the leaderboard on the right-side section
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