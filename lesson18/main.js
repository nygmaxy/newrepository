const currentYear = new Date().getFullYear(); 
 
const nextYear = new Date(`7 june ${currentYear + 1} 00:00:00`); 



function realTime(){
    let time = new Date();
    let getYear = time.getFullYear();
    let getMonth = time.getMonth();
    let getHours = time.getHours();
    let getMinutes = time.getMinutes();
    let getSeconds = time.getSeconds();

    document.getElementById('year').innerHTML = getYear;
    document.getElementById('month').innerHTML = getMonth < 10 ? '0' + getMonth : getMonth;
    document.getElementById('hours').innerHTML = getHours < 10 ? '0' + getHours : getHours;
    document.getElementById('minute').innerHTML = getMinutes < 10 ? '0' + getMinutes : getMinutes;
    document.getElementById('second').innerHTML = getSeconds < 10 ? '0' + getSeconds : getSeconds;
}
realTime();
setInterval(() => {'0990'
    realTime();
},1000);
 
 
function updateCounter(){ 
    let currentTime = new Date(); 
    let diff =  nextYear - currentTime; 
 
    const daysleft = Math.floor(diff / 1000 / 60 / 60 / 24); 
 
    const hoursleft = Math.floor(diff / 1000 / 60 / 60) % 24; 
 
    const minutesleft = Math.floor(diff / 1000 / 60) % 24; 
 
    const secondsleft = Math.floor(diff / 1000) % 60; 
 
    document.getElementById('days').innerHTML = daysleft; 
    document.getElementById('hours').innerHTML = hoursleft; 
    document.getElementById('minutes').innerHTML = minutesleft < 10 ? '0' + minutesleft : minutesleft; 
    document.getElementById('seconds').innerHTML = secondsleft < 10 ? '0' + secondsleft : secondsleft; 
} 
 
updateCounter(); 
setInterval(() => { 
    updateCounter() 
},1000);

function nextYear2(){ 
    let currentYear = new Date(); 
    let diff2 = currentYear -  nextYearJuly; 
 
    const daysleft2 = Math.floor(diff2 / 1000 / 60 / 60 / 24); 
    const hoursleft2 = Math.floor(diff2 / 1000 / 60 / 60) % 24; 
    const minutesleft2 = Math.floor(diff2 / 1000 / 60 ) % 24; 
    const secondsleft2 =  Math.floor(diff2 / 1000) % 60; 
 
    document.getElementById('nextdays').innerHTML = daysleft2; 
    document.getElementById('nexthours').innerHTML = hoursleft2; 
    document.getElementById('nextminutes').innerHTML = minutesleft2; 
    document.getElementById('nextseconds').innerHTML = secondsleft2; 
 
} 
 
nextYear2(); 
setInterval(() => { 
    nextYear2(); 
})
