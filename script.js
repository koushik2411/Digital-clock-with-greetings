function updateClock() {
    const now = new Date();

    //time
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hrs = hrs<10 ?"0"+hrs:hrs;
    min = min<10 ?"0"+min:min;
    sec = sec<10 ?"0"+sec:sec;

    const timeString = `${hrs}:${min}:${sec}`;
    document.getElementById("clock").textContent = timeString;

    //date
    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    const dateString = `${day<10?"0"+day:day}/${month<10?"0"+month:month}/${year<10?"0"+year:year}`;
    document.getElementById("date").textContent = dateString;

    //greeting
    const greeting = getGreeting(now.getHours());
    document.getElementById("greeting").textContent = greeting;
}

//greeting logic
function getGreeting(hrs){
    if(hrs>=5 && hrs<12) return "🌞 Good Morning!";
    else if(hrs>=12 && hrs<17) return "☀️ Good Afternoon!";
    else if(hrs>=17 && hrs<21) return "🌇 Good Evening!";
    else return "🌛 Good Night!";
}

setInterval(updateClock,1000);
updateClock();