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
    CRNRS = [0, 2, 6, 8, 18, 20, 24, 26],
    EDGES = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25],
    CNTRS = [4, 10, 12, 14, 16, 22, 13];

var subCubeID = 0;

const cornerGeometry = new RoundedBoxGeometry(SCALE, SCALE, SCALE, 6, 0.85);
// const centerGeometry = new RoundedBoxGeometry(scale, scale, scale, 6, 2);
// const edgeGeometry = new RoundedBoxGeometry(scale, scale, scale, 6, 1);

const LOADER = new THREE.TextureLoader();
const CRNR_STICKER = LOADER.load("./images/stickers/stickerV7.png");
const CNTR_STICKER = LOADER.load("./images/stickers/centerSticker.png");
const EDGE_STICKER = LOADER.load("./images/stickers/edgeSticker.png");
var stickers = new Array(27);

for (let i of CRNRS) {
    stickers[i] = CRNR_STICKER;
}
for (let i of EDGES) {
    stickers[i] = EDGE_STICKER;
}
for (let i of CNTRS) {
    stickers[i] = CNTR_STICKER;
}

// stickers.fill(STICKER);

// for (let i = 0; i <= 26; i++) {
//     stickers.push(LOADER.load(`./images/stickers/numbers/black${i}.png`));
// }

initCube();

function initCube() {
    // 0
    createSubCube(
        [-COORD, COORD, -COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        [stickers[0], stickers[1], stickers[2]]
    );
    // 1
    createSubCube(
        [0, COORD, -COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[1]
    );
    // 2
    createSubCube(
        [COORD, COORD, -COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[2]
    );

    // 3
    createSubCube(
        [-COORD, COORD, 0],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[3]
    );
    // 4
    createSubCube(
        [0, COORD, 0],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[4]
    );
    // 5
    createSubCube(
        [COORD, COORD, 0],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[5]
    );

    // 6
    createSubCube(
        [-COORD, COORD, COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[6]
    );
    // 7
    createSubCube(
        [0, COORD, COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[7]
    );
    // 8
    createSubCube(
        [COORD, COORD, COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[8]
    );

    // 9
    createSubCube(
        [-COORD, 0, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[9]
    );
    // 10
    createSubCube(
        [0, 0, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[10]
    );
    // 11
    createSubCube(
        [COORD, 0, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[11]
    );

    // 12
    createSubCube(
        [-COORD, 0, 0],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[12]
    );
    // 13 ---CENTER---
    createSubCube(
        [0, 0, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[13]
    );
    // 14
    createSubCube(
        [COORD, 0, 0],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[14]
    );

    // 15
    createSubCube(
        [-COORD, 0, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[15]
    );
    // 16
    createSubCube(
        [0, 0, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[16]
    );
    // 17
    createSubCube(
        [COORD, 0, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[17]
    );

    // 18
    createSubCube(
        [-COORD, -COORD, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[18]
    );
    // 19
    createSubCube(
        [0, -COORD, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[19]
    );
    // 20
    createSubCube(
        [COORD, -COORD, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        cornerGeometry,
        stickers[20]
    );

    // 21
    createSubCube(
        [-COORD, -COORD, 0],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[21]
    );
    // 22
    createSubCube(
        [0, -COORD, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[22]
    );
    // 23
    createSubCube(
        [COORD, -COORD, 0],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        cornerGeometry,
        stickers[23]
    );

    // 24
    createSubCube(
        [-COORD, -COORD, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[24]
    );
    // 25
    createSubCube(
        [0, -COORD, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[25]
    );
    // 26
    createSubCube(
        [COORD, -COORD, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        cornerGeometry,
        stickers[26]
    );
}

function createSubCube(coords, colors, geometry, textures) {
    const subCubeMaterials = [];

    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[0], map: textures[0] })); // R
    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[1], map: textures[1] })); // L
    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[2], map: textures[2] })); // U
    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[3], map: textures[3] })); // D
    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[4], map: textures[4] })); // F
    subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: colors[5], map: textures[5] })); // B

    // // STICKERED
    // for (let c of colors) {
    //     subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: c, map: texture }));
    // }

    // // STICKERLESS
    // for (let c of colors) {
    //     subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: c }));
    // }

    const subCubeMesh = new THREE.Mesh(geometry, subCubeMaterials);
    subCubeMesh.name = `subCube#${subCubeID++}`;
    subCubeMesh.position.set(coords[0], coords[1], coords[2]);
    subCubes.push(subCubeMesh);
}
