import * as THREE from "threejs";

export const HITBOXES = [];

export const U_TRACK = [18, 19, 20, 27, 28, 29, 36, 37, 38, 45, 46, 47];
export const E_TRACK = [21, 22, 23, 30, 31, 32, 39, 40, 41, 48, 49, 50];
export const D_TRACK = [24, 25, 26, 33, 34, 35, 42, 43, 44, 51, 52, 53];

export const F_TRACK = [6, 7, 8, 36, 39, 42, 11, 10, 9, 26, 23, 20];
export const S_TRACK = [3, 4, 5, 37, 40, 43, 14, 13, 12, 25, 22, 19];
export const B_TRACK = [0, 1, 2, 38, 41, 44, 17, 16, 15, 24, 21, 18];

export const R_TRACK = [2, 5, 8, 29, 32, 35, 11, 14, 17, 51, 48, 45];
export const M_TRACK = [1, 4, 7, 28, 31, 34, 10, 13, 16, 52, 49, 46];
export const L_TRACK = [0, 3, 6, 27, 30, 33, 9, 12, 15, 53, 50, 47];

const HOVER = 15;

const ALL_COORDS = [
    [-10, HOVER, -10],
    [0, HOVER, -10],
    [10, HOVER, -10],
    [-10, HOVER, 0],
    [0, HOVER, 0],
    [10, HOVER, 0],
    [-10, HOVER, 10],
    [0, HOVER, 10],
    [10, HOVER, 10],

    [-10, -HOVER, 10],
    [0, -HOVER, 10],
    [10, -HOVER, 10],
    [-10, -HOVER, 0],
    [0, -HOVER, 0],
    [10, -HOVER, 0],
    [-10, -HOVER, -10],
    [0, -HOVER, -10],
    [10, -HOVER, -10],

    [-HOVER, 10, -10],
    [-HOVER, 10, 0],
    [-HOVER, 10, 10],
    [-HOVER, 0, -10],
    [-HOVER, 0, 0],
    [-HOVER, 0, 10],
    [-HOVER, -10, -10],
    [-HOVER, -10, 0],
    [-HOVER, -10, 10],

    [-10, 10, HOVER],
    [0, 10, HOVER],
    [10, 10, HOVER],
    [-10, 0, HOVER],
    [0, 0, HOVER],
    [10, 0, HOVER],
    [-10, -10, HOVER],
    [0, -10, HOVER],
    [10, -10, HOVER],

    [HOVER, 10, 10],
    [HOVER, 10, 0],
    [HOVER, 10, -10],
    [HOVER, 0, 10],
    [HOVER, 0, 0],
    [HOVER, 0, -10],
    [HOVER, -10, 10],
    [HOVER, -10, 0],
    [HOVER, -10, -10],

    [10, 10, -HOVER],
    [0, 10, -HOVER],
    [-10, 10, -HOVER],
    [10, 0, -HOVER],
    [0, 0, -HOVER],
    [-10, 0, -HOVER],
    [10, -10, -HOVER],
    [0, -10, -HOVER],
    [-10, -10, -HOVER],
];

const ALL_ROTS = [
    [Math.PI / 2, 0, 0],
    [0, Math.PI / 2, 0],
    [0, 0, 0],
];

initHitboxes();

function initHitboxes() {
    for (let i = 0; i < 54; i++) {
        if (i <= 17) {
            HITBOXES.push(initHitbox(ALL_COORDS[i], ALL_ROTS[0], i));
        }
        if (i >= 18 && i <= 26) {
            HITBOXES.push(initHitbox(ALL_COORDS[i], ALL_ROTS[1], i));
        }
        if (i >= 27 && i <= 35) {
            HITBOXES.push(initHitbox(ALL_COORDS[i], ALL_ROTS[2], i));
        }
        if (i >= 36 && i <= 44) {
            HITBOXES.push(initHitbox(ALL_COORDS[i], ALL_ROTS[1], i));
        }
        if (i >= 45 && i <= 53) {
            HITBOXES.push(initHitbox(ALL_COORDS[i], ALL_ROTS[2], i));
        }
    }
}

function initHitbox(coords, rotations, id) {
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0,
            depthTest: false,
        })
    );
    plane.position.set(coords[0], coords[1], coords[2]);
    plane.rotation.set(rotations[0], rotations[1], rotations[2]);
    plane.name = id;
    return plane;
}
