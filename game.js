const questions = [
  ["What do you call the intense fear of spiders?", 0, "arachnophobia", "arcanephobia", "spiderphobia"],
  ["What's the number commonly used for pi?", 2, "4.31", "314", "3.14"],
  ["What's the medical condition that occurs when core body temperature drops below 95 degrees Fahrenheit?", 2, "hyperthermia", "hypethermia", "hypothermia"]
];

	window.onload = function() {
		document.getElementById("prompt").innerHTML =
		"<button onclick='playGame()'>Play Game</button>";
	};

    function playGame() {

    let current = questions.shift();

    let questionText = current.shift();

    let correctIndex = current.shift();

    let answers = current;

    document.getElementById("question").textContent = questionText;

    let html = "";
    for (let i = 0; i < answers.length; i++) {
        html += "<li><a href='#' onclick='checkAnswer(" + i + ", " + correctIndex + ")'>" +
                answers[i] + "</a></li>";
    }

    document.getElementById("answers").innerHTML = html;

    document.getElementById("prompt").textContent = "Click the best answer.";
    }

    function checkAnswer(chosen, correct) {
    let message;

    if (chosen === correct) {
        message = "Correct!";
    } else {
        message = "Incorrect!";
    }

    if (questions.length === 0) {

        document.getElementById("prompt").innerHTML =
            message + " <button onclick='location.reload()'>Restart Game</button>";
        document.getElementById("answers").innerHTML = "";
        
    } else {
        document.getElementById("prompt").innerHTML =
            message + " <button onclick='playGame()'>Play Game</button>";
    }
}


