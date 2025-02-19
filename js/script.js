document.addEventListener("DOMContentLoaded", () => {

    console.log("The DOM is fully loaded!");
    
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const finishButton = document.getElementById("finish-button");

    let game;

    if (startButton) {
        startButton.addEventListener("click", () => {
            console.log("Start Game");
            game = new Game(); // Initialize the game instance when the button is clicked
            game.start();
        });
    } else {
        console.error("Start button not found in the DOM.");
    }

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            window.location.reload();
    });
}

    

if (finishButton) {
    finishButton.addEventListener("click", () => {
        console.log("Finish Game");
        if (game) {
            game.endGame(); // End the game properly
        }
    });
} else {
    console.error("Finish button not found in the DOM.");
}
});
