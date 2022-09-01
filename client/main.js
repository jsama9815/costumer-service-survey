const btn = document.querySelector('.btn');
const answer1 = document.querySelector("#low");
const answer2 = document.querySelector("#medium");
const answer3 = document.querySelector("#high");
const answer4 = document.querySelector('#low2');
const answer5 = document.querySelector("#medium2");
const answer6 = document.querySelector("#high2");
const answer7 = document.querySelector('#low3');
const answer8 = document.querySelector("#medium3");
const answer9 = document.querySelector("#high3");
const answers = [];

btn.addEventListener('click', alert_message);
btn.addEventListener('click', refresh)

//answers of question 1
	
function saveanswer1(answer1,answer2,answer3){
	answer1 = true;
	answer2=false;
	answer3=false;
	if(answer1){
	document.getElementById('low').style.opacity =1;
	document.getElementById('medium').style.opacity =0.5;
	document.getElementById('high').style.opacity =0.5;
	answers.push(answer1);
}
}
function saveanswer2(answer1,answer2,answer3){
	answer1 = false;
	answer2=true;
	answer3=false;
	if(answer2){
	document.getElementById('low').style.opacity =0.5;
	document.getElementById('medium').style.opacity =1;
	document.getElementById('high').style.opacity =0.5;
	answers.push(answer2);
	}
}
function saveanswer3(answer1,answer2,answer3){
	answer1=false;
	answer2=false;
	answer3=true;
	if(answer3){
	document.getElementById('high').style.opacity =1;
	document.getElementById('low').style.opacity =0.5;
	document.getElementById('medium').style.opacity =0.5;
	answers.push(answer3);
	}
}

//answers of question 2

function saveanswer12(answer4,answer5,answer6){
	answer4 = true;
	answer5=false;
	answer6=false;
	if(answer4){
	document.getElementById('low2').style.opacity =1;
	document.getElementById('medium2').style.opacity =0.5;
	document.getElementById('high2').style.opacity =0.5;
	answers.push(answer4);
}
}
function saveanswer22(answer4,answer5,answer6){
	answer4 = false;
	answer5=true;
	answer6=false;
	if(answer5){
	document.getElementById('low2').style.opacity =0.5;
	document.getElementById('medium2').style.opacity =1;
	document.getElementById('high2').style.opacity =0.5;
	answers.push(answer5);
	}
}
function saveanswer32(answer4,answer5,answer6){
	answer4=false;
	answer5=false;
	answer6=true;
	if(answer6){
	document.getElementById('high2').style.opacity =1;
	document.getElementById('low2').style.opacity =0.5;
	document.getElementById('medium2').style.opacity =0.5;
	answers.push(answer6);
	}
}


//answers of question 3

function saveanswer13(answer7,answer8,answer9){
	answer7 = true;
	answer8=false;
	answer9=false;
	if(answer7){
	document.getElementById('low3').style.opacity =1;
	document.getElementById('medium3').style.opacity =0.5;
	document.getElementById('high3').style.opacity =0.5;
	answers.push(answer7);
}
}
function saveanswer23(answer7,answer8,answer9){
	answer7 = false;
	answer8=true;
	answer9=false;
	if(answer8){
	document.getElementById('low3').style.opacity =0.5;
	document.getElementById('medium3').style.opacity =1;
	document.getElementById('high3').style.opacity =0.5;
	answers.push(answer8);
	}
}
function saveanswer33(answer7,answer8,answer9){
	answer7=false;
	answer8=false;
	answer9=true;
	if(answer9){
	document.getElementById('high3').style.opacity =1;
	document.getElementById('low3').style.opacity =0.5;
	document.getElementById('medium3').style.opacity =0.5;
	answers.push(answer9);
	}
}

function alert_message(){
	alert("Gracias por sus respuestas.");
  }
  function refresh(){
	setInterval(location.reload(),60000);
  }

  $('.btn2').click(function(){
	$('.toggle').children('.btn2').toggleClass('active')
  });