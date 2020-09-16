const dateOpt = document.getElementById("date");


function countdown() {
    const newYears = dateOpt.value;

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;

    var days = Math.floor(seconds / 3600 / 24);
    var hours = Math.floor(seconds / 3600) % 24;
    var mins = Math.floor(seconds / 60) % 60;
    var secs = Math.floor(seconds) % 60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
}

// Prepare values
const now = new Date();
dateOpt.innerHTML = '<option value="1 Jan ' + (now.getFullYear() + 1) 
                + '">New Years Eve</option>'
                + '<option value="29 Apr ' + (now.getFullYear() + 1) 
                + '">My Birthdate</option>';

// Execute
countdown();
setInterval(countdown, 1000);
dateOpt.addEventListener("change", countdown)
