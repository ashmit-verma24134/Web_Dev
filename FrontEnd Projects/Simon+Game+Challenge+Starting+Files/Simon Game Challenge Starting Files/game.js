var gamePattern=[];
var buttoncolors=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var started=false;
var level=0;

$(document).on("keydown",function (){
    if(!started){
        $("#level-title").text("Level " + level); 

        nextsequence();
        started=true;
    }
});



$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatepress(userChosenColour);
    checkanswer(userClickedPattern.length-1);
  
});


function nextsequence(){
    userClickedPattern = [];
    var randomnumber=Math.random();
    randomnumber=randomnumber*4;
    randomnumber=Math.floor(randomnumber);
    var randomChosenColour = buttoncolors[randomnumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("#level-title").text("Level "+level);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

function playsound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatepress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");

    },100);
}

function checkanswer(currentlevel){
    if(userClickedPattern[currentlevel]==gamePattern[currentlevel]){
        console.log("Success");
        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function (){
                nextsequence();
            },1000);
        }
    }
    else{
        console.log("Wrong");
        var wrong=new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
    }
}

function startover(){
    level=0;
    gamePattern=[];
    started=false;
    
}
