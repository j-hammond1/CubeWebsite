import * as THREE from "threejs";
import { subCubes } from "./cube-builder.js";

export function getSubCubeIndex(cubeId) {
    return subCubes.findIndex((subCube) => subCube.name.replace("subCube#", "") == cubeId);
}

export function getSubCubeAtIndex(index) {
    return subCubes[index].name.replace("subCube#", "");
}

export function getSubCubeWorldDirection(cubeId) {
    return subCubes[getSubCubeIndex(cubeId)].getWorldDirection(new THREE.Vector3()).round();
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
            return subCube1WorldDir.z === 1 ? ["U2", "F2"] : ["U", "R'", "F", "R"];
        case 3:
            return subCube1WorldDir.x === 1 ? ["U'", "F2"] : ["L", "F'", "L'"];
        case 5:
            return subCube1WorldDir.x === -1 ? ["U", "F2"] : ["R'", "F", "R"];
        case 7:
            return subCube1WorldDir.z === -1 ? ["F2"] : ["U", "L", "F'", "L'"];

        case 9:
            return subCube1WorldDir.z === 1 ? ["L2", "F'", "L2"] : ["D'", "L'", "D"];
        case 11:
            return subCube1WorldDir.z === 1 ? ["R2", "F", "R2"] : ["D", "R", "D'"];
        case 15:
            return subCube1WorldDir.z === -1 ? ["F'"] : ["D'", "L", "D"];
        case 17:
            return subCube1WorldDir.z === -1 ? ["F"] : ["D", "R'", "D'"];

        case 19:
            return subCube1WorldDir.z === 1 ? ["B2", "U2", "F2"] : ["B2", "U", "R'", "F"];
        case 21:
            return subCube1WorldDir.x === 1 ? ["L2", "U'", "F2"] : ["L'", "F'"];
        case 23:
            return subCube1WorldDir.x === -1 ? ["R2", "U", "F2"] : ["R", "F"];
        case 25:
            return subCube1WorldDir.z === -1 ? null : ["F", "D'", "L", "D"];
    }
}

export function getSubCube3Solution() {
    let subCube3WorldDir = getSubCubeWorldDirection(3);

    switch (getSubCubeIndex(3)) {
        case 1:
            return subCube3WorldDir.x === -1 ? ["U'", "L2"] : ["B", "L'", "B'"];
        case 3:
            return subCube3WorldDir.z === 1 ? ["L2"] : ["U", "B", "L'", "B'"];
        case 5:
            return subCube3WorldDir.z === -1 ? ["U2", "L2"] : ["U", "F'", "L", "F"];
        case 7:
            return subCube3WorldDir.x === 1 ? ["U", "L2"] : ["F'", "L", "F"];

        case 9:
            return subCube3WorldDir.y === 1 ? ["L'"] : ["D'", "B", "D"];
        case 11:
            return subCube3WorldDir.y === -1 ? ["D2", "R", "D2"] : ["D'", "B'", "D"];
        case 15:
            return subCube3WorldDir.y === -1 ? ["L"] : ["D", "F'", "D'"];
        case 17:
            return subCube3WorldDir.y === 1 ? ["D2", "R'", "D2"] : ["D", "F", "D'"];

        case 19:
            return subCube3WorldDir.x === 1 ? ["B2", "U'", "L2"] : ["B'", "L'"];
        case 21:
            return subCube3WorldDir.z === -1 ? null : ["L", "D'", "B", "D"];
        case 23:
            return subCube3WorldDir.z === 1 ? ["R2", "U2", "L2"] : ["R", "D", "F", "D'"];
        case 25:
            return subCube3WorldDir.x === -1 ? ["F2", "U", "L2"] : ["F", "L"];
    }
}

