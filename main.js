import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js";
import { subCubes } from "./cube_builder.js";
export { subCubes } from "./cube_builder.js";

import {
    ALL_FACE_INDICES,
    POSSIBLE_MOVES,
    STARTERS,
    FINISHERS,
    TURN_QUATERNIONS,
} from "./turning_data.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404040);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
camera.position.set(25, 35, 35);
camera.add(new THREE.DirectionalLight(0xaaaaaa, 0.75));
scene.add(camera);

scene.add(new THREE.AmbientLight(0x909090));
scene.add(new THREE.AxesHelper(30));

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 30;
controls.maxDistance = 100;

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

scene.add(...subCubes);

const animationStep = 0.05;
var animationPlaying = false;
var turnID;
var face;

document.addEventListener("keydown", documentKeyDown);
function documentKeyDown(event) {
    if (!animationPlaying) {
        // console.log(starters[event.key]);
        if (event.key === "`") {
            FINISHERS[12]();
        }
        if (POSSIBLE_MOVES.includes(event.key)) {
            turnStarter(STARTERS[event.key]);
        }
    }
}

function turnStarter(id) {
    face = new THREE.Group();

    for (let i of ALL_FACE_INDICES[id]) {
        face.add(subCubes[i]);
    }
    scene.add(face);

    turnID = id;
    animationPlaying = true;
}

function turn() {
    if (!face.quaternion.equals(TURN_QUATERNIONS[turnID])) {
        face.quaternion.rotateTowards(TURN_QUATERNIONS[turnID], animationStep);
    } else if (face.quaternion.equals(TURN_QUATERNIONS[turnID])) {
        turnFinisher();
    }
}

function turnFinisher() {
    animationPlaying = false;
    scene.remove(face);

    FINISHERS[turnID]();

    for (let i of ALL_FACE_INDICES[turnID]) {
        scene.add(subCubes[i]);
    }
    // console.log("animationPlaying: " + animationPlaying);
}

function animationLoop() {
    requestAnimationFrame(animationLoop);
    controls.update();

    if (animationPlaying) {
        // console.log("animationPlaying: " + animationPlaying);
        turn();
    }

    renderer.render(scene, camera);
}

animationLoop();
