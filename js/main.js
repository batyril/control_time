import {UI_ELEMETS} from "../js/view.js";

let id_timer = undefined;
let counter = 0;
let today = new Date();
today.setMonth(1);
today.setDate(10);
today.setHours(16, 0, 0)



UI_ELEMETS.BUTTON_START.addEventListener('click', starting_timer)
function starting_timer(){
    id_timer = setInterval(timer, 1000);
    function timer() {
        today.setSeconds(today.getSeconds() - 1);

        if(localStorage.getItem('counter_timer')){
            counter = +localStorage.getItem('counter_timer')
        }

            counter = counter + 1;

        UI_ELEMETS.SECONDS.textContent = today.getSeconds();
        UI_ELEMETS.MINUTES.textContent = today.getMinutes();
        UI_ELEMETS.HOURS.textContent = today.getHours();
        UI_ELEMETS.DAYS.textContent = today.getDate();
        UI_ELEMETS.MONTH.textContent = today.getMonth();
        localStorage.setItem( 'counter_timer', counter);
    }
    console.log(counter);
    UI_ELEMETS.BUTTON_START.disabled = true
}

UI_ELEMETS.BUTTON_STOP.addEventListener('click',  stopping_timer)
function stopping_timer(){
    clearInterval(id_timer);
    console.log(id_timer);
}


if(localStorage.getItem('counter_timer')){
    today.setSeconds(today.getSeconds() - +localStorage.getItem('counter_timer'));
}
