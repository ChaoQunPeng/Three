var scene, camera, renderer;

var mesh, geometry, meterial;

var contcontrolsrol;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 15;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function createEnemy(position) {
    geometry = new THREE.BoxGeometry(position[0], position[1], position[2], 2, 2, 2);
    meterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00BFFF });
    mesh = new THREE.Mesh(geometry, meterial);
    scene.add(mesh);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
createEnemy();
animate();