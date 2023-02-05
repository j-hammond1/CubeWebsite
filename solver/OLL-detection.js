import { getSubCubeIndex, getSubCubeAtIndex, getSubCubeWorldDirection } from "./cube-solver.js";
import { OLLDirections, OLLAlgorithms } from "./OLL-data.js";

function edge19Direction() {
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

function edge21Direction() {
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

function edge23Direction() {
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

function edge25Direction() {
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

function corner18Direction() {
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

function corner20Direction() {
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

function corner24Direction() {
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

function corner26Direction() {
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

function determineOLLCase() {
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

    // console.log(corner0Dir, edge1Dir, corner2Dir);
    // console.log(edge3Dir, "  ", edge5Dir);
    // console.log(corner6Dir, edge7Dir, corner8Dir);

    const OLL = [
        corner0Dir,
        edge1Dir,
        corner2Dir,
        edge3Dir,
        "+y",
        edge5Dir,
        corner6Dir,
        edge7Dir,
        corner8Dir,
    ];
    return OLL;
}

function rotateOLLCase(OLL) {
    let rotatedOLL = [];
    OLL.forEach((i) =>
        rotatedOLL.push(
            i === "+z"
                ? (i = "-x")
                : i === "-x"
                ? (i = "-z")
                : i === "-z"
                ? (i = "+x")
                : i === "+x"
                ? (i = "+z")
                : i === "+y"
                ? (i = "+y")
                : (i = null)
        )
    );

    // corners
    var temp = rotatedOLL[0];
    rotatedOLL[0] = rotatedOLL[6];
    rotatedOLL[6] = rotatedOLL[8];
    rotatedOLL[8] = rotatedOLL[2];
    rotatedOLL[2] = temp;

    // edges
    temp = rotatedOLL[1];
    rotatedOLL[1] = rotatedOLL[3];
    rotatedOLL[3] = rotatedOLL[7];
    rotatedOLL[7] = rotatedOLL[5];
    rotatedOLL[5] = temp;

    return rotatedOLL;
}

function getRotationsOfOLLCase(OLL) {
    let OLLpos90 = rotateOLLCase(OLL);
    let OLLpos180 = rotateOLLCase(OLLpos90);
    let OLLneg90 = rotateOLLCase(OLLpos180);
    return [OLL, OLLpos90, OLLpos180, OLLneg90];
}

function AUFOLLCase(OLLOrientations, OLLCase) {
    return OLLOrientations.indexOf(OLLCase) == 1
        ? "U"
        : OLLOrientations.indexOf(OLLCase) == 2
        ? "U2"
        : OLLOrientations.indexOf(OLLCase) == 3
        ? "U'"
        : null;
}

function areArraysEqual(a, b) {
    return a.join() == b.join();
}

export function getOLLAlgorithm() {
    let OLL = determineOLLCase();
    let OLLOrientations = getRotationsOfOLLCase(OLL);
    // console.log(OLLOrientations);
    let OLLalg = [];

    for (let ollOrientation of OLLOrientations) {
        for (let j = 1; j <= 57; j++) {
            if (areArraysEqual(ollOrientation, OLLDirections[j])) {
                let AUF = AUFOLLCase(OLLOrientations, ollOrientation);
                if (AUF !== null) {
                    OLLalg.push(AUF);
                }
                OLLalg.push(...OLLAlgorithms[j]);
                return OLLalg;
            }
        }
    }
    return null;
}
