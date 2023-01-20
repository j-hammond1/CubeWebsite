import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { FINISH_FUNCTS } from "./turn_finishers.js";

export const ALL_FACE_INDICES = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // U
    [0, 1, 2, 3, 4, 5, 6, 7, 8], // U'

    [9, 10, 11, 12, 13, 14, 15, 16, 17], // E
    [9, 10, 11, 12, 13, 14, 15, 16, 17], // E'

    [18, 19, 20, 21, 22, 23, 24, 25, 26], // D
    [18, 19, 20, 21, 22, 23, 24, 25, 26], // D'

    [6, 7, 8, 15, 16, 17, 24, 25, 26], // F
    [6, 7, 8, 15, 16, 17, 24, 25, 26], // F'

    [3, 4, 5, 12, 13, 14, 21, 22, 23], // S
    [3, 4, 5, 12, 13, 14, 21, 22, 23], // S'

    [0, 1, 2, 9, 10, 11, 18, 19, 20], // B
    [0, 1, 2, 9, 10, 11, 18, 19, 20], // B'

    [2, 5, 8, 11, 14, 17, 20, 23, 26], // R
    [2, 5, 8, 11, 14, 17, 20, 23, 26], // R'

    [1, 4, 7, 10, 13, 16, 19, 22, 25], // M
    [1, 4, 7, 10, 13, 16, 19, 22, 25], // M'

    [0, 3, 6, 9, 12, 15, 18, 21, 24], // L
    [0, 3, 6, 9, 12, 15, 18, 21, 24], // L'
];

export const POSSIBLE_MOVES = [
    "u",
    "U",
    "e",
    "E",
    "d",
    "D",
    "f",
    "F",
    "s",
    "S",
    "b",
    "B",
    "r",
    "R",
    "m",
    "M",
    "l",
    "L",
];

export const STARTERS = {
    u: 0,
    U: 1,
    e: 2,
    E: 3,
    d: 4,
    D: 5,
    f: 6,
    F: 7,
    s: 8,
    S: 9,
    b: 10,
    B: 11,
    r: 12,
    R: 13,
    m: 14,
    M: 15,
    l: 16,
    L: 17,
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
    13: FINISH_FUNCTS[13],
    14: FINISH_FUNCTS[14],
    15: FINISH_FUNCTS[15],
    16: FINISH_FUNCTS[16],
    17: FINISH_FUNCTS[17],
};

const U_EPrime_DPrime_Quaternion = newQuaternion(0, 1, 0, -1);
const UPrime_E_D_Quaternion = newQuaternion(0, 1, 0, 1);
const F_S_BPrime_Quaternion = newQuaternion(0, 0, 1, -1);
const FPrime_SPrime_B_Quaternion = newQuaternion(0, 0, 1, 1);
const R_MPrime_LPrime_Quaternion = newQuaternion(1, 0, 0, -1);
const RPrime_M_L_Quaternion = newQuaternion(1, 0, 0, 1);

export const TURN_QUATERNIONS = [
    U_EPrime_DPrime_Quaternion, // U
    UPrime_E_D_Quaternion, // U'

    UPrime_E_D_Quaternion, // E
    U_EPrime_DPrime_Quaternion, // E'

    UPrime_E_D_Quaternion, // D
    U_EPrime_DPrime_Quaternion, // D'

    F_S_BPrime_Quaternion, // F
    FPrime_SPrime_B_Quaternion, // F'

    F_S_BPrime_Quaternion, // S
    FPrime_SPrime_B_Quaternion, // S'

    FPrime_SPrime_B_Quaternion, // B
    F_S_BPrime_Quaternion, // B'

    R_MPrime_LPrime_Quaternion, // R
    RPrime_M_L_Quaternion, // R'

    RPrime_M_L_Quaternion, // M
    R_MPrime_LPrime_Quaternion, // M'

    RPrime_M_L_Quaternion, // L
    R_MPrime_LPrime_Quaternion, // L'
];

function newQuaternion(x, y, z, dir) {
    return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(x, y, z), dir * (Math.PI / 2));
}
