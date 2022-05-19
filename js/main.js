/// <reference path="./babylon.max.js"/>
var canvas, engine, scene;

document.addEventListener("DOMContentLoaded", startGame)

function startGame(){
       canvas = document.getElementById("renderCanvas");
       engine = new BABYLON.Engine(canvas, true);
       scene = createScene();
       engine.runRenderLoop( () => {
              scene.render();
       });
}

var createScene = function () {
       var scene = new BABYLON.Scene(engine);
       var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
       camera.attachControl(canvas, true);
          
       var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 1, 0), scene);
       light.diffuse = new BABYLON.Color3(1, 0, 0);
       light.specular = new BABYLON.Color3(0, 1, 0);

       var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
       sphere.position.z = 1;			
              
       return scene;
   
   };

window.onresize = () => {
       engine.resize();
}