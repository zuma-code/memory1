 class Game {
    constructor() {
        this.startScreen= document.getElementById("game-intro");
        this.gameScreen= document.getElementById("game-screen");
        this.gameEndScreen= document.getElementById("game-end");
       
     
        this.checkArray = [];
        this.idCheck = [];
        this.counter = 0;
        this.end = 0;
        this.gameIsOver = false;
        this.fields = document.querySelectorAll(".back");
        this.natureSound = new Audio("http://k003.kiwi6.com/hotlink/2ai7iwz2j6/nature.mp3");
        this.spark = new Audio("http://k003.kiwi6.com/hotlink/qdpr7bioht/spark.mp3");
        this.win = new Audio("http://k003.kiwi6.com/hotlink/eptlrqspgk/win.mp3");
        this.images = [
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692132/ananas_uukegu.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/apple_khwnkz.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/apricot_bvge7o.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/banana_xks3tr.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/cake_pqvm0z.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/cherry_gtzbks.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/grapes_wshdtl.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/lemon_hfksjg.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/pear_vdpyqc.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/plum_rncxxc.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/strawberry_yr6sa1.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692134/watermelon_wfzuz8.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692132/ananas_uukegu.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/apple_khwnkz.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/apricot_bvge7o.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/banana_xks3tr.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/cake_pqvm0z.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/cherry_gtzbks.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/grapes_wshdtl.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/lemon_hfksjg.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/pear_vdpyqc.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/plum_rncxxc.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692133/strawberry_yr6sa1.png",
            "https://res.cloudinary.com/nikola1970/image/upload/v1456692134/watermelon_wfzuz8.png"
        ];
        this.init();
     
    }

    init() {

        this.startScreen.style.display = "block";
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "none";
    }

    start() {
        
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block" ;
        this.gameEndScreen.style.display = "none";

        const fields = document.querySelectorAll(".field");
        fields.forEach(field => {
            field.addEventListener("click", this.clicked.bind(this));
        });
        
        this.startGame();
    }


    clicked(event) {
        const target = event.currentTarget;

        // Check if the element with the class "inner-wrap" has the "flipped" class
        const innerWrap = target.querySelector(".inner-wrap");
        if (innerWrap.classList.contains("flipped")) {
            return;
        }

        // Toggle the "flipped" class on the element with the class "inner-wrap"
        innerWrap.classList.toggle("flipped");

        // Add the `src` attribute of the <img> tag to `this.checkArray`
        const imgSrc = innerWrap.querySelector("img").getAttribute("src");
        this.checkArray.push(imgSrc);

        // Add the `id` attribute of the clicked element to `this.idCheck`
        const targetId = target.getAttribute("id");
        this.idCheck.push(targetId);

        // Call the `check` method
        this.check();
    }

   
    
    restart(){
     /*   $(".back").find("img").remove();
        $(".field .inner-wrap").removeClass("flipped");
        this.checkArray = [];
        this.idCheck = [];
        this.counter = 0;
        this.end = 0;*/
        this.startGame();
    }
 
    

    checkEnd() {
        if (this.end === 24) {
            this.win.play();
            alert("Game is over! Your score is " + this.counter);
            this.restart();
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startGame() {
        //this.natureSound.play();
        const arr = this.shuffleArray(this.images);
        for (let i = 0; i < this.fields.length; i++) {
            const img = document.createElement("img");
            img.src = arr[i];
            this.fields[i].appendChild(img);
        }
        console.log("Game started!");
         const timer = new Timer();
         timer.timer
        timer.startTimer();
        console.log(timer.timer);
        
        
   }

    check() {
        if (this.checkArray.length === 2) {
            // Temporarily disable clicking on the fields
            document.querySelectorAll(".field").forEach(field => {
                field.removeEventListener("click", this.clickedBound);
            });

            setTimeout(() => {
                const [firstImage, secondImage] = this.checkArray;
                const [firstId, secondId] = this.idCheck;

                if (firstImage !== secondImage) {
                    // Flip back the unmatched cards
                    document.getElementById(firstId).querySelector(".inner-wrap").classList.remove("flipped");
                    document.getElementById(secondId).querySelector(".inner-wrap").classList.remove("flipped");
                    this.counter++;
                } else {
                    // Match found: play the sound and update the game state
                   // this.spark.play();
                    this.counter++;
                    this.end += 2;
                    this.checkEnd(); // Check if the game has ended
                }

                // Reset tracking arrays
                this.checkArray = [];
                this.idCheck = [];

                // Re-enable clicking on the fields
                document.querySelectorAll(".field").forEach(field => {
                    field.addEventListener("click", this.clickedBound);
                });

                // Update the counter in the UI
                document.querySelector(".counter").innerHTML = this.counter;
            }, 800);
        }
    }

    endGame() {
        this.gameIsOver = true;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "flex";
        this.timer.stopTimer(); // Detener el temporizador
        this.timer.onTimeUp = () => this.endGame();

        alert("¡Se acabó el tiempo! Fin del juego."); 
        console.log('Final time: ${this.timer.timer} seconds');
    }
}


        // Start the game when the DOM is fully loaded
 new Game()

