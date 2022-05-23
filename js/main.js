/// <reference path="./babylon.max.js"/>

var canvas, engine, scene;

document.addEventListener("DOMContentLoaded", startGame);

function startGame(){
       canvas = document.getElementById("renderCanvas");
       engine = new BABYLON.Engine(canvas, true);
       scene = createScene();
       engine.runRenderLoop( () => {
              scene.render();
       });
}

// var createScene = function () {
//        var scene = new BABYLON.Scene(engine);
//        var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
//        camera.attachControl(canvas, true);
          
//        var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 1, 0), scene);
//        light.diffuse = new BABYLON.Color3(1, 0, 0);
//        light.specular = new BABYLON.Color3(0, 1, 0);

//        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
//        sphere.position.z = 1;			
              
//        return scene;
   
// };

var createScene = function () {
       var scene = new BABYLON.Scene(engine);
   
       //Adding a light
       var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
   
       //Adding an Arc Rotate Camera
       var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
       camera.attachControl(canvas, false);
   
           // Append glTF model to scene.
    BABYLON.SceneLoader.Append("../", "bitter_brook_2022-05-22_22.13.39.gltf", scene, function (scene) {
       // Create a default arc rotate camera and light.
       scene.createDefaultCameraOrLight(true, true, true);

       // The default camera looks at the back of the asset.
       // Rotate the camera by 180 degrees to the front of the asset.
       scene.activeCamera.alpha += Math.PI;
   });
   
       return scene;
   }


window.onresize = () => {
       engine.resize();
}