import * as THREE from "threejs";
import { subCubes } from "./cube_builder.js";

export function getSubCubeIndex(cubeId) {
    return subCubes.findIndex((subCube) => subCube.name.replace("subCube#", "") == cubeId);
}

export function getSubCubeWorldDirection(cubeId) {
    let dirVector = subCubes[getSubCubeIndex(cubeId)].getWorldDirection(new THREE.Vector3());
    let dirVectorArr = [dirVector.x, dirVector.y, dirVector.z];
    let dirVectorRounded = dirVectorArr.map((coord) => Math.round(coord));
    return dirVectorRounded;
    console.log();
}

export function alignWhiteCenterMove() {
    let i = getSubCubeIndex(4);
    return i == 4 ? "x2" : i == 10 ? "x" : i == 12 ? "z'" : i == 14 ? "z" : i == 16 ? "x'" : null;
}

export function alignBlueCenterMove() {
    let i = getSubCubeIndex(10);
    return i == 10 ? "y2" : i == 12 ? "y'" : i == 14 ? "y" : null;
}

export function getSubCube1Solution() {
    let subCube1WorldDir = getSubCubeWorldDirection(1);

    switch (getSubCubeIndex(1)) {
        case 1:
            return subCube1WorldDir[2] === 1 ? ["U2", "F2"] : ["U", "R'", "F", "R"];
        case 3:
            return subCube1WorldDir[0] === 1 ? ["U'", "F2"] : ["L", "F'", "L'"];
        case 5:
            return subCube1WorldDir[0] === -1 ? ["U", "F2"] : ["R'", "F", "R"];
        case 7:
            return subCube1WorldDir[2] === -1 ? ["F2"] : ["U", "L", "F'", "L'"];

        case 9:
            return subCube1WorldDir[2] === 1 ? ["L2", "F'", "L2"] : ["D'", "L'", "D"];
        case 11:
            return subCube1WorldDir[2] === 1 ? ["R2", "F", "R2"] : ["D", "R", "D'"];
        case 15:
            return subCube1WorldDir[2] === -1 ? ["F'"] : ["D'", "L", "D"];
        case 17:
            return subCube1WorldDir[2] === -1 ? ["F"] : ["D", "R'", "D'"];

        case 19:
            return subCube1WorldDir[2] === 1 ? ["B2", "U2", "F2"] : ["B2", "U", "R'", "F"];
        case 21:
            return subCube1WorldDir[0] === 1 ? ["L2", "U'", "F2"] : ["L'", "F'"];
        case 23:
            return subCube1WorldDir[0] === -1 ? ["R2", "U", "F2"] : ["R", "F"];
        case 25:
            return subCube1WorldDir[2] === -1 ? null : ["F", "D'", "L", "D"];
    }
}

export function getSubCube3Solution() {
    let subCube3WorldDir = getSubCubeWorldDirection(3);

    switch (getSubCubeIndex(3)) {
        case 1:
            return subCube3WorldDir[0] === -1 ? ["U'", "L2"] : ["B", "L'", "B'"];
        case 3:
            return subCube3WorldDir[2] === 1 ? ["L2"] : ["U", "B", "L'", "B'"];
        case 5:
            return subCube3WorldDir[2] === -1 ? ["U2", "L2"] : ["U", "F'", "L", "F"];
        case 7:
            return subCube3WorldDir[0] === 1 ? ["U", "L2"] : ["F'", "L", "F"];

        case 9:
            return subCube3WorldDir[1] === 1 ? ["L'"] : ["D'", "B", "D"];
        case 11:
            return subCube3WorldDir[1] === -1 ? ["D2", "R", "D2"] : ["D'", "B'", "D"];
        case 15:
            return subCube3WorldDir[1] === -1 ? ["L"] : ["D", "F'", "D'"];
        case 17:
            return subCube3WorldDir[1] === 1 ? ["D2", "R'", "D2"] : ["D", "F", "D'"];

        case 19:
            return subCube3WorldDir[0] === 1 ? ["B2", "U'", "L2"] : ["B'", "L'"];
        case 21:
            return subCube3WorldDir[2] === -1 ? null : ["L", "D'", "B", "D"];
        case 23:
            return subCube3WorldDir[2] === 1 ? ["R2", "U2", "L2"] : ["R", "D", "F", "D'"];
        case 25:
            return subCube3WorldDir[0] === -1 ? ["F2", "U", "L2"] : ["F", "L"];
    }
}

