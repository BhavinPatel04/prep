const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

// rectangle
context.fillStyle = "rgba(255, 0, 0, 0.5)";
context.fillRect(100, 100, 100, 100);

// line
context.beginPath();
context.moveTo(50, 400);
context.lineTo(400, 100);
context.lineTo(600, 900);
context.strokeStyle = "red";
context.stroke();

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
  };
}());


context.lineCap = "round";

// variable to hold how many frames have elapsed in the animation
var t = 1;
// set some style
context.lineWidth = 5;
context.strokeStyle = "blue";
// calculate incremental points along the path
let points = calcWaypoints([{
  x: 0,
  y: 0
}, {
  x: 300,
  y: 100
}]);
// extend the line from start to finish with animation
animate(points);
t = 1;
var points2 = calcWaypoints([{
  x: 100,
  y: 0
}, {
  x: 300,
  y: 100
}]);
// extend the line from start to finish with animation
animate(points2);


// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
  var waypoints = [];
  for (var i = 1; i < vertices.length; i++) {
      var pt0 = vertices[i - 1];
      var pt1 = vertices[i];
      var dx = pt1.x - pt0.x;
      var dy = pt1.y - pt0.y;
      for (var j = 0; j < 100; j++) {
          var x = pt0.x + dx * j / 100;
          var y = pt0.y + dy * j / 100;
          waypoints.push({
              x: x,
              y: y
          });
      }
  }
  return (waypoints);
}


function animate() {
  if (t < points.length - 1) {
      requestAnimationFrame(animate);
  } else {

  }
  // draw a line segment from the last waypoint
  // to the current waypoint
  context.beginPath();
  context.moveTo(points[t - 1].x, points[t - 1].y);
  context.lineTo(points[t].x, points[t].y);
  context.stroke();
  // increment "t" to get the next waypoint
  t++;
}

// // arc / circle
// context.beginPath();
// context.arc(800, 400, 40, 0, 50, false);
// context.stroke();

// // draw multiple circles at random locations on screen
// class Circle {
//   constructor(x, y, v, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.dx = v;
//     this.dy = v;
//     this.radius = radius;
//     this.color = color;
//     this.canvas = document.querySelector("canvas");
//     this.context = this.canvas.getContext("2d");
//   }

//   draw() {
//     this.context.beginPath();
//     this.context.arc(this.x, this.y, this.radius, 0, 7, false);
//     this.context.strokeStyle = this.color;
//     this.context.stroke();
//   };

//   update() {
//     if((this.x+this.radius) > innerWidth || (this.x-this.radius) < 0) { this.dx = -this.dx; };
//     if((this.y+this.radius) > innerHeight || (this.y-this.radius) < 0) { this.dy = -this.dy; };
//     this.x += this.dx;
//     this.y += this.dy;
//   };
// }

// const cirleList = [];
// for(let i=0; i<10; i++) {
//   const x = Math.random() * innerWidth;
//   const y = Math.random() * innerHeight;
//   const radius = Math.random() * 100;
//   const color = `#${Math.random.toString(16).slice(2, 8)}`;
//   cirleList.push(new Circle(x, y, i+1, radius, color));
// }

// function animate() {
//   requestAnimationFrame(animate);
//   context.clearRect(0, 0, innerWidth, innerHeight);
//   cirleList.forEach(c => {
//     c.draw();
//     c.update();
//   })
// };

// animate();


function drawCylinder ( x, y, w, h ) {
  context.beginPath(); //to draw the top circle
  for (var i = 0 * Math.PI; i < 2 * Math.PI; i += 0.001) {
    xPos = (x + w / 2) - (w / 2 * Math.sin(i)) * 
      Math.sin(0 * Math.PI) + (w / 2 * Math.cos(i)) * 
      Math.cos(0 * Math.PI);

    yPos = (y + h / 8) + (h / 8 * Math.cos(i)) * 
      Math.sin(0 * Math.PI) + (h / 8 * 
      Math.sin(i)) * Math.cos(0 * Math.PI);

    if (i == 0) {
      context.moveTo(xPos, yPos);
    } else {
      context.lineTo(xPos, yPos);
    }
  }
  context.moveTo(x, y + h / 8);
  context.lineTo(x, y + h - h / 8);

  for (var i = 0 * Math.PI; i < Math.PI; i += 0.001) {
    xPos = (x + w / 2) - (w / 2 * Math.sin(i)) * 
      Math.sin(0 * Math.PI) + (w / 2 * Math.cos(i)) * 
      Math.cos(0 * Math.PI);
    yPos = (y + h - h / 8) + (h / 8 * Math.cos(i)) * 
      Math.sin(0 * Math.PI) + (h / 8 * Math.sin(i)) * 
      Math.cos(0 * Math.PI);

    if (i == 0) {
      context.moveTo(xPos, yPos);
    } else {
      context.lineTo(xPos, yPos);
    }
  }
  context.moveTo(x + w, y + h / 8);
  context.lineTo(x + w, y + h - h / 8);            
  context.stroke();
}

drawCylinder(20, 20, 80, 60);