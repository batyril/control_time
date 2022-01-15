import {UI_ELEMETS} from "../js/view.js";

let today = new Date();
today.setMonth(1);
today.setDate(10);
today.setHours(16, 0, 0)


UI_ELEMETS.BUTTON_START.addEventListener('click', test)
function test(){
    window.setInterval(timer, 1000);
    function timer() {
        today.setSeconds(today.getSeconds() - 1);
        UI_ELEMETS.SECONDS.textContent = today.getSeconds();
        UI_ELEMETS.MINUTES.textContent = today.getMinutes();
        UI_ELEMETS.HOURS.textContent = today.getHours();
        UI_ELEMETS.DAYS.textContent = today.getDate();
        UI_ELEMETS.MONTH.textContent = today.getMonth();
    }
}

UI_ELEMETS.BUTTON_STOP.addEventListener('click', test2)
function test2(){
    console.log('-')
}


