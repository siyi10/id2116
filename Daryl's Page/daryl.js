
var i = 0;
var txt = 'Roses are red. Violets are blue. Coding is awesome. And so are you';
var speed = 50;

function myFunction() {
    var container = document.getElementsByClassName('container')[0]; 
    container.classList.toggle('dark-mode');

   var image = document.getElementById('image');
   image.classList.toggle('hidden');

   var href = document.getElementById("link");
   href.style.display = 'block';

txt.fontcolor( "white");

  if (i < txt.length) {
    document.getElementById("firstp").innerHTML += txt.charAt(i);
    i++;
    setTimeout(myFunction, speed);
  }
}