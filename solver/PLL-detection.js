import { getSubCubeIndex, getSubCubeAtIndex, getSubCubeWorldDirection } from "./cube-solver.js";
// Jb perm: R U R' F' R U R' U' R' F R2 U' R'

export function getLLSubCubePositions() {
    // console.log(getSubCubeAtIndex(0), getSubCubeAtIndex(1), getSubCubeAtIndex(2));
    // console.log(getSubCubeAtIndex(3), getSubCubeAtIndex(4), getSubCubeAtIndex(5));
    // console.log(getSubCubeAtIndex(6), getSubCubeAtIndex(7), getSubCubeAtIndex(8));

    console.log(
        getSubCubeWorldDirection(24),
        getSubCubeWorldDirection(25),
        getSubCubeWorldDirection(26)
    );
    console.log(
        getSubCubeWorldDirection(21),
        getSubCubeWorldDirection(22),
        getSubCubeWorldDirection(23)
    );
    console.log(
        getSubCubeWorldDirection(18),
        getSubCubeWorldDirection(19),
        getSubCubeWorldDirection(20)
    );
}
