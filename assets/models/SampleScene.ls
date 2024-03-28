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
          "_$uuid": "59780712-db18-4c91-ad1c-6c55a1ed296a"
        }
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.212,
        "g": 0.227,
        "b": 0.259,
        "a": 1
      },
      "ambientMode": 1,
      "ambientSH": {
        "_$type": "Float32Array",
        "value": [
          0.1148219,
          0.006143873,
          0.01043517,
          2.011079E-06,
          -2.75088E-07,
          0.00151684,
          0.01221601,
          5.36874E-06,
          0.01730832,
          0.1197972,
          0.03720516,
          0.01835412,
          3.216899E-06,
          -5.165938E-07,
          0.00328175,
          0.01449399,
          7.833035E-06,
          0.0194034,
          0.1057977,
          0.06390788,
          0.02478296,
          4.388532E-06,
          -1.212743E-07,
          0.006767632,
          0.01218348,
          9.213214E-06,
          0.01315432
        ]
      },
      "ambientSphericalHarmonicsIntensity": 1,
      "enableFog": false,
      "fogStart": 0,
      "fogRange": 300,
      "fogColor": {
        "_$type": "Color",
        "r": 0.5,
        "g": 0.5,
        "b": 0.5,
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
              "x": 0,
              "y": 1,
              "z": 10
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
          "_$id": "#2",
          "_$type": "Sprite3D",
          "clearFlag": 1,
          "orthographic": false,
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "enableHDR": true,
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
            "a": 0
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
              "y": 0,
              "z": 5.21
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
          "_$id": "#3",
          "_$type": "Sprite3D",
          "_$type": "Sprite3D",
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "intensity": 1,
              "lightmapBakedType": 0,
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
          "name": "Che_Cart001",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 2.646,
              "y": 0,
              "z": 0
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
          "_$id": "#4",
          "_$type": "Sprite3D",
          "_$prefab": "767dafef-9055-41c7-a463-6086b183f325"
        },
        {
          "name": "Gather_Stone",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 5.137,
              "y": 0,
              "z": 0
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
          "_$prefab": "d1e099cc-c702-426e-ad26-9d0772760c5e"
        },
        {
          "name": "Gather_Wheat",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 6.952,
              "y": 0,
              "z": 0
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
          "_$prefab": "1756fc57-7f8e-4c03-9170-5562f9fb0474"
        },
        {
          "name": "Gather_Wood",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 8.822,
              "y": 0,
              "z": 0
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
          "_$prefab": "422530bc-4933-4a62-97e7-4f1218bf6c19"
        },
        {
          "name": "Bing_gong001",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 0.53,
              "y": 0,
              "z": 0
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
          "_$id": "#32",
          "_$type": "Sprite3D",
          "_$prefab": "915aabd7-01e4-439c-a8d8-5bcc9474ecb2"
        },
        {
          "name": "Hero_001",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": -1.862,
              "y": 0,
              "z": 0
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
          "_$id": "#60",
          "_$type": "Sprite3D",
          "_$prefab": "bd75fb8a-e0ab-4b30-a7b6-d4e105822929"
        },
        {
          "name": "Bing_dao001",
          "active": true,
          "isStatic": false,
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
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "_$id": "#111",
          "_$type": "Sprite3D",
          "_$prefab": "7ca900d7-c8fa-4703-aaaf-e7e0ec71ebcb"
        }
      ]
    }
  ]
}