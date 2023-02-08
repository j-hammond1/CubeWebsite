import * as THREE from "threejs";
import { isTurningActive } from "./main.js";
import { subCubes } from "./cube-builder.js";
import { getSubCubeIndex, getSubCubeAtIndex } from "./solver/cube-solver.js";
import { R_INDICES, L_INDICES, U_INDICES, D_INDICES, F_INDICES, B_INDICES } from "./cube-models.js";

/* EXAMPLE SOLVE
// scramble
F' L2 B2 U2 F' R2 B2 L2 D2 F' U' R U' L2 D' F L U2 B D' r u
// memo
z' y'
// edges
U2 L U' M' U L' U' M U'
L' l U' l F M' F' l' U
S' U' R' E R U R' E' R S
D L F' L' S L F L' S' D'
// corners
R' D' U' R' D R U' R' D' R U2 D R
U' D' R D R' U R D' D D' R' D
U D R D' U' R' D R U R' D' R D R' U' D'
// parity
R U D R' F' R U R' U' R' F R2 U' R' U' R D' R'
 */

function resetSubCubeColors() {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (R_INDICES.includes(mat.name)) {
                mat.color.set(rColorPicker.value);
            } else if (L_INDICES.includes(mat.name)) {
                mat.color.set(lColorPicker.value);
            } else if (U_INDICES.includes(mat.name)) {
                mat.color.set(uColorPicker.value);
            } else if (D_INDICES.includes(mat.name)) {
                mat.color.set(dColorPicker.value);
            } else if (F_INDICES.includes(mat.name)) {
                mat.color.set(fColorPicker.value);
            } else if (B_INDICES.includes(mat.name)) {
                mat.color.set(bColorPicker.value);
            } else {
                mat.color.set(0x000000);
            }
        });
    });
}

/**
 * Offsets the HSL lightness of the 6 sides of a subCube.
 *
 * Order of sides: [+x, -x, +y, -y, +z, -z] aka [R, L, U, D, F, B].
 * @param {Object} subCube  - Individual subCube. (three.js Mesh object)
 * @param {Number} multiplier - A multiplier to eaisly scale lightness. (-1: darker, 1: lighter)
 * @param {Number} indxToOverride - The index of a side to not offset the color of.
 */
function offsetSubCubeHSL(subCube, multiplier, indxToOverride) {
    let HSLOffsets = [0.35, 0.4, 0.9, 0.43, 0.18, 0.4];
    HSLOffsets[indxToOverride] = 0;

    subCube.material.forEach((mat, matIndx) => {
        mat.color.offsetHSL(0, 0, HSLOffsets[matIndx] * multiplier);
    });
}

function showPLL() {
    let uFaceCenter = getSubCubeAtIndex(4);
    console.log(uFaceCenter);

    subCubes.forEach((subCube, cubeIndx) => {
        if (uFaceCenter == 4 && getSubCubeAtIndex(cubeIndx) > 8) {
            offsetSubCubeHSL(subCube, -1);
        } else if (uFaceCenter == 10) {
            offsetSubCubeHSL(subCube, -1);
        } else if (uFaceCenter == 12) {
            offsetSubCubeHSL(subCube, -1);
        } else if (uFaceCenter == 14) {
            offsetSubCubeHSL(subCube, -1);
        } else if (uFaceCenter == 16 && getSubCubeAtIndex(cubeIndx) > 8) {
            offsetSubCubeHSL(subCube, -1);
        } else if (uFaceCenter == 22) {
            offsetSubCubeHSL(subCube, -1);
        }
    });

    // subCubes.forEach((subCube, cubeIndx) => {
    //     console.log(getSubCubeAtIndex(cubeIndx));
    //     if (getSubCubeAtIndex(cubeIndx) > 8) {
    //         offsetSubCubeHSL(subCube, -1);
    //     }
    // });
}

