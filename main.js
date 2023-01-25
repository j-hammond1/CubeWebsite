import * as THREE from "threejs";
import { OrbitControls } from "OrbitControls";
import Stats from "Stats";

import { subCubes, resetCube } from "./cube_builder.js";
import {
    ALL_FACE_INDICES,
    POSSIBLE_MOVES,
    STARTERS,
    FINISHERS,
    TURN_QUATERNIONS,
} from "./turning_data.js";
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

// ~~ SCENE ~~
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x464646);

// ~~ RENDERER ~~
const canvas = document.getElementById("cube-window");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setPixelRatio(canvas.devicePixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
// console.log(renderer.domElement);
// document.getElementById("cube-div").appendChild(renderer.domElement);

// ~~ CAMERA AND LIGHTING ~~
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 150);
camera.position.set(25, 35, 35);
camera.add(new THREE.DirectionalLight(0xaaaaaa, 0.5));
scene.add(camera);
scene.add(new THREE.AmbientLight(0xaaaaaa));

// // ~~ AXES HELPER ~~
// scene.add(new THREE.AxesHelper(30));

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
window.addEventListener("resize", () => {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
});

// ~~ ADD CUBE AND HITBOXES TO SCENE ~~
scene.add(...HITBOXES);
scene.add(...subCubes);

// ~~ MAIN ANIMATON LOOP ~~
animationLoop();
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

/*
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *     DRAG-TURNING SYSTEM
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
var dragged;
var startDrag;
var endDrag;
var dragDist;
var hasCrossedBoundary;

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
        // console.log("disabled rotate and zoom");
    }
}

canvas.addEventListener("mousemove", onMouseMove);
function onMouseMove() {
    dragged = true;
}

canvas.addEventListener("mouseup", onMouseUp);
function onMouseUp(event) {
    controls.enableRotate = true;
    controls.enableZoom = true;
    // console.log("enabled rotate and zoom");
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
                    dragTurn(E_TRACK, -1, 2, 3);
                } else if (D_TRACK.includes(startDrag) && D_TRACK.includes(endDrag)) {
                    dragTurn(D_TRACK, -1, 4, 5);
                } else if (F_TRACK.includes(startDrag) && F_TRACK.includes(endDrag)) {
                    dragTurn(F_TRACK, -1, 6, 7);
                } else if (S_TRACK.includes(startDrag) && S_TRACK.includes(endDrag)) {
                    dragTurn(S_TRACK, -1, 8, 9);
                } else if (B_TRACK.includes(startDrag) && B_TRACK.includes(endDrag)) {
                    dragTurn(B_TRACK, 1, 10, 11);
                } else if (R_TRACK.includes(startDrag) && R_TRACK.includes(endDrag)) {
                    dragTurn(R_TRACK, 1, 12, 13);
                } else if (M_TRACK.includes(startDrag) && M_TRACK.includes(endDrag)) {
                    dragTurn(M_TRACK, -1, 14, 15);
                } else if (L_TRACK.includes(startDrag) && L_TRACK.includes(endDrag)) {
                    dragTurn(L_TRACK, -1, 16, 17);
                }
            }
        }
    }
}

function doesDragCrossBoundary(track) {
    dragDist = track.indexOf(startDrag) - track.indexOf(endDrag);

    console.log(`%c ${track} dragged`, "color: #00ff00");
    console.log(
        `%c start indx: ${track.indexOf(startDrag)}, end indx: ${track.indexOf(endDrag)}`,
        "color: #00ff00"
    );
    console.log(`%c dist: ${dragDist}`, "color: #00ff00");

    if (dragDist > 5 || dragDist < -5) {
        console.log("%c dragged across boundary", "color: #ff8700");
        return true;
    }
    return false;
}

function dragTurn(track, turnDir, turn1, turn2) {
    hasCrossedBoundary = doesDragCrossBoundary(track);
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

// ~~ TURN QUEUE ~~
var turn_list = [];
var doTurnsFromList = false;
function turnsFromList() {
    if (!isTurningActive) {
        if (turn_list.length != 0) {
            turnStarter(turn_list.shift());
        } else {
            doTurnsFromList = false;
        }
    }
}

document.getElementById("scramble").onclick = scramble;
function scramble() {
    if (!isTurningActive) {
        while (turn_list.length < 30) {
            let rand_face = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
            let rand_turn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            switch (rand_face) {
                case 0:
                    turn_list.push(rand_turn == 0 ? 0 : 1);
                    break;
                case 1:
                    turn_list.push(rand_turn == 0 ? 4 : 5);
                    break;
                case 2:
                    turn_list.push(rand_turn == 0 ? 6 : 7);
                    break;
                case 3:
                    turn_list.push(rand_turn == 0 ? 10 : 11);
                    break;
                case 4:
                    turn_list.push(rand_turn == 0 ? 12 : 13);
                    break;
                case 5:
                    turn_list.push(rand_turn == 0 ? 16 : 17);
                    break;
            }
        }
        console.log(turn_list);
        doTurnsFromList = true;
    }
}

document.getElementById("reset").onclick = reset;
function reset() {
    if (!isTurningActive) {
        console.log("resetting");
        scene.remove(...subCubes);
        resetCube();
        completedMoves = [];
        undoneMoves = [];
        scene.add(...subCubes);
    }
}

var completedMoves = [];
var undoneMoves = [];
var undoRequest = false;
var redoRequest = false;

document.getElementById("undo").onclick = undo;
function undo() {
    if (!isTurningActive && completedMoves.length != 0) {
        console.log("undoing last move");
        undoRequest = true;
        let lastMove = completedMoves.pop();
        undoneMoves.push(lastMove);
        if (lastMove % 2 == 0) {
            turnStarter(lastMove + 1);
        } else {
            turnStarter(lastMove - 1);
        }
    }
}

document.getElementById("redo").onclick = redo;
function redo() {
    if (!isTurningActive && undoneMoves.length != 0) {
        console.log("redoing last move");
        redoRequest = true;
        let lastMove = undoneMoves.pop();
        completedMoves.push(lastMove);
        turnStarter(lastMove);
    }
}

/*
 * ~~~~ KEYBOARD-TURNING SYSTEM ~~~~
 * 1. windowKeyDown():
 *      - detect keydown event
 *      - ensure a turn isnt already in progress
 *      - ensure the event key is a possible move
 *      - call turnStarter()
 *
 * 2. turnStarter():
 *     - use STARTERS dictionary to convert the key press into a turn ID
 *     - turnStarter sets the global var turnID, makes a new group,
 *       uses turnID and ALL_FACE_INDICES array to add the appropriate subCubes to the group, adds the group to the scene,
 *       and sets isTurningActive to true
 *
 * 3. turn():
 *     - as soon as isTurningActive is true, turn() will be called from the main animation loop function
 *     - turn() slowly rotates the "face" group toward a target quaternion, given by using turnID to select
 *       the appropriate quaternion from TURN_QUATERNIONS
 *     - once the face's quaternion matches the target quaternion, call turnFinisher()
 *
 * 4. turnFinisher():
 *     - sets isTurningActive to false
 *     - removes the face group from the scene
 *     - uses the turnID to call the appropriate finisher method in the FINISHERS dictionary
 *     - uses the turnID and ALL_FACE_INDICES array to add the appropriate subCubes back to the scene
 */
