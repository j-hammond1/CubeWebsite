import * as THREE from "threejs";
import {
    CORNER_INDICES,
    CENTER_INDICES,
    EDGE_DOWN_INDICES,
    EDGE_UP_INDICES,
    EDGE_RIGHT_INDICES,
    EDGE_LEFT_INDICES,
    R_INDICES,
    L_INDICES,
    U_INDICES,
    D_INDICES,
    F_INDICES,
    B_INDICES,
    SUBCUBE_STICKER_INDICES,
    setR_CLR,
    setL_CLR,
    setU_CLR,
    setD_CLR,
    setF_CLR,
    setB_CLR,
} from "./cube_builder_data.js";

export var txtrs = new Array(54);
const LOADER = new THREE.TextureLoader();

export function initBlankModel() {
    setU_CLR(0x000000);
    setD_CLR(0x000000);
    setF_CLR(0x000000);
    setB_CLR(0x000000);
    setR_CLR(0x000000);
    setL_CLR(0x000000);
    txtrs.fill(null);
}

export function initGrayscaleModel() {
    setU_CLR(0x222222);
    setD_CLR(0x333333);
    setF_CLR(0x666666);
    setB_CLR(0x999999);
    setR_CLR(0xcccccc);
    setL_CLR(0xffffff);
    txtrs.fill(null);
}

export function initStickerlessModel() {
    txtrs.fill(null);
}

export function initSpeedcubeModel() {
    const CRNR_STCKR = LOADER.load("./images/stickers/stickerV7.png");
    CRNR_STCKR.name = "CORNER_STICKER";

    const CNTR_STCKR = LOADER.load("./images/stickers/centerSticker.png");
    CNTR_STCKR.name = "CENTER_STICKER";

    const EDGE_STCKR_DOWN = LOADER.load("./images/stickers/edgeStickerDown.png");
    EDGE_STCKR_DOWN.name = "EDGE_STICKER_DOWN";
    const EDGE_STCKR_UP = LOADER.load("./images/stickers/edgeStickerUp.png");
    EDGE_STCKR_UP.name = "EDGE_STICKER_UP";
    const EDGE_STCKR_RIGHT = LOADER.load("./images/stickers/edgeStickerRight.png");
    EDGE_STCKR_RIGHT.name = "EDGE_STICKER_RIGHT";
    const EDGE_STCKR_LEFT = LOADER.load("./images/stickers/edgeStickerLeft.png");
    EDGE_STCKR_LEFT.name = "EDGE_STICKER_LEFT";

    for (let i of CORNER_INDICES) {
        txtrs[i] = CRNR_STCKR;
    }
    for (let i of CENTER_INDICES) {
        txtrs[i] = CNTR_STCKR;
    }
    for (let i of EDGE_DOWN_INDICES) {
        txtrs[i] = EDGE_STCKR_DOWN;
    }
    for (let i of EDGE_UP_INDICES) {
        txtrs[i] = EDGE_STCKR_UP;
    }
    for (let i of EDGE_RIGHT_INDICES) {
        txtrs[i] = EDGE_STCKR_RIGHT;
    }
    for (let i of EDGE_LEFT_INDICES) {
        txtrs[i] = EDGE_STCKR_LEFT;
    }
}

export function initBLDModel() {
    txtrs[0] = LOADER.load("./images/stickers/letters/A.png");
    txtrs[1] = LOADER.load("./images/stickers/letters/A.png");

    txtrs[2] = LOADER.load("./images/stickers/letters/B.png");
    txtrs[5] = LOADER.load("./images/stickers/letters/B.png");

    txtrs[7] = LOADER.load("./images/stickers/letters/C.png");
    txtrs[8] = LOADER.load("./images/stickers/letters/C.png");

    txtrs[3] = LOADER.load("./images/stickers/letters/D.png");
    txtrs[6] = LOADER.load("./images/stickers/letters/D.png");

    txtrs[18] = LOADER.load("./images/stickers/letters/E.png");
    txtrs[19] = LOADER.load("./images/stickers/letters/E.png");

    txtrs[20] = LOADER.load("./images/stickers/letters/F.png");
    txtrs[23] = LOADER.load("./images/stickers/letters/F.png");

    txtrs[25] = LOADER.load("./images/stickers/letters/G.png");
    txtrs[26] = LOADER.load("./images/stickers/letters/G.png");

    txtrs[21] = LOADER.load("./images/stickers/letters/H.png");
    txtrs[24] = LOADER.load("./images/stickers/letters/H.png");

    txtrs[27] = LOADER.load("./images/stickers/letters/I.png");
    txtrs[28] = LOADER.load("./images/stickers/letters/I.png");

    txtrs[29] = LOADER.load("./images/stickers/letters/J.png");
    txtrs[32] = LOADER.load("./images/stickers/letters/J.png");

    txtrs[34] = LOADER.load("./images/stickers/letters/K.png");
    txtrs[35] = LOADER.load("./images/stickers/letters/K.png");

    txtrs[30] = LOADER.load("./images/stickers/letters/L.png");
    txtrs[33] = LOADER.load("./images/stickers/letters/L.png");

    txtrs[36] = LOADER.load("./images/stickers/letters/M.png");
    txtrs[37] = LOADER.load("./images/stickers/letters/M.png");

    txtrs[38] = LOADER.load("./images/stickers/letters/N.png");
    txtrs[41] = LOADER.load("./images/stickers/letters/N.png");

    txtrs[43] = LOADER.load("./images/stickers/letters/O.png");
    txtrs[44] = LOADER.load("./images/stickers/letters/O.png");

    txtrs[39] = LOADER.load("./images/stickers/letters/P.png");
    txtrs[42] = LOADER.load("./images/stickers/letters/P.png");

    txtrs[45] = LOADER.load("./images/stickers/letters/Q.png");
    txtrs[46] = LOADER.load("./images/stickers/letters/Q.png");

    txtrs[47] = LOADER.load("./images/stickers/letters/R.png");
    txtrs[50] = LOADER.load("./images/stickers/letters/R.png");

    txtrs[52] = LOADER.load("./images/stickers/letters/S.png");
    txtrs[53] = LOADER.load("./images/stickers/letters/S.png");

    txtrs[48] = LOADER.load("./images/stickers/letters/T.png");
    txtrs[51] = LOADER.load("./images/stickers/letters/T.png");

    txtrs[9] = LOADER.load("./images/stickers/letters/U.png");
    txtrs[10] = LOADER.load("./images/stickers/letters/U.png");

    txtrs[11] = LOADER.load("./images/stickers/letters/V.png");
    txtrs[14] = LOADER.load("./images/stickers/letters/V.png");

    txtrs[16] = LOADER.load("./images/stickers/letters/W.png");
    txtrs[17] = LOADER.load("./images/stickers/letters/X.png");

    txtrs[12] = LOADER.load("./images/stickers/letters/X.png");
    txtrs[15] = LOADER.load("./images/stickers/letters/X.png");
}

