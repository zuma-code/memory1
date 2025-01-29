 class Timer {
    constructor() {
        this.startScreen= document.getElementById("game-intro");
        this.gameScreen= document.getElementById("game-screen");
        this.gameEndScreen= document.getElementById("game-end");

        this.timer = 60; 
        this.intervalID = null;
    }

    startTimer() {
        if (this.intervalID !== null) return; // Evita iniciar múltiples intervalos

        this.intervalID = setInterval(() => {
            this.timer--;
            document.getElementById("timer").textContent = this.timer; // Mostrar en la UI
            console.log(`Time remaining: ${this.timer} seconds`);

            // Si llega a 120 segundos, detener el juego
            if (this.timer <= 0) {
                this.stopTimer();
                this.startScreen.style.display = "none";
                this.gameScreen.style.display = "none";
                this.gameEndScreen.style.display = "block";
            }
        }, 1000);
    }



    
    stopTimer() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    resetTimer() {
        this.timer = 0;
        document.getElementById("timer").textContent = "0"; // Reiniciar la UI
    }
}


