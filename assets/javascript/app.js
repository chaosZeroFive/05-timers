var questionArray = [{
        qString: "Which is the most predominant element in the Sun?",
        qChoice: ["Helium", "Iron", "Sulphur", "Hydrogen"],
        qAnswer: 3,
    },

    {
        qString: "Which is the closest active galaxy to the Milky Way?",
        qChoice: ["Sagittarius A", "Cygnus 11", "Orionis A", "Centaurus A"],
        qAnswer: 3,
    },

    {
        qString: "How many (official) planets are in our solar system?",
        qChoice: ["Twenty-Seven", "Nine", "Eight", "Fourteen"],
        qAnswer: 2,
    },

    {
        qString: "What is the closest star to our planet?",
        qChoice: ["Sun", "Alpha Centuari", "Proxima Centuari", "Jupiter"],
        qAnswer: 0,
    },

    {
        qString: "What is the product of Hydrogen fusion?",
        qChoice: ["Oxygen", "Helium", "Carbon", "Gold"],
        qAnswer: 1,
    }
];

var curQstInd = 0;
var curQstStr = "";
var curQstCh0 = "";
var curQstCh1 = "";
var curQstCh2 = "";
var curQstCh3 = "";
var curQstAns = "";
var curQstImg = "";
var numCorrect = 0;
var numIncorrect = 0;
var numMissed = 0;
var interval;
var time = 10;
var counter = time;

var messages = {
	correct: {
		txt: "That's Right!",
		class: "alert alert-success",
	},
	incorrect: {
		txt: "Nope...That's Not It",
		class: "alert alert-dark"
	},
	unanswered: {
	txt: "Time is Up!",
	class: "alert alert-danger"
	}
}

var alertBtn = "<button type='button' class='close' data-dismiss='alert' aria-label='Close' onClick='closeAlert()'><span aria-hidden='true'>Ok</span></button>";

$(document).ready(function () {
    $('.btn-primary').html('Start');
	$("#trivia").hide();
	$("#alert-row").hide();
	$("#scores").hide();
    console.log("@ document.ready | current index: " + curQstInd);
    console.log("@ document.ready | time: " + time);
    console.log("@ document.ready | counter: " + counter)
});

$(".btn-primary").on("click", function () {
    $("#btn").hide();
	$("#trivia").show();
	current();
	
});

$(".custom-radio").on("click", ".custom-control-input", function(){
	clearInterval(interval);
	var a = parseInt($(this).val());
	if (a === curQstAns){
		numCorrect++;
		trans.transC();
	}
	else {
		numIncorrect++;
		trans.transI();
	}
});

var trans = {
	
	transC: function(){
		$("#trivia").hide();
		$("#alert-row").show();
		$("#scores").show();
		$(".alert").text(messages.correct.txt);
        $(".alert").attr("class", messages.correct.class);
        //$(".alert").toggleClass(messages.correct.class);
		$(".alert").append(alertBtn);
		/*$(".container").hide();*/
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
	},
	
	transI: function(){
		$("#trivia").hide();
		$("#alert-row").show();
		$("#scores").show();
		$(".alert").text(messages.incorrect.txt);
        $(".alert").attr("class", messages.incorrect.class);
        //$(".alert").toggleClass(messages.incorrect.class);
		$(".alert").append(alertBtn);
		/*$(".container").hide();*/
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
	},
	
	transU: function(){
		$("#trivia").hide();
		$("#alert-row").show();
		$("#scores").show();
		$(".alert").text(messages.unanswered.txt);
        $(".alert").attr("class", messages.unanswered.class);
        //$(".alert").toggleClass(messages.unanswered.class);
		$(".alert").append(alertBtn);
		/*$(".card").hide();*/
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
	}
	
}

function closeAlert(){
    if (curQstInd < questionArray.length){
        counter = time;
        $(".timer").html(counter);
        $(".alert").empty();
        $("input[type='radio']").prop("checked", false);
        $(".trivia").show();
        $('#scores').hide();
        $(".alert").attr("class", "alert");
		current();
    }
    else {
        gameOver();
    }
}

function gameOver(){
    $("#timer").html("<h3>Lets See How You Did</h3>");
    $("#trivia").hide();
    $("#scores").html("<h3>Lets See How You Did!</h3><h4>" + numCorrect + " Correct Answers</h4><h4>" + numIncorrect + " Incorrect Answers</h4><h4>" + numMissed + " Unanswered Questions</h4>");
	/*$('.btn-primary').html('Play Again');
    $("#btn").show();*/
}

function current(){
    var i = questionArray[curQstInd];
	curQstStr = i.qString;
	curQstCh0 = i.qChoice[0];
	curQstCh1 = i.qChoice[1];
	curQstCh2 = i.qChoice[2];
	curQstCh3 = i.qChoice[3];
	curQstAns = i.qAnswer;
	interval = setInterval(timer, 1000);
	setCurrent();
}

function setCurrent(){
	$(".scores").hide();
	$("#trivia").show();
	$("#question").html(curQstStr);
	$("label[for=choice0]").html(curQstCh0);
	$("label[for=choice1]").html(curQstCh1);
	$("label[for=choice2]").html(curQstCh2);
	$("label[for=choice3]").html(curQstCh3);
	$("#choice0").attr("value", 0);
	$("#choice1").attr("value", 1);
	$("#choice2").attr("value", 2);
	$("#choice3").attr("value", 3);
	$(".header").html(counter);
	timer(interval);
}

function timer(){
	if (counter >= 1){
		console.log("time remaining: " + counter);
		counter--;
		$("#timer").html(counter);
	}
	else {
		clearInterval(interval);
		numMissed++;
		trans.transU();
	}
}