export function getSubCube5Solution() {
    let subCube5WorldDir = getSubCubeWorldDirection(5);

    switch (getSubCubeIndex(5)) {
        case 1:
            return subCube5WorldDir.x === 1 ? ["U", "R2"] : ["B'", "R", "B"];
        case 3:
            return subCube5WorldDir.z === -1 ? ["U2", "R2"] : ["U", "B'", "R", "B"];
        case 5:
            return subCube5WorldDir.z === 1 ? ["R2"] : ["U", "F", "R'", "F'"];
        case 7:
            return subCube5WorldDir.x === -1 ? ["U'", "R2"] : ["F", "R'", "F'"];

        case 9:
            return subCube5WorldDir.y === -1 ? ["D2", "L'", "D2"] : ["D", "B", "D'"];
        case 11:
            return subCube5WorldDir.y === 1 ? ["R"] : ["D", "B'", "D'"];
        case 15:
            return subCube5WorldDir.y === 1 ? ["D2", "L", "D2"] : ["D'", "F'", "D"];
        case 17:
            return subCube5WorldDir.y === -1 ? ["R'"] : ["D'", "F", "D"];

        case 19:
            return subCube5WorldDir.x === -1 ? ["B2", "U", "R2"] : ["B", "R"];
        case 21:
            return subCube5WorldDir.z === 1 ? ["L2", "U2", "R2"] : ["L", "D", "B", "D'"];
        case 23:
            return subCube5WorldDir.z === -1 ? null : ["R", "D'", "F", "D"];
        case 25:
            return subCube5WorldDir.x === 1 ? ["F2", "U'", "R2"] : ["F'", "R'"];
    }
}

export function getSubCube7Solution() {
    let subCube7WorldDir = getSubCubeWorldDirection(7);

    switch (getSubCubeIndex(7)) {
        case 1:
            return subCube7WorldDir.z === -1 ? ["B2"] : ["U", "R", "B'", "R'"];
        case 3:
            return subCube7WorldDir.x === -1 ? ["U", "B2"] : ["L'", "B", "L"];
        case 5:
            return subCube7WorldDir.x === 1 ? ["U'", "B2"] : ["R", "B'", "R'"];
        case 7:
            return subCube7WorldDir.z === 1 ? ["U2", "B2"] : ["U", "L'", "B", "L"];

        case 9:
            return subCube7WorldDir.z === -1 ? ["B"] : ["D", "L'", "D'"];
        case 11:
            return subCube7WorldDir.z === -1 ? ["B'"] : ["D'", "R", "D"];
        case 15:
            return subCube7WorldDir.z === 1 ? ["D2", "F'", "D2"] : ["D", "L", "D'"];
        case 17:
            return subCube7WorldDir.z === 1 ? ["D2", "F", "D2"] : ["D'", "R'", "D"];

        case 19:
            return subCube7WorldDir.z === -1 ? null : ["B", "D'", "R", "D"];
        case 21:
            return subCube7WorldDir.x === -1 ? ["L2", "U", "B2"] : ["L", "B"];
        case 23:
            return subCube7WorldDir.x === 1 ? ["R2", "U'", "B2"] : ["R'", "B'"];
        case 25:
            return subCube7WorldDir.z === 1 ? ["F2", "U2", "B2"] : ["F", "D", "L", "D'"];
    }
}

export function edge19Direction() {
    let worldDir = getSubCubeWorldDirection(19);
    switch (getSubCubeIndex(19)) {
        case 1:
            return worldDir.z === 1 ? "+y" : "-z";
        case 3:
            return worldDir.x === 1 ? "+y" : "-x";
        case 5:
            return worldDir.x === -1 ? "+y" : "+x";
        case 7:
            return worldDir.z === -1 ? "+y" : "+z";
    }
}

export function edge21Direction() {
    let worldDir = getSubCubeWorldDirection(21);
    switch (getSubCubeIndex(21)) {
        case 1:
            return worldDir.x === 1 ? "+y" : "-z";
        case 3:
            return worldDir.z === -1 ? "+y" : "-x";
        case 5:
            return worldDir.z === 1 ? "+y" : "+x";
        case 7:
            return worldDir.x === -1 ? "+y" : "+z";
    }
}

