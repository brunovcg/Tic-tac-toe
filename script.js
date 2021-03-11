let cpuwin = document.getElementById("rps-score-cpu");
let playerwin = document.getElementById("rps-score-player");


document.getElementById("rps-rock").onclick = function() {

let choice = document.getElementById("rps-choice-player1");
choice.innerHTML ="Rock";
choice.style.color = "blue"

let rock = document.getElementById("rps-rock");

rock.style.border = "3px";
rock.style.borderColor = "blue";
rock.style.borderStyle = "solid";
rock.style.width = "95%"

let cpu = Math.ceil(Math.random() * 3);

console.log(cpu);

if (cpu == 1) {

    let cpurock = document.getElementById("rps-cpu-rock");
        cpurock.style.display = "block";
        cpurock.style.border = "3px";
        cpurock.style.borderColor = "red";
        cpurock.style.borderStyle = "solid";
        cpurock.style.width = "95%";

    let choicecpu = document.getElementById("rps-choice-cpu");
        choicecpu.innerHTML ="Rock";
        choicecpu.style.color = "red";

    let winner = document.getElementById("rps-winner");
        winner.innerHTML = "Game Tie";  


} else if (cpu == 2) {

    let cpupaper = document.getElementById("rps-cpu-paper")
    cpupaper.style.display = "block";
    cpupaper.style.border = "3px";
    cpupaper.style.borderColor = "red";
    cpupaper.style.borderStyle = "solid";
    cpupaper.style.width = "95%";

    let choicecpu = document.getElementById("rps-choice-cpu");
        choicecpu.innerHTML ="Paper";
        choicecpu.style.color = "red"

    let winner = document.getElementById("rps-winner");
    winner.innerHTML = "You Lose!";  
   
    let current = Number(cpuwin.textContent);
    cpuwin.textContent = current + 1;



} else {
    let cpuscissors = document.getElementById("rps-cpu-scissors")
    cpuscissors.style.display = "block";
    cpuscissors.style.border = "3px";
    cpuscissors.style.borderColor = "red";
    cpuscissors.style.borderStyle = "solid";
    cpuscissors.style.width = "95%";

    let choicecpu = document.getElementById("rps-choice-cpu");
        choicecpu.innerHTML ="Scissors";
        choicecpu.style.color = "red"

    let winner = document.getElementById("rps-winner");
    winner.innerHTML = "You Win!";  

let current = Number(playerwin.textContent);
playerwin.textContent = current + 1;

}

let resultado = document.getElementById("rps-result")
    resultado.style.display = "block";



} 

// Parte2----------------------------------------------------------------

