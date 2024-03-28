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
          "name": "Bing_dao002",
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
          "_$id": "#4",
          "_$type": "Sprite3D",
          "_$prefab": "6f2584bf-8905-47eb-ac43-0fcb004d0f12"
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
          "_$id": "#34",
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
          "_$id": "#46",
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
          "_$id": "#53",
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
          "_$id": "#58",
          "_$type": "Sprite3D",
          "_$prefab": "422530bc-4933-4a62-97e7-4f1218bf6c19"
        },
        {
          "name": "Hero_Fight_001",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 1.431865,
              "y": -2.384186E-07,
              "z": -0.314115
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
          "_$id": "#62",
          "_$type": "Sprite3D",
          "_$prefab": "c9050913-3e98-4355-b33e-4063e04a81df",
          "_$child": [
            {
              "_$override": [
                "#1"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -9.023888E-17,
                  "y": 1.226657,
                  "z": -0.4505789
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.4967927,
                  "y": 0.4967919,
                  "z": 0.5031869,
                  "w": -0.5031877
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 0.9999999
                }
              }
            },
            {
              "_$override": [
                "#2"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0,
                  "y": 0,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.4999997,
                  "y": 0.5000004,
                  "z": 0.4999997,
                  "w": -0.5000004
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
              "_$override": [
                "#3"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.07531236,
                  "y": 0.262526,
                  "z": -5.75893E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 1.858789E-06,
                  "y": 1.974312E-06,
                  "z": -0.7248259,
                  "w": -0.6889321
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
              "_$override": [
                "#6"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1217102,
                  "y": -0.0203119,
                  "z": 2.243511E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 2.061342E-06,
                  "y": 6.750173E-07,
                  "z": 0.02616843,
                  "w": -0.9996576
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999999
                }
              }
            },
            {
              "_$override": [
                "#7"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.1226061,
                  "y": 0.01391594,
                  "z": 0.1629714
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.1928038,
                  "y": 0.9294823,
                  "z": 0.1737075,
                  "w": -0.2621354
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
              "_$override": [
                "#8"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1717097,
                  "y": -4.844665E-08,
                  "z": -4.844665E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -5.865367E-09,
                  "y": -1.419577E-08,
                  "z": 0.1463084,
                  "w": -0.989239
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#9"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1717096,
                  "y": 4.844665E-08,
                  "z": -4.844665E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.1103038,
                  "y": 0.08783647,
                  "z": -0.008499372,
                  "w": -0.9899725
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999999
                }
              }
            },
            {
              "_$override": [
                "#10"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1114268,
                  "y": 0.1434017,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 3.951268E-09,
                  "y": -3.951268E-09,
                  "z": -0.7071068,
                  "w": -0.7071068
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
              "_$override": [
                "#11"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.4009811,
                  "y": -0.0009381278,
                  "z": -2.601965E-09
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -1.812816E-14,
                  "y": 3.404837E-07,
                  "z": -0.1227588,
                  "w": -0.9924365
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
              "_$override": [
                "#12"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.0682375,
                  "y": 4.844665E-08,
                  "z": 1.848093E-13
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 2.52374E-13,
                  "y": -2.683353E-07,
                  "z": 0.09674689,
                  "w": -0.9953091
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
              "_$override": [
                "#13"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.01222697,
                  "y": -0.002104813,
                  "z": 0.1018657
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.5130764,
                  "y": -0.115755,
                  "z": 0.8473563,
                  "w": 0.07307973
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
              "_$override": [
                "#14"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.2578523,
                  "y": 1.059771E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.07666325,
                  "y": -0.1990426,
                  "z": 0.2132204,
                  "w": -0.9534369
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999998,
                  "y": 1,
                  "z": 0.9999998
                }
              }
            },
            {
              "_$override": [
                "#15"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1745723,
                  "y": -1.211166E-08,
                  "z": -9.689331E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 1.679477E-08,
                  "y": -6.448897E-08,
                  "z": 0.2073627,
                  "w": -0.9782642
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
              "_$override": [
                "#16"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1745721,
                  "y": 4.844665E-08,
                  "z": -9.689331E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.5242436,
                  "y": 0.119059,
                  "z": -0.07284746,
                  "w": -0.8400518
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 0.9999999
                }
              }
            },
            {
              "_$override": [
                "#18"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.01222697,
                  "y": -0.002104232,
                  "z": -0.1018657
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.5130762,
                  "y": 0.1157526,
                  "z": 0.8473566,
                  "w": 0.07308116
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
              "_$override": [
                "#19"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.2578523,
                  "y": 9.083748E-09,
                  "z": 3.875732E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.09994318,
                  "y": 0.3315842,
                  "z": 0.06455333,
                  "w": -0.9358932
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
              "_$override": [
                "#20"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1745722,
                  "y": -2.422333E-08,
                  "z": -9.689331E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -6.657134E-09,
                  "y": 4.559588E-08,
                  "z": 0.09983346,
                  "w": -0.9950042
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
              "_$override": [
                "#21"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1745723,
                  "y": 3.633499E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.682373,
                  "y": -0.1843067,
                  "z": -0.1844535,
                  "w": -0.6829166
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
              "_$override": [
                "#23"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.1226061,
                  "y": 0.01391685,
                  "z": -0.1629713
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.1928045,
                  "y": 0.9294829,
                  "z": -0.1737049,
                  "w": 0.2621349
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
              "_$override": [
                "#24"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1717096,
                  "y": 9.689331E-08,
                  "z": 4.844665E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 1.323577E-08,
                  "y": 1.310569E-08,
                  "z": 0.1463084,
                  "w": -0.989239
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#25"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1717098,
                  "y": 0,
                  "z": -4.844665E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.1103038,
                  "y": -0.08783658,
                  "z": -0.008499339,
                  "w": -0.9899725
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
              "_$override": [
                "#26"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1114269,
                  "y": 0.1434016,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -1.580507E-08,
                  "y": -2.634178E-08,
                  "z": -0.7071068,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#27"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.3432246,
                  "y": -0.2203346,
                  "z": -3.875732E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.2031998,
                  "y": 0.9791373,
                  "z": 8.617591E-07,
                  "w": 2.206312E-07
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#28"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.4173693,
                  "y": 0,
                  "z": -6.15736E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -1.534107E-07,
                  "y": -1.533451E-07,
                  "z": 0.4243044,
                  "w": -0.9055196
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#29"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.2583656,
                  "y": 0.08853626,
                  "z": 0.2349471
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.7563064,
                  "y": -0.6512484,
                  "z": -0.04731612,
                  "w": -0.04046402
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#30"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.4040281,
                  "y": 4.844665E-08,
                  "z": -2.422333E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 1.394483E-09,
                  "y": -4.592898E-09,
                  "z": 0.377916,
                  "w": -0.9258399
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
              "_$override": [
                "#31"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.3722699,
                  "y": -9.689331E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.04267181,
                  "y": -0.04533599,
                  "z": 0.1913741,
                  "w": -0.9795406
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
              "_$override": [
                "#32"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1686101,
                  "y": 0.3174995,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -4.679686E-08,
                  "y": -5.360723E-10,
                  "z": -0.5313959,
                  "w": -0.8471236
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#33"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.7819405,
                  "y": -0.1277505,
                  "z": -8.083999E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 8.413704E-07,
                  "y": -2.040763E-06,
                  "z": 0.2506374,
                  "w": -0.9680811
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
              "_$override": [
                "#34"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.5423999,
                  "y": 0.05061832,
                  "z": 1.377853E-07
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -9.060864E-07,
                  "y": 1.213308E-06,
                  "z": -0.09485898,
                  "w": -0.9954907
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#35"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.1533385,
                  "y": 0.06100325,
                  "z": 0.08312688
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.4773057,
                  "y": 0.5393952,
                  "z": 0.6029176,
                  "w": 0.343107
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#36"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.5883552,
                  "y": 4.844665E-08,
                  "z": 4.844665E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7168368,
                  "y": -0.1141819,
                  "z": 0.04514607,
                  "w": -0.686345
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
              "_$override": [
                "#37"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.292636,
                  "y": 4.844665E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 5.221612E-10,
                  "y": -1.595705E-09,
                  "z": 0.2684231,
                  "w": -0.9633011
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#38"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.2638889,
                  "y": -4.844665E-08,
                  "z": -1.211166E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.6865671,
                  "y": 0.1957608,
                  "z": -0.191178,
                  "w": -0.673613
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
              "_$override": [
                "#39"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.1533382,
                  "y": 0.06100412,
                  "z": -0.08312602
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.3824712,
                  "y": -0.5843736,
                  "z": 0.6671141,
                  "w": 0.2591951
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
              "_$override": [
                "#40"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.5883552,
                  "y": 0,
                  "z": -2.422333E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.6779311,
                  "y": 0.1976049,
                  "z": -0.04251122,
                  "w": -0.7067918
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
              "_$override": [
                "#41"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.292636,
                  "y": 0,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 2.475298E-09,
                  "y": -2.232929E-09,
                  "z": 0.2970083,
                  "w": -0.9548749
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
              "_$override": [
                "#42"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.2638889,
                  "y": 4.844665E-08,
                  "z": 1.211166E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.7101781,
                  "y": -0.02321176,
                  "z": -0.02768575,
                  "w": -0.7030944
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
              "_$override": [
                "#43"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.2583663,
                  "y": 0.0885382,
                  "z": -0.234945
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.8512197,
                  "y": -0.5208074,
                  "z": 0.04273141,
                  "w": 0.04856678
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#44"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.4040281,
                  "y": 2.422333E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 5.936502E-09,
                  "y": -1.507094E-09,
                  "z": 0.3905843,
                  "w": -0.9205672
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
              "_$override": [
                "#45"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37227,
                  "y": -4.844665E-08,
                  "z": 0
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.04552849,
                  "y": 0.04595404,
                  "z": 0.1590249,
                  "w": -0.985153
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999999
                }
              }
            },
            {
              "_$override": [
                "#46"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1686101,
                  "y": 0.3174994,
                  "z": -2.422333E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -1.268655E-07,
                  "y": -6.658041E-08,
                  "z": -0.3792989,
                  "w": -0.9252743
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 1
                }
              }
            },
            {
              "_$override": [
                "#47"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.09862763,
                  "y": -0.2851644,
                  "z": 1.065826E-06
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.3463756,
                  "y": 0.9380959,
                  "z": -1.664145E-06,
                  "w": 1.061535E-07
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
              "_$override": [
                "#48"
              ],
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.4458023,
                  "y": 0,
                  "z": 1.004932E-08
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.0117712,
                  "y": 0.03689496,
                  "z": -0.3037235,
                  "w": -0.9519728
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              }
            }
          ]
        },
        {
          "name": "Bing_Gong001",
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
          "_$id": "#113",
          "_$type": "Sprite3D",
          "_$prefab": "915aabd7-01e4-439c-a8d8-5bcc9474ecb2"
        }
      ]
    }
  ]
}