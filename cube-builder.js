import * as THREE from "threejs";
import { RoundedBoxGeometry } from "RoundedBoxGeometry";
import {
    txtrs,
    initBlankModel,
    initGrayscaleModel,
    initStickerlessModel,
    initStickeredModel,
    initSpeedcubeModel,
    initBLDModel,
    initDebugModel1,
    initDebugModel2,
    initEarthModel,
    initRoseModel,
    initCheckeredModel,
    initChromecastImgsModel,
    initVideoModel,
} from "./cube-models.js";

const BASE_CLR = new THREE.Color(0x000000);
const R_CLR = new THREE.Color(0xd10000);
const L_CLR = new THREE.Color(0xef6600);
const U_CLR = new THREE.Color(0xffffff);
const D_CLR = new THREE.Color(0xf5f500);
const F_CLR = new THREE.Color(0x007000);
const B_CLR = new THREE.Color(0x0000ff);

const COORD = 10;
const SCALE = 10;
let subCubeID = 0;

export function setBASE_CLR(c) {
    BASE_CLR.setHex(c);
}
export function setR_CLR(c) {
    R_CLR.setHex(c);
}
export function setL_CLR(c) {
    L_CLR.setHex(c);
}
export function setU_CLR(c) {
    U_CLR.setHex(c);
}
export function setD_CLR(c) {
    D_CLR.setHex(c);
}
export function setF_CLR(c) {
    F_CLR.setHex(c);
}
export function setB_CLR(c) {
    B_CLR.setHex(c);
}

export function resetCube() {
    subCubes.length = 0;
    subCubeID = 0;
    initCube();
}

export const subCubes = [];

// initBlankModel();
// initGrayscaleModel();
// initStickerlessModel();
initStickeredModel();
// initSpeedcubeModel();
// initBLDModel();
// initDebugModel1();
// initDebugModel2();
// initEarthModel();
// initRoseModel();
// initCheckeredModel();
// initChromecastImgsModel();
// initVideoModel();

initCube();

function initCube() {
    // 0
    createSubCube(
        [-COORD, COORD, -COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, 18, 0, null, null, 47]
    );
    // 1
    createSubCube(
        [0, COORD, -COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, null, 1, null, null, 46]
    );
    // 2
    createSubCube(
        [COORD, COORD, -COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [38, null, 2, null, null, 45]
    );
    // 3
    createSubCube(
        [-COORD, COORD, 0],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, 19, 3, null, null, null]
    );
    // 4
    createSubCube(
        [0, COORD, 0],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, null, 4, null, null, null]
    );
    // 5
    createSubCube(
        [COORD, COORD, 0],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [37, null, 5, null, null, null]
    );
    // 6
    createSubCube(
        [-COORD, COORD, COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, 20, 6, null, 27, null]
    );
    // 7
    createSubCube(
        [0, COORD, COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, null, 7, null, 28, null]
    );
    // 8
    createSubCube(
        [COORD, COORD, COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [36, null, 8, null, 29, null]
    );
    // 9
    createSubCube(
        [-COORD, 0, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, 21, null, null, null, 50]
    );
    // 10
    createSubCube(
        [0, 0, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, null, null, null, null, 49]
    );
    // 11
    createSubCube(
        [COORD, 0, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [41, null, null, null, null, 48]
    );
    // 12
    createSubCube(
        [-COORD, 0, 0],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, 22, null, null, null, null]
    );
    // 13 ---CENTER---
    createSubCube(
        [0, 0, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, null, null, null, null, null]
    );
    // 14
    createSubCube(
        [COORD, 0, 0],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [40, null, null, null, null, null]
    );
    // 15
    createSubCube(
        [-COORD, 0, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, 23, null, null, 30, null]
    );
    // 16
    createSubCube(
        [0, 0, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, null, null, null, 31, null]
    );
    // 17
    createSubCube(
        [COORD, 0, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [39, null, null, null, 32, null]
    );
    // 18
    createSubCube(
        [-COORD, -COORD, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [null, 24, null, 15, null, 53]
    );
    // 19
    createSubCube(
        [0, -COORD, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [null, null, null, 16, null, 52]
    );
    // 20
    createSubCube(
        [COORD, -COORD, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [44, null, null, 17, null, 51]
    );
    // 21
    createSubCube(
        [-COORD, -COORD, 0],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [null, 25, null, 12, null, null]
    );
    // 22
    createSubCube(
        [0, -COORD, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [null, null, null, 13, null, null]
    );
    // 23
    createSubCube(
        [COORD, -COORD, 0],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [43, null, null, 14, null, null]
    );
    // 24
    createSubCube(
        [-COORD, -COORD, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [null, 26, null, 9, 33, null]
    );
    // 2
    createSubCube(
        [0, -COORD, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [null, null, null, 10, 34, null]
    );
    // 26
    createSubCube(
        [COORD, -COORD, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [42, null, null, 11, 35, null]
    );
}

function createSubCube(coords, colors, txtrIndices) {
    const subCubeMaterials = [];

    for (let i = 0; i < 6; i++) {
        if (txtrIndices[i] !== null) {
            subCubeMaterials[i] = new THREE.MeshPhongMaterial({
                name: txtrIndices[i],
                color: colors[i],
                map: txtrs[txtrIndices[i]],
            });
        } else {
            subCubeMaterials[i] = new THREE.MeshPhongMaterial({
                color: colors[i],
            });
        }
    }

    const subCubeGeometry = new RoundedBoxGeometry(SCALE, SCALE, SCALE, 6, 0.75);
    const subCubeMesh = new THREE.Mesh(subCubeGeometry, subCubeMaterials);
    subCubeMesh.name = `subCube#${subCubeID++}`;
    subCubeMesh.position.set(coords[0], coords[1], coords[2]);
    subCubes.push(subCubeMesh);
}