function showOLL() {
    let uFaceCenter = getSubCubeAtIndex(4);
    console.log(uFaceCenter);

    subCubes.forEach((subCube) => {
        if (uFaceCenter == 4) {
            offsetSubCubeHSL(subCube, -1, 2);
        } else if (uFaceCenter == 10) {
            offsetSubCubeHSL(subCube, -1, 5);
        } else if (uFaceCenter == 12) {
            offsetSubCubeHSL(subCube, -1, 1);
        } else if (uFaceCenter == 14) {
            offsetSubCubeHSL(subCube, -1, 0);
        } else if (uFaceCenter == 16) {
            offsetSubCubeHSL(subCube, -1, 4);
        } else if (uFaceCenter == 22) {
            offsetSubCubeHSL(subCube, -1, 3);
        }
    });
}

function showF2L() {
    subCubes.forEach((subCube, cubeIndx) => {
        if (cubeIndx <= 8) {
            offsetSubCubeHSL(subCube, -1);
        }
    });
}

function showCross() {
    // const crossIndices = [10, 12, 14, 16, 22, 19, 21, 23, 25];
    // subCubes.forEach((subCube, cubeIndx) => {
    //     if (!crossIndices.includes(cubeIndx)) {
    //         offsetSubCubeHSL(subCube, -1);
    //     }
    // });
    let uFaceCenter = getSubCubeAtIndex(4);
    console.log(uFaceCenter);

    subCubes.forEach((subCube, cubeIndx) => {
        if (uFaceCenter == 4 && ![10, 12, 14, 16, 22, 19, 21, 23, 25].includes(cubeIndx)) {
            subCube.material.forEach((mat) => {
                mat.color.setHex(0x000000);
            });
        } else if (uFaceCenter == 10 && ![4, 12, 14, 16, 22, 7, 15, 17, 25].includes(cubeIndx)) {
            console.log(cubeIndx);
            subCube.material.forEach((mat) => {
                mat.color.setHex(0x000000);
            });
        }

        // subCube.material.forEach((mat) => {
        //     if (uFaceCenter == 4) {
        //         offsetSubCubeHSL(subCube, -1, 2);
        //     } else if (uFaceCenter == 10) {
        //         offsetSubCubeHSL(subCube, -1, 5);
        //     } else if (uFaceCenter == 12) {
        //         offsetSubCubeHSL(subCube, -1, 1);
        //     } else if (uFaceCenter == 14) {
        //         offsetSubCubeHSL(subCube, -1, 0);
        //     } else if (uFaceCenter == 16) {
        //         offsetSubCubeHSL(subCube, -1, 4);
        //     } else if (uFaceCenter == 22) {
        //         offsetSubCubeHSL(subCube, -1, 3);
        //     }
        // });
    });
}

const stageSelector = document.getElementById("stage-selector");
stageSelector.oninput = () => {
    switch (stageSelector.value) {
        case "Full":
            console.log("full");
            resetSubCubeColors();
            break;
        case "Cross":
            console.log("cross");
            // showCross();
            break;
        case "F2L":
            console.log("F2L");
            // showF2L();
            break;
        case "OLL":
            console.log("OLL");
            // showOLL();
            break;
        case "PLL":
            console.log("PLL");
            // showPLL();
            break;
    }
};

// ~~~~~~ PIECE SELECTOR ~~~~~~
function hideAllButTheseSubCubes(targetSubCubes) {
    subCubes.forEach((subCube, cubeIndx) => {
        if (!targetSubCubes.includes(cubeIndx)) {
            subCube.material.forEach((mat) => {
                mat.transparent = true;
                mat.opacity = 0;
            });
        }
    });
}
function showAllSubCubes() {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            mat.transparent = false;
            mat.opacity = 1;
            mat.side = THREE.FrontSide;
        });
    });
}

let currentPieces = "All";
const pieceSelector = document.getElementById("piece-selector");
pieceSelector.oninput = () => {
    switch (pieceSelector.value) {
        case "All":
            showAllSubCubes();
            if (isTransparent) {
                setCubeTransparent();
            }
            currentPieces = "All";
            break;
        case "Centers":
            showAllSubCubes();
            hideAllButTheseSubCubes([4, 10, 13, 12, 14, 16, 22]);
            if (isTransparent) {
                setCubeTransparent();
            }
            currentPieces = "Centers";
            break;
        case "Edges":
            showAllSubCubes();
            hideAllButTheseSubCubes([1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]);
            if (isTransparent) {
                setCubeTransparent();
            }
            currentPieces = "Edges";
            break;
        case "Corners":
            showAllSubCubes();
            hideAllButTheseSubCubes([0, 2, 6, 8, 18, 20, 24, 26]);
            if (isTransparent) {
                setCubeTransparent();
            }
            currentPieces = "Corners";
            break;
    }
};

