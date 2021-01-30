const play = document.querySelector("#play-now");
play.addEventListener('click', playNew);


function playNew(e) {
    let low = 1;
    let high = 10;
    const correcr_ans = Math.floor(Math.random() * (high - low + 1) + low);
    // console.log(correcr_ans);
    for (let index = 0; index < 3; index++) {
        let guessNumber = prompt(`Enter your ${index+1} guess`);
        if(guessNumber == correcr_ans){
            alert("You Win!");
            break;
        }else if(guessNumber > correcr_ans && index != 2 && guessNumber <= 10){
            alert("Correct answer is smaller!");
        }else if(guessNumber < correcr_ans && index != 2 && guessNumber >= 0){
            alert("Correct answer is greater!");
        }else if(index != 2){
            alert("Please enter a number between 1 and 10");
        }else{
            alert("You lose!");
        }
    }
}