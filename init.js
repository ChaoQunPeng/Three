var scene, camera, renderer;
var geometry, material, mesh;
var planet;


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function initScene() {
    scene = new THREE.Scene();
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 5;
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function create(shape) {
    material = new THREE.MeshBasicMaterial({ wireframe: true });
    switch (shape) {
        case "球形":
            var texture = new THREE.TextureLoader().load('http://192.168.0.67:5500/img/map.jpg');// 图片的比例一定要是2:1
            material = new THREE.MeshBasicMaterial({ map: texture });
            geometry = new THREE.SphereGeometry(1, 32, 32, 0, 6.3, 0, 3.2);
            break;
        case "立方体":
            geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10); // 立方体
            break;
        default:
            geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10); // 立方体
            break;
    }

    if (planet == undefined) {
        planet = new THREE.Mesh(geometry, material);
        scene.add(planet);
    }

}

var flag = true;
function run() {
    create("球形");
    planet.rotation.y += 0.01;

    planet.rotation.y += 0.05;
    planet.rotation.z += 0.05;
    // if (flag) {
    //     planet.scale.x += 0.05;
    //     planet.scale.y += 0.1;
    //     // planet.scale.z += 0.02;
    //     if (planet.scale.y >= 8) {
    //         flag = false;
    //     }
    // } else {
    //     planet.scale.x -= 0.05;
    //     planet.scale.y -= 0.1;
    //     // planet.scale.z -= 0.02;
    //     if (planet.scale.y <= 1) {
    //         flag = true;
    //     }
    // }

    renderer.render(scene, camera);
    requestAnimationFrame(run);
}

init();
run();

function cl(a) {
    console.log(a);
}