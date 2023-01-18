import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { FINISH_FUNCTS } from "./turn_finishers.js";

export const ALL_FACE_INDICES = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // U
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // U'

    [18, 19, 20, 21, 22, 23, 24, 25, 26], // D
    [18, 19, 20, 21, 22, 23, 24, 25, 26], // D'

    [6, 7, 8, 15, 16, 17, 24, 25, 26], // F
    [6, 7, 8, 15, 16, 17, 24, 25, 26], // F'

    [0, 1, 2, 9, 10, 11, 18, 19, 20], // B
    [0, 1, 2, 9, 10, 11, 18, 19, 20], // B'

    [2, 5, 8, 11, 14, 17, 20, 23, 26], // R
    [2, 5, 8, 11, 14, 17, 20, 23, 26], // R'

    [0, 3, 6, 9, 12, 15, 18, 21, 24], // L
    [0, 3, 6, 9, 12, 15, 18, 21, 24], // L'
];

export const POSSIBLE_MOVES = ["u", "U", "d", "D", "f", "F", "b", "B", "r", "R", "l", "L"];

export const STARTERS = {
    u: 0,
    U: 1,
    d: 2,
    D: 3,
    f: 4,
    F: 5,
    b: 6,
    B: 7,
    r: 8,
    R: 9,
    l: 10,
    L: 11,
};

export const FINISHERS = {
    0: FINISH_FUNCTS[0],
    1: FINISH_FUNCTS[1],
    2: FINISH_FUNCTS[2],
    3: FINISH_FUNCTS[3],
    4: FINISH_FUNCTS[4],
    5: FINISH_FUNCTS[5],
    6: FINISH_FUNCTS[6],
    7: FINISH_FUNCTS[7],
    8: FINISH_FUNCTS[8],
    9: FINISH_FUNCTS[9],
    10: FINISH_FUNCTS[10],
    11: FINISH_FUNCTS[11],
    12: FINISH_FUNCTS[12],
};

export const TURN_QUATERNIONS = [
    newQuaternion(0, 1, 0, -1), // U
    newQuaternion(0, 1, 0, 1), // U'
    newQuaternion(0, 1, 0, 1), // D
    newQuaternion(0, 1, 0, -1), // D'
    newQuaternion(0, 0, 1, -1), // F
    newQuaternion(0, 0, 1, 1), // F'
    newQuaternion(0, 0, 1, 1), // B
    newQuaternion(0, 0, 1, -1), // B'
    newQuaternion(1, 0, 0, -1), // R
    newQuaternion(1, 0, 0, 1), // R'
    newQuaternion(1, 0, 0, 1), // L
    newQuaternion(1, 0, 0, -1), // L'
];

function newQuaternion(x, y, z, dir) {
    return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(x, y, z), dir * (Math.PI / 2));
}
