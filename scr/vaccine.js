class Vaccine {
    
    constructor(){
        this.vaccineImage = new Image();
        this.vaccineImage.src = "./images/vaccine.png";
        this.width = 90;
        this.height = 85;
        this.x = Math.floor(Math.random() * (canvas.width - this.width));
        this.y = -100;
        this.speed = 3;
    };

    drawVaccine = () => {
        ctx.drawImage(this.vaccineImage, this.x, this.y, this.width, this.height);
    };

    vaccineMove = () => {
        this.y += this.speed;
    }
    
}
