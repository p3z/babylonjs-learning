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
       const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
   
       //Adding an Arc Rotate Camera
       var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
       camera.attachControl(canvas, false);
   
   
       create_tower_cylinder(7, 7);
       let top_cone = create_cone();
       create_lower_cone();
       let lower_cylinder = create_tower_cylinder(12,12);
       lower_cylinder.position.y = -11;

       let main_roof = create_main_roof_block();
       main_roof.position.y = -20;

   
   
       return scene;
   }

function create_tower_cylinder(h, w){
       var disc = BABYLON.MeshBuilder.CreateCylinder("cylinder",  {diameter: w, height: h, tessellation: 8});
       let material = new BABYLON.StandardMaterial("castle_stone", scene);
       material.diffuseTexture = new BABYLON.Texture("castle_stone.png", scene);

       disc.material = material;
       return disc;
}

function create_cone(){
       var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 8,diameterTop: 0, diameterBottom: 7, tessellation: 8}, scene);

       let material = new BABYLON.StandardMaterial("roof_tiles", scene);
       material.diffuseTexture = new BABYLON.Texture("roof_tiles.png", scene);

       cone.material = material;
       cone.position.y = 7.5;

       return cone;
}

function create_lower_cone(){
       var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 2.5,diameterTop: 7, diameterBottom: 12.5, tessellation: 8}, scene);

       let material = new BABYLON.StandardMaterial("roof_tiles", scene);
       material.diffuseTexture = new BABYLON.Texture("roof_tiles.png", scene);

       cone.material = material;
       cone.position.y = -4;

       return cone;
}

function create_main_roof_block(){
       var roof = BABYLON.MeshBuilder.CreateCylinder("cone", {height: 6,diameterTop: 70, diameterBottom: 100, tessellation: 4}, scene);

       let material = new BABYLON.StandardMaterial("roof_tiles", scene);
       material.diffuseTexture = new BABYLON.Texture("roof_tiles.png", scene);
       roof.material = material;

       return roof;
       
}



window.onresize = () => {
       engine.resize();
}