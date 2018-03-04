/*jslint es6:true*/
var questionIndex = 0;
var score = 0;

function loadFirstQuestion() {
$(".startQuiz").on("click", event =>
  {
    questionIndex = 0;
    score = 0;
    $(".question").toggleClass("display");
    $(".submitAnswer").toggleClass("display");
    $(".status").toggleClass("display");
    $(".feedback").css("visbility","hidden");
    $(".startPage").toggleClass("displayNone");
  });
}

function nextQuestion(){
  $(".nextQuestion").on("click", event => 
  {
    if (questionIndex < 9) {
      questionIndex++;
      $(updateQuestion);
      $(".feedback").css("visibility", "hidden");
    } else {
        $(".feedback").css("visibility", "visible");
      }
  }); 
} 

function verifyAnswer(){
  $(".question").on("click", ".submitAnswer", event =>
  {
    //$("input[type=radio]").attr('disabled', true);
    var userAnswer = $( "input[type=radio][name=answerChoice]:checked").val();
      if($('input[name=answerChoice]:checked').length<=0) {
        alert("Please select an answer");
      } else {if (userAnswer==questions[questionIndex].ansValue) {
        $(correctAnswer);
      } else {
        $(incorrectAnswer);
      }
      if (questionIndex != 9) {
        $(".submitAnswer").replaceWith("<button type='button' class='nextQuestion'>Next Question</button>");
      } else {
        $(".submitAnswer").toggleClass("displayNone");
        $(".startOver").toggleClass("display");
        $(".feedback").css("visibility", "visible");
        $(startOver);
      }
      $("input[type=radio]").attr('disabled', true);
    $(nextQuestion);
    }
  });
}

function updateQuestion() {
  var questionNumber = (questionIndex + 1).toString();
      $(".questionNumber").text(questionNumber);
      $(".expression").html("<p>"+questions[questionIndex].question+"</p>");
      $("label[for='answer1']").html(questions[questionIndex].ans1);
      $("label[for='answer2']").html(questions[questionIndex].ans2);
      $("label[for='answer3']").html(questions[questionIndex].ans3);
      $("label[for='answer4']").html(questions[questionIndex].ans4);
      $("input[name=answerChoice]").attr("checked",false);
      $(loadMathJax(".question"));
      $(".nextQuestion").replaceWith("<button type='submit' class='submitAnswer'>Submit</button>");
      $("input[type=radio]").attr('disabled', false);
}

function correctAnswer() {
  $(".feedback").text("Correct!");
  score ++;
  var updatedScore = score.toString();
  $(".currentScore").text(updatedScore);
  $(".feedback").css("visibility", "visible");
  $(".feedback").css("color", "#0e492d");
}

function incorrectAnswer() {
  var correctAnswer = questions[questionIndex].answer;
  $(".feedback").html("<p>Your Answer is incorrect. The correct answer is: "+correctAnswer+"</p>");
  $(loadMathJax(".feedback"));
  $(".feedback").css("color", "#c20000");
}

//This hides the underlying notation while MathJax processes the typsetting
function loadMathJax(targetClass) {
  $(targetClass).css("visibility","hidden");
  $(targetClass).load("/MathjaxTesting.aspx", function () {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub, targetClass],
    function () {
      $(targetClass).css("visibility","visible"); 
  });
  });
}

function startOver() {
  $(".startOver").on("click", event =>
  {
    questionIndex = 0;
    score = 0;
    $(updateQuestion);
    var updatedScore = score.toString();
    $(".question").css("display", "none");
    $(".currentScore").text(updatedScore);
    $(".startPage").toggleClass("display");
    $(".status").css("display", "none");
    $(".startOver").css("display", "none");
  });
}

$(document).ready(function() {
  $(loadFirstQuestion);
  $(verifyAnswer);
});