
function myFunction() {
    var container = document.getElementsByClassName('container')[0]; 
    container.classList.toggle('dark-mode');

   var image = document.getElementById('image');
   image.classList.toggle('hidden');

   var href = document.getElementById("link");
   href.style.display = 'block';
 }

 