document.getElementById("rps-paper").onclick = function() {

    let choice = document.getElementById("rps-choice-player1");
    choice.innerHTML ="Paper";
    choice.style.color = "blue"
    
    let paper = document.getElementById("rps-paper");
    
    paper.style.border = "3px";
    paper.style.borderColor = "blue";
    paper.style.borderStyle = "solid";
    paper.style.width = "95%";
    
    let cpu = Math.ceil(Math.random() * 3);
    
    console.log(cpu);
    
    if (cpu == 1) {
    
        let cpurock = document.getElementById("rps-cpu-rock");
            cpurock.style.display = "block";
            cpurock.style.border = "3px";
            cpurock.style.borderColor = "red";
            cpurock.style.borderStyle = "solid";
            cpurock.style.width = "95%";
    
        let choicecpu = document.getElementById("rps-choice-cpu");
            choicecpu.innerHTML ="Rock";
            choicecpu.style.color = "red";
    
        let winner = document.getElementById("rps-winner");
            winner.innerHTML = "You Win!";  

        let current = Number(playerwin.textContent);
        playerwin.textContent = current + 1;
    
    
    } else if (cpu == 2) {
    
        let cpupaper = document.getElementById("rps-cpu-paper")
        cpupaper.style.display = "block";
        cpupaper.style.border = "3px";
        cpupaper.style.borderColor = "red";
        cpupaper.style.borderStyle = "solid";
        cpupaper.style.width = "95%";
    
        let choicecpu = document.getElementById("rps-choice-cpu");
            choicecpu.innerHTML ="Paper";
            choicecpu.style.color = "red"
    
        let winner = document.getElementById("rps-winner");
        winner.innerHTML = "Game Tie";  
    
    } else {
        let cpuscissors = document.getElementById("rps-cpu-scissors")
        cpuscissors.style.display = "block";
        cpuscissors.style.border = "3px";
        cpuscissors.style.borderColor = "red";
        cpuscissors.style.borderStyle = "solid";
        cpuscissors.style.width = "95%";
    
        let choicecpu = document.getElementById("rps-choice-cpu");
            choicecpu.innerHTML ="Scissors";
            choicecpu.style.color = "red"
    
        let winner = document.getElementById("rps-winner");
        winner.innerHTML = "You Lose!";  

        let current = Number(cpuwin.textContent);
        cpuwin.textContent = current + 1;
    }
    
    let resultado = document.getElementById("rps-result")
        resultado.style.display = "block";
    
    } 

    // Parte3----------------------------------------------------------------

    document.getElementById("rps-scissors").onclick = function() {

        let choice = document.getElementById("rps-choice-player1");
        choice.innerHTML ="Scissors";
        choice.style.color = "blue"
        
        let scissors = document.getElementById("rps-scissors");
        
        scissors.style.border = "3px";
        scissors.style.borderColor = "blue";
        scissors.style.borderStyle = "solid";
        scissors.style.width = "95%"
        
        let cpu = Math.ceil(Math.random() * 3);
        
        console.log(cpu);
        
        if (cpu == 1) {
        
            let cpurock = document.getElementById("rps-cpu-rock");
                cpurock.style.display = "block";
                cpurock.style.border = "3px";
                cpurock.style.borderColor = "red";
                cpurock.style.borderStyle = "solid";
                cpurock.style.width = "95%";
        
            let choicecpu = document.getElementById("rps-choice-cpu");
                choicecpu.innerHTML ="Rock";
                choicecpu.style.color = "red";
        
            let winner = document.getElementById("rps-winner");
                winner.innerHTML = "You Lose!";  

                let current = Number(cpuwin.textContent);
                cpuwin.textContent = current + 1;
        
        
        } else if (cpu == 2) {
        
            let cpupaper = document.getElementById("rps-cpu-paper")
            cpupaper.style.display = "block";
            cpupaper.style.border = "3px";
            cpupaper.style.borderColor = "red";
            cpupaper.style.borderStyle = "solid";
            cpupaper.style.width = "95%";
        
            let choicecpu = document.getElementById("rps-choice-cpu");
                choicecpu.innerHTML ="Paper";
                choicecpu.style.color = "red"
        
            let winner = document.getElementById("rps-winner");
            winner.innerHTML = "You Win!";  

            let current = Number(playerwin.textContent);
            playerwin.textContent = current + 1;
        
        } else {
            let cpuscissors = document.getElementById("rps-cpu-scissors")
            cpuscissors.style.display = "block";
            cpuscissors.style.border = "3px";
            cpuscissors.style.borderColor = "red";
            cpuscissors.style.borderStyle = "solid";
            cpuscissors.style.width = "95%";
        
            let choicecpu = document.getElementById("rps-choice-cpu");
                choicecpu.innerHTML ="Scissors";
                choicecpu.style.color = "red"
        
            let winner = document.getElementById("rps-winner");
            winner.innerHTML = "Game Tie";  
        }
        
        let resultado = document.getElementById("rps-result")
            resultado.style.display = "block";
        
        } 

        // parte 4 ----------------------------------------

    document.getElementById("rps-result").onclick = function() {

        let resultado = document.getElementById("rps-result")
            resultado.style.display = "none";
    

        let choice = document.getElementById("rps-choice-player1");
            choice.innerHTML ="Choose";
            choice.style.color = "gray";

        let choicecpu = document.getElementById("rps-choice-cpu");
            choicecpu.innerHTML ="Choose";
            choicecpu.style.color = "gray";


        let scissors = document.getElementById("rps-scissors");
            scissors.style.border = "1px";
            scissors.style.borderColor = "grey";
            scissors.style.borderStyle = "solid";
            scissors.style.width = "100%";

        let rock = document.getElementById("rps-rock");
            rock.style.border = "1px";
            rock.style.borderColor = "grey";
            rock.style.borderStyle = "solid";
            rock.style.width = "100%";

        let paper = document.getElementById("rps-paper");
            paper.style.border = "1px";
            paper.style.borderColor = "grey";
            paper.style.borderStyle = "solid";
            paper.style.width = "100%";

        let cpurock = document.getElementById("rps-cpu-rock");
            cpurock.style.display = "none";
            cpurock.style.border = "none";
            cpurock.style.width = "95%";

        let cpuscissors = document.getElementById("rps-cpu-scissors")
            cpuscissors.style.display = "none";
            cpuscissors.style.border = "none";
            cpuscissors.style.width = "95%";

        let cpupaper = document.getElementById("rps-cpu-paper")
            cpupaper.style.display = "none";
            cpupaper.style.border = "none";
            cpupaper.style.width = "95%";

    }

    document.getElementById("rps-reset-score").onclick = function() {

        cpuwin.textContent = 0;
        playerwin.textContent = 0;

    }



