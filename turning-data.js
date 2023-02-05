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
        case 36:
        case 37:
        case 38:
            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; // u
        case 39:
        case 40:
        case 41:
            return [18, 19, 20, 21, 22, 23, 24, 25, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17]; // d
        case 42:
        case 43:
        case 44:
            return [6, 7, 8, 15, 16, 17, 24, 25, 26, 3, 4, 5, 12, 13, 14, 21, 22, 23]; // f
        case 45:
        case 46:
        case 47:
            return [0, 1, 2, 9, 10, 11, 18, 19, 20, 3, 4, 5, 12, 13, 14, 21, 22, 23]; // b
        case 48:
        case 49:
        case 50:
            return [2, 5, 8, 11, 14, 17, 20, 23, 26, 1, 4, 7, 10, 13, 16, 19, 22, 25]; // r
        case 51:
        case 52:
        case 53:
            return [0, 3, 6, 9, 12, 15, 18, 21, 24, 1, 4, 7, 10, 13, 16, 19, 22, 25]; // l
    }
}

// index in array is the move's turnID
export const POSSIBLE_MOVES = [
    "U", // 0
    "U'", // 1
    "U2", // 2

    "E", // 3
    "E'", // 4
    "E2", // 5

    "D", // 6
    "D'", // 7
    "D2", // 8

    "F", // 9
    "F'", // 10
    "F2", // 11

    "S", // 12
    "S'", // 13
    "S2", // 14

    "B", // 15
    "B'", // 16
    "B2", // 17

    "R", // 18
    "R'", // 19
    "R2", // 20

    "M", // 21
    "M'", // 22
    "M2", // 23

    "L", // 24
    "L'", // 25
    "L2", // 26

    "x", // 27
    "x'", // 28
    "x2", // 29

    "y", // 30
    "y'", // 31
    "y2", // 32

    "z", // 33
    "z'", // 34
    "z2", // 35

    "u", // 36
    "u'", // 37
    "u2", // 38

    "d", // 39
    "d'", // 40
    "d2", // 41

    "f", // 42
    "f'", // 43
    "f2", // 44

    "b", // 45
    "b'", // 46
    "b2", // 47

    "r", // 48
    "r'", // 49
    "r2", // 50

    "l", // 51
    "l'", // 52
    "l2", // 53
];

function newQuaternion(x, y, z, dir) {
    return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(x, y, z), dir * (Math.PI / 2));
}

const yNeg90 = newQuaternion(0, 1, 0, -1);
const yPos90 = newQuaternion(0, 1, 0, 1);
const zNeg90 = newQuaternion(0, 0, 1, -1);
const zPos90 = newQuaternion(0, 0, 1, 1);
const xNeg90 = newQuaternion(1, 0, 0, -1);
const xPos90 = newQuaternion(1, 0, 0, 1);

const yNeg180 = newQuaternion(0, 1, 0, -2);
const yPos180 = newQuaternion(0, 1, 0, 2);
const zNeg180 = newQuaternion(0, 0, 1, -2);
const zPos180 = newQuaternion(0, 0, 1, 2);
const xNeg180 = newQuaternion(1, 0, 0, -2);
const xPos180 = newQuaternion(1, 0, 0, 2);

export function turnQuaternions(turnID) {
    switch (turnID) {
        case 0:
        case 4:
        case 7:
        case 30:
        case 36:
        case 40:
            return yNeg90; // U E' D' y u d'
        case 1:
        case 3:
        case 6:
        case 31:
        case 37:
        case 39:
            return yPos90; // U' E D y' u' d
        case 2:
        case 32:
        case 38:
            return yNeg180; // U2 y2 u2
        case 5:
        case 8:
        case 41:
            return yPos180; // E2 D2 d2
        case 9:
        case 12:
        case 16:
        case 33:
        case 42:
        case 46:
            return zNeg90; // F S B' z f b'
        case 10:
        case 13:
        case 15:
        case 34:
        case 43:
        case 45:
            return zPos90; // F' S' B z' f' b
        case 11:
        case 14:
        case 35:
        case 44:
            return zNeg180; // F2 S2 z2 f2
        case 17:
        case 47:
            return zPos180; // B2 b2
        case 18:
        case 22:
        case 25:
        case 27:
        case 48:
        case 52:
            return xNeg90; // R M' L' x r l'
        case 19:
        case 21:
        case 24:
        case 28:
        case 49:
        case 51:
            return xPos90; // R' M L x' r' l
        case 20:
        case 29:
        case 50:
            return xNeg180; // R2 r2
        case 23:
        case 26:
        case 53:
            return xPos180; // M2 L2 l2
    }
}
