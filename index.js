// Questions that will be asked
const Questions = [{
	q: "Where is Nintendo headquarters located?",
	a: [{ text: "Mexico", isCorrect: false },
	{ text: "United States", isCorrect: false },
	{ text: "Japan", isCorrect: true },
	{ text: "China", isCorrect: false }
	]

},
{
	q: "What year was nintendo founded?",
	a: [{ text: "1882", isCorrect: false, isSelected: false },
	{ text: "1998", isCorrect: false },
	{ text: "1886", isCorrect: false },
	{ text: "1889", isCorrect: true }
	]

},
{
	q: "What did nintendo make before they started making video games",
	a: [{ text: "Music", isCorrect: false },
	{ text: "Clothing", isCorrect: false },
	{ text: "Card games", isCorrect: true },
	{ text: "TV's", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
