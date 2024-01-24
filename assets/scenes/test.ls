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
      "_$id": "kcha9hvs",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome"
      },
      "ambientMode": 0,
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
          "_$id": "8k6k0i8x",
          "_$type": "Camera",
          "name": "Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 13.65879,
              "z": 30
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.25872833035067044,
              "y": 0.025571821138922608,
              "z": -0.0068519488194953015,
              "w": 0.9655872740643221
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 30,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 0,
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
          "_$id": "5u3imggg",
          "_$type": "Sprite3D",
          "name": "DirectionLight",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 3.984975318751065,
              "y": 3.994589897547382,
              "z": 8.147677333384195
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.27396761145820275,
              "w": 0.9617389187673998
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 1,
              "lightmapBakedType": 0,
              "shadowMode": 0,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "shadowCascadesMode": 0,
              "strength": 1,
              "angle": 0.526,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "503p03n7",
          "_$prefab": "738ffd74-44f8-4e56-852a-5250a72136d8",
          "name": "Cube top Grass(1)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.69991,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "isStatic": true
        },
        {
          "_$id": "qg35ws14",
          "_$prefab": "7b632272-0626-4da3-9177-8a097b8d44d4",
          "name": "Cube Lava(3)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -2.02004,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1.0000000003605123,
              "y": 1,
              "z": 1.0000000003605123
            }
          }
        },
        {
          "_$id": "slcl6zsb",
          "_$prefab": "738ffd74-44f8-4e56-852a-5250a72136d8",
          "name": "Cube top Grass(2)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -3.5239768048282096,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "isStatic": true
        },
        {
          "_$id": "xzo7wo2b",
          "_$prefab": "7b632272-0626-4da3-9177-8a097b8d44d4",
          "name": "Cube Lava(4)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -2.9782024891978267,
              "y": 0,
              "z": 1.1303481750958855
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1.0000000003605123,
              "y": 1,
              "z": 1.0000000003605123
            }
          }
        },
        {
          "_$id": "v5styjqb",
          "_$prefab": "738ffd74-44f8-4e56-852a-5250a72136d8",
          "name": "Cube top Grass(3)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -2.5339261010707874,
              "y": 0,
              "z": 2.2188224660822278
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "isStatic": true
        },
        {
          "_$id": "ltovbeyb",
          "_$prefab": "7b632272-0626-4da3-9177-8a097b8d44d4",
          "name": "Cube Lava(5)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.3187668433055115,
              "y": -0.47868793341473825,
              "z": 1.1303481750958855
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1.0000000003605123,
              "y": 1,
              "z": 1.0000000003605123
            }
          }
        },
        {
          "_$id": "hii8xdug",
          "_$prefab": "738ffd74-44f8-4e56-852a-5250a72136d8",
          "name": "Cube top Grass(4)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.7382297589889748,
              "y": 0,
              "z": 1.2378982952424744
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": 1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "isStatic": true
        }
      ]
    }
  ]
}