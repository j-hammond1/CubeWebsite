import * as THREE from "threejs";
import { subCubes } from "../cube-builder.js";

/* 
F U2 L2 B2 F' U L2 U R2 D2 L' B L2 B' R2 U2

y x' // inspection
U R2 U' F' L F' U' L' // xx-cross
U' R U R' // 3rd pair
R' U R U' U' R' U R // 4th pair
U R' U' R U' R' U2 R // ZBLL
U // AUF
*/

export function getSubCubeIndex(cubeId) {
    return subCubes.findIndex((subCube) => subCube.name.replace("subCube#", "") == cubeId);
}

export function getSubCubeAtIndex(index) {
    return subCubes[index].name.replace("subCube#", "");
}

export function getSubCubeWorldDirection(cubeId) {
    return subCubes[getSubCubeIndex(cubeId)].getWorldDirection(new THREE.Vector3()).round();
}

export function createSubCubeWorldDirVector(cubeId) {
    let dirVector = getSubCubeWorldDirection(cubeId);
    let meshCenter = subCubes[getSubCubeIndex(cubeId)].position;

    let dirVectorEnd =
        dirVector.x == 1
            ? new THREE.Vector3(meshCenter.x + 30, meshCenter.y, meshCenter.z)
            : dirVector.x == -1
            ? new THREE.Vector3(meshCenter.x + -30, meshCenter.y, meshCenter.z)
            : dirVector.y == 1
            ? new THREE.Vector3(meshCenter.x, meshCenter.y + 30, meshCenter.z)
            : dirVector.y == -1
            ? new THREE.Vector3(meshCenter.x, meshCenter.y + -30, meshCenter.z)
            : dirVector.z == 1
            ? new THREE.Vector3(meshCenter.x, meshCenter.y, meshCenter.z + 30)
            : dirVector.z == -1
            ? new THREE.Vector3(meshCenter.x, meshCenter.y, meshCenter.z + -30)
            : console.log("something went wrong...");

    const subCubeWorldDirVector = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([meshCenter, dirVectorEnd]),
        new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    return subCubeWorldDirVector;
}