export function getSubCube5Solution() {
    let subCube5WorldDir = getSubCubeWorldDirection(5);

    switch (getSubCubeIndex(5)) {
        case 1:
            return subCube5WorldDir[0] === 1 ? ["U", "R2"] : ["B'", "R", "B"];
        case 3:
            return subCube5WorldDir[2] === -1 ? ["U2", "R2"] : ["U", "B'", "R", "B"];
        case 5:
            return subCube5WorldDir[2] === 1 ? ["R2"] : ["U", "F", "R'", "F'"];
        case 7:
            return subCube5WorldDir[0] === -1 ? ["U'", "R2"] : ["F", "R'", "F'"];

        case 9:
            return subCube5WorldDir[1] === -1 ? ["D2", "L'", "D2"] : ["D", "B", "D'"];
        case 11:
            return subCube5WorldDir[1] === 1 ? ["R"] : ["D", "B'", "D'"];
        case 15:
            return subCube5WorldDir[1] === 1 ? ["D2", "L", "D2"] : ["D'", "F'", "D"];
        case 17:
            return subCube5WorldDir[1] === -1 ? ["R'"] : ["D'", "F", "D"];

        case 19:
            return subCube5WorldDir[0] === -1 ? ["B2", "U", "R2"] : ["B", "R"];
        case 21:
            return subCube5WorldDir[2] === 1 ? ["L2", "U2", "R2"] : ["L", "D", "B", "D'"];
        case 23:
            return subCube5WorldDir[2] === -1 ? null : ["R", "D'", "F", "D"];
        case 25:
            return subCube5WorldDir[0] === 1 ? ["F2", "U'", "R2"] : ["F'", "R'"];
    }
}

export function getSubCube7Solution() {
    let subCube7WorldDir = getSubCubeWorldDirection(7);

    switch (getSubCubeIndex(7)) {
        case 1:
            return subCube7WorldDir[2] === -1 ? ["B2"] : ["U", "R", "B'", "R'"];
        case 3:
            return subCube7WorldDir[0] === -1 ? ["U", "B2"] : ["L'", "B", "L"];
        case 5:
            return subCube7WorldDir[0] === 1 ? ["U'", "B2"] : ["R", "B'", "R'"];
        case 7:
            return subCube7WorldDir[2] === 1 ? ["U2", "B2"] : ["U", "L'", "B", "L"];

        case 9:
            return subCube7WorldDir[2] === -1 ? ["B"] : ["D", "L'", "D'"];
        case 11:
            return subCube7WorldDir[2] === -1 ? ["B'"] : ["D'", "R", "D"];
        case 15:
            return subCube7WorldDir[2] === 1 ? ["D2", "F'", "D2"] : ["D", "L", "D'"];
        case 17:
            return subCube7WorldDir[2] === 1 ? ["D2", "F", "D2"] : ["D'", "R'", "D"];

        case 19:
            return subCube7WorldDir[2] === -1 ? null : ["B", "D'", "R", "D"];
        case 21:
            return subCube7WorldDir[0] === -1 ? ["L2", "U", "B2"] : ["L", "B"];
        case 23:
            return subCube7WorldDir[0] === 1 ? ["R2", "U'", "B2"] : ["R'", "B'"];
        case 25:
            return subCube7WorldDir[2] === 1 ? ["F2", "U2", "B2"] : ["F", "D", "L", "D'"];
    }
}
