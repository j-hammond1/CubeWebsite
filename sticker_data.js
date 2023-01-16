export const stickerData = [];

class sticker {
    constructor(stickerCoords, stickerColor, stickerRotations) {
        this.stickerCoords = stickerCoords;
        this.stickerColor = stickerColor;
        this.stickerRotations = stickerRotations;
    }
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

const uColor = 0xffffff,
    uRotation = [degToRad(-90), 0, 0];
const dColor = 0xffff00,
    dRotation = [degToRad(90), 0, 0];
const fColor = 0x00aa00,
    fRotation = [0, 0, 0];
const bColor = 0x0000ff,
    bRotation = [degToRad(180), 0, 0];
const rColor = 0xff0000,
    rRotation = [0, degToRad(90), 0];
const lColor = 0xffaa00,
    lRotation = [0, degToRad(-90), 0];

const stickerHover = 15.01;

////

const stickerData0 = [];
stickerData0.push(new sticker([-10, stickerHover, -10], uColor, uRotation));
stickerData0.push(new sticker([-stickerHover, 10, -10], lColor, lRotation));
stickerData0.push(new sticker([-10, 10, -stickerHover], bColor, bRotation));
stickerData.push(stickerData0);

const stickerData1 = [];
stickerData1.push(new sticker([0, stickerHover, -10], uColor, uRotation));
stickerData1.push(new sticker([0, 10, -stickerHover], bColor, bRotation));
stickerData.push(stickerData1);

const stickerData2 = [];
stickerData2.push(new sticker([10, stickerHover, -10], uColor, uRotation));
stickerData2.push(new sticker([10, 10, -stickerHover], bColor, bRotation));
stickerData2.push(new sticker([stickerHover, 10, -10], rColor, rRotation));
stickerData.push(stickerData2);

const stickerData3 = [];
stickerData3.push(new sticker([-10, stickerHover, 0], uColor, uRotation));
stickerData3.push(new sticker([-stickerHover, 10, 0], lColor, lRotation));
stickerData.push(stickerData3);

const stickerData4 = [];
stickerData4.push(new sticker([0, stickerHover, 0], uColor, uRotation));
stickerData.push(stickerData4);

const stickerData5 = [];
stickerData5.push(new sticker([10, stickerHover, 0], uColor, uRotation));
stickerData5.push(new sticker([stickerHover, 10, 0], rColor, rRotation));
stickerData.push(stickerData5);

const stickerData6 = [];
stickerData6.push(new sticker([-10, stickerHover, 10], uColor, uRotation));
stickerData6.push(new sticker([-10, 10, stickerHover], fColor, fRotation));
stickerData6.push(new sticker([-stickerHover, 10, 10], lColor, lRotation));
stickerData.push(stickerData6);

const stickerData7 = [];
stickerData7.push(new sticker([0, stickerHover, 10], uColor, uRotation));
stickerData7.push(new sticker([0, 10, stickerHover], fColor, fRotation));
stickerData.push(stickerData7);

const stickerData8 = [];
stickerData8.push(new sticker([10, stickerHover, 10], uColor, uRotation));
stickerData8.push(new sticker([stickerHover, 10, 10], rColor, rRotation));
stickerData8.push(new sticker([10, 10, stickerHover], fColor, fRotation));
stickerData.push(stickerData8);

////

const stickerData9 = [];
stickerData9.push(new sticker([-stickerHover, 0, -10], lColor, lRotation));
stickerData9.push(new sticker([-10, 0, -stickerHover], bColor, bRotation));
stickerData.push(stickerData9);

const stickerData10 = [];
stickerData10.push(new sticker([0, 0, -stickerHover], bColor, bRotation));
stickerData.push(stickerData10);

const stickerData11 = [];
stickerData11.push(new sticker([stickerHover, 0, -10], rColor, rRotation));
stickerData11.push(new sticker([10, 0, -stickerHover], bColor, bRotation));
stickerData.push(stickerData11);

const stickerData12 = [];
stickerData12.push(new sticker([-stickerHover, 0, 0], lColor, lRotation));
stickerData.push(stickerData12);

const stickerData13 = [];
stickerData13.push(new sticker([0, 0, 0], uColor, uRotation));
stickerData.push(stickerData13);

const stickerData14 = [];
stickerData14.push(new sticker([stickerHover, 0, 0], rColor, rRotation));
stickerData.push(stickerData14);

const stickerData15 = [];
stickerData15.push(new sticker([-stickerHover, 0, 10], lColor, lRotation));
stickerData15.push(new sticker([-10, 0, stickerHover], fColor, fRotation));
stickerData.push(stickerData15);

const stickerData16 = [];
stickerData16.push(new sticker([0, 0, stickerHover], fColor, fRotation));
stickerData.push(stickerData16);

const stickerData17 = [];
stickerData17.push(new sticker([stickerHover, 0, 10], rColor, rRotation));
stickerData17.push(new sticker([10, 0, stickerHover], fColor, fRotation));
stickerData.push(stickerData17);

////

const stickerData18 = [];
stickerData18.push(new sticker([-10, -stickerHover, -10], dColor, dRotation));
stickerData18.push(new sticker([-10, -10, -stickerHover], bColor, bRotation));
stickerData18.push(new sticker([-stickerHover, -10, -10], lColor, lRotation));
stickerData.push(stickerData18);

const stickerData19 = [];
stickerData19.push(new sticker([0, -stickerHover, -10], dColor, dRotation));
stickerData19.push(new sticker([0, -10, -stickerHover], bColor, bRotation));
stickerData.push(stickerData19);

const stickerData20 = [];
stickerData20.push(new sticker([10, -stickerHover, -10], dColor, dRotation));
stickerData20.push(new sticker([stickerHover, -10, -10], rColor, rRotation));
stickerData20.push(new sticker([10, -10, -stickerHover], bColor, bRotation));
stickerData.push(stickerData20);

const stickerData21 = [];
stickerData21.push(new sticker([-10, -stickerHover, 0], dColor, dRotation));
stickerData21.push(new sticker([-stickerHover, -10, 0], lColor, lRotation));
stickerData.push(stickerData21);

const stickerData22 = [];
stickerData22.push(new sticker([0, -stickerHover, 0], dColor, dRotation));
stickerData.push(stickerData22);

const stickerData23 = [];
stickerData23.push(new sticker([10, -stickerHover, 0], dColor, dRotation));
stickerData23.push(new sticker([stickerHover, -10, 0], rColor, rRotation));
stickerData.push(stickerData23);

const stickerData24 = [];
stickerData24.push(new sticker([-10, -stickerHover, 10], dColor, dRotation));
stickerData24.push(new sticker([-stickerHover, -10, 10], lColor, lRotation));
stickerData24.push(new sticker([-10, -10, stickerHover], fColor, fRotation));
stickerData.push(stickerData24);

const stickerData25 = [];
stickerData25.push(new sticker([0, -stickerHover, 10], dColor, dRotation));
stickerData25.push(new sticker([0, -10, stickerHover], fColor, fRotation));
stickerData.push(stickerData25);

const stickerData26 = [];
stickerData26.push(new sticker([10, -stickerHover, 10], dColor, dRotation));
stickerData26.push(new sticker([10, -10, stickerHover], fColor, fRotation));
stickerData26.push(new sticker([stickerHover, -10, 10], rColor, rRotation));
stickerData.push(stickerData26);
