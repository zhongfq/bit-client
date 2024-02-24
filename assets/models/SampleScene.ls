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
          "_$id": "#4",
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
          "_$id": "#5",
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
          "_$id": "#6",
          "_$type": "Sprite3D",
          "_$child": [
            {
              "name": "Body_Sword shield_01",
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
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
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
              "_$type": "Sprite3D",
              "_$comp": [
                {
                  "_$type": "MeshFilter",
                  "sharedMesh": {
                    "_$uuid": "452f9b68-93da-4a71-bc0e-7892c9e834e0",
                    "_$type": "mesh"
                  }
                },
                {
                  "_$type": "SkinnedMeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$type": "Material",
                      "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
                    }
                  ],
                  "enabled": true,
                  "receiveShadows": true,
                  "castShadow": true,
                  "boundBox": {
                    "_$type": "Bounds",
                    "min": {
                      "_$type": "Vector3",
                      "x": -0.4240845,
                      "y": -0.4582899,
                      "z": -0.8030469
                    },
                    "max": {
                      "_$type": "Vector3",
                      "x": 0.7228246,
                      "y": 0.6125934,
                      "z": 0.6129031
                    }
                  },
                  "_bones": [
                    {
                      "_$ref": "#32"
                    },
                    {
                      "_$ref": "#9"
                    },
                    {
                      "_$ref": "#10"
                    },
                    {
                      "_$ref": "#30"
                    },
                    {
                      "_$ref": "#31"
                    },
                    {
                      "_$ref": "#33"
                    },
                    {
                      "_$ref": "#13"
                    },
                    {
                      "_$ref": "#11"
                    },
                    {
                      "_$ref": "#12"
                    },
                    {
                      "_$ref": "#14"
                    },
                    {
                      "_$ref": "#25"
                    },
                    {
                      "_$ref": "#28"
                    },
                    {
                      "_$ref": "#27"
                    },
                    {
                      "_$ref": "#26"
                    },
                    {
                      "_$ref": "#18"
                    },
                    {
                      "_$ref": "#20"
                    },
                    {
                      "_$ref": "#21"
                    },
                    {
                      "_$ref": "#19"
                    }
                  ],
                  "rootBone": {
                    "_$ref": "#9"
                  }
                }
              ]
            },
            {
              "name": "BoneInfantry001",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.04603073,
                  "y": 0.3450016,
                  "z": 0.008317418
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.3015653,
                  "y": 0.5750099,
                  "z": 0.6395767,
                  "w": -0.4115382
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 0.9999999
                }
              },
              "_$id": "#8",
              "_$type": "Sprite3D",
              "_$child": [
                {
                  "name": "BoneInfantry001 Pelvis",
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
                      "x": 0.5028409,
                      "y": 0.4971421,
                      "z": 0.4971423,
                      "w": -0.5028422
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
                  "_$child": [
                    {
                      "name": "BoneInfantry001 Spine",
                      "active": true,
                      "isStatic": false,
                      "layer": 0,
                      "transform": {
                        "localPosition": {
                          "_$type": "Vector3",
                          "x": 0.1293127,
                          "y": -0.001749063,
                          "z": 0.0001212559
                        },
                        "localRotation": {
                          "_$type": "Quaternion",
                          "x": 0.20597,
                          "y": 0.02648943,
                          "z": 3.83919E-05,
                          "w": -0.9781997
                        },
                        "localScale": {
                          "_$type": "Vector3",
                          "x": 0.9999999,
                          "y": 0.9999999,
                          "z": 0.9999998
                        }
                      },
                      "_$id": "#10",
                      "_$type": "Sprite3D",
                      "_$child": [
                        {
                          "name": "BoneInfantry001 L Thigh",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": -0.1217848,
                              "y": -0.05677978,
                              "z": 0.1365669
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": 0.5452181,
                              "y": 0.7637532,
                              "z": 0.2774116,
                              "w": -0.2060611
                            },
                            "localScale": {
                              "_$type": "Vector3",
                              "x": 0.9999999,
                              "y": 1,
                              "z": 1
                            }
                          },
                          "_$id": "#11",
                          "_$type": "Sprite3D",
                          "_$child": [
                            {
                              "name": "BoneInfantry001 L Calf",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1681753,
                                  "y": 0,
                                  "z": 2.422333E-08
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -5.218444E-09,
                                  "y": -8.823933E-09,
                                  "z": 0.4769264,
                                  "w": -0.8789433
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999998,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#12",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 L Foot",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1555263,
                                      "y": 1.211166E-08,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.1330575,
                                      "y": 0.01003126,
                                      "z": 0.01652957,
                                      "w": -0.9909197
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.9999999,
                                      "y": 0.9999999,
                                      "z": 1
                                    }
                                  },
                                  "_$id": "#13",
                                  "_$type": "Sprite3D",
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 L Toe0",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1146728,
                                          "y": 0.1618776,
                                          "z": 0
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 1.456834E-07,
                                          "y": -2.497858E-07,
                                          "z": -0.7111259,
                                          "w": -0.7030647
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 1,
                                          "y": 0.9999999,
                                          "z": 1
                                        }
                                      },
                                      "_$id": "#14",
                                      "_$type": "Sprite3D",
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        },
                        {
                          "name": "BoneInfantry001 Neck",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": 0.3773309,
                              "y": -8.134193E-05,
                              "z": 9.083748E-09
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": 2.66653E-09,
                              "y": 2.23673E-08,
                              "z": -0.005699422,
                              "w": -0.9999838
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
                          "_$child": [
                            {
                              "name": "BoneInfantry001 Head",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1218286,
                                  "y": -0.004995225,
                                  "z": -1.81675E-08
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -0.4440236,
                                  "y": 0.01374792,
                                  "z": 0.003288842,
                                  "w": -0.8959036
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#16",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "Head_Sword shield_01",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1476732,
                                      "y": 0.02901755,
                                      "z": 2.231574E-06
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": -0.7070991,
                                      "y": -0.003294117,
                                      "z": -0.7070991,
                                      "w": 0.00329873
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.8299999,
                                      "y": 0.8300001,
                                      "z": 0.83
                                    }
                                  },
                                  "_$id": "#17",
                                  "_$type": "Sprite3D",
                                  "_$type": "Sprite3D",
                                  "_$comp": [
                                    {
                                      "_$type": "MeshFilter",
                                      "sharedMesh": {
                                        "_$uuid": "8fcbb5a0-374b-439c-b87f-effd74720ff0",
                                        "_$type": "mesh"
                                      }
                                    },
                                    {
                                      "_$type": "MeshRenderer",
                                      "enabled": true,
                                      "sharedMaterials": [
                                        {
                                          "_$type": "Material",
                                          "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
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
                              "name": "BoneInfantry001 L Clavicle",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.02187725,
                                  "y": -0.0001857324,
                                  "z": 0.08724848
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": 0.5683111,
                                  "y": 0.1437843,
                                  "z": 0.8028027,
                                  "w": 0.1088878
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#18",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 L UpperArm",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.2762494,
                                      "y": 0,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": -0.006530005,
                                      "y": -0.09096009,
                                      "z": -0.1943541,
                                      "w": -0.9766833
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.9999999,
                                      "y": 1,
                                      "z": 0.9999999
                                    }
                                  },
                                  "_$id": "#19",
                                  "_$type": "Sprite3D",
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 L Forearm",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1805582,
                                          "y": -2.422333E-08,
                                          "z": 9.689331E-08
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 3.537624E-09,
                                          "y": -4.199812E-08,
                                          "z": 0.64526,
                                          "w": -0.7639631
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 0.9999999,
                                          "y": 1,
                                          "z": 0.9999999
                                        }
                                      },
                                      "_$id": "#20",
                                      "_$type": "Sprite3D",
                                      "_$child": [
                                        {
                                          "name": "BoneInfantry001 L Hand",
                                          "active": true,
                                          "isStatic": false,
                                          "layer": 0,
                                          "transform": {
                                            "localPosition": {
                                              "_$type": "Vector3",
                                              "x": 0.1540441,
                                              "y": 0,
                                              "z": -1.937866E-07
                                            },
                                            "localRotation": {
                                              "_$type": "Quaternion",
                                              "x": 0.7059297,
                                              "y": 0.2093431,
                                              "z": -0.328052,
                                              "w": -0.5917944
                                            },
                                            "localScale": {
                                              "_$type": "Vector3",
                                              "x": 1,
                                              "y": 0.9999999,
                                              "z": 1
                                            }
                                          },
                                          "_$id": "#21",
                                          "_$type": "Sprite3D",
                                          "_$child": [
                                            {
                                              "name": "BoneInfantry_Arrow1",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.08469231,
                                                  "y": 0.007988914,
                                                  "z": -0.08417393
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": -0.4179879,
                                                  "y": -0.5074109,
                                                  "z": 0.6476354,
                                                  "w": -0.3852126
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
                                              "_$type": "Sprite3D",
                                              "_$comp": []
                                            },
                                            {
                                              "name": "BoneInfantry_Arrow2",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.09288082,
                                                  "y": 0.0310078,
                                                  "z": 0.07166985
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": 0.3688911,
                                                  "y": -0.5276345,
                                                  "z": 0.5924418,
                                                  "w": 0.484287
                                                },
                                                "localScale": {
                                                  "_$type": "Vector3",
                                                  "x": 1,
                                                  "y": 1,
                                                  "z": 0.9999999
                                                }
                                              },
                                              "_$id": "#23",
                                              "_$type": "Sprite3D",
                                              "_$type": "Sprite3D",
                                              "_$comp": []
                                            },
                                            {
                                              "name": "Weapon_SwordShield_Shield01",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.02398107,
                                                  "y": -0.05107915,
                                                  "z": 0.01161134
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": -0.2223801,
                                                  "y": 0.640312,
                                                  "z": -0.1469852,
                                                  "w": -0.720377
                                                },
                                                "localScale": {
                                                  "_$type": "Vector3",
                                                  "x": 1,
                                                  "y": 0.9999998,
                                                  "z": 1
                                                }
                                              },
                                              "_$id": "#24",
                                              "_$type": "Sprite3D",
                                              "_$type": "Sprite3D",
                                              "_$comp": [
                                                {
                                                  "_$type": "MeshFilter",
                                                  "sharedMesh": {
                                                    "_$uuid": "f2f64d32-2ccc-42e0-bb33-3230eb302b63",
                                                    "_$type": "mesh"
                                                  }
                                                },
                                                {
                                                  "_$type": "MeshRenderer",
                                                  "enabled": true,
                                                  "sharedMaterials": [
                                                    {
                                                      "_$type": "Material",
                                                      "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
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
                                        }
                                      ],
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            },
                            {
                              "name": "BoneInfantry001 R Clavicle",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.02187725,
                                  "y": -0.0001852297,
                                  "z": -0.0872485
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -0.7072823,
                                  "y": 0.00834047,
                                  "z": 0.7068819,
                                  "w": 0.0002796897
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999998
                                }
                              },
                              "_$id": "#25",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 R UpperArm",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.2762495,
                                      "y": 6.055832E-09,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.08068249,
                                      "y": 0.1729144,
                                      "z": 0.1983135,
                                      "w": -0.9613858
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
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 R Forearm",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1805581,
                                          "y": -2.422333E-08,
                                          "z": 0
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": -6.604724E-09,
                                          "y": 3.448013E-09,
                                          "z": 0.4627844,
                                          "w": -0.8864709
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 1,
                                          "y": 0.9999998,
                                          "z": 1
                                        }
                                      },
                                      "_$id": "#27",
                                      "_$type": "Sprite3D",
                                      "_$child": [
                                        {
                                          "name": "BoneInfantry001 R Hand",
                                          "active": true,
                                          "isStatic": false,
                                          "layer": 0,
                                          "transform": {
                                            "localPosition": {
                                              "_$type": "Vector3",
                                              "x": 0.1540441,
                                              "y": 2.422333E-08,
                                              "z": -9.689331E-08
                                            },
                                            "localRotation": {
                                              "_$type": "Quaternion",
                                              "x": -0.7057798,
                                              "y": -0.03842922,
                                              "z": -0.0465087,
                                              "w": -0.7058577
                                            },
                                            "localScale": {
                                              "_$type": "Vector3",
                                              "x": 1,
                                              "y": 0.9999999,
                                              "z": 1
                                            }
                                          },
                                          "_$id": "#28",
                                          "_$type": "Sprite3D",
                                          "_$child": [
                                            {
                                              "name": "Weapon_SwordShield_Sword01",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.08056311,
                                                  "y": 0.02502725,
                                                  "z": 0.09385907
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": -0.701751,
                                                  "y": -0.0606438,
                                                  "z": -0.6950668,
                                                  "w": 0.1440489
                                                },
                                                "localScale": {
                                                  "_$type": "Vector3",
                                                  "x": 0.9999998,
                                                  "y": 1,
                                                  "z": 0.9999999
                                                }
                                              },
                                              "_$id": "#29",
                                              "_$type": "Sprite3D",
                                              "_$type": "Sprite3D",
                                              "_$comp": [
                                                {
                                                  "_$type": "MeshFilter",
                                                  "sharedMesh": {
                                                    "_$uuid": "c8de3edb-8d50-4136-9f0c-b1c449f7ce1b",
                                                    "_$type": "mesh"
                                                  }
                                                },
                                                {
                                                  "_$type": "MeshRenderer",
                                                  "enabled": true,
                                                  "sharedMaterials": [
                                                    {
                                                      "_$type": "Material",
                                                      "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
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
                                        }
                                      ],
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        },
                        {
                          "name": "BoneInfantry001 R Thigh",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": -0.1364525,
                              "y": 0.05723727,
                              "z": -0.1219799
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": -0.09556086,
                              "y": 0.9310274,
                              "z": 0.3092217,
                              "w": 0.1686358
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
                          "_$child": [
                            {
                              "name": "BoneInfantry001 R Calf",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1681754,
                                  "y": 1.211166E-08,
                                  "z": 0
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": 1.230457E-08,
                                  "y": 2.714362E-08,
                                  "z": 0.4128728,
                                  "w": -0.9107887
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 1,
                                  "z": 1
                                }
                              },
                              "_$id": "#31",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 R Foot",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1555262,
                                      "y": 0,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.0037561,
                                      "y": -0.09075367,
                                      "z": -0.219751,
                                      "w": -0.9713182
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
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 R Toe0",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1146729,
                                          "y": 0.1618776,
                                          "z": -3.633499E-08
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 0.1028868,
                                          "y": 0.04836171,
                                          "z": 0.9372527,
                                          "w": 0.3295949
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
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        }
                      ],
                      "_$type": "Sprite3D",
                      "_$comp": []
                    }
                  ],
                  "_$type": "Sprite3D",
                  "_$comp": []
                }
              ],
              "_$type": "Sprite3D",
              "_$comp": []
            }
          ],
          "_$type": "Sprite3D",
          "_$comp": [
            {
              "_$type": "Animator",
              "controller": {
                "_$type": "AnimationController",
                "_$uuid": "7ea23683-d81e-4751-9052-7d829fb4020b"
              },
              "enabled": true
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
              "x": 1.794,
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
          "_$child": [
            {
              "name": "Body_Archer_01",
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
                  "x": 0.7071068,
                  "y": 0,
                  "z": 0,
                  "w": -0.7071068
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                }
              },
              "_$id": "#35",
              "_$type": "Sprite3D",
              "_$type": "Sprite3D",
              "_$comp": [
                {
                  "_$type": "MeshFilter",
                  "sharedMesh": {
                    "_$uuid": "c36bf6b7-ab23-4614-be0d-b872c990ad75",
                    "_$type": "mesh"
                  }
                },
                {
                  "_$type": "SkinnedMeshRenderer",
                  "sharedMaterials": [
                    {
                      "_$type": "Material",
                      "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
                    }
                  ],
                  "enabled": true,
                  "receiveShadows": true,
                  "castShadow": true,
                  "boundBox": {
                    "_$type": "Bounds",
                    "min": {
                      "_$type": "Vector3",
                      "x": -0.4272001,
                      "y": -0.4055257,
                      "z": -0.7812389
                    },
                    "max": {
                      "_$type": "Vector3",
                      "x": 0.6908725,
                      "y": 0.6129022,
                      "z": 0.6118208
                    }
                  },
                  "_bones": [
                    {
                      "_$ref": "#59"
                    },
                    {
                      "_$ref": "#37"
                    },
                    {
                      "_$ref": "#38"
                    },
                    {
                      "_$ref": "#57"
                    },
                    {
                      "_$ref": "#58"
                    },
                    {
                      "_$ref": "#41"
                    },
                    {
                      "_$ref": "#60"
                    },
                    {
                      "_$ref": "#39"
                    },
                    {
                      "_$ref": "#40"
                    },
                    {
                      "_$ref": "#42"
                    },
                    {
                      "_$ref": "#53"
                    },
                    {
                      "_$ref": "#54"
                    },
                    {
                      "_$ref": "#56"
                    },
                    {
                      "_$ref": "#55"
                    },
                    {
                      "_$ref": "#46"
                    },
                    {
                      "_$ref": "#47"
                    },
                    {
                      "_$ref": "#48"
                    },
                    {
                      "_$ref": "#49"
                    }
                  ],
                  "rootBone": {
                    "_$ref": "#37"
                  }
                }
              ]
            },
            {
              "name": "BoneInfantry001",
              "active": true,
              "isStatic": false,
              "layer": 0,
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.04603073,
                  "y": 0.3450016,
                  "z": 0.008317418
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.3015653,
                  "y": 0.5750099,
                  "z": 0.6395767,
                  "w": -0.4115382
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999,
                  "y": 0.9999999,
                  "z": 0.9999999
                }
              },
              "_$id": "#36",
              "_$type": "Sprite3D",
              "_$child": [
                {
                  "name": "BoneInfantry001 Pelvis",
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
                      "x": 0.5028409,
                      "y": 0.4971421,
                      "z": 0.4971423,
                      "w": -0.5028422
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
                  "_$child": [
                    {
                      "name": "BoneInfantry001 Spine",
                      "active": true,
                      "isStatic": false,
                      "layer": 0,
                      "transform": {
                        "localPosition": {
                          "_$type": "Vector3",
                          "x": 0.1293127,
                          "y": -0.001749063,
                          "z": 0.0001212559
                        },
                        "localRotation": {
                          "_$type": "Quaternion",
                          "x": 0.20597,
                          "y": 0.02648943,
                          "z": 3.83919E-05,
                          "w": -0.9781997
                        },
                        "localScale": {
                          "_$type": "Vector3",
                          "x": 0.9999999,
                          "y": 0.9999999,
                          "z": 0.9999998
                        }
                      },
                      "_$id": "#38",
                      "_$type": "Sprite3D",
                      "_$child": [
                        {
                          "name": "BoneInfantry001 L Thigh",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": -0.1217848,
                              "y": -0.05677978,
                              "z": 0.1365669
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": 0.5452181,
                              "y": 0.7637532,
                              "z": 0.2774116,
                              "w": -0.2060611
                            },
                            "localScale": {
                              "_$type": "Vector3",
                              "x": 0.9999999,
                              "y": 1,
                              "z": 1
                            }
                          },
                          "_$id": "#39",
                          "_$type": "Sprite3D",
                          "_$child": [
                            {
                              "name": "BoneInfantry001 L Calf",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1681753,
                                  "y": 0,
                                  "z": 2.422333E-08
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -5.218444E-09,
                                  "y": -8.823933E-09,
                                  "z": 0.4769264,
                                  "w": -0.8789433
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999998,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#40",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 L Foot",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1555263,
                                      "y": 1.211166E-08,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.1330575,
                                      "y": 0.01003126,
                                      "z": 0.01652957,
                                      "w": -0.9909197
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.9999999,
                                      "y": 0.9999999,
                                      "z": 1
                                    }
                                  },
                                  "_$id": "#41",
                                  "_$type": "Sprite3D",
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 L Toe0",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1146728,
                                          "y": 0.1618776,
                                          "z": 0
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 1.456834E-07,
                                          "y": -2.497858E-07,
                                          "z": -0.7111259,
                                          "w": -0.7030647
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 1,
                                          "y": 0.9999999,
                                          "z": 1
                                        }
                                      },
                                      "_$id": "#42",
                                      "_$type": "Sprite3D",
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        },
                        {
                          "name": "BoneInfantry001 Neck",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": 0.3773309,
                              "y": -8.134193E-05,
                              "z": 9.083748E-09
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": 2.66653E-09,
                              "y": 2.23673E-08,
                              "z": -0.005699422,
                              "w": -0.9999838
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
                          "_$child": [
                            {
                              "name": "BoneInfantry001 Head",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1218286,
                                  "y": -0.004995225,
                                  "z": -1.81675E-08
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -0.4440236,
                                  "y": 0.01374792,
                                  "z": 0.003288842,
                                  "w": -0.8959036
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#44",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "Head_Archer_01",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1871201,
                                      "y": 0.004979747,
                                      "z": 1.844001E-06
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": -0.7071,
                                      "y": -0.003111548,
                                      "z": -0.7071,
                                      "w": 0.003116162
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.8299999,
                                      "y": 0.8300003,
                                      "z": 0.83
                                    }
                                  },
                                  "_$id": "#45",
                                  "_$type": "Sprite3D",
                                  "_$type": "Sprite3D",
                                  "_$comp": [
                                    {
                                      "_$type": "MeshFilter",
                                      "sharedMesh": {
                                        "_$uuid": "ff4ae8cc-d5e9-4513-861f-436d47ea979b",
                                        "_$type": "mesh"
                                      }
                                    },
                                    {
                                      "_$type": "MeshRenderer",
                                      "enabled": true,
                                      "sharedMaterials": [
                                        {
                                          "_$type": "Material",
                                          "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
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
                              "name": "BoneInfantry001 L Clavicle",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.02187725,
                                  "y": -0.0001857324,
                                  "z": 0.08724848
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": 0.5683111,
                                  "y": 0.1437843,
                                  "z": 0.8028027,
                                  "w": 0.1088878
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999999
                                }
                              },
                              "_$id": "#46",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 L UpperArm",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.2762494,
                                      "y": 0,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": -0.006530005,
                                      "y": -0.09096009,
                                      "z": -0.1943541,
                                      "w": -0.9766833
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 0.9999999,
                                      "y": 1,
                                      "z": 0.9999999
                                    }
                                  },
                                  "_$id": "#47",
                                  "_$type": "Sprite3D",
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 L Forearm",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1805582,
                                          "y": -2.422333E-08,
                                          "z": 9.689331E-08
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 3.537624E-09,
                                          "y": -4.199812E-08,
                                          "z": 0.64526,
                                          "w": -0.7639631
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 0.9999999,
                                          "y": 1,
                                          "z": 0.9999999
                                        }
                                      },
                                      "_$id": "#48",
                                      "_$type": "Sprite3D",
                                      "_$child": [
                                        {
                                          "name": "BoneInfantry001 L Hand",
                                          "active": true,
                                          "isStatic": false,
                                          "layer": 0,
                                          "transform": {
                                            "localPosition": {
                                              "_$type": "Vector3",
                                              "x": 0.1540441,
                                              "y": 0,
                                              "z": -1.937866E-07
                                            },
                                            "localRotation": {
                                              "_$type": "Quaternion",
                                              "x": 0.7059297,
                                              "y": 0.2093431,
                                              "z": -0.328052,
                                              "w": -0.5917944
                                            },
                                            "localScale": {
                                              "_$type": "Vector3",
                                              "x": 1,
                                              "y": 0.9999999,
                                              "z": 1
                                            }
                                          },
                                          "_$id": "#49",
                                          "_$type": "Sprite3D",
                                          "_$child": [
                                            {
                                              "name": "BoneInfantry_Arrow1",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.08469231,
                                                  "y": 0.007988914,
                                                  "z": -0.08417393
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": -0.4179879,
                                                  "y": -0.5074109,
                                                  "z": 0.6476354,
                                                  "w": -0.3852126
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
                                              "_$type": "Sprite3D",
                                              "_$comp": []
                                            },
                                            {
                                              "name": "BoneInfantry_Arrow2",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.09288082,
                                                  "y": 0.0310078,
                                                  "z": 0.07166985
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": 0.3688911,
                                                  "y": -0.5276345,
                                                  "z": 0.5924418,
                                                  "w": 0.484287
                                                },
                                                "localScale": {
                                                  "_$type": "Vector3",
                                                  "x": 1,
                                                  "y": 1,
                                                  "z": 0.9999999
                                                }
                                              },
                                              "_$id": "#51",
                                              "_$type": "Sprite3D",
                                              "_$type": "Sprite3D",
                                              "_$comp": []
                                            },
                                            {
                                              "name": "Weapon_Bow_01",
                                              "active": true,
                                              "isStatic": false,
                                              "layer": 0,
                                              "transform": {
                                                "localPosition": {
                                                  "_$type": "Vector3",
                                                  "x": 0.05579616,
                                                  "y": 0.01262462,
                                                  "z": -0.09589741
                                                },
                                                "localRotation": {
                                                  "_$type": "Quaternion",
                                                  "x": -0.01923499,
                                                  "y": -0.7239538,
                                                  "z": 0.1185139,
                                                  "w": -0.6793197
                                                },
                                                "localScale": {
                                                  "_$type": "Vector3",
                                                  "x": 0.9999996,
                                                  "y": 0.9999998,
                                                  "z": 1
                                                }
                                              },
                                              "_$id": "#52",
                                              "_$type": "Sprite3D",
                                              "_$type": "Sprite3D",
                                              "_$comp": [
                                                {
                                                  "_$type": "MeshFilter",
                                                  "sharedMesh": {
                                                    "_$uuid": "552612ab-222c-41f9-952c-97d347a01bd5",
                                                    "_$type": "mesh"
                                                  }
                                                },
                                                {
                                                  "_$type": "SkinnedMeshRenderer",
                                                  "sharedMaterials": [
                                                    {
                                                      "_$type": "Material",
                                                      "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
                                                    }
                                                  ],
                                                  "enabled": true,
                                                  "receiveShadows": true,
                                                  "castShadow": true,
                                                  "boundBox": {
                                                    "_$type": "Bounds",
                                                    "min": {
                                                      "_$type": "Vector3",
                                                      "x": -0.2517775,
                                                      "y": -0.1144903,
                                                      "z": -0.7474391
                                                    },
                                                    "max": {
                                                      "_$type": "Vector3",
                                                      "x": 0.1597444,
                                                      "y": 0.2116132,
                                                      "z": 0.7439112
                                                    }
                                                  },
                                                  "_bones": [
                                                    {
                                                      "_$ref": "#49"
                                                    },
                                                    {
                                                      "_$ref": "#51"
                                                    },
                                                    {
                                                      "_$ref": "#50"
                                                    }
                                                  ],
                                                  "rootBone": {
                                                    "_$ref": "#49"
                                                  }
                                                }
                                              ]
                                            }
                                          ],
                                          "_$type": "Sprite3D",
                                          "_$comp": []
                                        }
                                      ],
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            },
                            {
                              "name": "BoneInfantry001 R Clavicle",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.02187725,
                                  "y": -0.0001852297,
                                  "z": -0.0872485
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": -0.7072823,
                                  "y": 0.00834047,
                                  "z": 0.7068819,
                                  "w": 0.0002796897
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 0.9999999,
                                  "z": 0.9999998
                                }
                              },
                              "_$id": "#53",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 R UpperArm",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.2762495,
                                      "y": 6.055832E-09,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.08068249,
                                      "y": 0.1729144,
                                      "z": 0.1983135,
                                      "w": -0.9613858
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
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 R Forearm",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1805581,
                                          "y": -2.422333E-08,
                                          "z": 0
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": -6.604724E-09,
                                          "y": 3.448013E-09,
                                          "z": 0.4627844,
                                          "w": -0.8864709
                                        },
                                        "localScale": {
                                          "_$type": "Vector3",
                                          "x": 1,
                                          "y": 0.9999998,
                                          "z": 1
                                        }
                                      },
                                      "_$id": "#55",
                                      "_$type": "Sprite3D",
                                      "_$child": [
                                        {
                                          "name": "BoneInfantry001 R Hand",
                                          "active": true,
                                          "isStatic": false,
                                          "layer": 0,
                                          "transform": {
                                            "localPosition": {
                                              "_$type": "Vector3",
                                              "x": 0.1540441,
                                              "y": 2.422333E-08,
                                              "z": -9.689331E-08
                                            },
                                            "localRotation": {
                                              "_$type": "Quaternion",
                                              "x": -0.7057798,
                                              "y": -0.03842922,
                                              "z": -0.0465087,
                                              "w": -0.7058577
                                            },
                                            "localScale": {
                                              "_$type": "Vector3",
                                              "x": 1,
                                              "y": 0.9999999,
                                              "z": 1
                                            }
                                          },
                                          "_$id": "#56",
                                          "_$type": "Sprite3D",
                                          "_$type": "Sprite3D",
                                          "_$comp": []
                                        }
                                      ],
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        },
                        {
                          "name": "BoneInfantry001 R Thigh",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": -0.1364525,
                              "y": 0.05723727,
                              "z": -0.1219799
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": -0.09556086,
                              "y": 0.9310274,
                              "z": 0.3092217,
                              "w": 0.1686358
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
                          "_$child": [
                            {
                              "name": "BoneInfantry001 R Calf",
                              "active": true,
                              "isStatic": false,
                              "layer": 0,
                              "transform": {
                                "localPosition": {
                                  "_$type": "Vector3",
                                  "x": 0.1681754,
                                  "y": 1.211166E-08,
                                  "z": 0
                                },
                                "localRotation": {
                                  "_$type": "Quaternion",
                                  "x": 1.230457E-08,
                                  "y": 2.714362E-08,
                                  "z": 0.4128728,
                                  "w": -0.9107887
                                },
                                "localScale": {
                                  "_$type": "Vector3",
                                  "x": 0.9999999,
                                  "y": 1,
                                  "z": 1
                                }
                              },
                              "_$id": "#58",
                              "_$type": "Sprite3D",
                              "_$child": [
                                {
                                  "name": "BoneInfantry001 R Foot",
                                  "active": true,
                                  "isStatic": false,
                                  "layer": 0,
                                  "transform": {
                                    "localPosition": {
                                      "_$type": "Vector3",
                                      "x": 0.1555262,
                                      "y": 0,
                                      "z": 0
                                    },
                                    "localRotation": {
                                      "_$type": "Quaternion",
                                      "x": 0.0037561,
                                      "y": -0.09075367,
                                      "z": -0.219751,
                                      "w": -0.9713182
                                    },
                                    "localScale": {
                                      "_$type": "Vector3",
                                      "x": 1,
                                      "y": 1,
                                      "z": 1
                                    }
                                  },
                                  "_$id": "#59",
                                  "_$type": "Sprite3D",
                                  "_$child": [
                                    {
                                      "name": "BoneInfantry001 R Toe0",
                                      "active": true,
                                      "isStatic": false,
                                      "layer": 0,
                                      "transform": {
                                        "localPosition": {
                                          "_$type": "Vector3",
                                          "x": 0.1146729,
                                          "y": 0.1618776,
                                          "z": -3.633499E-08
                                        },
                                        "localRotation": {
                                          "_$type": "Quaternion",
                                          "x": 0.1028868,
                                          "y": 0.04836171,
                                          "z": 0.9372527,
                                          "w": 0.3295949
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
                                      "_$type": "Sprite3D",
                                      "_$comp": []
                                    }
                                  ],
                                  "_$type": "Sprite3D",
                                  "_$comp": []
                                }
                              ],
                              "_$type": "Sprite3D",
                              "_$comp": []
                            }
                          ],
                          "_$type": "Sprite3D",
                          "_$comp": []
                        },
                        {
                          "name": "Weapon_ArrowBag",
                          "active": true,
                          "isStatic": false,
                          "layer": 0,
                          "transform": {
                            "localPosition": {
                              "_$type": "Vector3",
                              "x": 0.231284,
                              "y": -0.2591503,
                              "z": 1.825833E-06
                            },
                            "localRotation": {
                              "_$type": "Quaternion",
                              "x": -0.4995071,
                              "y": 0.5005037,
                              "z": -0.5004793,
                              "w": 0.4995089
                            },
                            "localScale": {
                              "_$type": "Vector3",
                              "x": 1,
                              "y": 1,
                              "z": 1
                            }
                          },
                          "_$id": "#61",
                          "_$type": "Sprite3D",
                          "_$type": "Sprite3D",
                          "_$comp": [
                            {
                              "_$type": "MeshFilter",
                              "sharedMesh": {
                                "_$uuid": "e52b90b6-6a76-4cac-8771-d72b0b599186",
                                "_$type": "mesh"
                              }
                            },
                            {
                              "_$type": "MeshRenderer",
                              "enabled": true,
                              "sharedMaterials": [
                                {
                                  "_$type": "Material",
                                  "_$uuid": "8f1698b6-5fa9-4326-a510-624a2ca4b5ad"
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
                    }
                  ],
                  "_$type": "Sprite3D",
                  "_$comp": []
                }
              ],
              "_$type": "Sprite3D",
              "_$comp": []
            }
          ],
          "_$type": "Sprite3D",
          "_$comp": [
            {
              "_$type": "Animator",
              "controller": {
                "_$type": "AnimationController",
                "_$uuid": "bd6ff69e-5e1f-49ea-b1b7-1a7d121fe767"
              },
              "enabled": true
            }
          ]
        },
        {
          "name": "Hero_Fight_001",
          "active": true,
          "isStatic": false,
          "layer": 0,
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "x": 3.386,
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
          "_$id": "#3",
          "_$type": "Sprite3D",
          "_$prefab": "c9050913-3e98-4355-b33e-4063e04a81df"
        }
      ]
    }
  ]
}