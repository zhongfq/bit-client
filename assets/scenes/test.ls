{
  "_$ver": 1,
  "_$id": "kipvvgj0",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "s6z90xjt",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome"
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.212,
        "g": 0.227,
        "b": 0.259
      },
      "fogStart": 300,
      "fogEnd": 1000,
      "fogDensity": 0.01,
      "fogColor": {
        "_$type": "Color",
        "r": 0.7,
        "g": 0.7,
        "b": 0.7
      },
      "lightmaps": [],
      "_$child": [
        {
          "_$id": "acg6pbsw",
          "_$prefab": "d91dfbc1-c248-44bb-b27d-f9398fe8ee5c",
          "name": "role-shadow",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            }
          }
        },
        {
          "_$id": "grafja8m",
          "_$type": "Camera",
          "name": "Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 20,
              "z": 20
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.42673448279993365,
              "w": 0.9043769574626908
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.39215686274509803,
            "g": 0.5843137254901961,
            "b": 0.9294117647058824
          },
          "cullingMask": 2147483647,
          "normalizedViewport": {
            "_$type": "Viewport",
            "width": 1,
            "height": 1
          },
          "depthTextureFormat": 35
        }
      ]
    },
    {
      "_$id": "b7llpcxx",
      "_$prefab": "1554834d-3378-439e-ac1d-084b8faa5d0f",
      "name": "virtually-list-new",
      "active": true,
      "x": 191,
      "y": 567,
      "visible": true,
      "bgColor": null,
      "height": 400,
      "width": 400,
      "_$comp": [
        {
          "_$override": "bb264e76-1c01-47d4-a43d-7a59a75169b7",
          "cellPrefab": {
            "_$uuid": "6669a2c4-94a0-4dc2-a23f-3b83a3823fc1",
            "_$type": "Prefab"
          },
          "cellNumX": 1,
          "spaceY": 10,
          "spaceX": 0,
          "alignV": 0,
          "alignH": 1,
          "scrollType": 2
        }
      ]
    },
    {
      "_$id": "ckndqtdx",
      "_$prefab": "6669a2c4-94a0-4dc2-a23f-3b83a3823fc1",
      "name": "testNode",
      "active": true,
      "x": -12,
      "y": 863,
      "visible": true
    }
  ]
}