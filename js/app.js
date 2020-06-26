var firebaseConfig = {
    apiKey: "AIzaSyDZ85dHjEzBhF1KBjMWpwnP1jnnTfnthB4",
    authDomain: "peoplerecognition-56364.firebaseapp.com",
    databaseURL: "https://peoplerecognition-56364.firebaseio.com",
    projectId: "peoplerecognition-56364",
    storageBucket: "peoplerecognition-56364.appspot.com",
    messagingSenderId: "447006734455",
    appId: "1:447006734455:web:31277f91cd72b5d7c8ae72",
    measurementId: "G-HJN3FSVTP9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();











document.getElementById('buttonid').addEventListener('click', openDialog);

                function openDialog() {
                    document.getElementById('fileid').click();
            }



var uploadImage =document.getElementById('fileid')
var BtnImage =document.getElementById('buttonid')



uploadImage.addEventListener('change', function(up){
    
    const ref = firebase.storage().ref();
    const file = document.getElementById("fileid").files[0];
    const name = 'face.jpg';
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)
    

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url =>{
        console.log(url)
        
        
        
        
    })
});






uploadImage.addEventListener('change', function(up){
    
    const ref = firebase.storage().ref();
    const file = document.getElementById("fileid").files[0];
    const name = 'face.jpg';
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)
    

    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url =>{
        console.log(url)
        
        
        
        
    })
});


function heloadimage(){
    var Frame = document.getElementById("FrameNew")
    setTimeout(function(){BtnImage.style.display="none"}, 1000);
    setTimeout(function(){Frame.style.display="flex"}, 3000);

    
}
function YTLoad(){
    
    var Youtube= document.getElementById("ytplayer")
    var btnNext= document.getElementById("nextbutton")
    var about= document.getElementById("about")

    setTimeout(function(){Youtube.style.display="flex"}, 2000);
    setTimeout(function(){btnNext.style.display="table-cell"}, 2000);
    setTimeout(function(){about.style.display="none"}, 1800);
};

function sitymapload(){
    var map= document.getElementById("map")
    var shopnear= document.getElementById("ShopNear")
    var next = document.getElementById("next")
    var Delivery = document.getElementById("Delivery")
    

    
    setTimeout(function(){map.style.display="flex"}, 2400);
    setTimeout(function(){next.style.display="table-cell"}, 2400);
    setTimeout(function(){Delivery.style.display="table-cell"}, 2400);
    setTimeout(function(){shopnear.style.display="none"}, 2200);
};

function makevis(){
    var next= document.getElementById("Next")
    next.style.display="table-cell"
}

var startup = document.getElementById("StartLoadBtn")


function showhowtophoto(){
     var howphoto = document.getElementById("howphoto")
     howphoto.style.display="flex"
     setTimeout(function(){howphoto.style.display='none'}, 3000);

}




function Deliverymessage(){
    var msg =document.getElementById('deliverymessage') 
     msg.style.display='flex'
    setTimeout(function(){msg.style.display='none'}, 3500);
}

 
function ScrollDown(){
    
    window.scrollBy(0, 1300)
    
}

function skipshow(){
    var skip = document.getElementById('skipbtn')
    setTimeout(function(){skip.style.display='none'}, 3500);

}
