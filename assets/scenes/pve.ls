{
  "_$ver": 1,
  "_$id": "xvb4l2bk",
  "_$runtime": "res://3b28c6e0-9899-465c-b3df-aa50d1b0ef54",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "5bc30a06-1ef1-4b49-8011-8ab0d81a5d01",
      "scriptPath": "../src/system/battle/pve/pve-mediator.ts"
    },
    {
      "_$type": "41785ba5-0ce0-4923-9f88-48998a5bfc8e",
      "scriptPath": "../src/system/battle/pve/pve-context.ts"
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
              "x": -0.35355339059327384,
              "y": 0.3535533905932738,
              "z": 0.14644660940672627,
              "w": 0.8535533905932737
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
          "_$id": "9cn0erx3",
          "_$type": "Sprite3D",
          "name": "world-map",
          "_$child": [
            {
              "_$id": "cfkdchry",
              "_$type": "Sprite3D",
              "name": "ground"
            },
            {
              "_$id": "q0n4rvkj",
              "_$type": "Sprite3D",
              "name": "road"
            },
            {
              "_$id": "u0aqbvan",
              "_$type": "Sprite3D",
              "name": "river"
            },
            {
              "_$id": "xq0fb4r6",
              "_$type": "Sprite3D",
              "name": "block"
            },
            {
              "_$id": "6w7bh8dm",
              "_$type": "Sprite3D",
              "name": "static"
            },
            {
              "_$id": "utfqvaky",
              "_$type": "Sprite3D",
              "name": "object"
            },
            {
              "_$id": "mb1yyfs0",
              "_$type": "Sprite3D",
              "name": "building"
            },
            {
              "_$id": "ly13d9uo",
              "_$type": "Sprite3D",
              "name": "monster"
            },
            {
              "_$id": "lruiomhu",
              "_$type": "Sprite3D",
              "name": "event"
            }
          ]
        },
        {
          "_$id": "gzvs0bzb",
          "_$type": "Sprite3D",
          "name": "grounds"
        },
        {
          "_$id": "6k31wdq5",
          "_$type": "Sprite3D",
          "name": "shadows",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 0.1
            }
          }
        },
        {
          "_$id": "6coid9rf",
          "_$type": "Sprite3D",
          "name": "roles"
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
          "_$id": "btet9mlg",
          "_$var": true,
          "_$type": "Sprite",
          "name": "debug",
          "width": 100,
          "height": 100
        },
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
      "_$id": "jwwt2ii4",
      "_$var": true,
      "_$type": "Box",
      "name": "mapClickArea",
      "width": 750,
      "height": 1334,
      "_mouseState": 2,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0
    },
    {
      "_$id": "j3fe4zmr",
      "_$var": true,
      "_$type": "Box",
      "name": "joystickGroup",
      "width": 750,
      "height": 1334,
      "_mouseState": 2,
      "mouseThrough": true,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$child": [
        {
          "_$id": "wajye5rt",
          "_$var": true,
          "_$type": "Box",
          "name": "joystickArea",
          "y": 934,
          "width": 750,
          "height": 400,
          "_mouseState": 2,
          "left": 0,
          "right": 0,
          "bottom": 0
        },
        {
          "_$id": "ms0qcu1u",
          "_$var": true,
          "_$type": "Box",
          "name": "joystick",
          "x": 375,
          "y": 1112,
          "width": 256,
          "height": 222,
          "_$child": [
            {
              "_$id": "w5xlte0u",
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
              "_$id": "tl3xohw8",
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