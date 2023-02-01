import * as THREE from "threejs";
import { OrbitControls } from "OrbitControls";
import Stats from "Stats";

import { subCubes, resetCube } from "./cube-builder.js";
import { POSSIBLE_MOVES, TURN_QUATERNIONS, allFaceIndices } from "./turning-data.js";
import { FINISHERS } from "./turn-finishers.js";
import {
    HITBOXES,
    U_TRACK,
    E_TRACK,
    D_TRACK,
    F_TRACK,
    S_TRACK,
    B_TRACK,
    R_TRACK,
    M_TRACK,
    L_TRACK,
} from "./hitboxes.js";
import {
    getSubCubeIndex,
    getSubCubeWorldDirection,
    alignWhiteCenterMove,
    alignBlueCenterMove,
    getSubCube1Solution,
    getSubCube3Solution,
    getSubCube5Solution,
    getSubCube7Solution,
    determineOLLCase,
    createSubCubeWorldDirVector,
} from "./cube-solver.js";

// ~~ SCENE ~~
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load("./images/background2.png", (txtr) => {
    txtr.minFilter = THREE.LinearFilter;
    txtr.magFilter = THREE.LinearFilter;
});

// ~~ RENDERER ~~
const canvas = document.getElementById("cube-window");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setPixelRatio(canvas.devicePixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

// ~~ CAMERA AND LIGHTING ~~
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 150);
camera.position.set(30, 35, 40);
// camera.add(new THREE.DirectionalLight(0xaaaaaa, 0.5));
// scene.add(camera);
// scene.add(new THREE.AmbientLight(0xaaaaaa));
scene.add(new THREE.AmbientLight(0xffffff));

// ~~ AXES HELPER ~~
scene.add(new THREE.AxesHelper(30));

// // ~~ TRACK BOUNDARIES HELPER~~
// const track_boundaries = new THREE.Line(
//     new THREE.BufferGeometry().setFromPoints([
//         new THREE.Vector3(-15, -15, -15),
//         new THREE.Vector3(-15, 15, -15),
//         new THREE.Vector3(15, 15, -15),
//         new THREE.Vector3(-15, 15, -15),
//         new THREE.Vector3(-15, 15, 15),
//     ]),
//     new THREE.LineBasicMaterial({ color: 0xff00ff })
// );
// scene.add(track_boundaries);

// ~~ STATS ~~
const stats = Stats();
document.body.appendChild(stats.dom);

// ~~ ORBIT CONTROLS ~~
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 40;
controls.maxDistance = 100;

// ~~ DYNAMIC WINDOW RESIZING ~~
window.addEventListener("resize", resizeCanvas);
function resizeCanvas() {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
}

// ~~ ADD CUBE AND HITBOXES TO SCENE ~~
scene.add(...HITBOXES);
scene.add(...subCubes);

// ~~ MAIN ANIMATON LOOP ~~
function animationLoop() {
    requestAnimationFrame(animationLoop);
    controls.update();
    stats.update();

    if (isTurningActive) {
        turn();
    }
    if (doTurnsFromList) {
        turnsFromList();
    }
    renderer.render(scene, camera);
}

// ~~ TURN QUEUE ~~
let turnList = [];
let doTurnsFromList = false;
function turnsFromList() {
    if (!isTurningActive) {
        turnList.length != 0 ? turnStarter(turnList.shift()) : (doTurnsFromList = false);
    }
}

// ~~ CONTROL MENU TOGGLE ~~
let menuOpen = false;
document.getElementById("menu-toggle").onclick = () => {
    canvas.style.zIndex = menuOpen ? 2 : 0;
    canvas.style.width = menuOpen ? "100%" : "65%";
    menuOpen = !menuOpen;
    resizeCanvas();
};

