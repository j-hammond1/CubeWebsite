const posY = "+y";
// prettier-ignore
const OLL1 = ["-x", "-z", "+x",
              "-x", posY, "+x",
              "-x", "+z", "+x"];
// prettier-ignore
const OLL2 = ["-z", "-z", "-z",
              "-x", posY, "+x",
              "-x", "+z", "+x"];
// prettier-ignore
const OLL3 = ["-z", "-z", "+x",
              "-x", posY, "+x",
              "+y", "+z", "+z"];
// prettier-ignore
const OLL4 = ["-x", "-z", "-z",
              "-x", posY, "+x",
              "+z", "+z", "+y"];
// prettier-ignore
const OLL5 = ["+y", "+y", "+x",
              "+y", posY, "+x",
              "-x", "+z", "+z"];
// prettier-ignore
const OLL6 = ["-x", "+y", "+y",
              "-x", posY, "+y",
              "+z", "+z", "+x"];
// prettier-ignore
const OLL7 = ["-z", "+y", "+x",
              "+y", posY, "+x",
              "+y", "+z", "+z"];
// prettier-ignore
const OLL8 = ["-x", "+y", "-z",
              "-x", posY, "+y",
              "+z", "+z", "+y"];
// prettier-ignore
const OLL9 = ["-x", "+y", "-z",
              "+y", posY, "+x",
              "+z", "+z", "+y"];
// prettier-ignore
const OLL10 = ["-z", "-z", "+y",
               "+y", posY, "+x",
               "-x", "+y", "+z"];
// prettier-ignore
const OLL11 = ["-z", "+y", "+y",
               "+y", posY, "+x",
               "-x", "+z", "+z"];
// prettier-ignore
const OLL12 = ["+y", "+y", "-z",
               "-x", posY, "+y",
               "+z", "+z", "+x"];
// prettier-ignore
const OLL13 = ["-z", "-z", "+x",
               "+y", posY, "+y",
               "+y", "+z", "+z"];
