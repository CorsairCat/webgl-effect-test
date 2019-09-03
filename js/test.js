document.getElementById("container").style.height = window.innerHeight + "px";
document.getElementById("container").style.width = window.innerWidth + "px";

var scene = new THREE.Scene();
// 添加物体
var mat = new THREE.MeshLambertMaterial({  // 材质
    color: 0x7777ff,

});
var gem = new THREE.BoxGeometry(40, 40, 40);  // 几何结构
var obj = new THREE.Mesh(gem, mat);  // 物体
scene.add(obj);
// 添加自然光源
var light = new THREE.SpotLight(0xffffff);
light.position.set(0, 100, 0);
light.target = obj;
light.angle = Math.PI;
light.castShadow = true;
scene.add( light );
var light2 = new THREE.SpotLight(0xffffff);
light2.position.set(0, 0, 100);
light2.target = obj;
light2.angle = Math.PI;
light2.castShadow = true;
scene.add( light2 );
var light3 = new THREE.SpotLight(0xffffff);
light3.position.set(0, 0, -100);
light3.target = obj;
light3.angle = Math.PI;
light3.castShadow = true;
scene.add( light3 );
var light4 = new THREE.SpotLight(0xffffff);
light4.position.set(100, 0, 0);
light4.target = obj;
light4.angle = Math.PI;
light4.castShadow = true;
scene.add( light4 );
// 基本数据
var container = document.getElementById("container");
var width = container.clientWidth, height = container.clientHeight, fov = 90;
// 创建相机
var camera = new THREE.PerspectiveCamera( fov, width / height, 1, 1000 );
camera.position.set(100,0,0);
camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
scene.add( camera );

// 创建渲染器
var renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true});
renderer.setClearColor(0xEEEEEE, 1.0);
renderer.setSize( width, height );
// 渲染
container.appendChild(renderer.domElement);

var stats = new Stats();
stats.showPanel( 0 );
document.body.appendChild( stats.dom );

function animate() {
    stats.begin();

    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;

    renderer.render( scene, camera );

    stats.end();

    requestAnimationFrame( animate );
}
animate();