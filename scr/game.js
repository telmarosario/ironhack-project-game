class Game {

    constructor(levelNumber){
        this.world = new World();
        this.virusArr = [new Virus()];
        this.maskArr = [new Mask()];
        this.vaccineArr = [new Vaccine()];
        this.isGameStopped = false;
        this.levelNumber = levelNumber;
        this.gameOverAudio = new Audio('sounds/gameover.mp3');
    }


    spawnVirus = () => {
         let lastVirus = this.virusArr[this.virusArr.length - 1];
        if(lastVirus.y === 80){
            this.virusArr.push(new Virus());
        } 
    }

    spawnVaccine = () => {
        let lastVaccine = this.vaccineArr[this.vaccineArr.length - 1];
        if(lastVaccine.y === 200){
            this.vaccineArr.push(new Vaccine());
        }
    }

     spawnMask = () => {
        let lastMask = this.maskArr[this.maskArr.length - 1];
        if(lastMask.y === canvas.height / 2){
            this.maskArr.push(new Mask());
        }
    } 

    checkLevel = () => {
        if(points.innerText > 50 && level.innerText === "1"){
            console.log("working");
            level.innerText = "2";
            points.innerText = 0;
            ctx.clearRect(0, 0,canvas.width, canvas.height);
            this.isGameStopped = true;
            levelTwo.style.display = "flex";
            
        } else if (points.innerText > 50 && level.innerText === "2"){
            points.innerText = 0;
            level.innerText = "3";
            ctx.clearRect(0, 0,canvas.width, canvas.height);
            this.isGameStopped = true;
            levelTwo.style.display = "none";
            levelThree.style.display = "flex";
        } 
    }; 

    isGameOver = () => {
        if (points.innerText < 0){
            this.isGameStopped = true;
            ctx.clearRect(0, 0,canvas.width, canvas.height);
            canvas.style.display = "none";
            scoreScreen.style.display = "none";
            gameOverScreen.style.display = "flex";
            bgMusic.pause();
            bgMusic.currentTime = 0;
            this.gameOverAudio.play();
        }
    };

    gameLoop = () => {
        //* 1. Clear the canvas
            ctx.clearRect(0, 0,canvas.width, canvas.height);

        //* 2. Movement and changes on elements
            if (this.levelNumber == 1){
                this.virusArr.forEach((eachVirus) =>eachVirus.virusMove(3));
                this.spawnVirus();
            } else if (this.levelNumber == 2){
                this.virusArr.forEach((eachVirus) =>eachVirus.virusMove(5));
                this.spawnVirus();
            } else if (this.levelNumber == 3){
                this.virusArr.forEach((eachVirus) =>eachVirus.virusMove(6));
                this.spawnVirus();
            }

            this.vaccineArr.forEach(eachVaccine => eachVaccine.vaccineMove());
            this.spawnVaccine();

            this.maskArr.forEach(eachMask => eachMask.maskMove());
            this.spawnMask();

            this.virusArr.forEach((eachVirus, index, virusArray) => {
                this.world.worldVirusCollision(eachVirus,index, virusArray);
            });

            this.maskArr.forEach((eachMask, index, maskArray) => {
                this.world.worldMaskCollision(eachMask, index, maskArray);
            });

            this.vaccineArr.forEach((eachVaccine, index, vaccineArray) => {
                this.world.worldVaccineCollision(eachVaccine,index,vaccineArray);
            });        

        //* 3. Drawing elements
            this.world.drawWorld();
            this.virusArr.forEach((eachVirus) => eachVirus.drawVirus());
            this.maskArr.forEach((eachMask) => eachMask.drawMask());
            this.vaccineArr.forEach(eachVaccine => eachVaccine.drawVaccine());

        //* Scores and Levels
            this.checkLevel();
            this.isGameOver();
        //* 4. Animation frame and game logic
            if(!this.isGameStopped){
            requestAnimationFrame(this.gameLoop);
            }
    }
}
