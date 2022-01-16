import {UI_ELEMENTS} from "../js/view.js";

let id_timer = undefined;
let counter = 0;
let today = new Date();
today.setMonth(1);
today.setDate(10);
today.setHours(16, 0, 0)



UI_ELEMENTS.BUTTON_START.addEventListener('click', starting_timer)
function starting_timer(){
    id_timer = setInterval(timer, 1000);
    function timer() {
        today.setSeconds(today.getSeconds() - 1);

        if(localStorage.getItem('counter_timer')){
            counter = +localStorage.getItem('counter_timer')
        }

            counter = counter + 1;

        UI_ELEMENTS.SECONDS.textContent = today.getSeconds();
        UI_ELEMENTS.MINUTES.textContent = today.getMinutes();
        UI_ELEMENTS.HOURS.textContent = today.getHours();
        UI_ELEMENTS.DAYS.textContent = today.getDate();
        UI_ELEMENTS.MONTH.textContent = today.getMonth();
        localStorage.setItem( 'counter_timer', counter);
    }
    this.removeEventListener('click', starting_timer);
    this.addEventListener('click',stopping_timer)

    this.textContent = 'СТОП'
    this.style.backgroundColor="#FF0000FF"
}

function stopping_timer(){
    clearInterval(id_timer);
    
    this.removeEventListener('click', stopping_timer);
    this.addEventListener('click',starting_timer)
    
    this.textContent = 'НАЧАТЬ'

    this.style.backgroundColor="#4CAF50"

}


if(localStorage.getItem('counter_timer')){
    today.setSeconds(today.getSeconds() - +localStorage.getItem('counter_timer'));
}
