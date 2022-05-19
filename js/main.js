/// <reference path="./babylon.max.js"/>
var canvas, engine, scene;

document.addEventListener("DOMContentLoaded", startGame)

function startGame(){
       canvas = document.getElementById("renderCanvas");
       engine = new BABYLON.Engine(canvas, true);
       scene = new BABYLON.Scene(engine);
       engine.runRenderLoop( () => {
              scene.render();
       });
}

var createScene = () => {
       let scene = new BABYLON.Scene(engine);
       scene.clearColor = new BABYLON.Color3(1,0,1);
       // Code here
       return scene;
}

window.onresize = () => {
       engine.resize();
}