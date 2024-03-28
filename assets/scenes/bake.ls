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
              "y": 29.75985,
              "z": 34.42927
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.3826834323650898,
              "y": 1.0621599216529052e-17,
              "z": 2.5642808882635876e-17,
              "w": 0.9238795325112867
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 11,
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
          "_$id": "xu8tz2do",
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
          "_$id": "hs2xbtd4",
          "_$prefab": "b868bac6-2a13-470d-b35b-e359b1b41c9a",
          "name": "bing-dao",
          "active": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 0,
              "z": 0.028479504314975035
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
          }
        },
        {
          "_$id": "byak06ri",
          "_$prefab": "6dfd410b-62f0-4907-8974-a9e617108ff2",
          "name": "hero01",
          "active": false,
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
          "_$id": "qjqcytor",
          "_$prefab": "eb559588-bea9-4774-a732-497be1db0621",
          "name": "bing-gong",
          "active": true,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.09862899201813224,
              "y": 0.02366771007308699,
              "z": 0.6682666706618869
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
          "_$id": "ttngt0rl",
          "_$type": "Sprite3D",
          "name": "bake",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "z": 0.8572572734097434
            }
          },
          "_$child": [
            {
              "_$id": "25s4jcty",
              "_$type": "Sprite3D",
              "name": "hero01",
              "active": false,
              "_$child": [
                {
                  "_$id": "crb4nokb",
                  "_$prefab": "57553287-eff5-40c3-9a19-b4c27a2f7cd2",
                  "name": "anim",
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
                      "y": 0.7071067811865475,
                      "z": 0,
                      "w": 0.7071067811865476
                    },
                    "localScale": {
                      "_$type": "Vector3",
                      "x": 0.4,
                      "y": 0.4,
                      "z": 0.4
                    }
                  }
                }
              ]
            },
            {
              "_$id": "o6wdeho7",
              "_$type": "Sprite3D",
              "name": "bing-dao",
              "active": false,
              "_$child": [
                {
                  "_$id": "rvvkalhq",
                  "_$prefab": "b1231031-e4c5-4d6e-86c4-9ffba76eb3c5",
                  "name": "anim",
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
                      "y": 0.7071067811865475,
                      "z": 0,
                      "w": 0.7071067811865476
                    },
                    "localScale": {
                      "_$type": "Vector3",
                      "x": 0.4000000059604645,
                      "y": 0.4000000059604645,
                      "z": 0.4000000059604645
                    }
                  }
                }
              ]
            },
            {
              "_$id": "kj0ohbke",
              "_$type": "Sprite3D",
              "name": "bing-gong",
              "_$child": [
                {
                  "_$id": "cc3qf87a",
                  "_$prefab": "859e30bc-80a6-4274-8924-147367df02f8",
                  "name": "anim",
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
                      "y": 0.7071067811865475,
                      "z": 0,
                      "w": 0.7071067811865476
                    },
                    "localScale": {
                      "_$type": "Vector3",
                      "x": 0.4000000059604645,
                      "y": 0.4000000059604645,
                      "z": 0.4000000059604645
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}