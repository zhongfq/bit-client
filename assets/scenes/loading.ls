{
  "_$ver": 1,
  "_$id": "k8cmqj6y",
  "_$runtime": "res://4abfde05-ab7c-47a0-a280-b6845ace212f",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "101b97f7-2c39-4c9d-b9d2-d632a3b4b7b2",
      "scriptPath": "../src/system/loading/loading.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "gc75lufg",
      "_$var": true,
      "_$type": "Image",
      "name": "imgBg",
      "y": -108,
      "width": 750,
      "height": 1550,
      "centerX": 0,
      "centerY": 0,
      "skin": "res://d49d51f6-a212-4d94-adf7-ba04d2d9ab4f",
      "color": "#ffffff"
    },
    {
      "_$id": "k1p1ip9e",
      "_$var": true,
      "_$type": "ProgressBar",
      "name": "progress",
      "x": 53,
      "y": 1260,
      "width": 652,
      "height": 30,
      "visible": false,
      "skin": "res://ae3de75e-ee9f-478d-9f8b-ede75a4fc296",
      "value": 0
    },
    {
      "_$id": "9i4ykfs5",
      "_$var": true,
      "_$type": "Label",
      "name": "labelTips",
      "x": 375,
      "y": 1228.5,
      "width": 200,
      "height": 21,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "centerX": 0,
      "text": "",
      "fontSize": 20,
      "color": "#FFFFFF",
      "fitContent": "yes",
      "align": "center",
      "valign": "middle",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "7h9nbozc",
      "_$type": "Image",
      "name": "Image",
      "x": 45,
      "y": 1250,
      "width": 677,
      "height": 48,
      "skin": "res://f8f2978c-bca1-4e1f-a41d-72f284e56d70",
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "t6skydkp",
          "_$prefab": "7fd1a163-f140-41df-806c-a9338fbb3412",
          "_$var": true,
          "name": "imgBar",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true,
          "centerX": 0,
          "centerY": 0,
          "skin": "res://6263a520-655f-49c5-b628-d825c83a9633",
          "useSourceSize": false,
          "height": 48,
          "width": 677
        }
      ]
    }
  ]
}