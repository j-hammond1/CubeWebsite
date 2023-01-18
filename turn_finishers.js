import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { subCubes } from "./main.js";
import { ALL_FACE_INDICES } from "./turning_data.js";

export const FINISH_FUNCTS = [
    finishU,
    finishUPrime,
    finishD,
    finishDPrime,
    finishF,
    finishFPrime,
    finishB,
    finishBPrime,
    finishR,
    finishRPrime,
    finishL,
    finishLPrime,
    debug,
];

function translateX(subCube, amt) {
    subCube.position.x += amt;
}
function translateY(subCube, amt) {
    subCube.position.y += amt;
}
function translateZ(subCube, amt) {
    subCube.position.z += amt;
}

function updateSubCubeRotations(index, vector, radians) {
    const [x, y, z] = vector;
    for (let i of ALL_FACE_INDICES[index]) {
        subCubes[i].rotateOnWorldAxis(new THREE.Vector3(x, y, z), radians);
    }
}

function updateSubCubeIndices(c, e) {
    // corners
    var temp = subCubes[c[0]];
    subCubes[c[0]] = subCubes[c[1]];
    subCubes[c[1]] = subCubes[c[2]];
    subCubes[c[2]] = subCubes[c[3]];
    subCubes[c[3]] = temp;

    // edges
    temp = subCubes[e[0]];
    subCubes[e[0]] = subCubes[e[1]];
    subCubes[e[1]] = subCubes[e[2]];
    subCubes[e[2]] = subCubes[e[3]];
    subCubes[e[3]] = temp;
}

// function getNewPositions(subCube) {
//     var vector = new THREE.Vector3().setFromMatrixPosition(subCube.matrixWorld);
//     return [Math.round(vector.x), Math.round(vector.y), Math.round(vector.z)];
// }

function debug() {
    console.log("debugging...");
    console.log(subCubes);
    // console.log(getNewPositions(subCubes[8]));
}

function finishU() {
    translateX(subCubes[0], 20);
    translateZ(subCubes[6], -20);
    translateX(subCubes[8], -20);
    translateZ(subCubes[2], 20);

    translateX(subCubes[1], 10);
    translateZ(subCubes[1], 10);

    translateX(subCubes[3], 10);
    translateZ(subCubes[3], -10);

    translateX(subCubes[7], -10);
    translateZ(subCubes[7], -10);

    translateX(subCubes[5], -10);
    translateZ(subCubes[5], 10);

    updateSubCubeRotations(0, [0, 1, 0], Math.PI / -2);
    updateSubCubeIndices([0, 6, 8, 2], [1, 3, 7, 5]);
}

function finishUPrime() {
    finishU();
    finishU();
    finishU();
}

function finishD() {
    translateX(subCubes[24], 20);
    translateZ(subCubes[18], 20);
    translateX(subCubes[20], -20);
    translateZ(subCubes[26], -20);

    translateX(subCubes[25], 10);
    translateZ(subCubes[25], -10);

    translateX(subCubes[21], 10);
    translateZ(subCubes[21], 10);

    translateX(subCubes[19], -10);
    translateZ(subCubes[19], 10);

    translateX(subCubes[23], -10);
    translateZ(subCubes[23], -10);

    updateSubCubeRotations(2, [0, 1, 0], Math.PI / 2);
    updateSubCubeIndices([24, 18, 20, 26], [25, 21, 19, 23]);
}

function finishDPrime() {
    finishD();
    finishD();
    finishD();
}

function finishF() {
    translateX(subCubes[6], 20);
    translateY(subCubes[24], 20);
    translateX(subCubes[26], -20);
    translateY(subCubes[8], -20);

    translateX(subCubes[7], 10);
    translateY(subCubes[7], -10);

    translateX(subCubes[15], 10);
    translateY(subCubes[15], 10);

    translateX(subCubes[25], -10);
    translateY(subCubes[25], 10);

    translateX(subCubes[17], -10);
    translateY(subCubes[17], -10);

    updateSubCubeRotations(4, [0, 0, 1], Math.PI / -2);
    updateSubCubeIndices([6, 24, 26, 8], [7, 15, 25, 17]);
}

function finishFPrime() {
    finishF();
    finishF();
    finishF();
}

function finishB() {
    translateX(subCubes[2], -20);
    translateY(subCubes[20], 20);
    translateX(subCubes[18], 20);
    translateY(subCubes[0], -20);

    translateX(subCubes[1], -10);
    translateY(subCubes[1], -10);

    translateX(subCubes[11], -10);
    translateY(subCubes[11], 10);

    translateX(subCubes[19], 10);
    translateY(subCubes[19], 10);

    translateX(subCubes[9], 10);
    translateY(subCubes[9], -10);

    updateSubCubeRotations(6, [0, 0, 1], Math.PI / 2);
    updateSubCubeIndices([2, 20, 18, 0], [1, 11, 19, 9]);
}

function finishBPrime() {
    finishB();
    finishB();
    finishB();
}

function finishR() {
    translateZ(subCubes[8], -20);
    translateY(subCubes[26], 20);
    translateZ(subCubes[20], 20);
    translateY(subCubes[2], -20);

    translateZ(subCubes[5], -10);
    translateY(subCubes[5], -10);

    translateZ(subCubes[17], -10);
    translateY(subCubes[17], 10);

    translateZ(subCubes[23], 10);
    translateY(subCubes[23], 10);

    translateZ(subCubes[11], 10);
    translateY(subCubes[11], -10);

    updateSubCubeRotations(8, [1, 0, 0], Math.PI / -2);
    updateSubCubeIndices([8, 26, 20, 2], [5, 17, 23, 11]);
}

function finishRPrime() {
    finishR();
    finishR();
    finishR();
}

function finishL() {
    translateZ(subCubes[0], 20);
    translateY(subCubes[18], 20);
    translateZ(subCubes[24], -20);
    translateY(subCubes[6], -20);

    translateZ(subCubes[3], 10);
    translateY(subCubes[3], -10);

    translateZ(subCubes[9], 10);
    translateY(subCubes[9], 10);

    translateZ(subCubes[21], -10);
    translateY(subCubes[21], 10);

    translateZ(subCubes[15], -10);
    translateY(subCubes[15], -10);

    updateSubCubeRotations(10, [1, 0, 0], Math.PI / 2);
    updateSubCubeIndices([0, 18, 24, 6], [3, 9, 21, 15]);
}

function finishLPrime() {
    finishL();
    finishL();
    finishL();
}
