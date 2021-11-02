class World {
    constructor() {
        this.worldImage = new Image();
        this.worldImage.src = "./images/world.png";
        this.width = 80;
        this.height = 80;
        this.x = canvas.width / 2.5;
        this.y = 600;
        this.speed = 20;
        this.audioVirus = new Audio('sounds/minus_point.mp3');
        this.audioMaskVacc = new Audio('sounds/add_point.mp3');
    };

    drawWorld = () => {
        ctx.drawImage(this.worldImage, this.x, this.y, this.width, this.height);
    };
 
    moveWorld = (event) => {
    if (event.code === "ArrowRight" && this.x + this.width < canvas.width){
            this.x += this.speed;
        }  else if (event.code === "ArrowLeft" && this.x >0){
            this.x -= this.speed;
        }
    };

    worldVirusCollision = (eachVirus, index, virusArray) => {
        if (this.x < eachVirus.x + eachVirus.width &&
            this.x + this.width > eachVirus.x &&
            this.y < eachVirus.y + eachVirus.height &&
            this.height + this.y > eachVirus.y) {
                virusArray.splice(index, 1);
                points.innerText = Number(points.innerText) -4;  
                this.audioVirus.play();                         
            }
    };

    worldMaskCollision = (eachMask, index, maskArray) => {
        if (this.x < eachMask.x + eachMask.width &&
            this.x + this.width > eachMask.x &&
            this.y < eachMask.y + eachMask.height &&
            this.height + this.y > eachMask.y) {
                maskArray.splice(index, 1);  
                points.innerText = Number(points.innerText) +2;
                this.audioMaskVacc.play();               
            }
    };

    worldVaccineCollision = (eachVaccine,index,vaccineArray) => {
        if (this.x < eachVaccine.x + eachVaccine.width &&
            this.x + this.width > eachVaccine.x &&
            this.y < eachVaccine.y + eachVaccine.height &&
            this.height + this.y > eachVaccine.y) {
                vaccineArray.splice(index, 1);   
                points.innerText = Number(points.innerText) +5;
                this.audioMaskVacc.play();
                
            }
    };

}
