var x = 100;
var y = 100;

function cargarCanvas() {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
  // Event handler to resize the canvas when the document view is changed
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    //c.width = window.innerWidth;
		c.width = 1024;
    c.height = window.innerHeight*0.8;

    // Redraw everything after resizing the window
    drawStuff(); 
  }
  resizeCanvas();
}

function drawStuff() {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(200-x, 600-y);
		ctx.lineTo(300-x, 600-y);
		ctx.lineTo(250-x, 580-y);
		ctx.closePath();
		ctx.stroke();
		
		ctx.moveTo(250-x, 580-y);
		ctx.lineTo(250-x, 200-y);
		ctx.lineTo(400-x, 200-y);
		ctx.lineTo(400-x, 250-y);
		ctx.stroke();
}

function dibujarCuerpo(error) {
	var c = document.getElementById("ahorcado");
  var ctx = c.getContext("2d");
	
	switch (error) {
		case 1:
			ctx.beginPath();
			ctx.arc(400-x, 290-y, 40, 0, 2 * Math.PI);
			ctx.stroke();
			break;
		case 2:
			ctx.beginPath();
			ctx.moveTo(400-x, 330-y);
			ctx.lineTo(400-x, 450-y);
			ctx.stroke();
			break;
		case 3:
			ctx.beginPath();
			ctx.moveTo(400-x, 360-y);
			ctx.lineTo(360-x, 410-y);
			ctx.stroke();
			break;
		case 4:
			ctx.beginPath();
			ctx.moveTo(400-x, 360-y);
			ctx.lineTo(440-x, 410-y);
			ctx.stroke();
			break;
		case 5:
			ctx.beginPath();
			ctx.moveTo(400-x, 450-y);
			ctx.lineTo(440-x, 500-y);
			ctx.stroke();
			break;
		case 6:
			ctx.beginPath();
			ctx.moveTo(400-x, 450-y);
			ctx.lineTo(360-x, 500-y);
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