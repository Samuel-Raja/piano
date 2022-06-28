
for(var i=0; i<8;i++)

{
document.querySelectorAll("button")[i].addEventListener("click", function() {

     var clickedButton = this.innerHTML;
     soundPlay(clickedButton);
     buttonAnimation(clickedButton);

   }
 );
}

// for multi touch on touch screen

for(var j=0; j<8;j++)

{
document.querySelectorAll("button")[j].addEventListener("touchstart", function() {

     var toucheddButton = this.innerHTML;
     soundPlay(toucheddButton);
     buttonAnimation(toucheddButton);

   }
 );
}


// for moving the finger accross the  key and getting Piano sound simultaniously

// for(var k=0; k<8;k++)
// {
// document.querySelectorAll("button")[k].addEventListener("touchmove", function() {

//      var touchedmove = this.innerHTML;
//      soundPlay(touchedmove);
//      buttonAnimation(touchedmove);

//    }
//  );
// }


document.addEventListener("keydown", function(event){

   var pressedKey= event.key;
   soundPlay(pressedKey);
   buttonAnimation(pressedKey);
});


function soundPlay(clickedButton)
{

  if(clickedButton === "c")
  {
 var audio = new Audio('sounds/key17.mp3');



  }

  if(clickedButton === "d")
  {
 var audio = new Audio('sounds/key18.mp3');

  }

  if(clickedButton === "e")
  {
 var audio = new Audio('sounds/key19.mp3');

  }

  if(clickedButton === "f")
  {
 var audio = new Audio('sounds/key20.mp3');

  }

  if(clickedButton === "g")
  {
 var audio = new Audio('sounds/key21.mp3');

  }

  if(clickedButton === "h")
  {
 var audio = new Audio('sounds/key22.mp3');

  }

  if(clickedButton === "i")
  {
 var audio = new Audio('sounds/key23.mp3');

  }

  if(clickedButton === "j")
  {
 var audio = new Audio('sounds/key24.mp3');

  }



audio.play();

}



function buttonAnimation(key){

  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function () { document.querySelector("."+key).classList.remove("pressed"); } , 100);


}