// model that shows each subCube's number/id/name
export function initDebugModel1() {
    for (let inds of SUBCUBE_STICKER_INDICES) {
        for (let i of inds) {
            if (i !== null) {
                txtrs[i] = LOADER.load(
                    `./images/stickers/numbers/black${SUBCUBE_STICKER_INDICES.indexOf(inds)}.png`
                );
            }
        }
    }
}

/* model that shows each sticker's number, as well as the numbers of the hitboxes used for drag turning
(the stickers and the hitboxes share the same numbering system) */
export function initDebugModel2() {
    for (let i = 0; i < txtrs.length; i++) {
        txtrs[i] = LOADER.load(`./images/stickers/numbers/black${i}.png`);
    }
}

export function initEarthModel() {
    setU_CLR(0xffffff);
    setD_CLR(0xffffff);
    setF_CLR(0xffffff);
    setB_CLR(0xffffff);
    setR_CLR(0xffffff);
    setL_CLR(0xffffff);

    for (let i of U_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/U/image${U_INDICES.indexOf(i)}.png`);
    }
    for (let i of D_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/D/image${D_INDICES.indexOf(i)}.png`);
    }
    for (let i of F_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/F/image${F_INDICES.indexOf(i)}.png`);
    }
    for (let i of B_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/B/image${B_INDICES.indexOf(i)}.png`);
    }
    for (let i of R_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/R/image${R_INDICES.indexOf(i)}.png`);
    }
    for (let i of L_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/earth/L/image${L_INDICES.indexOf(i)}.png`);
    }
}

export function initRoseModel() {
    for (let i of U_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${U_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of D_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${D_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of F_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${F_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of B_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${B_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of R_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${R_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of L_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/rose/rose${L_INDICES.indexOf(i)}.jpg`);
    }
}

export function initChromecastImgsModel() {
    setU_CLR(0xffffff);
    setD_CLR(0xffffff);
    setF_CLR(0xffffff);
    setB_CLR(0xffffff);
    setR_CLR(0xffffff);
    setL_CLR(0xffffff);

    for (let i of U_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/underwater/${U_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of D_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/jellyfish/${D_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of F_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/stars/${F_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of B_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/river/${B_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of R_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/puffins/${R_INDICES.indexOf(i)}.jpg`);
    }
    for (let i of L_INDICES) {
        txtrs[i] = LOADER.load(`./images/stickers/high_res/pyramids/${L_INDICES.indexOf(i)}.jpg`);
    }
}

export function initCheckeredModel() {
    txtrs.fill(LOADER.load("./images/stickers/checker_marble.png"));
}

export function initVideoModel() {
    // setU_CLR(0xffffff);
    // setD_CLR(0xffffff);
    // setF_CLR(0xffffff);
    // setB_CLR(0xffffff);
    // setR_CLR(0xffffff);
    // setL_CLR(0xffffff);

    initVideoFace(U_INDICES, "./videos/dogears_mp4s/dogears_");
    initVideoFace(D_INDICES, "./videos/dogears_mp4s/dogears_");
    initVideoFace(F_INDICES, "./videos/dogears_mp4s/dogears_");
    initVideoFace(B_INDICES, "./videos/dogears_mp4s/dogears_");
    initVideoFace(R_INDICES, "./videos/dogears_mp4s/dogears_");
    initVideoFace(L_INDICES, "./videos/dogears_mp4s/dogears_");
}

function initVideoFace(indices, path) {
    for (let i of indices) {
        let video = document.createElement("video");
        video.src = `${path}${indices.indexOf(i)}.mp4`;
        video.style = "display: none";
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.play();
        txtrs[i] = new THREE.VideoTexture(video);
    }
}
