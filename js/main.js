import {UI_ELEMENTS} from "../js/view.js";

let id_timer = undefined;
let counter = 0;
let today = new Date();


let base_time = {
    month: 1,
    data: 10,
    hours: 16,
    minutes: 0,
    sec: 0,
}

if(localStorage.getItem('seconds') || localStorage.getItem('minutes') || localStorage.getItem('hours' || localStorage.getItem('minutes') || +localStorage.getItem('seconds') )){
    base_time.month = +localStorage.getItem('month');
    base_time.data = +localStorage.getItem('days');
    base_time.hours = +localStorage.getItem('hours');
    base_time.minutes = +localStorage.getItem('minutes');
    base_time.sec = +localStorage.getItem('seconds');

}

if(localStorage.getItem('seconds') || localStorage.getItem('minutes') || localStorage.getItem('hours' || localStorage.getItem('minutes') || +localStorage.getItem('seconds') )){
    UI_ELEMENTS.MONTH.textContent = localStorage.getItem('month');
    UI_ELEMENTS.DAYS.textContent = localStorage.getItem('days');
    UI_ELEMENTS.HOURS.textContent = localStorage.getItem('hours');
    UI_ELEMENTS.MINUTES.textContent = localStorage.getItem('minutes');
    UI_ELEMENTS.SECONDS.textContent = localStorage.getItem('seconds');

}

function assign_data( month = base_time.month, data = base_time.data, hours = base_time.hours, minutes = base_time.minutes, sec = base_time.sec){
    today.setMonth(month);
    today.setDate(data);
    today.setHours(hours, minutes, sec);
}


UI_ELEMENTS.INPUT_BUTTON.addEventListener('click', function(){
    event.preventDefault();
    
    base_time.month = UI_ELEMENTS.INPUT_MONTH.value;
    base_time.data = UI_ELEMENTS.INPUT_DATE.value;
    base_time.hours = UI_ELEMENTS.INPUT_HOURS.value;
    base_time.minutes = UI_ELEMENTS.INPUT_MINUTES.value;
    base_time.sec = 0;
    
    UI_ELEMENTS.FORM.reset()

    localStorage.clear();
})

UI_ELEMENTS.BUTTON_START.addEventListener('click', starting_timer)
function starting_timer(){
    assign_data();
    id_timer = setInterval(timer, 1000);
    function timer() {
        today.setSeconds(today.getSeconds() - 1);

/*        if(localStorage.getItem('counter_timer')){
            counter = +localStorage.getItem('counter_timer')
        }

            counter = counter + 1;*/


        UI_ELEMENTS.SECONDS.textContent = today.getSeconds();
        UI_ELEMENTS.MINUTES.textContent = today.getMinutes();
        UI_ELEMENTS.HOURS.textContent = today.getHours();
        UI_ELEMENTS.DAYS.textContent = today.getDate();
        UI_ELEMENTS.MONTH.textContent = today.getMonth();

        localStorage.setItem('seconds', today.getSeconds());
        localStorage.setItem('minutes', today.getMinutes());
        localStorage.setItem('hours', today.getHours());
        localStorage.setItem('days', today.getDate());
        localStorage.setItem('month', today.getMonth());


/*        localStorage.setItem( 'counter_timer', counter);*/
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

/*
if(localStorage.getItem('counter_timer')){
    today.setSeconds(today.getSeconds() - +localStorage.getItem('counter_timer'));
}
*/




