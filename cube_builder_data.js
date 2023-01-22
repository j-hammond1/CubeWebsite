export var BASE_CLR = 0x000000,
    R_CLR = 0xff0000,
    L_CLR = 0xff8700,
    U_CLR = 0xffffff,
    D_CLR = 0xffff00,
    F_CLR = 0x00aa00,
    B_CLR = 0x0000ff,
    COORD = 10,
    SCALE = 10;

export function setR_CLR(c) {
    R_CLR = c;
}
export function setL_CLR(c) {
    L_CLR = c;
}
export function setU_CLR(c) {
    U_CLR = c;
}
export function setD_CLR(c) {
    D_CLR = c;
}
export function setF_CLR(c) {
    F_CLR = c;
}
export function setB_CLR(c) {
    B_CLR = c;
}

// STICKER INDICES
export const CORNER_INDICES = [
        0, 2, 6, 8, 9, 11, 15, 17, 18, 20, 24, 26, 27, 29, 33, 35, 36, 38, 42, 44, 45, 47, 51, 53,
    ],
    CENTER_INDICES = [4, 13, 22, 31, 40, 49],
    EDGE_DOWN_INDICES = [1, 10, 19, 28, 37, 46],
    EDGE_UP_INDICES = [7, 16, 25, 34, 43, 52],
    EDGE_RIGHT_INDICES = [3, 12, 21, 30, 39, 48],
    EDGE_LEFT_INDICES = [5, 14, 23, 32, 41, 50];

// STICKER INDICES
export const R_INDICES = [36, 37, 38, 39, 40, 41, 42, 43, 44],
    L_INDICES = [18, 19, 20, 21, 22, 23, 24, 25, 26],
    U_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8],
    D_INDICES = [9, 10, 11, 12, 13, 14, 15, 16, 17],
    F_INDICES = [27, 28, 29, 30, 31, 32, 33, 34, 35],
    B_INDICES = [45, 46, 47, 48, 49, 50, 51, 52, 53];

// STICKER INDICES
export const SUBCUBE_STICKER_INDICES = [
    [0, 18, 47],
    [1, 46],
    [2, 38, 45],
    [3, 19],
    [4],
    [5, 37],
    [6, 20, 27],
    [7, 28],
    [8, 29, 36],
    [21, 50],
    [49],
    [41, 48],
    [22],
    [null],
    [40],
    [23, 30],
    [31],
    [32, 39],
    [15, 24, 53],
    [16, 52],
    [17, 44, 51],
    [12, 25],
    [13],
    [14, 43],
    [9, 26, 33],
    [10, 34],
    [11, 35, 42],
];
