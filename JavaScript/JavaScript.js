/*Document JavaScript*/
function confirmSend() { //Confirm Send Email
	if (confirm("Do you want to summit?")) {
		alert("You pressed Summit!");
	}
	else {
		alert("You pressed Cancel!");
	}
}
/* Skip - Ad-Main */
function skipAdMain() {
	var m = document.getElementsByClassName("skip-adMain")[0];
	m.style.display = "none";
	var n = document.getElementsByClassName("main-content")[0];
	n.style.opacity = "1";
	n.style.pointerEvents = "auto";
}

/* Averstising */
function hideAdvert() { //Hide Advertising Menu
	document.getElementById("hideAdvert").style.display = "none";
	document.getElementById("pictureAdvert").style.display = "none";
	document.getElementById("showAdvert").style.display = "block";
}
function showAdvert() { //Show Advertising Menu
	document.getElementById("hideAdvert").style.display = "block";
	document.getElementById("pictureAdvert").style.display = "block";
	document.getElementById("showAdvert").style.display = "none";
}

function hideAdvert_1() { //Hide Advertising Main
	document.getElementById("hideAdvert_1").style.display = "none";
	document.getElementById("pictureAdvert_1").style.display = "none";
	document.getElementById("showAdvert_1").style.display = "block";
}
function showAdvert_1() { //Show Advertising Main
	document.getElementById("hideAdvert_1").style.display = "block";
	document.getElementById("pictureAdvert_1").style.display = "block";
	document.getElementById("showAdvert_1").style.display = "none";
}

/* MOVE ADVERSTS */
var count = 1;
function movePrevious() {
	count--;
	if (count < 1)
	{
		count = 7;
	}
	var x = document.getElementById("pageIelts");
	x.src = "pageIelts/pageIelts_" + count + ".jpg";
	x.style.width = "700px";
	x.style.height = "420px";
}
function moveNext() {
	count++;
	if (count == 7)
	{
		count = 1;
	}
	var x = document.getElementById("pageIelts");
	x.src = "pageIelts/pageIelts_" + count + ".jpg";
	x.style.width = "700px";
	x.style.height = "420px";
}
setInterval(function(){moveNext();}, 2000);

/* INFORMATION WHEN SIGN IN/UP */
function informationUser() { //First name
	var firstName = document.getElementById("if1").value;
	if (firstName == "") {
		var k = document.getElementById("result_1");
		k.innerHTML = "Please fill out your first name!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_1");
		k.innerHTML = "";
	}
	var lastName = document.getElementById("if2").value;
	if (lastName == "") { //Last name
		var k = document.getElementById("result_2");
		k.innerHTML = "Please fill out your last name!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_2");
		k.innerHTML = "";
	}
	var userName = document.getElementById("if3").value;
	if (userName == "") { //Username
		var k = document.getElementById("result_3");
		k.innerHTML = "Please fill out your username!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_3");
		k.innerHTML = "";
	}
	var password = document.getElementById("pass").value;
	if (password == "") { //Password
		var k = document.getElementById("result_4");
		k.innerHTML = "Please fill out your password!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_4");
		k.innerHTML = "";
	}
	var confirmPassword = document.getElementById("pass_1").value;
	if (confirmPassword == "") { //Confirm password
		var k = document.getElementById("result_5");
		k.innerHTML = "Please confirm your password!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_5");
		k.innerHTML = "";
	}
	var birthDate = document.getElementById("if4").value;
	if (birthDate == "") { //Birth Date
		var k = document.getElementById("result_6");
		k.innerHTML = "Please fill out your birth date!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_6");
		k.innerHTML = "";
	}
	var gender = document.getElementById("option").value;
	if (gender == "") { //Gender
		var k = document.getElementById("result_7");
		k.innerHTML = "Please choose your gender!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_7");
		k.innerHTML = "";
	}
	var email = document.getElementById("if5").value;
	if (email == "") { //Email
		var k = document.getElementById("result_8");
		k.innerHTML = "Please fill out your email!";
		k.style.color = "red";
	} else {
		var k = document.getElementById("result_8");
		k.innerHTML = "";
	}
	var nationality = document.getElementById("option_1").value;
	if (nationality == "") { //Nationality
		var k = document.getElementById("result_9");
		k.innerHTML = "Please choose your nationality!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_9");
		k.innerHTML = "";
	}
	var stateProvince = document.getElementById("if6").value;
	if (stateProvince == "") { //State/Province
		var k = document.getElementById("result_10");
		k.innerHTML = "Please fill out your state/province!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_10");
		k.innerHTML = "";
	}
	var city = document.getElementById("if7").value;
	if (city == "") { //City
		var k = document.getElementById("result_11");
		k.innerHTML = "Please fill out your city!";
		k.style.color = "red";
	}
	else {
		var k = document.getElementById("result_11");
		k.innerHTML = "";
	}
	if (firstName != "" && lastName != "" && firstName != "" && userName != "" && birthDate != "" && gender != "" &&  email != "" && nationality != "" && stateProvince != "" && city != "") {
		var x = confirm("----- YOUR INFORMATION -----" + "\nFull name: " + firstName + " " + lastName + "\nUsername: " + userName + "\nBirth Date: " + birthDate + "\nGender: " + gender + "\nEmail: " + email + "\nNationality: " + nationality + "\nState/Province: " + stateProvince + "\nCity: " + city);
		if (x == true) {
			alert("Your information has been updated");
			location.href = "IeltsMain.html";
		}
		else
			alert("Your information has not been updated");
	}
}

/* ANSWERS */
function showAnswer() { //Show Answers
	document.getElementById("exerciseA_Answers").style.display = "block";
	document.getElementById("exerciseA").style.display = "none";
}
function hideAnswer() { //Hide Answers
	document.getElementById("exerciseA_Answers").style.display = "none";
	document.getElementById("exerciseA").style.display = "block";
}

function showAnswer_1() { //Show Answers_1
	document.getElementById("listeningShow").style.display = "block";
	document.getElementById("listeningHide").style.display = "none";
}
function hideAnswer_1() { //Hide Answers_1
	document.getElementById("listeningShow").style.display = "none";
	document.getElementById("listeningHide").style.display = "block";
}

function showAnswer_2() { //Show Answers_2
	document.getElementById("listeningShow_1").style.display = "block";
	document.getElementById("listeningHide_1").style.display = "none";
}
function hideAnswer_2() { //Hide Answers_2
	document.getElementById("listeningShow_1").style.display = "none";
	document.getElementById("listeningHide_1").style.display = "block";
}

function showAnswer_3() { //Show Answers_2
	document.getElementById("listeningShow_2").style.display = "block";
	document.getElementById("listeningHide_2").style.display = "none";
}
function hideAnswer_3() { //Hide Answers_2
	document.getElementById("listeningShow_2").style.display = "none";
	document.getElementById("listeningHide_2").style.display = "block";
}

function showNote() { //Show Answers_A
	document.getElementById("listeningShowNote").style.display = "block";
}
function hideNote() { //Hide Answers_A
	document.getElementById("listeningShowNote").style.display = "none";
}