var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{

fabric.image.fromURL("Aniversarioimagem.png", function(Img){
    blockImageObject = Img;
    blockImageObject.scaleToWidth(700)
    blockImageObject.scaleToHeight(510)
    blockImageObject.se({
        top:0,
        left:0
    }),
    canvas.add(blockImageObject);
});



	


}

function playSound(){

    x.play();
}
