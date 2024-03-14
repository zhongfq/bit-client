{
  "_$ver": 1,
  "_$id": "b9nn1trg",
  "_$runtime": "res://aeb98542-a290-4ae7-89ba-25c1734a94ad",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "bee707b2-f2ed-41af-94b5-cf1bda0def05",
      "scriptPath": "../src/system/home/home-mediator.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "kaffipmj",
      "_$type": "Image",
      "name": "Image",
      "y": -108,
      "width": 750,
      "height": 1550,
      "centerX": 0,
      "centerY": 0,
      "skin": "res://d49d51f6-a212-4d94-adf7-ba04d2d9ab4f",
      "useSourceSize": true,
      "color": "#ffffff"
    },
    {
      "_$id": "jt4u99cs",
      "_$var": true,
      "_$type": "Button",
      "name": "btnPve",
      "x": 12,
      "y": 668,
      "width": 120,
      "height": 40,
      "visible": false,
      "_mouseState": 2,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "PVE",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "dm7xey62",
      "_$var": true,
      "_$type": "Button",
      "name": "btnMail",
      "x": 14,
      "y": 726,
      "width": 120,
      "height": 40,
      "visible": false,
      "_mouseState": 2,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "邮件",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "pauk1fot",
      "_$var": true,
      "_$type": "Button",
      "name": "btnShop",
      "x": 12,
      "y": 851,
      "width": 120,
      "height": 40,
      "visible": false,
      "_mouseState": 2,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "商城",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "a2ce0771",
      "_$var": true,
      "_$type": "Button",
      "name": "btnNotice",
      "x": 15,
      "y": 789,
      "width": 120,
      "height": 40,
      "visible": false,
      "_mouseState": 2,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "公告",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "wwbzy29m",
      "_$var": true,
      "_$type": "Button",
      "name": "btnBag",
      "x": 11.999999999999943,
      "y": 907,
      "width": 122,
      "height": 102,
      "visible": false,
      "_mouseState": 2,
      "stateNum": 2,
      "skin": "res://ce5a829b-8092-41e9-a3c2-dbcbfebc6562",
      "label": "背包",
      "labelSize": 27,
      "labelBold": true,
      "labelColors": "#03ff30,#03ff30,#03ff30",
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "i5cbtifb",
      "_$var": true,
      "_$type": "Button",
      "name": "btnEdge",
      "x": 705,
      "y": 507,
      "width": 76,
      "height": 152,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_mouseState": 2,
      "right": 7,
      "top": 431,
      "stateNum": 1,
      "skin": "res://2027c9cd-6f9c-4617-80ca-4e28752d2298",
      "label": "",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "542323df-0cff-4e4c-a3af-a9f57b3977f7",
          "scriptPath": "../src/core/button/ButtonCommont.ts",
          "sclaeX": 0.8,
          "sclaeY": 0.8
        }
      ]
    },
    {
      "_$id": "wcf9dgzw",
      "_$prefab": "c2dde787-3f08-42c0-9f89-503e855e1cf2",
      "_$var": true,
      "name": "task-box",
      "active": true,
      "x": 4,
      "y": 1007,
      "visible": true
    },
    {
      "_$id": "e4j1h8ry",
      "_$prefab": "65dc71f1-7ce2-4486-9705-b5c43e0fee4d",
      "name": "user-box",
      "active": true,
      "x": 0,
      "y": 0,
      "visible": true,
      "left": 0,
      "top": 0,
      "_$child": [
        {
          "_$override": "ahevrzex",
          "visible": true
        }
      ]
    },
    {
      "_$id": "otxo47w2",
      "_$prefab": "20edd97f-adc2-4d26-adb5-0fe75fd0a991",
      "name": "monye-box",
      "active": true,
      "x": 594,
      "y": 129,
      "visible": true,
      "right": 0,
      "top": 129,
      "width": 156,
      "_$child": [
        {
          "_$override": "3ux87mow",
          "spaceY": 12,
          "repeatY": 5
        }
      ]
    },
    {
      "_$id": "jsaiqtuo",
      "_$prefab": "43743938-b950-4688-a0ec-3b6e102e1496",
      "name": "activity-box",
      "active": true,
      "x": 0,
      "y": 128,
      "visible": true,
      "left": 0,
      "top": 128
    },
    {
      "_$id": "vm6knnc0",
      "_$type": "Box",
      "name": "常用功能",
      "x": 455,
      "y": 1017,
      "width": 292,
      "height": 103,
      "right": 3,
      "bottom": 214
    },
    {
      "_$id": "zxq2tq3d",
      "_$prefab": "ce4973da-cc10-4650-8558-6a9ef63ba24b",
      "_$var": true,
      "name": "chat-box",
      "active": true,
      "x": -2,
      "y": 1121,
      "visible": true,
      "left": -2,
      "right": 0,
      "bottom": 121,
      "_$child": [
        {
          "_$override": "9g62io8z",
          "_$comp": [
            {
              "_$override": "bb264e76-1c01-47d4-a43d-7a59a75169b7",
              "scrollType": 2
            }
          ]
        }
      ]
    },
    {
      "_$id": "doiz955b",
      "_$var": true,
      "_$type": "Box",
      "name": "boxUI",
      "width": 750,
      "height": 1211,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 123
    },
    {
      "_$id": "wmyfoz1d",
      "_$prefab": "a2698c95-41ec-440d-a998-408eeeab733b",
      "name": "down-btn-box",
      "active": true,
      "x": 0,
      "y": 1190,
      "visible": true,
      "left": 0,
      "right": 0,
      "bottom": 0
    }
  ]
}