export function edge23Direction() {
    let worldDir = getSubCubeWorldDirection(23);
    switch (getSubCubeIndex(23)) {
        case 1:
            return worldDir.x === -1 ? "+y" : "-z";
        case 3:
            return worldDir.z === 1 ? "+y" : "-x";
        case 5:
            return worldDir.z === -1 ? "+y" : "+x";
        case 7:
            return worldDir.x === 1 ? "+y" : "+z";
    }
}

export function edge25Direction() {
    let worldDir = getSubCubeWorldDirection(25);
    switch (getSubCubeIndex(25)) {
        case 1:
            return worldDir.z === -1 ? "+y" : "-z";
        case 3:
            return worldDir.x === -1 ? "+y" : "-x";
        case 5:
            return worldDir.x === 1 ? "+y" : "+x";
        case 7:
            return worldDir.z === 1 ? "+y" : "+z";
    }
}

export function corner18Direction() {
    let worldDir = getSubCubeWorldDirection(18);
    switch (getSubCubeIndex(18)) {
        case 0:
            return worldDir.x === 1 ? "+y" : worldDir.z === 1 ? "-x" : "-z";
        case 2:
            return worldDir.z === 1 ? "+y" : worldDir.y === -1 ? "+x" : "-z";
        case 6:
            return worldDir.z === -1 ? "+y" : worldDir.y === -1 ? "-x" : "+z";
        case 8:
            return worldDir.x === -1 ? "+y" : worldDir.z === -1 ? "+x" : "+z";
    }
}

export function corner20Direction() {
    let worldDir = getSubCubeWorldDirection(20);
    switch (getSubCubeIndex(20)) {
        case 0:
            return worldDir.z === 1 ? "+y" : worldDir.y === -1 ? "-x" : "-z";
        case 2:
            return worldDir.x === -1 ? "+y" : worldDir.z === 1 ? "+x" : "-z";
        case 6:
            return worldDir.x === 1 ? "+y" : worldDir.z === -1 ? "-x" : "+z";
        case 8:
            return worldDir.z === -1 ? "+y" : worldDir.y === -1 ? "+x" : "+z";
    }
}

export function corner24Direction() {
    let worldDir = getSubCubeWorldDirection(24);
    switch (getSubCubeIndex(24)) {
        case 0:
            return worldDir.z === -1 ? "+y" : worldDir.y === 1 ? "-x" : "-z";
        case 2:
            return worldDir.x === 1 ? "+y" : worldDir.z === -1 ? "+x" : "-z";
        case 6:
            return worldDir.x === -1 ? "+y" : worldDir.z === 1 ? "-x" : "+z";
        case 8:
            return worldDir.z === 1 ? "+y" : worldDir.y === 1 ? "+x" : "+z";
    }
}

export function corner26Direction() {
    let worldDir = getSubCubeWorldDirection(26);
    switch (getSubCubeIndex(26)) {
        case 0:
            return worldDir.x === -1 ? "+y" : worldDir.z === -1 ? "-x" : "-z";
        case 2:
            return worldDir.z === -1 ? "+y" : worldDir.y === 1 ? "+x" : "-z";
        case 6:
            return worldDir.z === 1 ? "+y" : worldDir.y === 1 ? "-x" : "+z";
        case 8:
            return worldDir.x === 1 ? "+y" : worldDir.z === 1 ? "+x" : "+z";
    }
}

