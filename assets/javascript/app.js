var questionArray = [{
        qString: "Which is the most predominant element in the Sun?",
        qChoice: ["Helium", "Iron", "Sulphur", "Hydrogen"],
        qAnswer: 3
    },

    {
        qString: "Which is the closest active galaxy to the Milky Way?",
        qChoice: ["Sagittarius A", "Cygnus 11", "Orionis A", "Centaurus A"],
        qAnswer: 3
    },

    {
        qString: "How many (official) planets are in our solar system?",
        qChoice: ["Twenty-Seven", "Nine", "Eight", "Fourteen"],
        qAnswer: 2
    },

    {
        qString: "What is the closest star to our planet?",
        qChoice: ["Sun", "Alpha Centuari", "Proxima Centuari", "Jupiter"],
        qAnswer: 0
    },

    {
        qString: "What is the product of Hydrogen fusion?",
        qChoice: ["Oxygen", "Helium", "Carbon", "Gold"],
        qAnswer: 1
    }
];

var curQstInd = 0;
var curQstStr = "";
var curQstCh0 = "";
var curQstCh1 = "";
var curQstCh2 = "";
var curQstCh3 = "";
var curQstAns = "";
var numCorrect = 0;
var numIncorrect = 0;
var numMissed = 0;
var interval;
var time = 10;


var messages = {
	correct: {
		txt: "That's Right!",
		class: "alert-success",
	},
	incorrect: {
		txt: "Nope...That's Not It",
		class: "alert-dark"
	},
	unanswered: {
	txt: "Time is Up!",
	class: "alert-danger"
}
}

var alertBtn = "<button type='button' class='close' data-dismiss='alert' aria-label='Close' onClick='trans1()'><span aria-hidden='true'>Ok</span></button>";

$(document).ready(function () {
    $("#next").hide();
	$(".card-body").hide();
	$(".alert").hide();
	$(".scores").hide();
});

$("#start").on("click", function () {
    $("#start").hide();
    console.log("@ start click | start clicked");
	$(".card-body").show();
	current();
	
});

$(".custom-radio").on("click", ".custom-control-input", function(){
	clearInterval(interval);
	console.log($(this).val());
	var a = parseInt($(this).val());
	if (a === curQstAns){
		numCorrect++;
		trans.transC();
		//curQstInd++;
		console.log("current index: " + curQstInd);
		console.log("number correct: " + numCorrect);
	}
	else {
		numIncorrect++;
		console.log("number incorrect: " + numIncorrect);
		trans.transI();
		//curQstInd++;
		console.log("current index: " + curQstInd);
	}
});

var trans = {
	
	transC: function(){
		console.log("trans.transC() called");
		$(".alert").show().text(messages.correct.txt).addClass(messages.correct.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$('.scores').show();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
		curQstInd++;
	
	},
	
	transI: function(){
		console.log("trans.transI() called");
		$(".alert").show().text(messages.incorrect.txt).addClass(messages.incorrect.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$('.scores').show();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
		curQstInd++;
	},
	
	transU: function(){
		console.log("trans.transU() called");
		$(".alert").show().text(messages.unanswered.txt).addClass(messages.unanswered.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$('.scores').show();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
		curQstInd++;
	}
	
}

function trans1(){
	console.log("trans1() called");
	$("input[type='radio']").prop("checked", false);
	$(".card").show();
	$('.scores').hide();
	current();
	
	
}

function current(){
	console.log("current() called");
	curQstStr = questionArray[curQstInd].qString;
	curQstCh0 = questionArray[curQstInd].qChoice[0];
	curQstCh1 = questionArray[curQstInd].qChoice[1];
	curQstCh2 = questionArray[curQstInd].qChoice[2];
	curQstCh3 = questionArray[curQstInd].qChoice[3];
	curQstAns = questionArray[curQstInd].qAnswer;
	interval = setInterval(timer, 1000);
	setCurrent();
}

function setCurrent(){
	console.log("setCurrent() called");
	$(".scores").hide();
	$(".card").show();
	$(".card-title").html(curQstStr);
	$("label[for=choice0]").html(curQstCh0);
	$("label[for=choice1]").html(curQstCh1);
	$("label[for=choice2]").html(curQstCh2);
	$("label[for=choice3]").html(curQstCh3);
	$("#choice0").attr("value", 0);
	$("#choice1").attr("value", 1);
	$("#choice2").attr("value", 2);
	$("#choice3").attr("value", 3);
	$(".card-header").html(time);
	timer(interval);
}

function timer(){
	if (time >= 1){
		console.log("time remaining: " + time);
		time--;
		$(".card-header").html(time);
	}
	else {
		clearInterval(interval);
		numMissed++;
		trans.transU();
	}
}

