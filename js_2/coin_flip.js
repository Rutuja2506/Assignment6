var coinFlip= Math.round(Math.random())+1;
var choice=window.prompt("Enter your choice: Heads/Tails");

if(coinFlip==choice){
    if(coinFlip=="Heads"){
        document.write("The flip was heads and you chose heads...you win!");
    }
    else{
        document.write("The flip was heads but you chose tails...you lose!");
    } 
} else { //TAILS
    if (choice == "Tails") {
        window.document.write("The flip was tails but you chose heads...you lose!");
    } else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}
