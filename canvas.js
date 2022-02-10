var x = window.innerWidth < 900 ? -window.innerWidth/5 : -400 ;
var y = 240;

function cargarCanvas() {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
  // Event handler to resize the canvas when the document view is changed
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
}

function resizeCanvas() {
    var c = document.getElementById("ahorcado");
		var ctx = c.getContext("2d");
		c.width = window.innerWidth;
    c.height = window.innerHeight*0.5;

    // Redraw everything after resizing the window
    drawStuff(); 
  }

function drawStuff() {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
	var scale = window.innerWidth/500 >= 1 ? 0.9: window.innerWidth/500;
	x = window.innerWidth < 900 ? -window.innerWidth/3 : -400 ;
	ctx.scale(scale,scale);
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(0-x, 600-y);
		ctx.lineTo(100-x, 600-y);
		ctx.lineTo(50-x, 580-y);
		ctx.closePath();
		ctx.stroke();
		
		ctx.moveTo(50-x, 580-y);
		ctx.lineTo(50-x, 300-y);
		ctx.lineTo(200-x, 300-y);
		ctx.lineTo(200-x, 350-y);
		ctx.stroke();
}

function dibujarCuerpo(error) {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
	
	switch (error) {
		case 1:
			ctx.beginPath();
			ctx.arc(200-x, 380-y, 30, 0, 2 * Math.PI);
			ctx.stroke();
			break;
		case 2:
			ctx.beginPath();
			ctx.moveTo(200-x, 410-y);
			ctx.lineTo(200-x, 500-y);
			ctx.stroke();
			break;
		case 3:
			ctx.beginPath();
			ctx.moveTo(200-x, 420-y);
			ctx.lineTo(160-x, 460-y);
			ctx.stroke();
			break;
		case 4:
			ctx.beginPath();
			ctx.moveTo(200-x, 420-y);
			ctx.lineTo(240-x, 460-y);
			ctx.stroke();
			break;
		case 5:
			ctx.beginPath();
			ctx.moveTo(200-x, 500-y);
			ctx.lineTo(240-x, 540-y);
			ctx.stroke();
			break;
		case 6:
			ctx.beginPath();
			ctx.moveTo(200-x, 500-y);
			ctx.lineTo(160-x, 540-y);
			ctx.stroke();
			break;
	}
}

function resetCanvas() {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	drawStuff();
}