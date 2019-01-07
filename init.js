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


    for (let i = 0; i < 5; i++) {
        create("立方体");
    }

    // for (let i = 0; i < scene.children.length; i++) {
    //     if (i <= 2) {
    //         scene.children[i].position.x = i * 2;
    //         scene.children[i].position.y = i * 2;
    //         scene.children[i].position.z = i * 2;
    //     }
    //     else if (i >= 3) {
    //         scene.children[i].position.x = -i*3;
    //         scene.children[i].position.y = -i*3;                                                            
    //         scene.children[i].position.z = -i*3;
    //     }

    // }

    scene.children[1].position.x = 2;
    scene.children[1].position.y = 2;
    scene.children[1].position.z = -2;
}

function create(shape) {
    material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00BFFF });
    switch (shape) {
        case "球形":
            var texture = new THREE.TextureLoader().load('http://192.168.0.67:5500/img/map.jpg');// 图片的比例一定要是2:1
            material = new THREE.MeshBasicMaterial({ map: texture });
            geometry = new THREE.SphereGeometry(1, 32, 32, 0, 6.3, 0, 3.2);
            break;
        case "立方体":
            geometry = new THREE.BoxGeometry(2, 2, 2, 2, 2, 2); // 立方体
            break;
        default:
            break;
    }
    scene.add(new THREE.Mesh(geometry, material));
}

init();

run();

function run() {
    scene.rotation.y += 0.02;

    renderer.render(scene, camera);
    requestAnimationFrame(run);
}