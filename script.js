const button = document.getElementById("btn-submit");

let employentType;
let employmentCategory;
let duration;
let score;

document.getElementById("empType").addEventListener("input", (e) => {
	employentType = e.target.value;
});
document.getElementById("duration").addEventListener("input", (e) => {
	duration = e.target.value;
});
document.getElementById("score").addEventListener("input", (e) => {
	score = e.target.value;
});

const radios = document.querySelectorAll('input[name="empCategory"]');
radios.forEach((radio) => {
	radio.addEventListener("click", function () {
		employmentCategory = radio.value;
	});
});

const onclicked = (e) => {
	if (
		employentType === undefined ||
		employmentCategory === undefined ||
		duration === undefined ||
		score === undefined ||
		employentType === ""
	) {
		return alert("Please fill the inputs propery");
	}

	if (
		employentType === "contrurary" ||
		employmentCategory === "A" ||
		duration < 9
	) {
		return alert("No bonus awarded");
	}
	if (score >= 80) {
		return alert("The bonus is: 2");
	}

	if (score <= 79 && score > 65) {
		return alert("The bonus is: 1.5");
	}

	if (score <= 65 && score > 50) {
		return alert("The bonus is: 1");
	}

	if (score < 50) {
		return alert("The bonus is: 0");
	}
};

button.addEventListener("click", onclicked);
