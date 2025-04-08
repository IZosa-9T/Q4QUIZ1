function bmicalc(){
	var a = document.getElementById('a').value; /* weight in kg*/
	var b = document.getElementById('b').value; /* height in m */
	var c = a/Math.pow(b,2) /* BMI */

	if (c <= 18.5) {
		window.alert('Your BMI, ' + Math.round(c) + ', is considered underweight.');

	} else if (c >= 18.6 && c <= 24.9) {
		window.alert('Your BMI, ' + Math.round(c) + ', is considered normal.');

	} else if (c >= 25 && c <= 29.9) {
		window.alert('Your BMI, ' + Math.round(c) + ', is considered overweight.');

	} else {
		window.alert('Your BMI, ' + Math.round(c) + ', is considered obese.');
	}
}