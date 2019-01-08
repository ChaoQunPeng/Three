var scene, camera, renderer;
var geometry, material, mesh;
var controls;



function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 20;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    var earthGeometry = new THREE.SphereBufferGeometry();
    var earthMaterial = new THREE.MeshPhongMaterial({
        specular: 0x333333,
        shininess: 30
    });
}

function run() {
    scene.rotation.y += 0.02;

    renderer.render(scene, camera);
    requestAnimationFrame(run);
}

init();
run();