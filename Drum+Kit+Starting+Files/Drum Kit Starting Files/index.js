// Detects the keyboard press 
var att = document.querySelectorAll(".drum")
for (var i = 0; i < att.length; i++){
    att[i].addEventListener("click", function (){
        var text = this.innerHTML;
        checkCharacter(text);
        buttonAnimation(text);
    });
}

// Detects the button press
document.addEventListener("keypress", function(event) {
    checkCharacter(event.key);
    buttonAnimation(event.key);
})

function checkCharacter(text){
    switch(text) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();        
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();        
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();        
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();        
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();        
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();        
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();        
            break;
        
        default:
            console.log(text)
    } 
}

// Function to add animations
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}