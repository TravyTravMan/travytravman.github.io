function checkDriverAge() {
	prompt("What is your age?");
	  if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car");
	} else if (Number(age) > 18){
	alert("Powering on")
	} else if (Number(age) === 18) {
		alert("Congratulations on your first time driving! Drive Safe!")
	}
}


	