const animationStep = 0.05;
var isTurningActive = false;
var turnID;
var face;

document.addEventListener("keydown", documentKeyDown);
function documentKeyDown(event) {
    if (!isTurningActive && document.activeElement == canvas) {
        if (POSSIBLE_MOVES.includes(event.key)) {
            turnStarter(STARTERS[event.key]);
        }
    }
    if (event.key === "`") {
        console.log("debug key pressed");
        // console.log("subcubes:", subCubes);
        // console.log("scene children:", scene.children);
        console.log("completed:", completedMoves);
        console.log("undone:", undoneMoves);
        // console.log("canvas focused:", document.activeElement == canvas);
        // console.log(canvas.width, canvas.clientWidth);
        // console.log(startDrag, endDrag);
        // doTurnsFromList = true;
    }
}

function turnStarter(id) {
    turnID = id;
    face = new THREE.Group();

    for (let i of ALL_FACE_INDICES[turnID]) {
        face.add(subCubes[i]);
    }
    scene.add(face);
    isTurningActive = true;
}

function turn() {
    if (!face.quaternion.equals(TURN_QUATERNIONS[turnID])) {
        face.quaternion.rotateTowards(TURN_QUATERNIONS[turnID], animationStep);
    } else if (face.quaternion.equals(TURN_QUATERNIONS[turnID])) {
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

    for (let i of ALL_FACE_INDICES[turnID]) {
        scene.add(subCubes[i]);
    }
}
