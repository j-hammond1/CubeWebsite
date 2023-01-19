import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { RoundedBoxGeometry } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/geometries/RoundedBoxGeometry.js";

export const subCubes = [];

const BASE_CLR = 0x000000,
    R_CLR = 0xff0000,
    L_CLR = 0xff8700,
    U_CLR = 0xffffff,
    D_CLR = 0xffff00,
    F_CLR = 0x00aa00,
    B_CLR = 0x0000ff,
    COORD = 10,
    SCALE = 10,
    CRNRS = [
        0, 2, 6, 8, 9, 11, 15, 17, 18, 20, 24, 26, 27, 29, 33, 35, 36, 38, 42, 44, 45, 47, 51, 53,
    ],
    EDGES = [
        1, 3, 5, 7, 10, 12, 14, 16, 19, 21, 23, 25, 28, 30, 32, 34, 37, 39, 41, 43, 46, 48, 50, 52,
    ],
    CNTRS = [4, 13, 22, 31, 40, 49];

var subCubeID = 0;

const LOADER = new THREE.TextureLoader();
const NULL_TXTR = LOADER.load("./images/stickers/blank_1px.png");
const CRNR_STCKR = LOADER.load("./images/stickers/stickerV7.png");
const CNTR_STCKR = LOADER.load("./images/stickers/centerSticker.png");

const EDGE_STCKR_DOWN = LOADER.load("./images/stickers/edgeStickerDown.png");
const EDGE_STCKR_UP = LOADER.load("./images/stickers/edgeStickerUp.png");
const EDGE_STCKR_RIGHT = LOADER.load("./images/stickers/edgeStickerRight.png");
const EDGE_STCKR_LEFT = LOADER.load("./images/stickers/edgeStickerLeft.png");

// var txtrs = new Array(54);

// for (let i of CRNRS) {
//     txtrs[i] = CRNR_STCKR;
// }
// for (let i of EDGES) {
//     txtrs[i] = EDGE_STICKER;
// }
// for (let i of CNTRS) {
//     txtrs[i] = CNTR_STICKER;
// }

// console.log(txtrs);

// txtrs.fill(STICKER);

// for (let i = 0; i <= 26; i++) {
//     txtrs.push(LOADER.load(`./images/stickers/numbers/black${i}.png`));
// }

initCube();

function initCube() {
    // 0
    createSubCube(
        [-COORD, COORD, -COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, CRNR_STCKR, CRNR_STCKR, NULL_TXTR, NULL_TXTR, CRNR_STCKR]
    );
    // 1
    createSubCube(
        [0, COORD, -COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, NULL_TXTR, EDGE_STCKR_DOWN, NULL_TXTR, NULL_TXTR, EDGE_STCKR_DOWN]
    );
    // 2
    createSubCube(
        [COORD, COORD, -COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [CRNR_STCKR, NULL_TXTR, CRNR_STCKR, NULL_TXTR, NULL_TXTR, CRNR_STCKR]
    );
    // 3
    createSubCube(
        [-COORD, COORD, 0],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, EDGE_STCKR_DOWN, EDGE_STCKR_RIGHT, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 4
    createSubCube(
        [0, COORD, 0],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, CNTR_STCKR, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 5
    createSubCube(
        [COORD, COORD, 0],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [EDGE_STCKR_DOWN, NULL_TXTR, EDGE_STCKR_LEFT, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 6
    createSubCube(
        [-COORD, COORD, COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, CRNR_STCKR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR, NULL_TXTR]
    );
    // 7
    createSubCube(
        [0, COORD, COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, EDGE_STCKR_UP, NULL_TXTR, EDGE_STCKR_DOWN, NULL_TXTR]
    );
    // 8
    createSubCube(
        [COORD, COORD, COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [CRNR_STCKR, NULL_TXTR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR, NULL_TXTR]
    );
    // 9
    createSubCube(
        [-COORD, 0, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, EDGE_STCKR_RIGHT, NULL_TXTR, NULL_TXTR, NULL_TXTR, EDGE_STCKR_LEFT]
    );
    // 10
    createSubCube(
        [0, 0, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, CNTR_STCKR]
    );
    // 11
    createSubCube(
        [COORD, 0, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [EDGE_STCKR_LEFT, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, EDGE_STCKR_RIGHT]
    );
    // 12
    createSubCube(
        [-COORD, 0, 0],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, CNTR_STCKR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 13 ---CENTER---
    createSubCube(
        [0, 0, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 14
    createSubCube(
        [COORD, 0, 0],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [CNTR_STCKR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR]
    );
    // 15
    createSubCube(
        [-COORD, 0, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, EDGE_STCKR_LEFT, NULL_TXTR, NULL_TXTR, EDGE_STCKR_RIGHT, NULL_TXTR]
    );
    // 16
    createSubCube(
        [0, 0, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, NULL_TXTR, CNTR_STCKR, NULL_TXTR]
    );
    // 17
    createSubCube(
        [COORD, 0, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [EDGE_STCKR_RIGHT, NULL_TXTR, NULL_TXTR, NULL_TXTR, EDGE_STCKR_LEFT, NULL_TXTR]
    );
    // 18
    createSubCube(
        [-COORD, -COORD, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR]
    );
    // 19
    createSubCube(
        [0, -COORD, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, EDGE_STCKR_UP, NULL_TXTR, EDGE_STCKR_UP]
    );
    // 20
    createSubCube(
        [COORD, -COORD, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [CRNR_STCKR, NULL_TXTR, NULL_TXTR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR]
    );
    // 21
    createSubCube(
        [-COORD, -COORD, 0],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, EDGE_STCKR_UP, NULL_TXTR, EDGE_STCKR_RIGHT, NULL_TXTR, NULL_TXTR]
    );
    // 22
    createSubCube(
        [0, -COORD, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, CNTR_STCKR, NULL_TXTR, NULL_TXTR]
    );
    // 23
    createSubCube(
        [COORD, -COORD, 0],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [EDGE_STCKR_UP, NULL_TXTR, NULL_TXTR, EDGE_STCKR_LEFT, NULL_TXTR, NULL_TXTR]
    );
    // 24
    createSubCube(
        [-COORD, -COORD, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, CRNR_STCKR, NULL_TXTR, CRNR_STCKR, CRNR_STCKR, NULL_TXTR]
    );
    // 25
    createSubCube(
        [0, -COORD, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [NULL_TXTR, NULL_TXTR, NULL_TXTR, EDGE_STCKR_DOWN, EDGE_STCKR_UP, NULL_TXTR]
    );
    // 26
    createSubCube(
        [COORD, -COORD, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [CRNR_STCKR, NULL_TXTR, NULL_TXTR, CRNR_STCKR, CRNR_STCKR, NULL_TXTR]
    );
}

function createSubCube(coords, colors, textures) {
    const subCubeMaterials = [];

    // STICKERED
    for (let i = 0; i < 6; i++) {
        subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[i], map: textures[i] }));
    }

    // // STICKERLESS
    // for (let c of colors) {
    //     subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: c }));
    // }

    const subCubeGeometry = new RoundedBoxGeometry(SCALE, SCALE, SCALE, 6, 0.85);
    const subCubeMesh = new THREE.Mesh(subCubeGeometry, subCubeMaterials);
    subCubeMesh.name = `subCube#${subCubeID++}`;
    subCubeMesh.position.set(coords[0], coords[1], coords[2]);
    subCubes.push(subCubeMesh);
}