// ~~ TEXTAREA MOVE INPUT ~~
const moveInput = document.getElementById("move-input");
moveInput.oninput = () => {
    if (moveInput.value.includes("\n")) {
        let input = moveInput.value;
        moveInput.value = "";
        moveInput.placeholder = input;

        for (let i of input.trim().split(" ")) {
            if (/^[uedfsbrmlxyz]['2]$|^[uedfsbrmlxyz]$/i.test(i)) {
                turnList.push(POSSIBLE_MOVES.indexOf(i));
            }
        }
        console.log("turnList:", turnList);
        doTurnsFromList = true;
    }
};

// ~~ ANIMATION SPEED SLIDER ~~
const animSpeedSlider = document.getElementById("anim-speed-slider");
animSpeedSlider.oninput = () => {
    animationSpeed = animSpeedSlider.value;
    console.log(`animationSpeed: ${animationSpeed}`);
};

// ~~ SCRAMBLE BUTTON ~~
document.getElementById("scramble").onclick = () => {
    if (!isTurningActive) {
        let lastFace;
        while (turnList.length < 30) {
            let randFace = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
            let randTurn = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

            if (randFace != lastFace) {
                switch (randFace) {
                    case 0:
                        turnList.push(randTurn === 0 ? 0 : randTurn === 1 ? 1 : 2); // U
                        lastFace = 0;
                        break;
                    case 1:
                        turnList.push(randTurn === 0 ? 6 : randTurn === 1 ? 7 : 8); // D
                        lastFace = 1;
                        break;
                    case 2:
                        turnList.push(randTurn === 0 ? 9 : randTurn === 1 ? 10 : 11); // F
                        lastFace = 2;
                        break;
                    case 3:
                        turnList.push(randTurn === 0 ? 15 : randTurn === 1 ? 16 : 17); // B
                        lastFace = 3;
                        break;
                    case 4:
                        turnList.push(randTurn === 0 ? 18 : randTurn === 1 ? 19 : 20); // R
                        lastFace = 4;
                        break;
                    case 5:
                        turnList.push(randTurn === 0 ? 24 : randTurn === 1 ? 25 : 26); // L
                        lastFace = 5;
                        break;
                }
            }
        }
        console.log(turnList);
        doTurnsFromList = true;
        let moves = turnList.map((id) => POSSIBLE_MOVES[id]);
        moveInput.placeholder = moves.toString().replaceAll(",", " ");
    }
};

// ~~ RESET BUTTON ~~
document.getElementById("reset").onclick = () => {
    if (!isTurningActive) {
        console.log("resetting");
        scene.remove(...subCubes);
        resetCube();
        completedMoves = [];
        undoneMoves = [];
        moveInput.placeholder = "Input some moves...";
        animationSpeed = 0.05;
        animSpeedSlider.value = 0.05;
        scene.add(...subCubes);
    }
};

// ~~ UNDO/REDO SYSTEM ~~
let completedMoves = [];
let undoneMoves = [];
let undoRequest = false;
let redoRequest = false;

document.getElementById("undo").onclick = () => {
    if (!isTurningActive && completedMoves.length != 0) {
        console.log("undoing last move");
        undoRequest = true;
        let lastMove = completedMoves.pop();
        undoneMoves.push(lastMove);

        if (lastMove % 3 == 0) {
            turnStarter(lastMove + 1);
        } else if (lastMove % 3 == 1) {
            turnStarter(lastMove - 1);
        } else if (lastMove % 3 == 2) {
            turnStarter(lastMove);
        }
    }
};
document.getElementById("redo").onclick = () => {
    if (!isTurningActive && undoneMoves.length != 0) {
        console.log("redoing last move");
        redoRequest = true;
        let lastMove = undoneMoves.pop();
        completedMoves.push(lastMove);
        turnStarter(lastMove);
    }
};

// ~~ KEYBOARD INPUT ~~
document.addEventListener("keydown", documentKeyDown);
function documentKeyDown(event) {
    if (event.key === "`") {
        console.log("debug key pressed");
        // console.log("subcubes:", subCubes);
        // for (let i = 18; i <= 26; i++) {
        //     let dirVector = getSubCubeWorldDirection(i);
        //     console.log(dirVector);
        //     // let meshCenter = subCubes[getSubCubeIndex(i)].position;
        //     // let dirVectorEnd =
        //     //     dirVector.x == 1
        //     //         ? new THREE.Vector3(meshCenter.x + 30, meshCenter.y, meshCenter.z)
        //     //         : dirVector.x == -1
        //     //         ? new THREE.Vector3(meshCenter.x + -30, meshCenter.y, meshCenter.z)
        //     //         : dirVector.y == 1
        //     //         ? new THREE.Vector3(meshCenter.x, meshCenter.y + 30, meshCenter.z)
        //     //         : dirVector.y == -1
        //     //         ? new THREE.Vector3(meshCenter.x, meshCenter.y + -30, meshCenter.z)
        //     //         : dirVector.z == 1
        //     //         ? new THREE.Vector3(meshCenter.x, meshCenter.y, meshCenter.z + 30)
        //     //         : dirVector.z == -1
        //     //         ? new THREE.Vector3(meshCenter.x, meshCenter.y, meshCenter.z + -30)
        //     //         : console.log("something went wrong...");
        //     // const subCubeWorldDirVector = new THREE.Line(
        //     //     new THREE.BufferGeometry().setFromPoints([meshCenter, dirVectorEnd]),
        //     //     new THREE.LineBasicMaterial({
        //     //         color: i <= 18 ? 0x0000ff : i <= 23 ? 0xff00ff : 0x007000,
        //     //     })
        //     // );
        //     // scene.add(subCubeWorldDirVector);
        //     // console.log(
        //     //     `${i} dirVector:`,
        //     //     dirVector,
        //     //     "meshCenter:",
        //     //     meshCenter,
        //     //     "dirVectorEnd:",
        //     //     dirVectorEnd
        //     // );
        // }
        // console.log(getSubCubeWorldDirection(25));
        // console.log("subCube19 UP:", isSubCube19FacingUp());
        // console.log("subCube21 UP:", isSubCube21FacingUp());
        // console.log("subCube23 UP:", isSubCube23FacingUp());
        // console.log("subCube25 UP:", isSubCube25FacingUp());

        // determineOLLEdgeCase();
        determineOLLCase();
        // console.log(getSubCubeWorldDirection(26));
        // scene.add(createSubCubeWorldDirVector(26));

        // console.log("cube18Dir:", subCube18Direction());
        // console.log("cube20Dir:", subCube20Direction());
        // console.log("cube24Dir:", subCube24Direction());
        // console.log("cube26Dir:", subCube26Direction());

        // {
        //     let solutionMoves = [];

        //     function addMovesToSolution(moves) {
        //         if (Array.isArray(moves) && moves !== null) {
        //             solutionMoves.push(...moves);
        //             moves.forEach((move) => FINISHERS[POSSIBLE_MOVES.indexOf(move)]());
        //         } else if (!Array.isArray(moves) && moves !== null) {
        //             solutionMoves.push(moves);
        //             FINISHERS[POSSIBLE_MOVES.indexOf(moves)]();
        //         }
        //     }

        //     addMovesToSolution(alignWhiteCenterMove());
        //     addMovesToSolution(alignBlueCenterMove());

        //     addMovesToSolution(getSubCube1Solution());
        //     addMovesToSolution(getSubCube3Solution());
        //     addMovesToSolution(getSubCube5Solution());
        //     addMovesToSolution(getSubCube7Solution());

        //     // ~~~ REVERSE CROSS SOLUTION MOVES ~~~
        //     let moveIDs = [];
        //     for (let i of [...solutionMoves].reverse()) {
        //         let move = POSSIBLE_MOVES.indexOf(i);
        //         moveIDs.push(move % 3 == 0 ? move + 1 : move % 3 == 1 ? move - 1 : move);
        //     }
        //     moveIDs.forEach((id) => FINISHERS[id]());

        //     console.log(`solutionMoves: ${solutionMoves.toString().replaceAll(",", " ")}`);

        //     turnList.push(...solutionMoves.map((move) => POSSIBLE_MOVES.indexOf(move)));
        //     console.log("turnList:", turnList);
        //     doTurnsFromList = true;
        // }

        // console.log("subcube7:", getSubCubeWorldDirection(7));
        // console.log("scene children:", scene.children);
        // console.log("completed:", completedMoves);
        // console.log("undone:", undoneMoves);
        // console.log("canvas focused:", document.activeElement == canvas);
        // console.log(canvas.width, canvas.clientWidth);
        // console.log(startDrag, endDrag);
        // new Audio("./turnSound.mp3").play();
    }
}

/*
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *     DRAG-TURNING SYSTEM
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let dragged;
let startDrag;
let endDrag;
let dragDist;

function findIntersect() {
    console.log("raycasting...");
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(HITBOXES);
    if (typeof intersects[0] !== "undefined") {
        console.log(`ray intersects with: hitbox ${intersects[0].object.name}`);
        return intersects[0].object.name;
    } else {
        return undefined;
    }
}

canvas.addEventListener("mousedown", onMouseDown);
function onMouseDown(event) {
    dragged = false;
    startDrag = undefined;
    endDrag = undefined;
    pointer.x = (event.clientX / canvas.clientWidth) * 2 - 1;
    pointer.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
    startDrag = findIntersect();

    if (startDrag != undefined) {
        controls.enableRotate = false;
        controls.enableZoom = false;
    }
}

canvas.addEventListener("mousemove", () => {
    dragged = true;
});

canvas.addEventListener("mouseup", onMouseUp);
function onMouseUp(event) {
    controls.enableRotate = true;
    controls.enableZoom = true;
    // ensure the cursor was dragged, no turn is active, and the drag was started on the cube
    if (dragged && !isTurningActive && startDrag != undefined) {
        pointer.x = (event.clientX / canvas.clientWidth) * 2 - 1;
        pointer.y = -(event.clientY / canvas.clientHeight) * 2 + 1;
        endDrag = findIntersect();

        // ensure the the drag ends on the cube
        if (endDrag != undefined) {
            // ensure the drag starts and ends in two different hitboxes
            if (startDrag != endDrag) {
                if (U_TRACK.includes(startDrag) && U_TRACK.includes(endDrag)) {
                    dragTurn(U_TRACK, 1, 0, 1);
                } else if (E_TRACK.includes(startDrag) && E_TRACK.includes(endDrag)) {
                    dragTurn(E_TRACK, -1, 3, 4);
                } else if (D_TRACK.includes(startDrag) && D_TRACK.includes(endDrag)) {
                    dragTurn(D_TRACK, -1, 6, 7);
                } else if (F_TRACK.includes(startDrag) && F_TRACK.includes(endDrag)) {
                    dragTurn(F_TRACK, -1, 9, 10);
                } else if (S_TRACK.includes(startDrag) && S_TRACK.includes(endDrag)) {
                    dragTurn(S_TRACK, -1, 12, 13);
                } else if (B_TRACK.includes(startDrag) && B_TRACK.includes(endDrag)) {
                    dragTurn(B_TRACK, 1, 15, 16);
                } else if (R_TRACK.includes(startDrag) && R_TRACK.includes(endDrag)) {
                    dragTurn(R_TRACK, 1, 18, 19);
                } else if (M_TRACK.includes(startDrag) && M_TRACK.includes(endDrag)) {
                    dragTurn(M_TRACK, -1, 21, 22);
                } else if (L_TRACK.includes(startDrag) && L_TRACK.includes(endDrag)) {
                    dragTurn(L_TRACK, -1, 24, 25);
                }
            }
        }
    }
}

function doesDragCrossBoundary(track) {
    dragDist = track.indexOf(startDrag) - track.indexOf(endDrag);

    console.log(`%c ${track} dragged`, "color: #00ff00");
    console.log(`start indx: ${track.indexOf(startDrag)}, end indx: ${track.indexOf(endDrag)}`);
    console.log(`dist: ${dragDist}`);

    if (dragDist > 5 || dragDist < -5) {
        console.log("%c dragged across boundary", "color: #ff8700");
        return true;
    }
    return false;
}

function dragTurn(track, turnDir, turn1, turn2) {
    let hasCrossedBoundary = doesDragCrossBoundary(track);
    if (!hasCrossedBoundary) {
        if (dragDist < 0) {
            turnDir *= -1; // change direction
        }
    } else if (hasCrossedBoundary) {
        if (dragDist > 0) {
            turnDir *= -1; // change direction
        }
    }
    console.log(`%c turn direction: ${turnDir}`, "color: #0090ff");

    if (turnDir > 0) {
        turnStarter(turn1);
    } else {
        turnStarter(turn2);
    }
}

// ~~ TURNING SYSTEM ~~
let isTurningActive = false;
let animationSpeed = 0.05;
let turnID;
let face;

function turnStarter(id) {
    turnID = id;
    face = new THREE.Group();
    console.log(`turnID: ${turnID}`);
    // let turnSound = new Audio("./turnSound.mp3");
    // turnSound.volume = 0.5;
    // turnSound.play();

    for (let i of allFaceIndices(turnID)) {
        face.add(subCubes[i]);
    }
    scene.add(face);
    isTurningActive = true;
}

function turn() {
    if (!face.quaternion.equals(TURN_QUATERNIONS[turnID])) {
        face.quaternion.rotateTowards(TURN_QUATERNIONS[turnID], animationSpeed);
    } else {
        turnFinisher();
    }
}

function turnFinisher() {
    isTurningActive = false;
    scene.remove(face);
    FINISHERS[turnID]();

    if (!undoRequest && !redoRequest) {
        completedMoves.push(turnID);
        undoneMoves = [];
    }
    undoRequest = false;
    redoRequest = false;

    for (let i of allFaceIndices(turnID)) {
        scene.add(subCubes[i]);
    }
}

//////////
animationLoop();
