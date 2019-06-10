function blurRec(){
    this.imageData = context_0.getImageData( 0, 0, width, height);
    context_1.clearRect(0, 0, 256, 256);
    this.row = 24;
    this.col = 24;
    this.rowWidth = width / col; 
    this.rowHeight = height / row;
    for (let rw = 0; rw < this.row; rw++) {
        for (let c = 0; c < this.col; c++) {
            this.x = ( c * rowWidth ) + ( rowWidth / 2 ); 
            this.y = ( rw * rowHeight ) + ( rowHeight / 2 ); 
            this.i = 4 * (Math.floor(this.x) + Math.floor(this.y) * width);

            r = this.imageData.data[i]; 
            g = this.imageData.data[i + 1]; 
            b = this.imageData.data[i + 2]; 

            context_1.fillStyle = "rgb("+r+", "+g+", "+b+")"; 
            context_1.fillRect(this.x - (this.rowWidth/2), y - (this.rowHeight/2), this.rowWidth, this.rowHeight);
          
        }
    }
}
function blurCircle(){
    this.imageData = context_0.getImageData( 0, 0, width, height);
    context_1.clearRect(0, 0, 256, 256);
    this.row = 24;
    this.col = 24;
    this.rowWidth = width / col; 
    this.rowHeight = height / row;
    for (let rw = 0; rw < this.row; rw++) {
        for (let c = 0; c < this.col; c++) {
            this.x = ( c * rowWidth ) + ( rowWidth / 2 ); 
            this.y = ( rw * rowHeight ) + ( rowHeight / 2 ); 
            this.i = 4 * (Math.floor(this.x) + Math.floor(this.y) * width);

            r = this.imageData.data[i]; 
            g = this.imageData.data[i + 1]; 
            b = this.imageData.data[i + 2]; 

            context_1.fillStyle = "rgb("+r+", "+g+", "+b+")";
            context_1.beginPath(); 
            context_1.arc(this.x, this.y, rowWidth/2, 0, Math.PI*2, false); 
            context_1.closePath(); 
            context_1.fill();
          
        }
    }
}