
function poland(){
    this.imageData = context_0.createImageData(height,width);

    for(let i=0; i < this.imageData.data.length; i+=4){
        if(i < this.imageData.data.length/2){

            this.imageData.data[i] = 255;
            this.imageData.data[i+1] = 255;
            this.imageData.data[i+2] = 255;
            this.imageData.data[i+3] = 255;

        }else{

            this.imageData.data[i] = 183;
            this.imageData.data[i+1] = 0;
            this.imageData.data[i+2] = 0;
            this.imageData.data[i+3] = 255;
            
        }

    }
    context_0.putImageData(this.imageData, 0, 0);
    canvas_0.style.border = "1px solid black";
}

//==========================================================================================================================================

// function indonesia(){
//     poland();
//     this.imageData = context_0.getImageData(0, 0, height,width);
//      for(let i=0; i < this.imageData.data.length; i+=4){
         
//          if(this.imageData.data[i+1] == 255){
//             this.imageData.data[i] = 183;
//             this.imageData.data[i+1] = 0;
//             this.imageData.data[i+2] = 0;
//          }else{
//             this.imageData.data[i] = 255;
//             this.imageData.data[i+1] = this.imageData.data[i];
//             this.imageData.data[i+2] = this.imageData.data[i];
//          }
//      }
//      context_1.putImageData(this.imageData, 0, 0);
//      canvas_1.style.border = "1px outset black";                                                                                                                                                                                                                                         
// }
function polandMirror(){
    poland();
    this.imageDataIN = context_0.getImageData(0, 0, height,width);
    this.imageDataOUT = context_0.getImageData(0, 0, height,width);
    this.x = 0; 
    this.y = 0;
     for(let i=0; i < this.imageDataIN.data.length; i+=4){
        this.x0 = this.x;
        this.y0 = - this.y + height;   // ( x , y ) ----> ( x , y + 2 * height / 2)
        this.pixelStart = 4 * ( this.x0 + this.y0 * width);

        this.imageDataOUT.data[i] = this.imageDataIN.data[this.pixelStart];
        this.imageDataOUT.data[i + 1] = this.imageDataIN.data[this.pixelStart + 1];
        this.imageDataOUT.data[i + 2] = this.imageDataIN.data[this.pixelStart + 2];
        this.imageDataOUT.data[i + 3] = this.imageDataIN.data[this.pixelStart + 3];
        
        if(this.x < 255){
            this.x = this.x + 1;
        }else if(this.x == 255){
            this.y = this.y + 1;
            this.x = 0;
        }

     }
     context_1.putImageData(this.imageDataOUT, 0, 0);
     canvas_1.style.border = "1px outset black";                                                                                                                                                                                                                                         
}
//==========================================================================================================================================

function hungary(){
    this.imageData = context_0.createImageData(height,width);
    this.select = Math.floor(255/3 * (width * 4) + 255 * 4);
    for(let i=0; i < this.imageData.data.length; i+=4){
        if(i <= select){
            this.imageData = imageData;
            this.imageData.data[i] = 138;
            this.imageData.data[i+1] = 0;
            this.imageData.data[i+2] = 0;
            this.imageData.data[i+3] = 255;

        }else if(select < i <= select * 2){
            this.imageData.data[i] = 255;
            this.imageData.data[i+1] = 255;
            this.imageData.data[i+2] = 255;
            this.imageData.data[i+3] = 255;
         }if(2 * select < i){
            this.imageData.data[i] = 0;
            this.imageData.data[i+1] = 142;
            this.imageData.data[i+2] = 70;
            this.imageData.data[i+3] = 255;
        }
    }
    context_0.putImageData(this.imageData, 0, 0);
    canvas_0.style.border = "1px solid black";
}

//==========================================================================================================================================

function hungaryRotate(){
    hungary();
    this.imageDataIN = context_0.getImageData(0, 0, height, width);
    this.imageDataOUT = context_0.getImageData(0, 0, height, width);
    this.x = 0; 
    this.y = 0;

    for(let i=0; i < this.imageDataIN.data.length; i+=4){    
        
        this.x0 = this.y;
        this.y0 = 255 - this.x;  // ( x , y ) ------> ( y , 255 - x)
        this.pixelStart = 4 * ( this.x0 + this.y0 * width);

        this.imageDataOUT.data[i] = this.imageDataIN.data[this.pixelStart];
        this.imageDataOUT.data[i + 1] = this.imageDataIN.data[this.pixelStart + 1];
        this.imageDataOUT.data[i + 2] = this.imageDataIN.data[this.pixelStart + 2];
        this.imageDataOUT.data[i + 3] = this.imageDataIN.data[this.pixelStart + 3];
        
        if(this.x < 255){
            this.x = this.x + 1;
        }else if(this.x == 255){
            this.y = this.y + 1;
            this.x = 0;
        }
        
    }
    context_1.putImageData(this.imageDataOUT, 0, 0);
    canvas_1.style.border = "1px solid black";

}
