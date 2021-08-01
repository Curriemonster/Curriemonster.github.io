// I have a constant error of document is not defned which im unable to trace back

// DOM Elements 
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    user = document.getElementById('user'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set AM or PM
    let amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format - the console in browser suggests there is an issue with this hour not being defined.

    hour = hour % 12 || 00;

    // output time
    time.innerHTML = `${hour}<span> : </span>${addZero(min)}<span> : </span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting - I have to assume that this code is correct, as the scrip fails to run any further than the first error.
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.innerHTML = 'Good Morning';
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('img/noon.jpg')";
        greeting.innerHTML = 'Good Afternoon';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.innerHTML = 'Good Evening';
        document.body.style.color = 'white';
    }
}


//Get Name
function getName() {
    if (localStorage.getItem('user') === null) {
        user.textcontent = '[Enter user Name]';
    } else {
        user.textcontent = localStorage.getitem('user');
    }
}

//Get todo
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textcontent = '[enter focus]';
    } else {
        todofocus.textcontent = localStorage.getitem('focus');
    }
}



//Need to add code to allow details to be saved on local storage.


//Run
showTime();
setBgGreet();
getName();
getFocus();