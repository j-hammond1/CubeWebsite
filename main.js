import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";
import { subCubes } from "./cube_builder.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404040);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(20, 30, 40);
const directionalLight = new THREE.DirectionalLight(0xaaaaaa, 1);
camera.add(directionalLight);
scene.add(camera);

// const lightGrayLight = new THREE.AmbientLight(0xaaaaaa);
const medGrayLight = new THREE.AmbientLight(0x909090);
// const darkGrayLight = new THREE.AmbientLight(0x606060);
scene.add(medGrayLight);

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

const turn90Quaternion = new THREE.Quaternion();
turn90Quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
const targetQuaternion = new THREE.Quaternion();
const face = new THREE.Group();
face.add(
    subCubes[0],
    subCubes[1],
    subCubes[2],
    subCubes[3],
    subCubes[4],
    subCubes[5],
    subCubes[6],
    subCubes[7],
    subCubes[8]
);
scene.add(face);

const speed = 2;
var clock;
var rotAnimationPlaying = false;

document.addEventListener("keyup", documentKeyUp);
function documentKeyUp(event) {
    if (event.key == "u" && !rotAnimationPlaying) {
        // face.add(
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
        // scene.add(face);

        clock = new THREE.Clock();
        targetQuaternion.multiplyQuaternions(face.quaternion, turn90Quaternion);
        rotAnimationPlaying = true;
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();

    if (rotAnimationPlaying) {
        console.log("rotAnimationPlaying: " + rotAnimationPlaying);
        const delta = clock.getDelta();
        if (!face.quaternion.equals(targetQuaternion)) {
            const step = speed * delta;
            face.quaternion.rotateTowards(targetQuaternion, step);
        } else if (face.quaternion.equals(targetQuaternion)) {
            rotAnimationPlaying = false;
            console.log("rotAnimationPlaying: " + rotAnimationPlaying);
        }
    }

    renderer.render(scene, camera);
}

animate();
