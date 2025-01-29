 class Timer {
    constructor() {
        this.timer = 0; 
        this.intervalID = null;
    }

    startTimer() {
        if (this.intervalID !== null) return; // Evita iniciar múltiples intervalos

        this.intervalID = setInterval(() => {
            this.timer++;
            document.getElementById("timer").textContent = this.timer; // Mostrar en la UI
            console.log(`Tiempo: ${this.timer} segundos`);

            // Si llega a 120 segundos, detener el juego
            if (this.timer >= 5) {
                this.stopTimer();
                if (this.onTimeUp) this.onTimeUp(); // Llamar al callback si existe
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


