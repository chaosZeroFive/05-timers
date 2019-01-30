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
    $("#next").hide();
	$(".card-body").hide();
	$(".alert").hide();
	$(".scores").hide();
    //console.log("@ document.ready | current index: " + curQstInd);
    //console.log("@ document.ready | time: " + time);
    //console.log("@ document.ready | counter: " + counter)
});

$("#start").on("click", function () {
    $("#start").hide();
    //console.log("@ start click | start clicked");
	$(".card-body").show();
	current();
	
});

$(".custom-radio").on("click", ".custom-control-input", function(){
	clearInterval(interval);
	//console.log($(this).val());
	var a = parseInt($(this).val());
	if (a === curQstAns){
		numCorrect++;
		trans.transC();
		//console.log("number correct: " + numCorrect);
	}
	else {
		numIncorrect++;
		//console.log("number incorrect: " + numIncorrect);
		trans.transI();
		//console.log("current index: " + curQstInd);
	}
});

var trans = {
	
	transC: function(){
		//console.log("trans.transC() called");
		$(".alert").show().text(messages.correct.txt);
        $(".alert").attr("class", messages.correct.class);
        //$(".alert").toggleClass(messages.correct.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
	},
	
	transI: function(){
		//console.log("trans.transI() called");
		$(".alert").show().text(messages.incorrect.txt);
        $(".alert").attr("class", messages.incorrect.class);
        //$(".alert").toggleClass(messages.incorrect.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
        //console.log("@ transI | time: " + time);
        //console.log("@ transI | counter: " + counter)
	},
	
	transU: function(){
		//console.log("trans.transU() called");
		$(".alert").show().text(messages.unanswered.txt);
        $(".alert").attr("class", messages.unanswered.class);
        //$(".alert").toggleClass(messages.unanswered.class);
		$(".alert").append(alertBtn);
		$(".card").hide();
		$("#correct").html("Correct: " + numCorrect);
		$("#incorrect").html("Incorrect: " + numIncorrect);
		$("#missed").html("Missed: " + numMissed);
        curQstInd++;
        //console.log("@ transU | time: " + time);
        //console.log("@ transU | counter: " + counter)
	}
	
}

function closeAlert(){
    if (curQstInd < questionArray.length){
        //console.log("question " + curQstInd + " of " + questionArray.length);
        counter = time;
        $(".card-header").html(counter);
        $(".alert").empty();
        //console.log("closeAlert() called");
        $("input[type='radio']").prop("checked", false);
        $(".card").show();
        //$('.scores').hide();
        current();
        //console.log("@ closeAlert | time: " + time);
        //console.log("@ closeAlert | counter: " + counter)
        //console.log("*************************")
        $(".alert").attr("class", "alert");
    }
    else {
        gameOver();
    }
}

function gameOver(){
    $(".card").show();
    $(".card-header").html("<h3>Lets See How You Did</h3>");
    $(".card-title").hide();
    $(".card-body").hide();
    $(".card-footer").append("<h4>" + numCorrect + " Correct Answers</h4>");
    $(".card-footer").append("<h4>" + numIncorrect + " Incorrect Answers</h4>");
    $(".card-footer").append("<h4>" + numMissed + " Unanswered Questions</h4>");
    $('.scores').hide();
    $("#start").show();
}

function current(){
	//console.log("current() called");
    var i = questionArray[curQstInd];
	curQstStr = i.qString;
	curQstCh0 = i.qChoice[0];
	curQstCh1 = i.qChoice[1];
	curQstCh2 = i.qChoice[2];
	curQstCh3 = i.qChoice[3];
	curQstAns = i.qAnswer;
	interval = setInterval(timer, 1000);
	setCurrent();
    //console.log("@ current() | current index: " + curQstInd);
    //console.log("@ current | time: " + time);
   //console.log("@ current | counter: " + counter)
}

function setCurrent(){
	//console.log("setCurrent() called");
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
	$(".card-header").html(counter);
	timer(interval);
    //console.log("@ setCurrent | time: " + time);
    //console.log("@ setCurrent | counter: " + counter)
}

function timer(){
	if (counter >= 1){
		console.log("time remaining: " + counter);
		counter--;
		$(".card-header").html(counter);
	}
	else {
		clearInterval(interval);
		numMissed++;
		trans.transU();
	}
}