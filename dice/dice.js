var scene, camera, renderer;
var geometry, material, mesh, texture;
var controls;
var texture, images;
var meshFaceMaterial = [];

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 3;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function createGeometry() {

    geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);

    var material1 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/crate.jpg') });
    var material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/bricks.jpg') });
    var material3 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/clouds.jpg') });
    var material4 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/stone-wall.jpg') });
    var material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/water.jpg') });
    var material6 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/wood-floor.jpg') });

    var materials = [material1, material2, material3, material4, material5, material6];

    for (let i = 0; i < 6; i++) {
        meshFaceMaterial.push(new THREE.MeshBasicMaterial(materials[i]));
    }
    
    var mesh = new THREE.Mesh(geometry, meshFaceMaterial);
    scene.add(mesh);
}

function run() {
    renderer.render(scene, camera);
    requestAnimationFrame(run);
}

init();
createGeometry();
run();