// $(document).ready(function(){
//   $(".fpic").click(function() {
//     $(this).fadeOut(500);
//
//   })
//   window.makeConfetti();
//
//   $("fpic").fadeOut();
// });
//
//
//
// function makeConfetti() {
//   var particles = [];
//   var colors = ["pink", "yellow", "blue"];
//   var num = 50;
//   let w = screen.width;
//   console.log(w);
//   let h = screen.height;
//   console.log(h);
//   let currColor = Math.floor(Math.random()*3+1);
//   var canvas = document.getElementById("canvas");
//   var ctx = canvas.getContext("2d");
//   var animationHandler;
//
//   function resize() {
//     w = screen.width;
//     h = screen.height;
//     currColor = Math.floor(Math.random()*3+1)
//   }
//
//   function addP(particles, num) {
//     for (i = 0; i < num; i++) {
//       resize();
//       particles.push(new particle());
//     }
//     begin();
//   }
//
//   function particle() {
//     this.x = Math.random() * w;
//     this.y = Math.random() * h;
//     this.height = Math.random() * 30;
//     this.width = Math.random() * 30;
//     this.movement = Math.random() * 20;
//     this.color = currColor;
//     this.draw = function() {
//       ctx.beginPath();
//       ctx.lineWidth = this.width/2;
//       ctx.strokeStyle =  this.color;
//       ctx.moveTo(this.x + movement, this.y + movement);
//       console.log("huho");
//       return ctx.stroke();
//     }
//   }
//
//   function begin() {
//     (function loop() {
//     animationHandler = requestAnimFrame(loop);
//     return Draw();
//   })();
// }
//
// window.requestAnimFrame = (function () {
//   return window.requestAnimationFrame ||
//   window.webkitRequestAnimationFrame ||
//   window.mozRequestAnimationFrame ||
//   window.oRequestAnimationFrame ||
//   window.msRequestAnimationFrame ||
//   function (callback) {
//     return window.setTimeout(callback, 1000 / 60);
//   };
// })();
//
//
// }
