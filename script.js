var canvas_0, canvas_1, canvas_2;
var context_0, context_1, context_2;
var myImage, imageData;
var height = 256, width = 256;
var r,g,b,a,average;
var transparency, gray;
//==========================================================================================================================================

function updateCanvas( ) {
    canvas_0 = document.getElementById( 'canvas_0' );
    context_0 = canvas_0.getContext( '2d' );

    canvas_1 = document.getElementById( 'canvas_1' );
    context_1 = canvas_1.getContext( '2d' );

    myImage = new Image( );

    setBitmap( 'img/monolisa_256x256.png' );
    
}

//==========================================================================================================================================

function setBitmap( fileName ) {
    myImage.src = fileName;
    myImage.onload = function ( ) {
        canvas_0.width = myImage.width;
        canvas_0.height = myImage.height;
        context_0.drawImage( myImage, 0, 0, myImage.width, myImage.height );
    }
}

//==========================================================================================================================================

function filterNegative(){
    this.imageData = context_0.getImageData(0, 0, myImage.width, myImage.height);
    for(let i=0; i < this.imageData.data.length; i+=4){

        r = this.imageData.data[i];
        g = this.imageData.data[i+1];
        b = this.imageData.data[i+2];  
        this.imageData.data[i] = 255 - r;
        this.imageData.data[i+1] = 255 - g;
        this.imageData.data[i+2] = 255 - b;
    }
    context_1.putImageData(this.imageData, 0, 0);
}

//==========================================================================================================================================

function filterComposite(){
    this.imageData = context_0.getImageData(0, 0, myImage.width, myImage.height);
    for(let i=0; i < this.imageData.data.length; i+=4){

        r = this.imageData.data[i];
        g = this.imageData.data[i+1];
        b = this.imageData.data[i+2]; 
        this.average = r * 0.3 + g * 0.59 + b * 0.11; 
        this.imageData.data[i] = this.average + 100;
        this.imageData.data[i+1] = this.average + 50;
        this.imageData.data[i+2] = this.average;
    }
    context_1.putImageData(this.imageData, 0, 0);
}

//==========================================================================================================================================

function filterTransparency(){
    this.imageData = context_0.getImageData(0, 0, myImage.width, myImage.height);
    this.transparency = 0.50;
    for(let i=0; i < this.imageData.data.length; i+=4){

        this.imageData.data[i+3] = this.transparency * 255;
        
    }
    context_1.putImageData(this.imageData, 0, 0);
}

//==========================================================================================================================================

function filterNoise(){
    this.imageData = context_0.getImageData(0, 0, myImage.width, myImage.height);
    for(let i=0; i < this.imageData.data.length; i+=4){

        r = this.imageData.data[i];
        g = this.imageData.data[i+1];
        b = this.imageData.data[i+2];

        this.noiseLevel = 50;
        this.noise = (0.5 - Math.random())*noiseLevel;

        imageData.data[i] = r + noise;
        imageData.data[i+1] = g + noise;
        imageData.data[i+2] = b + noise;
    }
    context_1.putImageData(this.imageData, 0, 0);

}

//==========================================================================================================================================

function filterGray(){
    this.imageData = context_0.getImageData( 0, 0, width, height);
    
    for(let i = 0; i < this.imageData.data.length; i+=4){
        r = this.imageData.data[i];
        g = this.imageData.data[i+1];
        b = this.imageData.data[i+2];
        gray = 0.299 * r + 0.587 * g + 0.114 * b;
        this.imageData.data[i] = gray;
        this.imageData.data[i+1] = gray;
        this.imageData.data[i+2] = gray;
    }
    context_1.putImageData(this.imageData, 0 , 0);
}