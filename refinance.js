var paymentAmount = document.getElementById("paymentAmount");
var paymentAmountSlider = document.getElementById("paymentAmountSlider");
var finalDate = document.getElementById("finalDate");
var finalDateSlider = document.getElementById("finalDateSlider");

finalDateSlider.min = 1;
finalDateSlider.max = 13;
finalDateSlider.value = 12;

updateDateText();

paymentAmount.min = roundUpToHundredths(1200 / finalDateSlider.max);
paymentAmount.max = roundUpToHundredths(1200 / finalDateSlider.min);
paymentAmount.value = roundUpToHundredths(1200 / finalDateSlider.value);

paymentAmountSlider.min = paymentAmount.min;
paymentAmountSlider.max = paymentAmount.max;
paymentAmountSlider.value = paymentAmount.value;

paymentAmount.oninput = function() {
	paymentAmountSlider.value = this.value;
	updateDateInfo();
}

paymentAmountSlider.oninput = function() {
	paymentAmount.value = this.value;
	updateDateInfo();
}

function updateDateInfo() {
	finalDateSlider.value = Math.ceil(1200 / paymentAmount.value);
	updateDateText();
}

finalDateSlider.oninput = function() {
	updateDateText();
	
	paymentAmount.value = roundUpToHundredths(1200 / this.value);
	paymentAmountSlider.value = paymentAmount.value;
}

function updateDateText() {
	var date = new Date();
	date.setDate(date.getDate()+finalDateSlider.value*31);
	finalDate.innerHTML = date.toDateString();
}

function roundUpToHundredths(num) {
	return Math.ceil(num * 100) / 100;
}