class Virus {

    constructor(){
        this.virusImage = new Image();
        this.virusImage.src = "./images/virus.png";
        this.width = 80;
        this.height = 80;
        this.x =  Math.floor(Math.random() * (canvas.width - this.width)); 
        this.y = -100;
        // this.speed = 3; // Last level 7.5
    };

    drawVirus = () => {
        ctx.drawImage(this.virusImage, this.x, this.y, this.width, this.height);
    };

    virusMove = (speed) => {
        this.y += speed;
    }; 

}