import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";
import { subCubes } from "./cube_builder.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404040);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(20, 30, 40);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
camera.add(directionalLight);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 30;
controls.maxDistance = 100;

for (let subCube of subCubes) {
    scene.add(subCube);
}

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function animateRotation(face) {
    requestAnimationFrame(animateRotation);
    face.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

document.addEventListener("keyup", documentKeyUp);

function documentKeyUp(event) {
    if (event.key == "u") {
        // let uFace = new THREE.Group();
        // uFace.add(
        //     subCubes[0],
        //     subCubes[1],
        //     subCubes[2],
        //     subCubes[3],
        //     subCubes[4],
        //     subCubes[5],
        //     subCubes[6],
        //     subCubes[7],
        //     subCubes[8]
        // );
        // scene.add(uFace);
        // animateRotation(uFace);
        // const light = new THREE.AmbientLight(0x404040); // soft white light
        // scene.add(light);
        console.log("Hello World");
    }
}