// prettier-ignore
const OLL14 = ["-x", "-z", "-z",
               "+y", posY, "+y",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL15 = ["+y", "-z", "+x",
               "+y", posY, "+y",
               "-x", "+z", "+z"];
// prettier-ignore
const OLL16 = ["-x", "-z", "+y",
               "+y", posY, "+y",
               "+z", "+z", "+x"];
// prettier-ignore
const OLL17 = ["+y", "-z", "+x",
               "-x", posY, "+x",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL18 = ["+y", "-z", "+y",
               "-x", posY, "+x",
               "+z", "+z", "+z"];
// prettier-ignore
const OLL19 = ["+y", "-z", "+y",
               "-x", posY, "+x",
               "-x", "+z", "+x"];
// prettier-ignore
const OLL20 = ["+y", "-z", "+y",
               "-x", posY, "+x",
               "+y", "+z", "+y"];
// prettier-ignore
const OLL21 = ["-z", "+y", "-z",
               "+y", posY, "+y",
               "+z", "+y", "+z"];
// prettier-ignore
const OLL22 = ["-x", "+y", "-z",
               "+y", posY, "+y",
               "-x", "+y", "+z"];
// prettier-ignore
const OLL23 = ["-z", "+y", "-z",
               "+y", posY, "+y",
               "+y", "+y", "+y"];
// prettier-ignore
const OLL24 = ["-z", "+y", "+y",
               "+y", posY, "+y",
               "+z", "+y", "+y"];
// prettier-ignore
const OLL25 = ["-x", "+y", "+y",
               "+y", posY, "+y",
               "+y", "+y", "+z"];
// prettier-ignore
const OLL26 = ["-x", "+y", "+y",
               "+y", posY, "+y",
               "+z", "+y", "+x"];
// prettier-ignore
const OLL27 = ["-z", "+y", "+x",
               "+y", posY, "+y",
               "+y", "+y", "+z"];
// prettier-ignore
const OLL28 = ["+y", "+y", "+y",
               "+y", posY, "+x",
               "+y", "+z", "+y"];
// prettier-ignore
const OLL29 = ["-z", "+y", "+y",
               "+y", posY, "+x",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL30 = ["-x", "+y", "+x",
               "+y", posY, "+x",
               "+y", "+z", "+y"];
// prettier-ignore
const OLL31 = ["-z", "+y", "+y",
               "-x", posY, "+y",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL32 = ["+y", "+y", "-z",
               "+y", posY, "+x",
               "+y", "+z", "+z"];
// prettier-ignore
const OLL33 = ["-z", "-z", "+y",
               "+y", posY, "+y",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL34 = ["-x", "-z", "+x",
               "+y", posY, "+y",
               "+y", "+z", "+y"];
// prettier-ignore
const OLL35 = ["+y", "-z", "+x",
               "-x", posY, "+y",
               "+z", "+y", "+y"];
// prettier-ignore
const OLL36 = ["+y", "+y", "-z",
               "-x", posY, "+y",
               "-x", "+z", "+y"];
// prettier-ignore
const OLL37 = ["+y", "+y", "+x",
               "+y", posY, "+x",
               "+z", "+z", "+y"];
// prettier-ignore
const OLL38 = ["-z", "+y", "+y",
               "+y", posY, "+x",
               "+y", "+z", "+x"];
// prettier-ignore
const OLL39 = ["-z", "-z", "+y",
               "+y", posY, "+y",
               "+y", "+z", "+x"];
// prettier-ignore
const OLL40 = ["+y", "-z", "-z",
               "+y", posY, "+y",
               "-x", "+z", "+y"];
// prettier-ignore
const OLL41 = ["-z", "+y", "-z",
               "+y", posY, "+x",
               "+y", "+z", "+y"];
// prettier-ignore
const OLL42 = ["+y", "-z", "+y",
               "+y", posY, "+x",
               "+z", "+y", "+z"];
// prettier-ignore
const OLL43 = ["-x", "+y", "+y",
               "-x", posY, "+y",
               "-x", "+z", "+y"];
// prettier-ignore
const OLL44 = ["+y", "+y", "+x",
               "+y", posY, "+x",
               "+y", "+z", "+x"];
// prettier-ignore
const OLL45 = ["-x", "-z", "+y",
               "+y", posY, "+y",
               "-x", "+z", "+y"];
// prettier-ignore
const OLL46 = ["+y", "+y", "+x",
               "-x", posY, "+x",
               "+y", "+y", "+x"];
// prettier-ignore
const OLL47 = ["-z", "+y", "+x",
               "-x", posY, "+y",
               "+z", "+z", "+x"];
// prettier-ignore
const OLL48 = ["-x", "+y", "-z",
               "+y", posY, "+x",
               "-x", "+z", "+z"];
// prettier-ignore
const OLL49 = ["-x", "+y", "-z",
               "-x", posY, "+y",
               "-x", "+z", "+z"];
// prettier-ignore
const OLL50 = ["-x", "-z", "-z",
               "-x", posY, "+y",
               "-x", "+y", "+z"];
// prettier-ignore
const OLL51 = ["-z", "-z", "+x",
               "+y", posY, "+y",
               "+z", "+z", "+x"];
// prettier-ignore
const OLL52 = ["-z", "+y", "+x",
               "-x", posY, "+x",
               "+z", "+y", "+x"];
// prettier-ignore
const OLL53 = ["-z", "+y", "-z",
               "-x", posY, "+y",
               "+z", "+z", "+z"];
// prettier-ignore
const OLL54 = ["-z", "+y", "-z",
               "+y", posY, "+x",
               "+z", "+z", "+z"];
// prettier-ignore
const OLL55 = ["-z", "-z", "-z",
               "+y", posY, "+y",
               "+z", "+z", "+z"];
// prettier-ignore
const OLL56 = ["-x", "-z", "+x",
               "+y", posY, "+y",
               "-x", "+z", "+x"];
// prettier-ignore
const OLL57 = ["+y", "-z", "+y",
               "+y", posY, "+y",
               "+y", "+z", "+y"];

export const OLLDirections = [
    null, // this is just so the oll case number matches with it's index in the array. (OLLs are not 0-index based; arrays are.)
    OLL1,
    OLL2,
    OLL3,
    OLL4,
    OLL5,
    OLL6,
    OLL7,
    OLL8,
    OLL9,
    OLL10,
    OLL11,
    OLL12,
    OLL13,
    OLL14,
    OLL15,
    OLL16,
    OLL17,
    OLL18,
    OLL19,
    OLL20,
    OLL21,
    OLL22,
    OLL23,
    OLL24,
    OLL25,
    OLL26,
    OLL27,
    OLL28,
    OLL29,
    OLL30,
    OLL31,
    OLL32,
    OLL33,
    OLL34,
    OLL35,
    OLL36,
    OLL37,
    OLL38,
    OLL39,
    OLL40,
    OLL41,
    OLL42,
    OLL43,
    OLL44,
    OLL45,
    OLL46,
    OLL47,
    OLL48,
    OLL49,
    OLL50,
    OLL51,
    OLL52,
    OLL53,
    OLL54,
    OLL55,
    OLL56,
    OLL57,
];

export const OLLAlgorithms = [
    null, // this is just so the oll algorithm matches with it's index in the array. (OLLs are not 0-index based; arrays are.)
    ["R", "U2", "R2", "F", "R", "F'", "U2", "R'", "F", "R", "F'"], //1
    ["r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"], //2
    ["r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"], //3
    ["M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"], //4
    ["l'", "U2", "L", "U", "L'", "U", "l"], //5
    ["r", "U2", "R'", "U'", "R", "U'", "r'"], //6
    ["r", "U", "R'", "U", "R", "U2", "r'"], //7
    ["l'", "U'", "L", "U'", "L'", "U2", "l"], //8
    ["R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"], //9
    ["R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"], //10
    ["r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"], //11
    ["M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"], //12
    ["F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"], //13
    ["R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"], //14
    ["l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"], //15
    ["r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"], //16
    ["F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"], //17
    ["r", "U", "R'", "U", "R", "U2", "r2", "U'", "R", "U'", "R'", "U2", "r"], //18
    ["r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"], //19
    ["r", "U", "R'", "U'", "M2", "U", "R", "U'", "R'", "U'", "M'"], //20
    ["R", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"], //21
    ["R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"], //22
    ["R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"], //23
    ["r", "U", "R'", "U'", "r'", "F", "R", "F'"], //24
    ["F'", "r", "U", "R'", "U'", "r'", "F", "R"], //25
    ["R", "U2", "R'", "U'", "R", "U'", "R'"], //26
    ["R", "U", "R'", "U", "R", "U2", "R'"], //27
    ["r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"], //28
    ["R", "U", "R'", "U'", "R", "U'", "R'", "F'", "U'", "F", "R", "U", "R'"], //29
    ["F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"], //30
    ["R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"], //31
    ["L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"], //32
    ["R", "U", "R'", "U'", "R'", "F", "R", "F'"], //33
    ["R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"], //34
    ["R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"], //35
    ["L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"], //36
    ["F", "R'", "F'", "R", "U", "R", "U'", "R'"], //37
    ["R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"], //38
    ["L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"], //39
    ["R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"], //40
    ["R", "U", "R'", "U", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "F'"], //41
    ["R'", "U'", "R", "U'", "R'", "U2", "R", "F", "R", "U", "R'", "U'", "F'"], //42
    ["F'", "U'", "L'", "U", "L", "F"], //43
    ["F", "U", "R", "U'", "R'", "F'"], //44
    ["F", "R", "U", "R'", "U'", "F'"], //45
    ["R'", "U'", "R'", "F", "R", "F'", "U", "R"], //46
    ["R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"], //47
    ["F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"], //48
    ["r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"], //49
    ["r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"], //50
    ["F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"], //51
    ["R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"], //52
    ["l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"], //53
    ["r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"], //54
    ["R'", "F", "R", "U", "R", "U'", "R2", "F'", "R2", "U'", "R'", "U", "R", "U", "R'"], //55
    ["r'", "U'", "r", "U'", "R'", "U", "R", "U'", "R'", "U", "R", "r'", "U", "r"], //56
    ["R", "U", "R'", "U'", "M'", "U", "R", "U'", "r'"], //57
];
