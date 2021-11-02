class Mask {
    
        constructor(){
            this.maskImage = new Image();
            this.maskImage.src = "./images/mask.png";
            this.width = 90;
            this.height = 55;
            this.x = Math.floor(Math.random() * (canvas.width - this.width)) ;
            this.y = -100;
            this.speed = 3;
        };
    
        drawMask = () => {
            ctx.drawImage(this.maskImage, this.x, this.y, this.width, this.height);
        };
        
        maskMove = () => {
            this.y += this.speed;
        }
        
    }
