<script>

</script>function myFunction() {
    var container = document.getElementsByClassName('container')[0]; // because function returns a list
    container.classList.toggle('dark-mode');
    // no need to define a click function here because the button already has one defined
    // in the HTML already
    /* element.classList.toggle("dark-mode");$("button").click(function(){
        $("img").toggleClass("hidden");
    }); */
 
   
   // this is another way to refer to an element 
   var image = document.getElementById('image');
   image.classList.toggle('hidden');
 }
 </script> 
 