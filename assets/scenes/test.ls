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
          "_$id": "xrlxbowg",
          "_$type": "Sprite3D",
          "name": "Sprite3D",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.1899981640033346,
              "y": -0.449362238085671,
              "z": -0.8929657732499621
            }
          }
        },
        {
          "_$id": "n6mojweb",
          "_$type": "Camera",
          "name": "Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.1899981640033346,
              "y": 2.6916132083459536,
              "z": 11.923530906465436
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.11671407223292864,
              "w": 0.9931655578718015
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "nearPlane": 0.3,
          "farPlane": 1000,
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
          "_$id": "bxov45s4",
          "_$type": "Sprite3D",
          "name": "DirectionLight",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -3.3764888811005793,
              "y": -0.449362238085671,
              "z": -0.8929657732499621
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 1,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 1,
              "shadowNormalBias": 1,
              "shadowNearPlane": 0.1,
              "strength": 1,
              "angle": 0.526,
              "maxBounces": 1024
            }
          ]
        },
        {
          "_$id": "7k32wqte",
          "_$prefab": "938c9295-88df-48da-b062-736278b18894",
          "name": "Hero(1)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -2.7934389083375035,
              "y": 0.7761516756056596,
              "z": 2.3848812085627085
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
          "_$id": "gqhsfga5",
          "_$prefab": "938c9295-88df-48da-b062-736278b18894",
          "name": "Hero(2)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.956511346909061,
              "y": 0.7761516756056596,
              "z": 2.3848812085627085
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
          "_$id": "i130oeho",
          "_$prefab": "938c9295-88df-48da-b062-736278b18894",
          "name": "Hero(3)",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -0.7834468412244155,
              "y": 0.7761516756056596,
              "z": 2.3848812085627085
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