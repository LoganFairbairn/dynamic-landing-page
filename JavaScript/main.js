//DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');

//Show Time
function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();

    //Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${amPM}`;

    setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0' : '') + number;
}

//Sets the Greeting message.
function setGreeting(){
    let today = new Date();
    let hour = today.getHours();
    
    if(hour > 6 && hour <= 12)
    {
        //Morning
        greeting.textContent = 'Good morning';
    } 

    else if(hour > 12 && hour <= 16)
    {
        //Afternoon
        greeting.textContent = 'Good afternoon';
    } 

    else if(hour > 18 && hour <= 21) 
    {
        //Evening
        greeting.textContent = 'Good evening';
    }

    else
    {
        greeting.textContent = 'It is night. You should be sleeping';
    }
}

//Get Name
function getName()
{
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }

    else
    {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e)
{
    if(e.type === 'keypress')
    {
        if(e.which == 13 || e.keyCode == 13)
        {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    
    else(e.type === 'blur')
    {
        localStorage.setItem('name', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//Run
showTime();
setGreeting();
getName();