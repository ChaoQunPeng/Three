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

    // 下面这种是为每个面都加一个贴图，但是随着模型的增多
    //
    // var material1 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/crate.jpg') });
    // var material2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/bricks.jpg') });
    // var material3 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/clouds.jpg') });
    // var material4 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/stone-wall.jpg') });
    // var material5 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/water.jpg') });
    // var material6 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/wood-floor.jpg') });
    // var materials = [material1, material2, material3, material4, material5, material6];
    // for (let i = 0; i < 6; i++) {
    //     meshFaceMaterial.push(materials[i]);
    // }
    // var mesh = new THREE.Mesh(geometry, meshFaceMaterial);

    texture = new THREE.TextureLoader().load('../img/texture-atlas-1.jpg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 16;

    material = new THREE.MeshBasicMaterial({ map: texture });

    var bricks = [new THREE.Vector2(0, .666), new THREE.Vector2(.5, .666), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1)];


    geometry.faceVertexUvs[0] = [];

    geometry.faceVertexUvs[0][0] = [bricks[0], bricks[1], bricks[3]];
    geometry.faceVertexUvs[0][1] = [bricks[1], bricks[2], bricks[3]];

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

function run() {
    renderer.render(scene, camera);
    requestAnimationFrame(run);
}

init();
createGeometry();
run();

// var clouds = [new THREE.Vector2(.5, .666), new THREE.Vector2(1, .666), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1)];
// var crate = [new THREE.Vector2(0, .333), new THREE.Vector2(.5, .333), new THREE.Vector2(.5, .666), new THREE.Vector2(0, .666)];
// var stone = [new THREE.Vector2(.5, .333), new THREE.Vector2(1, .333), new THREE.Vector2(1, .666), new THREE.Vector2(.5, .666)];
// var water = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .333), new THREE.Vector2(0, .333)];
// var wood = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .333), new THREE.Vector2(.5, .333)];