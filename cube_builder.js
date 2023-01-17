import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { RoundedBoxGeometry } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/geometries/RoundedBoxGeometry.js";

export const subCubes = [];

var baseC = 0x000000,
    rightC = 0xff0000,
    leftC = 0xffaa00,
    upC = 0xffffff,
    downC = 0xffff00,
    frontC = 0x00aa00,
    backC = 0x0000ff,
    coord = 10,
    scale = 10;

initCube();

function initCube() {
    createSubCube([-coord, coord, -coord], [baseC, leftC, upC, baseC, baseC, backC]); // 0
    createSubCube([0, coord, -coord], [baseC, baseC, upC, baseC, baseC, backC]); // 1
    createSubCube([coord, coord, -coord], [rightC, baseC, upC, baseC, baseC, backC]); // 2

    createSubCube([-coord, coord, 0], [baseC, leftC, upC, baseC, baseC, baseC]); // 3
    createSubCube([0, coord, 0], [baseC, baseC, upC, baseC, baseC, baseC]); // 4
    createSubCube([coord, coord, 0], [rightC, baseC, upC, baseC, baseC, baseC]); // 5

    createSubCube([-coord, coord, coord], [baseC, leftC, upC, baseC, frontC, baseC]); // 6
    createSubCube([0, coord, coord], [baseC, baseC, upC, baseC, frontC, baseC]); // 7
    createSubCube([coord, coord, coord], [rightC, baseC, upC, baseC, frontC, baseC]); // 8
    ////
    createSubCube([-coord, 0, -coord], [baseC, leftC, baseC, baseC, baseC, backC]); // 9
    createSubCube([0, 0, -coord], [baseC, baseC, baseC, baseC, baseC, backC]); // 10
    createSubCube([coord, 0, -coord], [rightC, baseC, baseC, baseC, baseC, backC]); // 11

    createSubCube([-coord, 0, 0], [baseC, leftC, baseC, baseC, baseC, baseC]); // 12
    createSubCube([0, 0, 0], [baseC, baseC, baseC, baseC, baseC, baseC]); // 13 ---CENTER---
    createSubCube([coord, 0, 0], [rightC, baseC, baseC, baseC, baseC, baseC]); // 14

    createSubCube([-coord, 0, coord], [baseC, leftC, baseC, baseC, frontC, baseC]); // 15
    createSubCube([0, 0, coord], [baseC, baseC, baseC, baseC, frontC, baseC]); // 16
    createSubCube([coord, 0, coord], [rightC, baseC, baseC, baseC, frontC, baseC]); // 17
    ////
    createSubCube([-coord, -coord, -coord], [baseC, leftC, baseC, downC, baseC, backC]); // 18
    createSubCube([0, -coord, -coord], [baseC, baseC, baseC, downC, baseC, backC]); // 19
    createSubCube([coord, -coord, -coord], [rightC, baseC, baseC, downC, baseC, backC]); // 20

    createSubCube([-coord, -coord, 0], [baseC, leftC, baseC, downC, baseC, baseC]); // 21
    createSubCube([0, -coord, 0], [baseC, baseC, baseC, downC, baseC, baseC]); // 22
    createSubCube([coord, -coord, 0], [rightC, baseC, baseC, downC, baseC, baseC]); // 23

    createSubCube([-coord, -coord, coord], [baseC, leftC, baseC, downC, frontC, baseC]); // 24
    createSubCube([0, -coord, coord], [baseC, baseC, baseC, downC, frontC, baseC]); // 25
    createSubCube([coord, -coord, coord], [rightC, baseC, baseC, downC, frontC, baseC]); // 26
}

function createSubCube(coords, colors) {
    const subCubeGeometry = new RoundedBoxGeometry(scale, scale, scale, 6, 0.85);
    const subCubeMaterials = [];

    // STICKERED
    const texture = new THREE.TextureLoader().load("./images/stickerV5.png");
    for (let c of colors) {
        subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: c, map: texture }));
    }
    // STICKERLESS
    // for (let c of colors) {
    //     subCubeMaterials.push(new THREE.MeshPhongMaterial({ color: c }));
    // }

    const subCubeMesh = new THREE.Mesh(subCubeGeometry, subCubeMaterials);
    subCubeMesh.position.set(coords[0], coords[1], coords[2]);
    subCubes.push(subCubeMesh);
}
