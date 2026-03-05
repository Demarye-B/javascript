function displayDate() {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let weekdayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let dayNumber = now.getDate();
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = "am";

    if (hours >= 12) {
        ampm = "pm";
        if (hours > 12) {
            hours -= 12;
        }
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let finalSentence = `Today is ${weekdayName}, ${monthName} ${dayNumber}, ${year}. It is ${hours}:${minutes} ${ampm}.`;

    document.getElementById("date").innerHTML = finalSentence;
}

displayDate();

function displayGreeting() {
    let now = new Date();
    let hour = now.getHours();

    let greeting;

    switch (true) {
        case (hour < 12):
            greeting = "Good morning";
            break;
        case (hour < 18):
            greeting = "Good afternoon";
            break;
        default:
            greeting = "Good evening";
    }

    let name = prompt("Please enter your name:");

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    name = capitalize(name);

    document.getElementById("greeting").innerHTML = `${greeting}, ${name}!`;
}

displayGreeting();


var questions = [
    'What do you call the intense fear of spiders?',
    'Is a tomato a fruit or a vegetable?', 
    'Is pineapple a valid pizza topping?'
];

var answers = [
    'arachnophobia',
    'fruit',
    'yes'
];

function quiz() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        var guess = 3;
        while (guess > 0) {
           var  ans = prompt(questions[i]);
            if (ans == answers[i]){
                if (guess == 3){
                    score = score + 3;
                } else if (guess == 2) {
                    score = score + 2;
                } else {
                    score = score + 1;
                }
                guess = 0;
            } else {
                guess--;
            }
        }
    }
    return score;
}

var finalScore = quiz();
document.getElementById("score").innerHTML = "Your final score is: " + finalScore;
