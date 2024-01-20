//Elements
const clicks = document.querySelector('.clicks');
const reset = document.querySelector('.reset');
const button = document.querySelector('.button_click');
const time = document.querySelector('.timer');
const text = document.querySelector('.text');
let best = document.querySelector('.results');
let input = document.getElementById('Time');


//Variables

let a = 0;
var seconds = 9;
var timerInterval;
let results = [];
var array;

//Functions
function ChangeTime(){
    var sec = input.value;
    seconds = sec; 
}

button.addEventListener('click', function(){
    clicks.textContent = a++;
    startTimer();
});

reset.addEventListener('click',function(){
    a = 0;
    clicks.textContent = a;
    stopTimer();
    button.disabled = false;
    var sec = input.value;
    seconds = sec;
});

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(function() {
            time.textContent = seconds--;
            if(seconds < 0){
                stopTimer()
                button.disabled = true;
                text.textContent = `Your clicks: ${a - 1}`;
                results.push(a);
                var i;
                var max = 0;
                for(i = 0; i < results.length; i++){
                    if(results[i] > max){
                        max = results[i];
                    }
                }
                best.textContent = `Your best attempt:${max - 1}`;
            }   
        }, 1000);
        
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}


