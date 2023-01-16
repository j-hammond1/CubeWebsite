import * as THREE from "https://cdn.skypack.dev/three@0.130.0/build/three.module.js";
import { RoundedBoxGeometry } from "https://cdn.skypack.dev/three@0.130.0/examples/jsm/geometries/RoundedBoxGeometry.js";
import { stickerData } from "./sticker_data.js";

export const subCubes = [];

function createCorner(baseCoords, stickerData0, stickerData1, stickerData2) {
    let subCube = new THREE.Group();
    let baseMesh = createBase(baseCoords);

    let stickerMesh0 = createSticker(
        stickerData0.stickerCoords,
        stickerData0.stickerColor,
        stickerData0.stickerRotations
    );
    let stickerMesh1 = createSticker(
        stickerData1.stickerCoords,
        stickerData1.stickerColor,
        stickerData1.stickerRotations
    );
    let stickerMesh2 = createSticker(
        stickerData2.stickerCoords,
        stickerData2.stickerColor,
        stickerData2.stickerRotations
    );

    subCube.add(baseMesh, stickerMesh0, stickerMesh1, stickerMesh2);
    subCubes.push(subCube);
}

function createEdge(baseCoords, stickerData0, stickerData1) {
    let subCube = new THREE.Group();
    let baseMesh = createBase(baseCoords);

    let stickerMesh0 = createSticker(
        stickerData0.stickerCoords,
        stickerData0.stickerColor,
        stickerData0.stickerRotations
    );
    let stickerMesh1 = createSticker(
        stickerData1.stickerCoords,
        stickerData1.stickerColor,
        stickerData1.stickerRotations
    );

    subCube.add(baseMesh, stickerMesh0, stickerMesh1);
    subCubes.push(subCube);
}

function createCenter(baseCoords, stickerData0) {
    let subCube = new THREE.Group();
    let baseMesh = createBase(baseCoords);

    let stickerMesh0 = createSticker(
        stickerData0.stickerCoords,
        stickerData0.stickerColor,
        stickerData0.stickerRotations
    );

    subCube.add(baseMesh, stickerMesh0);
    subCubes.push(subCube);
}

function createBase(coords) {
    let baseGeometry = new RoundedBoxGeometry(10, 10, 10, 3, 0.85);
    let baseMaterial = new THREE.MeshPhongMaterial({ color: 0x101010, wireframe: false });

    // var cubeMaterialArray = [];
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0x101010 })); // RIGHT
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0xffaa00 })); // LEFT
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0xffffff })); // TOP
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0x101010 })); // BOTTOM
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0x101010 })); // FRONT
    // cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 0x0000ff })); // BACK

    let baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    baseMesh.position.set(coords[0], coords[1], coords[2]);

    return baseMesh;
}

function createSticker(coords, color, rotations) {
    let [x, y, width, height, radius] = [-5, -5, 10, 10, 1];
    let stickerShape = new THREE.Shape();

    stickerShape.moveTo(x, y + radius);
    stickerShape.lineTo(x, y + height - radius);
    stickerShape.quadraticCurveTo(x, y + height, x + radius, y + height);
    stickerShape.lineTo(x + width - radius, y + height);
    stickerShape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    stickerShape.lineTo(x + width, y + radius);
    stickerShape.quadraticCurveTo(x + width, y, x + width - radius, y);
    stickerShape.lineTo(x + radius, y);
    stickerShape.quadraticCurveTo(x, y, x, y + radius);

    let stickerGeometry = new THREE.ShapeGeometry(stickerShape);
    let stickerMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.9,
    });
    let stickerMesh = new THREE.Mesh(stickerGeometry, stickerMaterial);
    stickerMesh.position.set(coords[0], coords[1], coords[2]);
    stickerMesh.rotation.set(rotations[0], rotations[1], rotations[2]);
    stickerMesh.scale.set(0.85, 0.85);

    return stickerMesh;
}

createCorner([-10, 10, -10], stickerData[0][0], stickerData[0][1], stickerData[0][2]); // 0
createEdge([0, 10, -10], stickerData[1][0], stickerData[1][1]); // 1
createCorner([10, 10, -10], stickerData[2][0], stickerData[2][1], stickerData[2][2]); // 2

createEdge([-10, 10, 0], stickerData[3][0], stickerData[3][1]); // 3
createCenter([0, 10, 0], stickerData[4][0]); // 4
createEdge([10, 10, 0], stickerData[5][0], stickerData[5][1]); // 5

createCorner([-10, 10, 10], stickerData[6][0], stickerData[6][1], stickerData[6][2]); // 6
createEdge([0, 10, 10], stickerData[7][0], stickerData[7][1]); // 7
createCorner([10, 10, 10], stickerData[8][0], stickerData[8][1], stickerData[8][2]); // 8

createEdge([-10, 0, -10], stickerData[9][0], stickerData[9][1]); // 9
createCenter([0, 0, -10], stickerData[10][0]); // 10
createEdge([10, 0, -10], stickerData[11][0], stickerData[11][1]); // 11

createCenter([-10, 0, 0], stickerData[12][0]); // 12
// createCenter([0, 0, 0], stickerData[13][0]); // 13 ---CENTER---
createCenter([10, 0, 0], stickerData[14][0]); // 14

createEdge([-10, 0, 10], stickerData[15][0], stickerData[15][1]); // 15
createCenter([0, 0, 10], stickerData[16][0]); // 16
createEdge([10, 0, 10], stickerData[17][0], stickerData[17][1]); // 17

createCorner([-10, -10, -10], stickerData[18][0], stickerData[18][1], stickerData[18][2]); // 18
createEdge([0, -10, -10], stickerData[19][0], stickerData[19][1]); // 19
createCorner([10, -10, -10], stickerData[20][0], stickerData[20][1], stickerData[20][2]); // 20

createEdge([-10, -10, 0], stickerData[21][0], stickerData[21][1]); // 21
createCenter([0, -10, 0], stickerData[22][0]); // 22
createEdge([10, -10, 0], stickerData[23][0], stickerData[23][1]); // 23

createCorner([-10, -10, 10], stickerData[24][0], stickerData[24][1], stickerData[24][2]); // 24
createEdge([0, -10, 10], stickerData[25][0], stickerData[25][1]); // 25
createCorner([10, -10, 10], stickerData[26][0], stickerData[26][1], stickerData[26][2]); // 26
