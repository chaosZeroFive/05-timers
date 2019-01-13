///////////////////////
///    Trivia       ///
///     Game        ///
///  Alton Carroll  ///
///      2019       ///
///////////////////////


/*Psuedo Code
    document ready
        -
    
******************************this is what is what happens before the player clicks start******************************
condition that exist:
    -document is ready
    -global variables declared
    -questions are held in an object
    
events & actions:

        -button click event
        
        
******************************this is what is what happens after the player clicks starts******************************
condition that exist:

events & actions:
    -timer begins counting down
    
******************************this is what is what happens during the game ********************************************
condition that exist:

events & actions:

    player answers questions as fast as possible
        -only one answer can be selected
        
    if player finishes before timer reaches zero they can click submit
    otherwise the game ends at 00:00
    
******************************this is what is what happens after the game ends*****************************************
condition that exist:
    -timer is 00:00
    -player clicks submit
events & actions:
    -game resets
        calculate number correct | append html
        calculate number incorrect | append html
        calculate score | append html
*/
    
//object that hold the game information
var triviaQuestions = {
    question1: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question2: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question3: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question4: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question5: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question6: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question7: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question8: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question9: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question10: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question11: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question12: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question13: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question14: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question15: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question4: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question16: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question17: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question18: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question19: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question9: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    question20: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
    bonusQuestion: {
        qString:'',
        qChoices: '',
        qName: '',
        qAnswer: '',
        qClass: '',
        qLevel: ''
    },
}
var timerObject = {
    timerId: '',
    timerOn: false,
    time: 60,
    timerCurrent: 0
}
var gameStats = {
    numCorrect: 0,
    numIncorrect: 0,
    numUnanswered: 0,
    averageTime: 0,
    averageTimePer: 0,
    numTimeExpired: 0,
    
    
}

//need a function to start the game

//need a function to display and change the questions

//need a function to evaluate the responses

//need a function to generate game statistics

//need a function to run timer
    //***conditions:
        //timer is is greater than zero
        //question is not answered
        //timer is equal to zero
        //question is answered
//need a function to reset the game

function runTimer(){
    
}

