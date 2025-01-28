document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is fully loaded!");

    let game;

    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", () => {
            console.log("Start Game");
            game = new Game(); // Initialize the game instance when the button is clicked
            game.start();
        });
    } else {
        console.error("Start button not found in the DOM.");
    }
});
