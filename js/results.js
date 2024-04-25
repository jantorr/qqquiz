//results.html
let user_name = sessionStorage.getItem("userName");
let topic = sessionStorage.getItem("category")
let user_points = sessionStorage.getItem("points");
let resultsList = JSON.parse(sessionStorage.getItem("resultsList"));
let counter = 0;


document.querySelector("span.userName").innerText = user_name;
document.querySelector("span.category").innerText = topic;
document.querySelector("span.points").innerText = user_points;

const question = document.getElementById("resultsQuestions");

for (const i in resultsList) {
    counter = counter + 1;
    question.innerHTML += `<h3>Question ${counter}: ${resultsList[i][0]}</h3>
    <p>Your answer: ${resultsList[i][1]}</p>
    <p>Correct answer: ${resultsList[i][2]}</p>
    <p>Time: ${resultsList[i][3]}</p>
    <p>Points: ${resultsList[i][4]}</p><br />`;    
}

createLeaderboard(user_name, topic, user_points);

function categoryLink(category) {
    sessionStorage.setItem("category", category);
}

function createLeaderboard(user_name, topic, user_points){
    // Check if there is a leaderboard stored in localStorage, if not, create one.
    // The leaderboard is an array of objects with 3 keys:
    // - nickname (string variable),
    // - categories (array), contains a list of the quizz topics the player has already completed (max. 4 items),
    // - total_points (integer variable), points scored on each quizz topic are added to this variable until completing all four quizzes.
    if(localStorage.getItem("leaderboard") === null) {
        // No leaderboard in localStorage. 
        // Create one with this new player and user_results as first item in the array.
        const leaderboard = [{
            nickname:user_name,
            categories:[topic],
            total_points:user_points
        }]
        displayLeaderboard(leaderboard);
        // Add the new player and user_results to the leaderboard stored in localStorage.
        localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
    } else {
        // There is a leaderboard in localStorage.
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
        const playerExists = leaderboard.find(player => player.nickname === user_name);
        if (playerExists === undefined) {
            // New player, the nickname does not exist in the leaderboard.
            const user_results = {
                nickname:user_name,
                categories:[topic],
                total_points:user_points
            };
            
            // Add the new player and user_results to the leaderboard stored in localStorage.
            leaderboard.push(user_results);
            displayLeaderboard(leaderboard);
            localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
        } else {
            // The nickname already exists in the leaderboard.
            // Find the index of that nickname in the array.
            const position = leaderboard.findIndex(player => player.nickname === user_name);
            console.log(position);
            // Check if the player has previously played this quizz topic.
            // Points scored on this topic are only added to total_points if the player has not previously choosen this topic.
            // Only once players have completed all four topics, they are allowed to repeat a topic, and total_points is reset to 0.

            const topicExists = leaderboard[position].categories.includes(topic);
            console.log(topicExists);

            if (topicExists){
                // The player has previously choosen this quizz topic, but has not completed all four quizzes yet.
                // No points will be added because it is against the rules repeating a topic before completing all four quizzes.
                // This option should not be reached as repeating a quiz is already checked when choosing a quiz.
                displayLeaderboard(leaderboard);
                alert("You have already completed this quizz. Please, choose a different quizz. No points will be added this time.");
            } else {
                // The player has not played this quizz topic before.
                // Points scored in this topic are added to total_points, and updated in the leaderboard stored in localStorage.
                let addPoints = (parseInt(leaderboard[position].total_points)) + (parseInt(user_points));
                //if (isNaN(addPoints)) addPoints = 0;

                leaderboard[position].total_points = addPoints;
                leaderboard[position].categories.push(topic);
                displayLeaderboard(leaderboard);
                localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
                console.log(leaderboard[position].categories.length);
                if (leaderboard[position].categories.length === 4){
                    // The player had already completed all four quizz topics.
                    // The categories array will be emptied and total_points reset to 0.
                    // The current topic that the player has just played is added to the categories array.
                    // The score obtained on the current topic that is stored in the variable user_points is added to 
                    // the variable total_points in the leaderboard array stored in localStorage.
                    
                    alert("Congratulations! You have completed all four quizzes.");

                    leaderboard[position].categories = [];
                    leaderboard[position].total_points = 0;
                    console.log(leaderboard[position].categories);
                    console.log(leaderboard[position].total_points);
                    localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
                }
            }
        }
    }
}

function displayLeaderboard(leaderboard){
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

