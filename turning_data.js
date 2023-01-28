import * as THREE from "threejs";

export function allFaceIndices(turnID) {
    switch (turnID) {
        case 0:
        case 1:
        case 2:
            return [0, 1, 2, 3, 4, 5, 6, 7, 8]; // U U' U2
        case 3:
        case 4:
        case 5:
            return [9, 10, 11, 12, 13, 14, 15, 16, 17]; // E E' E2
        case 6:
        case 7:
        case 8:
            return [18, 19, 20, 21, 22, 23, 24, 25, 26]; // D D' D2
        case 9:
        case 10:
        case 11:
            return [6, 7, 8, 15, 16, 17, 24, 25, 26]; // F F' F2
        case 12:
        case 13:
        case 14:
            return [3, 4, 5, 12, 13, 14, 21, 22, 23]; // S S' S2
        case 15:
        case 16:
        case 17:
            return [0, 1, 2, 9, 10, 11, 18, 19, 20]; // B B' B2
        case 18:
        case 19:
        case 20:
            return [2, 5, 8, 11, 14, 17, 20, 23, 26]; // R R' R2
        case 21:
        case 22:
        case 23:
            return [1, 4, 7, 10, 13, 16, 19, 22, 25]; // M M' M2
        case 24:
        case 25:
        case 26:
            return [0, 3, 6, 9, 12, 15, 18, 21, 24]; // L L' L2
        case 27:
        case 28:
        case 29:
            return [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26,
            ]; // x x' x2
        case 30:
        case 31:
        case 32:
            return [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26,
            ]; // y y' y2
        case 33:
        case 34:
        case 35:
            return [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26,
            ]; // z z' z2

        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], // u 9
        // [18, 19, 20, 21, 22, 23, 24, 25, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17], // d 10
        // [6, 7, 8, 15, 16, 17, 24, 25, 26, 3, 4, 5, 12, 13, 14, 21, 22, 23], // f 11
        // [0, 1, 2, 9, 10, 11, 18, 19, 20, 3, 4, 5, 12, 13, 14, 21, 22, 23], // b 12
        // [2, 5, 8, 11, 14, 17, 20, 23, 26, 1, 4, 7, 10, 13, 16, 19, 22, 25], // r 13
        // [0, 3, 6, 9, 12, 15, 18, 21, 24, 1, 4, 7, 10, 13, 16, 19, 22, 25], // l 14
    }
}

// index in array is the move's turnID
export const POSSIBLE_MOVES = [
    "U",
    "U'",
    "U2",

    "E",
    "E'",
    "E2",

    "D",
    "D'",
    "D2",

    "F",
    "F'",
    "F2",

    "S",
    "S'",
    "S2",

    "B",
    "B'",
    "B2",

    "R",
    "R'",
    "R2",

    "M",
    "M'",
    "M2",

    "L",
    "L'",
    "L2",

    "x",
    "x'",
    "x2",

    "y",
    "y'",
    "y2",

    "z",
    "z'",
    "z2",

    "u",
    "u'",
    "u2",

    "d",
    "d'",
    "d2",

    "f",
    "f'",
    "f2",

    "b",
    "b'",
    "b2",

    "r",
    "r'",
    "r2",

    "l",
    "l'",
    "l2",
];

const U_EPrime_DPrime_Quaternion = newQuaternion(0, 1, 0, -1);
const UPrime_E_D_Quaternion = newQuaternion(0, 1, 0, 1);
const F_S_BPrime_Quaternion = newQuaternion(0, 0, 1, -1);
const FPrime_SPrime_B_Quaternion = newQuaternion(0, 0, 1, 1);
const R_MPrime_LPrime_Quaternion = newQuaternion(1, 0, 0, -1);
const RPrime_M_L_Quaternion = newQuaternion(1, 0, 0, 1);

const U2_Quaternion = newQuaternion(0, 1, 0, -2);
const E2_D2_Quaternion = newQuaternion(0, 1, 0, 2);
const F2_S2_Quaternion = newQuaternion(0, 0, 1, -2);
const B2_Quaternion = newQuaternion(0, 0, 1, 2);
const R2_Quaternion = newQuaternion(1, 0, 0, -2);
const M2_L2_Quaternion = newQuaternion(1, 0, 0, 2);

export const TURN_QUATERNIONS = [
    U_EPrime_DPrime_Quaternion, // U
    UPrime_E_D_Quaternion, // U'
    U2_Quaternion, // U2

    UPrime_E_D_Quaternion, // E
    U_EPrime_DPrime_Quaternion, // E'
    E2_D2_Quaternion, // E2

    UPrime_E_D_Quaternion, // D
    U_EPrime_DPrime_Quaternion, // D'
    E2_D2_Quaternion, // D2

    F_S_BPrime_Quaternion, // F
    FPrime_SPrime_B_Quaternion, // F'
    F2_S2_Quaternion, // F2

    F_S_BPrime_Quaternion, // S
    FPrime_SPrime_B_Quaternion, // S'
    F2_S2_Quaternion, // S2

    FPrime_SPrime_B_Quaternion, // B
    F_S_BPrime_Quaternion, // B'
    B2_Quaternion, // B2

    R_MPrime_LPrime_Quaternion, // R
    RPrime_M_L_Quaternion, // R'
    R2_Quaternion, // R2

    RPrime_M_L_Quaternion, // M
    R_MPrime_LPrime_Quaternion, // M'
    M2_L2_Quaternion, // M2

    RPrime_M_L_Quaternion, // L
    R_MPrime_LPrime_Quaternion, // L'
    M2_L2_Quaternion, // L2

    R_MPrime_LPrime_Quaternion, // x
    RPrime_M_L_Quaternion, // x'
    R2_Quaternion, // x2

    U_EPrime_DPrime_Quaternion, // y
    UPrime_E_D_Quaternion, // y'
    U2_Quaternion, // y2

    F_S_BPrime_Quaternion, // z
    FPrime_SPrime_B_Quaternion, // z'
    F2_S2_Quaternion, // z2
];

function newQuaternion(x, y, z, dir) {
    return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(x, y, z), dir * (Math.PI / 2));
}
