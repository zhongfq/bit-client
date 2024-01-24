{
  "_$ver": 0,
  "_$id": "#0",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "#1",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome",
        "material": {
          "_$type": "Material",
          "_$uuid": "48f6a7aa-ebb0-4e0c-9e96-0fe06473c020"
        }
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.5501471,
        "g": 0.6522278,
        "b": 0.87,
        "a": 0.87
      },
      "ambientMode": 0,
      "ambientSphericalHarmonicsIntensity": 1,
      "enableFog": true,
      "fogStart": 55.52,
      "fogRange": 22.08,
      "fogColor": {
        "_$type": "Color",
        "r": 0.707154,
        "g": 0.7785292,
        "b": 0.894,
        "a": 1
      },
      "_$child": [
        {
          "name": "Main Camera",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -38.48,
              "y": 27.99,
              "z": -54.24
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": -0.1055314,
              "y": -0.8790576,
              "z": -0.2294352,
              "w": 0.404327
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1.002361,
              "y": 1.002361,
              "z": 1.002361
            }
          },
          "_$id": "#53",
          "_$type": "Sprite3D",
          "clearFlag": 1,
          "orthographic": false,
          "orthographicVerticalSize": 10,
          "fieldOfView": 14.2,
          "enableHDR": false,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "normalizedViewport": {
            "_$type": "Viewport",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1
          },
          "clearColor": {
            "_$type": "Color",
            "r": 0.1921569,
            "g": 0.3019608,
            "b": 0.4745098,
            "a": 0.01960784
          },
          "_$type": "Camera",
          "_$comp": []
        },
        {
          "name": "Directional Light",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0,
              "y": 3,
              "z": 0
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0.1188274,
              "y": -0.8697456,
              "z": -0.4055691,
              "w": -0.2548261
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "_$id": "#54",
          "_$type": "Sprite3D",
          "_$type": "Sprite3D",
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 1.58,
              "lightmapBakedType": 1,
              "color": {
                "_$type": "Color",
                "r": 1,
                "g": 0.9568627,
                "b": 0.8392157,
                "a": 1
              },
              "shadowMode": 2,
              "shadowStrength": 1,
              "shadowDepthBias": 0.05,
              "shadowNormalBias": 0.4,
              "shadowNearPlane": 0.2
            }
          ]
        },
        {
          "name": "Tiling",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.991,
              "y": 0,
              "z": -28
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "_$id": "#55",
          "_$type": "Sprite3D",
          "_$child": [
            {
              "name": "Marble",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#3",
              "_$type": "Sprite3D",
              "_$prefab": "0b1db8df-8a1c-4cb9-af2b-03cf8402075a",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Top grass",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.37,
                  "y": 0,
                  "z": 5.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              },
              "_$id": "#4",
              "_$type": "Sprite3D",
              "_$prefab": "b9c03217-66a5-4132-9261-60f44077e850",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.37,
                  "y": 0,
                  "z": 5.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              }
            },
            {
              "name": "Pavement",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": -0.9
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#5",
              "_$type": "Sprite3D",
              "_$prefab": "7842a708-b6e1-4563-873e-bb2f78e1beb4",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": -0.9
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Hexagonal",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.27,
                  "y": 0,
                  "z": -0.89
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#6",
              "_$type": "Sprite3D",
              "_$prefab": "9eaed306-cd89-4785-b087-4d40f49109f8",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.27,
                  "y": 0,
                  "z": -0.89
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Ornament",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": -0.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#7",
              "_$type": "Sprite3D",
              "_$prefab": "5249821f-a7fb-45da-b23a-3f9013a51238",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": -0.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Rooftop",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#8",
              "_$type": "Sprite3D",
              "_$prefab": "53f81a76-3f79-4309-9dca-88a309eff70b",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Concrete 3",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#9",
              "_$type": "Sprite3D",
              "_$prefab": "fce3d6f0-8f0a-429a-ae3e-8f8c3f8611a7",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Concrete 2",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#10",
              "_$type": "Sprite3D",
              "_$prefab": "0e2d7d5a-45e5-45b5-aa9a-002b6f2537bf",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Metal",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#11",
              "_$type": "Sprite3D",
              "_$prefab": "438347cc-d9af-420c-9410-db33dbfcf863",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 9.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Ornament",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#12",
              "_$type": "Sprite3D",
              "_$prefab": "9a5b9266-6469-4549-b28a-964f854c0ecd",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Ornament2",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#13",
              "_$type": "Sprite3D",
              "_$prefab": "6a6fc509-118a-4a9d-8e48-e144d1d5da39",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Grass",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.52,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#14",
              "_$type": "Sprite3D",
              "_$prefab": "9df6f25d-5b6b-4048-b296-f02c74aee6bb",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.52,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Crystal",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#15",
              "_$type": "Sprite3D",
              "_$prefab": "d31b6b43-b3c5-4967-b82c-e3937e1b79da",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Earth",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#16",
              "_$type": "Sprite3D",
              "_$prefab": "a1bd3229-cef2-4b69-af39-22e2993affbc",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Rock",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#17",
              "_$type": "Sprite3D",
              "_$prefab": "ea876b2f-cff1-4e38-95c0-bdc7d5c11df0",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Water",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#18",
              "_$type": "Sprite3D",
              "_$prefab": "8063c7c4-314b-481b-8a58-491dd9c941b1",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Crate",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#19",
              "_$type": "Sprite3D",
              "_$prefab": "e9434e2c-ce3c-484d-8489-8d52774b5eb3",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.36,
                  "y": 0,
                  "z": 7.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Ice",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#20",
              "_$type": "Sprite3D",
              "_$prefab": "9f977d97-7d6c-40b9-ae9d-cb97c9c24e95",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.36,
                  "y": 0,
                  "z": 3.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Top Ice",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37,
                  "y": 0,
                  "z": 3.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              },
              "_$id": "#21",
              "_$type": "Sprite3D",
              "_$prefab": "cc358fa0-5839-49ab-beee-40e38d957f49",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37,
                  "y": 0,
                  "z": 3.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              }
            },
            {
              "name": "Lava",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.33,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#22",
              "_$type": "Sprite3D",
              "_$prefab": "49e053bf-86b7-4906-962a-91888fe605f8",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.33,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cold lava",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.33,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#23",
              "_$type": "Sprite3D",
              "_$prefab": "fe480fec-2a00-4ba6-a4dc-4c065ac094aa",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.33,
                  "y": 0,
                  "z": 1.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Foliage",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.52,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#24",
              "_$type": "Sprite3D",
              "_$prefab": "631222c8-49c4-4059-a414-d1fc1f81534c",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.52,
                  "y": 0,
                  "z": 5.18
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Top lava",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37,
                  "y": 0,
                  "z": 1.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              },
              "_$id": "#25",
              "_$type": "Sprite3D",
              "_$prefab": "b62a88d9-db3d-49f9-92bb-4322d5e3868d",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37,
                  "y": 0,
                  "z": 1.14
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              }
            },
            {
              "name": "Bricks",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.33,
                  "y": 0,
                  "z": -0.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#26",
              "_$type": "Sprite3D",
              "_$prefab": "a1b74dab-d193-4918-87be-c6d7f6787fdb",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.33,
                  "y": 0,
                  "z": -0.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Sand",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.33,
                  "y": 0,
                  "z": -2.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#27",
              "_$type": "Sprite3D",
              "_$prefab": "211b68aa-05c4-43f2-a5b4-e2ef7654bc9d",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.33,
                  "y": 0,
                  "z": -2.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Concrete",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.33,
                  "y": 0,
                  "z": -2.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#28",
              "_$type": "Sprite3D",
              "_$prefab": "625a8bed-ce4f-4661-bcc6-7add4f6868aa",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 2.33,
                  "y": 0,
                  "z": -2.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Top pavement",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.37,
                  "y": 0,
                  "z": -2.86
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              },
              "_$id": "#29",
              "_$type": "Sprite3D",
              "_$prefab": "3b461ae3-35eb-43ef-8f71-ecc33930b44c",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 4.37,
                  "y": 0,
                  "z": -2.86
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.01,
                  "y": 0.01,
                  "z": 0.01
                }
              }
            },
            {
              "name": "Plane",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 3.98,
                  "y": -0.57,
                  "z": 15.15
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 128.3965,
                  "y": 128.3965,
                  "z": 271.6196
                }
              },
              "_$id": "#56",
              "_$type": "Sprite3D",
              "_$type": "Sprite3D",
              "_$comp": [
                {
                  "_$type": "MeshFilter",
                  "sharedMesh": {
                    "_$uuid": "ee94c9dc-9f32-491e-9ed2-bfde67fce6ea",
                    "_$type": "mesh"
                  }
                },
                {
                  "_$type": "MeshRenderer",
                  "enabled": true,
                  "sharedMaterials": [
                    {
                      "_$type": "Material",
                      "_$uuid": "a9f8d2ec-ec30-461a-a0f0-db1d20b49f42"
                    }
                  ],
                  "receiveShadows": true,
                  "castShadow": true
                }
              ]
            },
            {
              "name": "Metal 2",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 6.35,
                  "y": 0,
                  "z": -2.82
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#57",
              "_$type": "Sprite3D",
              "_$type": "Sprite3D",
              "_$comp": [
                {
                  "_$type": "MeshFilter",
                  "sharedMesh": {
                    "_$uuid": "6446aec2-9a95-400b-b266-4b77d4b5c018",
                    "_$type": "mesh"
                  }
                },
                {
                  "_$type": "MeshRenderer",
                  "enabled": true,
                  "sharedMaterials": [
                    {
                      "_$type": "Material",
                      "_$uuid": "b05ba81f-a591-4c2c-933a-57a52a8c4c06"
                    }
                  ],
                  "receiveShadows": true,
                  "castShadow": true
                }
              ]
            }
          ],
          "_$type": "Sprite3D",
          "_$comp": []
        },
        {
          "name": "Rounded",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5.971008,
              "y": -0.03499994,
              "z": -12.84998
            },
            "localRotation": {
              "_$type": "Quaternion",
              "x": 0,
              "y": 0,
              "z": 0,
              "w": -1
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "_$id": "#58",
          "_$type": "Sprite3D",
          "_$child": [
            {
              "name": "Cube Rock",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": -0.7070607,
                  "z": 0,
                  "w": -0.7071528
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#30",
              "_$type": "Sprite3D",
              "_$prefab": "927de813-b641-4a5d-b027-4391d91ed286",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": -0.7070607,
                  "z": 0,
                  "w": -0.7071528
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
              "name": "Cube Old Brick",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#31",
              "_$type": "Sprite3D",
              "_$prefab": "3b5740f9-ebbd-49d5-980f-aef92848ca84",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cube Sand Dirty",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": -0.7070915,
                  "z": 0,
                  "w": 0.7071221
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#32",
              "_$type": "Sprite3D",
              "_$prefab": "bcd0aaee-d44f-4ade-a937-dc400ce2adc1",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": -0.7070915,
                  "z": 0,
                  "w": 0.7071221
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
              "name": "Cube Pavement",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#33",
              "_$type": "Sprite3D",
              "_$prefab": "b8fd6182-ef38-490e-9309-0cf60d842083",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cube Lava",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#34",
              "_$type": "Sprite3D",
              "_$prefab": "7b632272-0626-4da3-9177-8a097b8d44d4",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Foliage",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9619325,
                  "y": 0.9619324,
                  "z": 0.9619324
                }
              },
              "_$id": "#35",
              "_$type": "Sprite3D",
              "_$prefab": "75031cdb-4cb0-4def-8b66-fa23c2461179",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9619325,
                  "y": 0.9619324,
                  "z": 0.9619324
                }
              }
            },
            {
              "name": "Cube Top Sand",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#36",
              "_$type": "Sprite3D",
              "_$prefab": "8584e99c-b9eb-4b17-a188-9d9d40ee339f",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cube top Lava",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#37",
              "_$type": "Sprite3D",
              "_$prefab": "2f55357b-19e7-4e6e-9d02-7d36c1b5e85b",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Red Brick",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#38",
              "_$type": "Sprite3D",
              "_$prefab": "e9e05a8d-c8f7-4be2-a170-c09c06667071",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Stone",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.5000026,
                  "y": 0.5000036,
                  "z": 0.499983,
                  "w": -0.500011
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#39",
              "_$type": "Sprite3D",
              "_$prefab": "85bcf832-8ead-4ba9-85e9-50885c167662",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.5000026,
                  "y": 0.5000036,
                  "z": 0.499983,
                  "w": -0.500011
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
              "name": "Cube top Ice",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#40",
              "_$type": "Sprite3D",
              "_$prefab": "3e1d52ab-8c4e-4c8e-a5db-1e27b59e2c7c",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube cold Lava",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#41",
              "_$type": "Sprite3D",
              "_$prefab": "4b32253e-8eeb-4f15-9401-3bbec62f08e3",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -2.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube White Brick",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#42",
              "_$type": "Sprite3D",
              "_$prefab": "abadd0f6-220c-4bd9-9cf4-47bf38dee83d",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cube Grass",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#43",
              "_$type": "Sprite3D",
              "_$prefab": "4418cc78-0bac-4ceb-93c4-573322b93406",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube earth",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#44",
              "_$type": "Sprite3D",
              "_$prefab": "4a907a32-5c5d-4858-989d-51950f2bf94a",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube top Grass",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#45",
              "_$type": "Sprite3D",
              "_$prefab": "738ffd74-44f8-4e56-852a-5250a72136d8",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Street",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#46",
              "_$type": "Sprite3D",
              "_$prefab": "72d9a455-2b67-459e-a287-d2042e38c9da",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -8.971008,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Unicolor",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#47",
              "_$type": "Sprite3D",
              "_$prefab": "3a204f28-0179-423a-b8aa-8e45a4898600",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube top Rock",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#48",
              "_$type": "Sprite3D",
              "_$prefab": "42662d01-dffa-4f5a-9cfa-acdab3f25003",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -10.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 0,
                  "z": 0,
                  "w": -1
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
              "name": "Cube snow",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#49",
              "_$type": "Sprite3D",
              "_$prefab": "07518d67-2ef5-407b-8df5-d388787e0fe1",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -10.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Ice",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#50",
              "_$type": "Sprite3D",
              "_$prefab": "a7cac9e5-a1c5-48c2-9392-49d959abbd64",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -12.97101,
                  "y": 0.03499994,
                  "z": -6.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Metal",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#51",
              "_$type": "Sprite3D",
              "_$prefab": "4f4939ce-e142-480a-b452-8075d7c0669b",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -12.15002
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube wood",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#52",
              "_$type": "Sprite3D",
              "_$prefab": "8d82d2d3-077c-4872-8643-f662d43868c1",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -8.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": 1,
                  "z": 0,
                  "w": -1.342595E-05
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
              "name": "Cube Sand Dirty (1)",
              "active": true,
              "isStatic": true,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -14.97101,
                  "y": 0.03499994,
                  "z": -4.150024
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0,
                  "y": -0.7070915,
                  "z": 0,
                  "w": 0.7071221
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#59",
              "_$type": "Sprite3D"
            }
          ],
          "_$type": "Sprite3D",
          "_$comp": []
        }
      ]
    }
  ]
}