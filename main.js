 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 var lastXposition = 0;
 var lastYposition = 0;

eventMouse = "";
color = "black";

canvas.addEventListener("mousedown", user_mouseDown);

function user_mouseDown(e){
    eventMouse = "mousedown";
}

canvas.addEventListener("mouseup", user_mouseUp);

function user_mouseUp(e){
    eventMouse = "mouseup";
}

canvas.addEventListener("mouseleave", user_mouseLeave);

function user_mouseLeave(e){
    eventMouse = "mouseleave";
}

canvas.addEventListener("mousemove", user_mouseMove);

function user_mouseMove(e){
    currentXposition = e.clientX - canvas.offsetLeft;
    currentYposition = e.clientY - canvas.offsetTop;

    if (eventMouse == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.moveTo(lastXposition, lastYposition);
        ctx.lineTo(currentXposition, currentYposition);
        ctx.stroke();
    }
        lastXposition = currentXposition;
        lastYposition = currentYposition;

}

function clearCanvas(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

