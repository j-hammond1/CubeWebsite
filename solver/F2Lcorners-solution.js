import { getSubCubeIndex, getSubCubeAtIndex, getSubCubeWorldDirection } from "./cube-solver.js";

function corner0Direction() {
    let worldDir = getSubCubeWorldDirection(0);
    switch (getSubCubeIndex(0)) {
        case 24:
            return worldDir.z === -1
                ? null
                : worldDir.x === 1
                ? ["F", "U2", "F'", "L'", "U2", "L"]
                : ["L'", "U2", "L", "F", "U2", "F'"];
        case 26:
            return worldDir.x === -1
                ? ["R U' R' L' U L"]
                : worldDir.z === -1
                ? ["F' U F L' U L"]
                : ["F' U' F2 U2 F'"];
        case 18:
            return worldDir.x === 1 ? ["B' U2 B L' U L"] : worldDir.y === -1 ? [] : [];
        // case 20:
        //     return worldDir.x === -1 ? "+y" : worldDir.z === -1 ? "+x" : "+z";

        // case 18:
        //     return worldDir.x === 1 ? "+y" : worldDir.z === 1 ? "-x" : "-z";
        // case 20:
        //     return worldDir.z === 1 ? "+y" : worldDir.y === -1 ? "+x" : "-z";
        // case 24:
        //     return worldDir.z === -1 ? "+y" : worldDir.y === -1 ? "-x" : "+z";
        // case 26:
        //     return worldDir.x === -1 ? "+y" : worldDir.z === -1 ? "+x" : "+z";
    }
}
