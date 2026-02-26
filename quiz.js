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