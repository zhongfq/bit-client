{
  "_$ver": 1,
  "_$id": "xvb4l2bk",
  "_$runtime": "res://3b4b7586-bdf1-427c-b0be-64447c5dcbb4",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "ad2af7bd-34fb-4cdc-8643-865c9443bd14",
      "scriptPath": "../src/system/world/world-mediator.ts"
    },
    {
      "_$type": "445a740f-55ae-4a44-9fa4-15ba95a48032",
      "scriptPath": "../src/system/world/world-context.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "n9gjxcltvl",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome",
        "material": {
          "_$uuid": "793cffc6-730a-4756-a658-efe98c230292",
          "_$type": "Material"
        }
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.424308,
        "g": 0.4578516,
        "b": 0.5294118
      },
      "fogStart": 0,
      "fogEnd": 300,
      "fogDensity": 0.01,
      "fogColor": {
        "_$type": "Color",
        "r": 0.5,
        "g": 0.5,
        "b": 0.5
      },
      "lightmaps": [],
      "_$child": [
        {
          "_$id": "6jx8h8bvc6",
          "_$type": "Camera",
          "name": "Main Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 20,
              "z": 20
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.3826834323650898,
              "w": 0.9238795325112867
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 28,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.3921,
            "g": 0.5843,
            "b": 0.9294
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
          "_$id": "6ni3p096l5",
          "_$type": "Sprite3D",
          "name": "Direction Light",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5,
              "y": 1.10766,
              "z": 9.426497165701383
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.34561095454330537,
              "y": 0.38574274707586514,
              "z": 0.15859801752597374,
              "w": 0.8405963775884723
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 1,
              "lightmapBakedType": 1,
              "shadowStrength": 0.506,
              "shadowDistance": 50,
              "shadowDepthBias": 0,
              "shadowNormalBias": 0,
              "shadowNearPlane": 0.1,
              "strength": null,
              "angle": null,
              "maxBounces": null
            }
          ]
        },
        {
          "_$id": "x0wshm8x",
          "_$prefab": "07bf69d2-0e5d-4e63-b5ab-cd4f13595967",
          "name": "mc01",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.03043178814532288,
              "y": 0,
              "z": 7.979686638520894
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
          "_$id": "5kzv21t2",
          "_$prefab": "e9170845-af71-406a-89bb-49f851b9d995",
          "name": "mc04",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.2823338158946402,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "pcor7b8q",
          "_$prefab": "a66f552b-a274-4dec-8f17-7e9ca565c9a5",
          "name": "mc02",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.7817782753107887,
              "y": 0,
              "z": -0.06360746430235675
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "i81bwyxz",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03",
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
              "w": -1
            }
          }
        },
        {
          "_$id": "hmlivy3g",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(1)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.5619612515847968,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "alourjrg",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(2)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.70675501462297,
              "y": 0,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "wufx48u8",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(3)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 0.7211829280463724
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "d926y9lw",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(4)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.5619612515847968,
              "y": 0,
              "z": 0.7211829280463724
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "ylc0f3re",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(5)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.70675501462297,
              "y": 0,
              "z": 0.7211829280463724
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "2yrz0su1",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(6)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 1.5424489039481601
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "it10amyl",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(7)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.5619612515847968,
              "y": 0,
              "z": 1.5424489039481601
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        },
        {
          "_$id": "hz80m8w2",
          "_$prefab": "b6ab5d2a-c255-4411-8846-83b695f2d6c9",
          "name": "mc03(8)",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.70675501462297,
              "y": 0,
              "z": 1.5424489039481601
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            }
          }
        }
      ]
    },
    {
      "_$id": "6e4t2nbi",
      "_$type": "Box",
      "name": "battle",
      "width": 750,
      "height": 1334,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$child": [
        {
          "_$id": "iqohvf4b",
          "_$var": true,
          "_$type": "Box",
          "name": "troops",
          "width": 750,
          "height": 1334,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0
        },
        {
          "_$id": "uqihrjjn",
          "_$var": true,
          "_$type": "Box",
          "name": "labels",
          "width": 200,
          "height": 200
        }
      ]
    },
    {
      "_$id": "v4tw4ryv",
      "_$var": true,
      "_$type": "Box",
      "name": "joystickGroup",
      "width": 750,
      "height": 1334,
      "left": 0,
      "right": 0,
      "_$child": [
        {
          "_$id": "5vgwnpv2",
          "_$var": true,
          "_$type": "Box",
          "name": "joystick",
          "x": 375,
          "y": 996,
          "width": 256,
          "height": 256,
          "_$child": [
            {
              "_$id": "r5mvo69m",
              "_$type": "Image",
              "name": "Image",
              "width": 256,
              "height": 256,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://9567a89b-ee6c-4fbe-ab2c-a485cd9dc467",
              "useSourceSize": true,
              "color": "#ffffff"
            },
            {
              "_$id": "hgjzota1",
              "_$var": true,
              "_$type": "Image",
              "name": "indicator",
              "width": 142,
              "height": 142,
              "anchorX": 0.5,
              "anchorY": 0.5,
              "skin": "res://82a1c898-efad-4a5d-8b8e-0729ac2944a6",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        }
      ]
    }
  ]
}