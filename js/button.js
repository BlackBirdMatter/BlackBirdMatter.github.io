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
       var text1 = document.getElementById("THowToUse");
       var text2 = document.getElementById("THowToUse2");
       var text3 = document.getElementById("THowToUse3");
       var text4 = document.getElementById("TReady");
       var text5 = document.getElementById("TReady2");
       var text6 = document.getElementById("TEmail");
       var div = document.getElementById("DHowToUse");
       var div2 = document.getElementById("DHowToUse2");
       var div3 = document.getElementById("DHowToUse3");
       var div4 = document.getElementById("DReady");
       var div5 = document.getElementById("DEmail");
       text.style.color="#000000";
       var about = document.getElementById("about");
       about.style.background="#ffffff";
       about.style.color="#000000";
       text1.style.color="black"
       div.style.background="#ffffff";
       div2.style.background="#ffffff";
       div3.style.background="#ffffff";
       div4.style.background="#ffffff";
       text2.style.color="#000000"
       text3.style.color="#000000"
       text4.style.color="#000000"
       text5.style.color="#000000"
       text6.style.color="#000000"
       div5.style.background="#ffffff";
       

       theme = 2
    } else {
        
        document.getElementById(1).style.animation="grow 1s linear "
        setTimeout(function(){document.getElementById(1).style.display="flex"}, 1000);
        setTimeout(function(){document.getElementById(4).style.display="none"}, 1000); 
        setTimeout(function(){document.getElementById(3).style.fill="rgb(36,36,36)"}, 1000);
        setTimeout(function(){document.getElementById(2).style.fill="rgb(255,255,255)"}, 1000);
        var text = document.getElementById("text");
       var text1 = document.getElementById("THowToUse");
       var text2 = document.getElementById("THowToUse2");
       var text3 = document.getElementById("THowToUse3");
       var text4 = document.getElementById("TReady");
       var text5 = document.getElementById("TReady2");
       var text6 = document.getElementById("TEmail");
       var div = document.getElementById("DHowToUse");
       var div2 = document.getElementById("DHowToUse2");
       var div3 = document.getElementById("DHowToUse3");
       var div4 = document.getElementById("DReady");
       var div5 = document.getElementById("DEmail");
       text.style.color="#ffffff";
       var about = document.getElementById("about");
       about.style.background="#000000";
       about.style.color="#ffffff";
       text1.style.color="white"
       div.style.background="#000000";
       div2.style.background="#000000";
       div3.style.background="#000000";
       div4.style.background="#000000";
       text2.style.color="#ffffff"
       text3.style.color="#ffffff"
       text4.style.color="#ffffff"
       text5.style.color="#ffffff"
       text6.style.color="#ffffff"
       div5.style.background="#000000";
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
