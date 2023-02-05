import * as THREE from "threejs";
import { subCubes } from "./cube-builder.js";
import { allFaceIndices, turnQuaternions } from "./turning-data.js";

/* 
test:
 U U' U2 E E' E2 D D' D2 F F' F2 S S' S2 B B' B2 R R' R2 M M' M2 L L' L2
 x x' x2 y y' y2 z z' z2
 u u' u2 d d' d2 f f' f2 b b' b2 r r' r2 l l' l2
*/

export const FINISHERS = [
    UTurn,
    UPrimeTurn,
    U2Turn,

    ETurn,
    EPrimeTurn,
    E2Turn,

    DTurn,
    DPrimeTurn,
    D2Turn,

    FTurn,
    FPrimeTurn,
    F2Turn,

    STurn,
    SPrimeTurn,
    S2Turn,

    BTurn,
    BPrimeTurn,
    B2Turn,

    RTurn,
    RPrimeTurn,
    R2Turn,

    MTurn,
    MPrimeTurn,
    M2Turn,

    LTurn,
    LPrimeTurn,
    L2Turn,

    xTurn,
    xPrimeTurn,
    x2Turn,

    yTurn,
    yPrimeTurn,
    y2Turn,

    zTurn,
    zPrimeTurn,
    z2Turn,

    uTurn,
    uPrimeTurn,
    u2Turn,

    dTurn,
    dPrimeTurn,
    d2Turn,

    fTurn,
    fPrimeTurn,
    f2Turn,

    bTurn,
    bPrimeTurn,
    b2Turn,

    rTurn,
    rPrimeTurn,
    r2Turn,

    lTurn,
    lPrimeTurn,
    l2Turn,
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

// function updateSubCubeQuaternion(id, quaternion) {
//     for (let i of allFaceIndices(id)) {
//         subCubes[i].applyQuaternion(quaternion);
//     }
// }

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
function UTurn() {
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

    // updateSubCubeQuaternion(0, TURN_QUATERNIONS[0]);
    updateSubCubeRotations(0, [0, 1, 0], Math.PI / -2);
    updateSubCubeIndices([0, 6, 8, 2], [1, 3, 7, 5]);
}

function UPrimeTurn() {
    UTurn();
    UTurn();
    UTurn();
}

function U2Turn() {
    UTurn();
    UTurn();
}
////
function ETurn() {
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

    // updateSubCubeQuaternion(3, TURN_QUATERNIONS[3]);
    updateSubCubeRotations(3, [0, 1, 0], Math.PI / 2);
    updateSubCubeIndices([15, 9, 11, 17], [16, 12, 10, 14]);
}

function EPrimeTurn() {
    ETurn();
    ETurn();
    ETurn();
}

function E2Turn() {
    ETurn();
    ETurn();
}
////
function DTurn() {
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

    // updateSubCubeQuaternion(6, TURN_QUATERNIONS[6]);
    updateSubCubeRotations(6, [0, 1, 0], Math.PI / 2);
    updateSubCubeIndices([24, 18, 20, 26], [25, 21, 19, 23]);
}

function DPrimeTurn() {
    DTurn();
    DTurn();
    DTurn();
}

function D2Turn() {
    DTurn();
    DTurn();
}
////
function FTurn() {
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

    // updateSubCubeQuaternion(9, TURN_QUATERNIONS[9]);
    updateSubCubeRotations(9, [0, 0, 1], Math.PI / -2);
    updateSubCubeIndices([6, 24, 26, 8], [7, 15, 25, 17]);
}

function FPrimeTurn() {
    FTurn();
    FTurn();
    FTurn();
}

function F2Turn() {
    FTurn();
    FTurn();
}
////
function STurn() {
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

    // updateSubCubeQuaternion(12, TURN_QUATERNIONS[12]);
    updateSubCubeRotations(12, [0, 0, 1], Math.PI / -2);
    updateSubCubeIndices([3, 21, 23, 5], [4, 12, 22, 14]);
}

function SPrimeTurn() {
    STurn();
    STurn();
    STurn();
}

function S2Turn() {
    STurn();
    STurn();
}
////
function BTurn() {
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

    // updateSubCubeQuaternion(15, TURN_QUATERNIONS[15]);
    updateSubCubeRotations(15, [0, 0, 1], Math.PI / 2);
    updateSubCubeIndices([2, 20, 18, 0], [1, 11, 19, 9]);
}

function BPrimeTurn() {
    BTurn();
    BTurn();
    BTurn();
}

function B2Turn() {
    BTurn();
    BTurn();
}
////
function RTurn() {
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

    // updateSubCubeQuaternion(18, TURN_QUATERNIONS[18]);
    updateSubCubeRotations(18, [1, 0, 0], Math.PI / -2);
    updateSubCubeIndices([8, 26, 20, 2], [5, 17, 23, 11]);
}

function RPrimeTurn() {
    RTurn();
    RTurn();
    RTurn();
}

function R2Turn() {
    RTurn();
    RTurn();
}
////
function MTurn() {
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

    // updateSubCubeQuaternion(21, TURN_QUATERNIONS[21]);
    updateSubCubeRotations(21, [1, 0, 0], Math.PI / 2);
    updateSubCubeIndices([1, 19, 25, 7], [4, 10, 22, 16]);
}

function MPrimeTurn() {
    MTurn();
    MTurn();
    MTurn();
}

function M2Turn() {
    MTurn();
    MTurn();
}
////
function LTurn() {
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

    // updateSubCubeQuaternion(24, TURN_QUATERNIONS[24]);
    updateSubCubeRotations(24, [1, 0, 0], Math.PI / 2);
    updateSubCubeIndices([0, 18, 24, 6], [3, 9, 21, 15]);
}

function LPrimeTurn() {
    LTurn();
    LTurn();
    LTurn();
}

function L2Turn() {
    LTurn();
    LTurn();
}
////
function xTurn() {
    RTurn();
    MPrimeTurn();
    LPrimeTurn();
}

function xPrimeTurn() {
    xTurn();
    xTurn();
    xTurn();
}

function x2Turn() {
    xTurn();
    xTurn();
}
////
function yTurn() {
    UTurn();
    EPrimeTurn();
    DPrimeTurn();
}

function yPrimeTurn() {
    yTurn();
    yTurn();
    yTurn();
}

function y2Turn() {
    yTurn();
    yTurn();
}
////
function zTurn() {
    FTurn();
    STurn();
    BPrimeTurn();
}

function zPrimeTurn() {
    zTurn();
    zTurn();
    zTurn();
}

function z2Turn() {
    zTurn();
    zTurn();
}
////
function uTurn() {
    UTurn();
    EPrimeTurn();
}

function uPrimeTurn() {
    uTurn();
    uTurn();
    uTurn();
}

function u2Turn() {
    uTurn();
    uTurn();
}
////
function dTurn() {
    DTurn();
    ETurn();
}

function dPrimeTurn() {
    dTurn();
    dTurn();
    dTurn();
}

function d2Turn() {
    dTurn();
    dTurn();
}
////
function fTurn() {
    FTurn();
    STurn();
}

function fPrimeTurn() {
    fTurn();
    fTurn();
    fTurn();
}

function f2Turn() {
    fTurn();
    fTurn();
}
////
function bTurn() {
    BTurn();
    SPrimeTurn();
}

function bPrimeTurn() {
    bTurn();
    bTurn();
    bTurn();
}

function b2Turn() {
    bTurn();
    bTurn();
}
////
function rTurn() {
    RTurn();
    MPrimeTurn();
}

function rPrimeTurn() {
    rTurn();
    rTurn();
    rTurn();
}

function r2Turn() {
    rTurn();
    rTurn();
}
////
function lTurn() {
    LTurn();
    MTurn();
}

function lPrimeTurn() {
    lTurn();
    lTurn();
    lTurn();
}

function l2Turn() {
    lTurn();
    lTurn();
}
