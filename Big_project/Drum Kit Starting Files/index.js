var number_of_buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<number_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",hero);
    function hero(){
        buttoninner=this.innerHTML;
        makesound(buttoninner);
        animation(buttoninner);

   
}};
document.addEventListener("keydown",function (event){
    makesound(event.key);
    animation(event.key);
});


function makesound(key){
         switch (key) {
            case "w":
                var tom_1=new Audio("./sounds/tom-1.mp3");
                tom_1.play();
                
                break;
            case "a":
                var tom_2=new Audio("./sounds/tom-2.mp3");
                tom_2.play();
                break;
            case "s":
                var tom_3=new Audio("./sounds/tom-3.mp3");
                tom_3.play();
                break;
            case "d":
                var tom_4=new Audio("./sounds/tom-4.mp3");
                tom_4.play();
                break;
            case "j":
                var kick=new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            case "k":
                var crash=new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var snare=new Audio("./sounds/snare.mp3");
                snare.play();
                break;

        
            default:
                break;
        }
    }

function animation(currentkey){
    var active=document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");
    },100);
}
