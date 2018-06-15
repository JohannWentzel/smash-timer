// Sources: 
// particlesJS - https://vincentgarreau.com/particles.js/
// Timer code - https://www.w3schools.com/howto/howto_js_countdown.asp

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var releaseDate = new Date("Dec 7, 2018").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    
    var distance = releaseDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timetext").innerHTML = days + " DAYS<br>" + hours + " HOURS<br>" + minutes + " MINUTES<br>" + seconds + " SECONDS";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timetext").innerHTML = "IT'S OUT";
    }
}, 1000)