
for(var i=0; i<7;i++)

{
document.querySelectorAll("button")[i].addEventListener("click", function() {

     var clickedButton = this.innerHTML;
     soundPlay(clickedButton);
     buttonAnimation(clickedButton);

   }
 );
}




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
