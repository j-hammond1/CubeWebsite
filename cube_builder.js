import * as THREE from "threejs";
import { RoundedBoxGeometry } from "RoundedBoxGeometry";

import {
    BASE_CLR,
    R_CLR,
    L_CLR,
    U_CLR,
    D_CLR,
    F_CLR,
    B_CLR,
    COORD,
    SCALE,
} from "./cube_builder_data.js";
import {
    txtrs,
    initBlankModel,
    initGrayscaleModel,
    initStickerlessModel,
    initStickeredModel,
    initSpeedcubeModel,
    initBLDModel,
    initDebugModel1,
    initDebugModel2,
    initEarthModel,
    initRoseModel,
    initCheckeredModel,
    initChromecastImgsModel,
    initVideoModel,
} from "./cube_models.js";

export const subCubes = [];
var subCubeID = 0;

export function resetCube() {
    subCubes.length = 0;
    subCubeID = 0;
    initCube();
}

// initBlankModel();
// initGrayscaleModel();
// initStickerlessModel();
initStickeredModel();
// initSpeedcubeModel();
// initBLDModel();
// initDebugModel1();
// initDebugModel2();
// initEarthModel();
// initRoseModel();
// initCheckeredModel();
// initChromecastImgsModel();
// initVideoModel();

initCube();

function initCube() {
    // 0
    createSubCube(
        [-COORD, COORD, -COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, txtrs[18], txtrs[0], null, null, txtrs[47]]
    );
    // 1
    createSubCube(
        [0, COORD, -COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, null, txtrs[1], null, null, txtrs[46]]
    );
    // 2
    createSubCube(
        [COORD, COORD, -COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [txtrs[38], null, txtrs[2], null, null, txtrs[45]]
    );
    // 3
    createSubCube(
        [-COORD, COORD, 0],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, txtrs[19], txtrs[3], null, null, null]
    );
    // 4
    createSubCube(
        [0, COORD, 0],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, null, txtrs[4], null, null, null]
    );
    // 5
    createSubCube(
        [COORD, COORD, 0],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [txtrs[37], null, txtrs[5], null, null, null]
    );
    // 6
    createSubCube(
        [-COORD, COORD, COORD],
        [BASE_CLR, L_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, txtrs[20], txtrs[6], null, txtrs[27], null]
    );
    // 7
    createSubCube(
        [0, COORD, COORD],
        [BASE_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, null, txtrs[7], null, txtrs[28], null]
    );
    // 8
    createSubCube(
        [COORD, COORD, COORD],
        [R_CLR, BASE_CLR, U_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [txtrs[36], null, txtrs[8], null, txtrs[29], null]
    );
    // 9
    createSubCube(
        [-COORD, 0, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, txtrs[21], null, null, null, txtrs[50]]
    );
    // 10
    createSubCube(
        [0, 0, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [null, null, null, null, null, txtrs[49]]
    );
    // 11
    createSubCube(
        [COORD, 0, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, B_CLR],
        [txtrs[41], null, null, null, null, txtrs[48]]
    );
    // 12
    createSubCube(
        [-COORD, 0, 0],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, txtrs[22], null, null, null, null]
    );
    // 13 ---CENTER---
    createSubCube(
        [0, 0, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [null, null, null, null, null, null]
    );
    // 14
    createSubCube(
        [COORD, 0, 0],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR],
        [txtrs[40], null, null, null, null, null]
    );
    // 15
    createSubCube(
        [-COORD, 0, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, txtrs[23], null, null, txtrs[30], null]
    );
    // 16
    createSubCube(
        [0, 0, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [null, null, null, null, txtrs[31], null]
    );
    // 17
    createSubCube(
        [COORD, 0, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, BASE_CLR, F_CLR, BASE_CLR],
        [txtrs[39], null, null, null, txtrs[32], null]
    );
    // 18
    createSubCube(
        [-COORD, -COORD, -COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [null, txtrs[24], null, txtrs[15], null, txtrs[53]]
    );
    // 19
    createSubCube(
        [0, -COORD, -COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [null, null, null, txtrs[16], null, txtrs[52]]
    );
    // 20
    createSubCube(
        [COORD, -COORD, -COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, B_CLR],
        [txtrs[44], null, null, txtrs[17], null, txtrs[51]]
    );
    // 21
    createSubCube(
        [-COORD, -COORD, 0],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [null, txtrs[25], null, txtrs[12], null, null]
    );
    // 22
    createSubCube(
        [0, -COORD, 0],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [null, null, null, txtrs[13], null, null]
    );
    // 23
    createSubCube(
        [COORD, -COORD, 0],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, BASE_CLR, BASE_CLR],
        [txtrs[43], null, null, txtrs[14], null, null]
    );
    // 24
    createSubCube(
        [-COORD, -COORD, COORD],
        [BASE_CLR, L_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [null, txtrs[26], null, txtrs[9], txtrs[33], null]
    );
    // 25
    createSubCube(
        [0, -COORD, COORD],
        [BASE_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [null, null, null, txtrs[10], txtrs[34], null]
    );
    // 26
    createSubCube(
        [COORD, -COORD, COORD],
        [R_CLR, BASE_CLR, BASE_CLR, D_CLR, F_CLR, BASE_CLR],
        [txtrs[42], null, null, txtrs[11], txtrs[35], null]
    );
}

function createSubCube(coords, colors, textures) {
    const subCubeMaterials = [];
    const materialNames = ["R", "L", "U", "D", "F", "B"];

    for (let i = 0; i < 6; i++) {
        if (textures[i] !== null) {
            subCubeMaterials[i] = new THREE.MeshPhongMaterial({
                name: materialNames[i],
                color: colors[i],
                map: textures[i],
            });
        } else {
            subCubeMaterials[i] = new THREE.MeshPhongMaterial({
                name: materialNames[i],
                color: colors[i],
                // transparent: true,
                // opacity: 0,
            });
        }
    }

    const subCubeGeometry = new RoundedBoxGeometry(SCALE, SCALE, SCALE, 6, 0.85);
    const subCubeMesh = new THREE.Mesh(subCubeGeometry, subCubeMaterials);
    subCubeMesh.name = `subCube#${subCubeID++}`;
    subCubeMesh.position.set(coords[0], coords[1], coords[2]);
    subCubes.push(subCubeMesh);
}
