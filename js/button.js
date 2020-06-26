/*fill="rgb(36,36,36)" fill-opacity="0.16" */
var theme = 1 /*1 это темная тема*/
function changeTheme(){
    if (theme == 1){
       document.getElementById(1).style.animation="decrease 1s linear "
       setTimeout(function(){document.getElementById(2).style.fill="F2CE40"}, 1000);
       setTimeout(function(){document.getElementById(1).style.display="none"}, 1000);
       setTimeout(function(){document.getElementById(3).style.fill="rgb(254,253,248)"}, 1000);
       setTimeout(function(){document.getElementById(4).style.display="flex"}, 1000); 
       var text = document.getElementById("text");
       text.style.color="#000000";
       var about = document.getElementById("about");
       about.style.background="#ffffff";
       about.style.color="#000000";
       theme = 2
    } else {
        
        document.getElementById(1).style.animation="grow 1s linear "
        setTimeout(function(){document.getElementById(1).style.display="flex"}, 1000);
        setTimeout(function(){document.getElementById(4).style.display="none"}, 1000); 
        setTimeout(function(){document.getElementById(3).style.fill="rgb(36,36,36)"}, 1000);
        setTimeout(function(){document.getElementById(2).style.fill="rgb(255,255,255)"}, 1000);
        theme = 1
        
    }
function changeColor(){
   if (theme == 1){
      
    } else {

       
    }
}
function overlayon(){

}     
    
    
}