// ~~~~~~ COLOR PICKERS ~~~~~~
const uColorPicker = document.getElementById("u-clr-picker");
uColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (U_INDICES.includes(mat.name)) {
                mat.color.set(uColorPicker.value);
            }
        });
    });
};

const dColorPicker = document.getElementById("d-clr-picker");
dColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (D_INDICES.includes(mat.name)) {
                mat.color.set(dColorPicker.value);
            }
        });
    });
};

const fColorPicker = document.getElementById("f-clr-picker");
fColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (F_INDICES.includes(mat.name)) {
                mat.color.set(fColorPicker.value);
            }
        });
    });
};

const bColorPicker = document.getElementById("b-clr-picker");
bColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (B_INDICES.includes(mat.name)) {
                mat.color.set(bColorPicker.value);
            }
        });
    });
};

const rColorPicker = document.getElementById("r-clr-picker");
rColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (R_INDICES.includes(mat.name)) {
                mat.color.set(rColorPicker.value);
            }
        });
    });
};

const lColorPicker = document.getElementById("l-clr-picker");
lColorPicker.oninput = () => {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (L_INDICES.includes(mat.name)) {
                mat.color.set(lColorPicker.value);
            }
        });
    });
};

// const baseColorPicker = document.getElementById("base-clr-picker");
// baseColorPicker.oninput = () => {
//     subCubes.forEach((subCube) => {
//         subCube.material.forEach((mat) => {
//             if (mat.name === "") {
//                 mat.color.set(baseColorPicker.value);
//             }
//         });
//     });
// };

// ~~~~~~ ANIMATION TOGGLE ~~~~~~
export let doAnimation = true;
document.getElementById("toggle-animation").onclick = () => {
    if (!isTurningActive) {
        console.log("toggling animation");
        doAnimation = !doAnimation;
        if (doAnimation) {
            document.getElementById("video-on").style.display = "none";
            document.getElementById("video-off").style.display = "initial";
        } else {
            document.getElementById("video-off").style.display = "none";
            document.getElementById("video-on").style.display = "initial";
        }
    }
};
export function setDoAnimation(val) {
    doAnimation = val;
}

// ~~~~~~ TRANSPARENCY TOGGLE ~~~~~~
let isTransparent = false;
document.getElementById("toggle-transparency").onclick = toggleTransparency;

function toggleTransparency() {
    if (!isTransparent) {
        setCubeTransparent();
    } else {
        setCubeOpaque();
        if (currentPieces === "Centers") {
            hideAllButTheseSubCubes([4, 10, 13, 12, 14, 16, 22]);
        } else if (currentPieces === "Edges") {
            hideAllButTheseSubCubes([1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]);
        } else if (currentPieces === "Corners") {
            hideAllButTheseSubCubes([0, 2, 6, 8, 18, 20, 24, 26]);
        }
    }

    isTransparent = !isTransparent;
    console.log("isTransparent:", isTransparent);
}

function setCubeTransparent() {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (mat.name === "") {
                mat.transparent = true;
                mat.opacity = 0;
                mat.side = THREE.BackSide;
            } else {
                mat.transparent = true;
                mat.side = THREE.DoubleSide;
            }
        });
    });
}
function setCubeOpaque() {
    subCubes.forEach((subCube) => {
        subCube.material.forEach((mat) => {
            if (mat.name === "") {
                mat.transparent = false;
                mat.opacity = 1;
                mat.side = THREE.FrontSide;
            } else {
                mat.transparent = false;
                mat.side = THREE.FrontSide;
            }
        });
    });
}

export function setisTransparent(val) {
    isTransparent = val;
}
