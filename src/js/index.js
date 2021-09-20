import 'bootstrap';

import '../scss/index.scss';
import { questions } from './questions';
// 1 = hail
// 2 = junoub
// 3 = hasa
// 4 = hejaz
// 5 = qas
// 6 = naj

// -------------------------------------------------
const test1 = [
  questions[0],
  questions[13],
  questions[18],
  questions[21],
  questions[2],
  questions[31],
  questions[14],
  questions[35],
  questions[22],
  questions[4],
  questions[16],
  questions[30],
  questions[26],
  questions[5],
  questions[32],
  questions[20],
  questions[8],
  questions[17],
  questions[19],
  questions[10],
];
const test2 = [
  questions[3],
  questions[9],
  questions[19],
  questions[14],
  questions[28],
  questions[35],
  questions[5],
  questions[24],
  questions[15],
  questions[17],
  questions[12],
  questions[18],
  questions[31],
  questions[29],
  questions[6],
  questions[0],
  questions[26],
  questions[22],
  questions[13],
  questions[7],
];
const test3 = [
  questions[3],
  questions[11],
  questions[23],
  questions[25],
  questions[27],
  questions[33],
  questions[34],
  questions[2],
  questions[15],
  questions[17],
  questions[12],
  questions[18],
  questions[31],
  questions[29],
  questions[6],
  questions[9],
  questions[26],
  questions[22],
  questions[13],
  questions[1],
];
// -------------------------------------------------

let region1Score = 0;
let region2Score = 0;
let region3Score = 0;
let region4Score = 0;
let region5Score = 0;
let region6Score = 0;
let totalScore = 0;

let region1Percentage = 0;
let region2Percentage = 0;
let region3Percentage = 0;
let region4Percentage = 0;
let region5Percentage = 0;
let region6Percentage = 0;

let currentTest = 0;
let currentQuestion = 0;
const numberOfQuestions = 20;
const tests = [test1, test2, test3];
// -------------------------------------------------

const onAnswer = (event) => {
  const values = event.target.value.split(',');
  console.log(values);
  region1Score += parseInt(values[0]);
  region2Score += parseInt(values[1]);
  region3Score += parseInt(values[2]);
  region4Score += parseInt(values[3]);
  region5Score += parseInt(values[4]);
  region6Score += parseInt(values[5]);
  console.log(region1Score);
  console.log(region2Score);
  console.log(region3Score);
  console.log(region4Score);
  console.log(region5Score);
  console.log(region6Score);
  $('.progress-bar').css('width', (((currentQuestion+1)/numberOfQuestions)*100)+'%').attr('aria-valuenow', ((currentQuestion/numberOfQuestions)*100));   

  if (numberOfQuestions - 1 == currentQuestion) {
    viewFinalCard();
  } else {
    currentQuestion++;
    insertQuestionCard();
  }
}

const insertQuestionCard = () => {
  document.getElementById("theWord").innerHTML = tests[currentTest][currentQuestion].question;
  document.getElementById("ans1").innerHTML = tests[currentTest][currentQuestion].answers[0].label;
  document.getElementById("ans2").innerHTML = tests[currentTest][currentQuestion].answers[1].label;
  document.getElementById("ans3").innerHTML = tests[currentTest][currentQuestion].answers[2].label;
  document.getElementById("ans1").value = `${tests[currentTest][currentQuestion].answers[0].region1value},${tests[currentTest][currentQuestion].answers[0].region2value},${tests[currentTest][currentQuestion].answers[0].region3value},${tests[currentTest][currentQuestion].answers[0].region4value},${tests[currentTest][currentQuestion].answers[0].region5value},${tests[currentTest][currentQuestion].answers[0].region6value}`;
  document.getElementById("ans2").value = `${tests[currentTest][currentQuestion].answers[1].region1value},${tests[currentTest][currentQuestion].answers[1].region2value},${tests[currentTest][currentQuestion].answers[1].region3value},${tests[currentTest][currentQuestion].answers[1].region4value},${tests[currentTest][currentQuestion].answers[1].region5value},${tests[currentTest][currentQuestion].answers[1].region6value}`;
  document.getElementById("ans3").value = `${tests[currentTest][currentQuestion].answers[2].region1value},${tests[currentTest][currentQuestion].answers[2].region2value},${tests[currentTest][currentQuestion].answers[2].region3value},${tests[currentTest][currentQuestion].answers[2].region4value},${tests[currentTest][currentQuestion].answers[2].region5value},${tests[currentTest][currentQuestion].answers[2].region6value}`;
}

const viewFinalCard = () => {
  totalScore = region1Score + region2Score + region3Score + region4Score + region4Score + region6Score;
  if(totalScore>0){
  region1Percentage = Math.round((region1Score / totalScore) * 100);
  region2Percentage = Math.round((region2Score / totalScore) * 100);
  region3Percentage = Math.round((region3Score / totalScore) * 100);
  region4Percentage = Math.round((region4Score / totalScore) * 100);
  region5Percentage = Math.round((region5Score / totalScore) * 100);
  region6Percentage = Math.round((region6Score / totalScore) * 100);
  } else {
  region1Percentage = 0;
  region2Percentage = 0;
  region3Percentage = 0;
  region4Percentage = 0;
  region5Percentage = 0;
  region6Percentage = 0;
  }
  document.getElementById("per1").innerHTML = `${region1Percentage} %`;
  document.getElementById("per2").innerHTML = `${region2Percentage} %`;
  document.getElementById("per3").innerHTML = `${region3Percentage} %`;
  document.getElementById("per4").innerHTML = `${region4Percentage} %`;
  document.getElementById("per5").innerHTML = `${region5Percentage} %`;
  document.getElementById("per6").innerHTML = `${region6Percentage} %`;
  $("#survey").addClass("hide");
  $("#result").removeClass("hide");
  console.log(region1Percentage);
  console.log(region2Percentage);
  console.log(region3Percentage);
  console.log(region4Percentage);
  console.log(region5Percentage);
  console.log(region6Percentage);

}

const onPlayAgain = () => {
  location.reload();
}

const pickTest = () => {
  currentTest = Math.floor(Math.random() * 3);
}

const onStart = () => {
  pickTest();
  $("#starter").addClass("hide");
  insertQuestionCard();
  $("#psbar").removeClass("hide");
  $("#survey").removeClass("hide");
}

// -------------------------------------------------



$(document).ready(() => {

  document.querySelector(`#info`).addEventListener("click", onInfoClick);
  document.querySelector(`#startbtn`).addEventListener("click", onStart);
  document.querySelector(`#ans1`).addEventListener("click", onAnswer);
  document.querySelector(`#ans2`).addEventListener("click", onAnswer);
  document.querySelector(`#ans3`).addEventListener("click", onAnswer);
  document.querySelector(`#ans4`).addEventListener("click", onAnswer);

});


const onInfoClick = () => {
  $(`#infoModal`).modal({ show: true });
}

