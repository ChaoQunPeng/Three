var scene, camera, renderer;
var geometry, material, mesh, texture;
var controls;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    console.log(scene);
    camera = new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 20;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function createGeometry() {
    texture = new THREE.TextureLoader().load(`http://192.168.0.67:5500/img/wall.jpg`);
    material = new THREE.MeshBasicMaterial({ map: texture });
    geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
    scene.add(new THREE.Mesh(geometry, material));
}

function run() {
    renderer.render(scene, camera);
    requestAnimationFrame(run);
}

init();
createGeometry();
run();