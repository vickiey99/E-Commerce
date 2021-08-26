
 var counter = 1;
 setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if(counter > 4){
         counter = 1;
     }
 } ,5000);/*Shows that every image is given 5 seconds before the next is visible*/
 