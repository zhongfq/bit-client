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
          "_$id": "grafja8m",
          "_$type": "Camera",
          "name": "Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 20.46993,
              "z": 19.88984
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.3949923988789122,
              "w": 0.9186843880397023
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
        },
        {
          "_$id": "kwnj3xjq",
          "_$prefab": "e865d833-74d1-43c4-9ef1-3b6e3ab1cf5c",
          "name": "vfx_firerain",
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
          "_$id": "qdnj8o7a",
          "_$prefab": "35010b48-ef9d-4687-ae43-6cf4455ccf03",
          "name": "vfx_icerain",
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
        }
      ]
    }
  ]
}