export function determineOLLCase() {
    function dirOfCubeAtIndex(cubeAtIndx) {
        return cubeAtIndx == 19
            ? edge19Direction()
            : cubeAtIndx == 21
            ? edge21Direction()
            : cubeAtIndx == 23
            ? edge23Direction()
            : cubeAtIndx == 25
            ? edge25Direction()
            : cubeAtIndx == 18
            ? corner18Direction()
            : cubeAtIndx == 20
            ? corner20Direction()
            : cubeAtIndx == 24
            ? corner24Direction()
            : cubeAtIndx == 26
            ? corner26Direction()
            : null;
    }

    let edge1Dir = dirOfCubeAtIndex(getSubCubeAtIndex(1));
    let edge3Dir = dirOfCubeAtIndex(getSubCubeAtIndex(3));
    let edge5Dir = dirOfCubeAtIndex(getSubCubeAtIndex(5));
    let edge7Dir = dirOfCubeAtIndex(getSubCubeAtIndex(7));

    let corner0Dir = dirOfCubeAtIndex(getSubCubeAtIndex(0));
    let corner2Dir = dirOfCubeAtIndex(getSubCubeAtIndex(2));
    let corner6Dir = dirOfCubeAtIndex(getSubCubeAtIndex(6));
    let corner8Dir = dirOfCubeAtIndex(getSubCubeAtIndex(8));

    console.log(corner0Dir, edge1Dir, corner2Dir);
    console.log(edge3Dir, "  ", edge5Dir);
    console.log(corner6Dir, edge7Dir, corner8Dir);

    const OLL = [
        corner0Dir,
        edge1Dir,
        corner2Dir,
        edge3Dir,
        null,
        edge5Dir,
        corner6Dir,
        edge7Dir,
        corner8Dir,
    ];
    return OLL;
}

function rotateOLLCase(OLL) {
    // corners
    var temp = OLL[0];
    OLL[0] = OLL[6];
    OLL[6] = OLL[8];
    OLL[8] = OLL[2];
    OLL[2] = temp;

    // edges
    temp = OLL[1];
    OLL[1] = OLL[3];
    OLL[3] = OLL[7];
    OLL[7] = OLL[5];
    OLL[5] = temp;

    return OLL;
}

function getRotationsOfOLLCase(OLL) {
    let OLLpos90 = rotateOLLCase(OLL);
    let OLLpos180 = rotateOLLCase(OLLpos90);
    let OLLneg90 = rotateOLLCase(OLLpos180);
    return [OLL, OLLpos90, OLLpos180, OLLneg90];
}

function AUFOLLCase(OLLOrientations) {
    return OLLOrientations.indexOf(i) == 1
        ? "U'"
        : OLLOrientations.indexOf(i) == 2
        ? "U2"
        : OLLOrientations.indexOf(i) == 3
        ? "U"
        : null;
}

function getOLLMoves(OLL) {
    let OLLOrientations = getRotationsOfOLLCase(OLL);

    let OLLMoves = [];

    for (let i of OLLOrientations) {
        if (i == oll_Dot) {
            OLLMoves.push(AUFOLLCase(OLLOrientations));
            OLLMoves.push(oll_DotMoves);
        }

        if (i == oll_I) {
            OLLMoves.push(AUFOLLCase(OLLOrientations));
            OLLMoves.push(oll_IMoves);
        }

        if (i == oll_L) {
            OLLMoves.push(AUFOLLCase(OLLOrientations));
            OLLMoves.push(oll_LMoves);
        }
    }

    return OLLMoves;
}

// // edge oll default orientations
// const oll_Dot = [null, "-z", null, "-x", null, "+x", null, "+z", null];
// const oll_I = [null, "-z", null, "+y", null, "+y", null, "+z", null];
// const oll_L = [null, "-z", null, "-x", null, "+y", null, "+y", null];

// // edge oll moves
// const oll_DotMoves = ["F R U R' U' F' f R U R' U' f'"];
// const oll_IMoves = ["F R U R' U' F'"];
// const oll_LMoves = ["f R U R' U' f'"];

// oll orientations
let edgesOriented = [null, "+y", null, "+y", null, "+y", null, "+y", null];

const OLL27 = ["-z", "+y", "+x",
               "+y", null, "+y",
               "+y", "+y", "+z"];

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
