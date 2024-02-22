{
  "_$ver": 1,
  "_$id": "k8cmqj6y",
  "_$runtime": "res://4efb9c99-6d10-446e-96f7-31b716748d3b",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "b9429c97-06d5-4a93-854c-b7cd2ecffb3c",
      "scriptPath": "../src/system/login/login-mediator.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "gc75lufg",
      "_$var": true,
      "_$type": "Image",
      "name": "imgBg",
      "width": 750,
      "height": 1334,
      "centerX": 0,
      "centerY": 0,
      "skin": "res://79970b5b-ceed-4dba-9c31-9ff38c1f92e0",
      "color": "#ffffff"
    },
    {
      "_$id": "9nh5mwft",
      "_$var": true,
      "_$type": "Button",
      "name": "btnLogin",
      "x": 258,
      "y": 1190,
      "width": 245,
      "height": 50,
      "_mouseState": 2,
      "stateNum": 2,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "登录",
      "labelSize": 25
    },
    {
      "_$id": "6w6ftz3h",
      "_$var": true,
      "_$type": "Button",
      "name": "btnServer",
      "x": 159.99999999999991,
      "y": 1020.0000000000001,
      "width": 484,
      "height": 66,
      "_mouseState": 2,
      "stateNum": 2,
      "skin": "res://4cff8338-3625-441a-8767-e0b7d0cf0908",
      "label": "选择服务器",
      "labelSize": 20,
      "labelColors": "#32cc6b,#32cc6b,#32cc6b",
      "labelAlign": "right",
      "labelPadding": "0,61,0,0",
      "labelStrokeColor": "rgba(255, 255, 255, 1)",
      "_$child": [
        {
          "_$id": "jdoffb1g",
          "_$var": true,
          "_$type": "Label",
          "name": "labelServerName",
          "x": 61,
          "y": 20,
          "width": 120,
          "height": 28,
          "text": "·爆满    S1 纵横四海",
          "fontSize": 20,
          "color": "rgba(255, 192, 0, 1)",
          "valign": "middle",
          "padding": "0,0,0,0",
          "underlineColor": "rgba(255, 255, 255, 1)"
        }
      ]
    },
    {
      "_$id": "8cprmqgc",
      "_$var": true,
      "_$type": "TextInput",
      "name": "inputAccount",
      "x": 238,
      "y": 866,
      "width": 314,
      "height": 53,
      "_mouseState": 2,
      "text": "zxp001",
      "fontSize": 20,
      "color": "#FFFFFF",
      "align": "center",
      "valign": "middle",
      "overflow": "scroll",
      "padding": "2,6,2,6",
      "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
      "type": "text",
      "maxChars": 0,
      "prompt": "输入用户名...",
      "promptColor": "#A9A9A9"
    },
    {
      "_$id": "ukpbg5qd",
      "_$type": "Image",
      "name": "Image",
      "x": 426,
      "y": -155,
      "width": 750,
      "height": 1628,
      "skin": "res://1a651625-8ba6-4ea3-9138-7204ab83f4aa",
      "useSourceSize": true,
      "color": "#ffffff"
    }
  ]
}