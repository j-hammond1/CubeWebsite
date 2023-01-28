import * as THREE from "threejs";
import { subCubes } from "./cube_builder.js";
import { allFaceIndices } from "./turning_data.js";

export const FINISHERS = [
    finishU,
    finishUPrime,
    finishU2,

    finishE,
    finishEPrime,
    finishE2,

    finishD,
    finishDPrime,
    finishD2,

    finishF,
    finishFPrime,
    finishF2,

    finishS,
    finishSPrime,
    finishS2,

    finishB,
    finishBPrime,
    finishB2,

    finishR,
    finishRPrime,
    finishR2,

    finishM,
    finishMPrime,
    finishM2,

    finishL,
    finishLPrime,
    finishL2,

    finishX,
    finishXPrime,
    finishX2,

    finishY,
    finishYPrime,
    finishY2,

    finishZ,
    finishZPrime,
    finishZ2,
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

function updateSubCubeRotations(id, vector, radians) {
    const [x, y, z] = vector;
    for (let i of allFaceIndices(id)) {
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

    // edges / centers
    temp = subCubes[e[0]];
    subCubes[e[0]] = subCubes[e[1]];
    subCubes[e[1]] = subCubes[e[2]];
    subCubes[e[2]] = subCubes[e[3]];
    subCubes[e[3]] = temp;
}
////
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

function finishU2() {
    finishU();
    finishU();
}
////
function finishE() {
    translateZ(subCubes[9], 20);

    translateX(subCubes[10], -10);
    translateZ(subCubes[10], 10);

    translateX(subCubes[11], -20);

    translateX(subCubes[12], 10);
    translateZ(subCubes[12], 10);

    translateX(subCubes[14], -10);
    translateZ(subCubes[14], -10);

    translateX(subCubes[15], 20);

    translateX(subCubes[16], 10);
    translateZ(subCubes[16], -10);

    translateZ(subCubes[17], -20);

    updateSubCubeRotations(3, [0, 1, 0], Math.PI / 2);
    updateSubCubeIndices([15, 9, 11, 17], [16, 12, 10, 14]);
}

function finishEPrime() {
    finishE();
    finishE();
    finishE();
}

function finishE2() {
    finishE();
    finishE();
}
////
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

    updateSubCubeRotations(6, [0, 1, 0], Math.PI / 2);
    updateSubCubeIndices([24, 18, 20, 26], [25, 21, 19, 23]);
}

function finishDPrime() {
    finishD();
    finishD();
    finishD();
}

function finishD2() {
    finishD();
    finishD();
}
////
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

    updateSubCubeRotations(9, [0, 0, 1], Math.PI / -2);
    updateSubCubeIndices([6, 24, 26, 8], [7, 15, 25, 17]);
}

function finishFPrime() {
    finishF();
    finishF();
    finishF();
}

function finishF2() {
    finishF();
    finishF();
}
////
function finishS() {
    translateX(subCubes[3], 20);

    translateX(subCubes[4], 10);
    translateY(subCubes[4], -10);

    translateY(subCubes[5], -20);

    translateX(subCubes[12], 10);
    translateY(subCubes[12], 10);

    translateX(subCubes[14], -10);
    translateY(subCubes[14], -10);

    translateY(subCubes[21], 20);

    translateX(subCubes[22], -10);
    translateY(subCubes[22], 10);

    translateX(subCubes[23], -20);

    updateSubCubeRotations(12, [0, 0, 1], Math.PI / -2);
    updateSubCubeIndices([3, 21, 23, 5], [4, 12, 22, 14]);
}

function finishSPrime() {
    finishS();
    finishS();
    finishS();
}

function finishS2() {
    finishS();
    finishS();
}
////
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

    updateSubCubeRotations(15, [0, 0, 1], Math.PI / 2);
    updateSubCubeIndices([2, 20, 18, 0], [1, 11, 19, 9]);
}

function finishBPrime() {
    finishB();
    finishB();
    finishB();
}

function finishB2() {
    finishB();
    finishB();
}
////
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

    updateSubCubeRotations(18, [1, 0, 0], Math.PI / -2);
    updateSubCubeIndices([8, 26, 20, 2], [5, 17, 23, 11]);
}

function finishRPrime() {
    finishR();
    finishR();
    finishR();
}

function finishR2() {
    finishR();
    finishR();
}
////
function finishM() {
    translateZ(subCubes[1], 20);

    translateZ(subCubes[4], 10);
    translateY(subCubes[4], -10);

    translateY(subCubes[7], -20);

    translateZ(subCubes[10], 10);
    translateY(subCubes[10], 10);

    translateZ(subCubes[16], -10);
    translateY(subCubes[16], -10);

    translateY(subCubes[19], 20);

    translateZ(subCubes[22], -10);
    translateY(subCubes[22], 10);

    translateZ(subCubes[25], -20);

    updateSubCubeRotations(21, [1, 0, 0], Math.PI / 2);
    updateSubCubeIndices([1, 19, 25, 7], [4, 10, 22, 16]);
}

function finishMPrime() {
    finishM();
    finishM();
    finishM();
}

function finishM2() {
    finishM();
    finishM();
}
////
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

    updateSubCubeRotations(24, [1, 0, 0], Math.PI / 2);
    updateSubCubeIndices([0, 18, 24, 6], [3, 9, 21, 15]);
}

function finishLPrime() {
    finishL();
    finishL();
    finishL();
}

function finishL2() {
    finishL();
    finishL();
}
////
function finishX() {
    finishR();
    finishMPrime();
    finishLPrime();
}

function finishXPrime() {
    finishX();
    finishX();
    finishX();
}

function finishX2() {
    finishX();
    finishX();
}
////
function finishY() {
    finishU();
    finishEPrime();
    finishDPrime();
}

function finishYPrime() {
    finishY();
    finishY();
    finishY();
}

function finishY2() {
    finishY();
    finishY();
}
////
function finishZ() {
    finishF();
    finishS();
    finishBPrime();
}

function finishZPrime() {
    finishZ();
    finishZ();
    finishZ();
}

function finishZ2() {
    finishZ();
    finishZ();
}
////
function finish_u() {
    finishU();
    finishEPrime();
}

function finish_uPrime() {
    finish_u();
    finish_u();
    finish_u();
}

function finish_u2() {
    finish_u();
    finish_u();
}
