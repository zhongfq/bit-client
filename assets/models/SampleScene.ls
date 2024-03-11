{
  "_$ver": 1,
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
          "_$uuid": "59780712-db18-4c91-ad1c-6c55a1ed296a",
          "_$type": "Material"
        }
      },
      "ambientMode": 1,
      "ambientSH": {
        "_$type": "Float32Array",
        "value": [
          0.1148219034075737,
          0.0061438730917871,
          0.01043516956269741,
          0.0000020110790046601323,
          -2.750880128132849e-7,
          0.0015168399550020695,
          0.012216010130941868,
          0.000005368739948607981,
          0.017308320850133896,
          0.11979719996452332,
          0.03720515966415405,
          0.01835411973297596,
          0.0000032168989037018036,
          -5.165937864148873e-7,
          0.0032817500177770853,
          0.014493989758193493,
          0.000007833034942450467,
          0.019403399899601936,
          0.10579770058393478,
          0.06390787661075592,
          0.02478295937180519,
          0.000004388532033772208,
          -1.2127429727115668e-7,
          0.006767631974071264,
          0.012183479964733124,
          0.000009213214070769027,
          0.013154320418834686
        ]
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.212,
        "g": 0.227,
        "b": 0.259
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
          "_$id": "#2",
          "_$type": "Camera",
          "name": "Main Camera",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "y": 1,
              "z": 10
            }
          },
          "orthographicVerticalSize": 10,
          "fieldOfView": 60,
          "nearPlane": 0.3,
          "farPlane": 1000,
          "clearFlag": 1,
          "clearColor": {
            "_$type": "Color",
            "r": 0.1921569,
            "g": 0.3019608,
            "b": 0.4745098,
            "a": 0
          },
          "enableHDR": true,
          "cullingMask": 2147483647,
          "normalizedViewport": {
            "_$type": "Viewport",
            "width": 1,
            "height": 1
          },
          "depthTextureFormat": 35
        },
        {
          "_$id": "#3",
          "_$type": "Sprite3D",
          "name": "Directional Light",
          "transform": {
            "localPosition": {
              "_$type": "Vector3",
              "z": 5.21
            }
          },
          "_$comp": [
            {
              "_$type": "DirectionLightCom",
              "color": {
                "_$type": "Color",
                "g": 0.9568627,
                "b": 0.8392157
              },
              "intensity": 1,
              "shadowMode": 2,
              "shadowStrength": 1,
              "shadowDistance": 50,
              "shadowDepthBias": 0.05,
              "shadowNormalBias": 0.4,
              "shadowNearPlane": 0.2,
              "strength": null,
              "angle": null,
              "maxBounces": null
            }
          ]
        },
        {
          "_$id": "#4",
          "_$prefab": "6f2584bf-8905-47eb-ac43-0fcb004d0f12",
          "name": "Bing_dao002",
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
            },
            "localScale": {
              "_$type": "Vector3",
              "x": 1,
              "y": 1,
              "z": 1
            }
          },
          "isStatic": false,
          "_$child": [
            {
              "_$override": "#4",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.018122337758541107,
                  "y": 0.3515639305114746,
                  "z": 0.003274574177339673
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.30156534910202026,
                  "y": 0.5710254028153017,
                  "z": 0.6337154449142313,
                  "w": -0.41423833608932026
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
              "_$override": "#5",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3"
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.5028409361839294,
                  "y": -0.49776478719142087,
                  "z": -0.4973658908011689,
                  "w": 0.503738825566643
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1.0000001192092896,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": "#6",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.129312664270401,
                  "y": -0.0017490624450147152,
                  "z": 0.0001212644565384835
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.2059701532125473,
                  "y": 0.026490207909135217,
                  "z": 0.000038413964854402917,
                  "w": -0.9817061986614952
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#7",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.12178470194339752,
                  "y": -0.05677977576851845,
                  "z": 0.1365668624639511
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.5452176928520203,
                  "y": 0.7546399433922383,
                  "z": 0.2719022973993004,
                  "w": -0.20050815497879898
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999998211860657
                }
              }
            },
            {
              "_$override": "#8",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.16817530989646912,
                  "y": 1.907348590179936e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 1.4440633133716574e-9,
                  "y": 3.842149354227329e-8,
                  "z": 0.4741039003288338,
                  "w": -0.8804689044440954
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999403953552,
                  "y": 1.0000001192092896,
                  "z": 1.0000001192092896
                }
              }
            },
            {
              "_$override": "#9",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.155526265501976
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.13305778801441193,
                  "y": 0.010030930811162938,
                  "z": 0.01653413525702431,
                  "w": -0.9928777841728328
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999998211860657,
                  "y": 0.9999999403953552,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#10",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.11467284709215164,
                  "y": 0.1618776023387909
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 3.03265466072844e-7,
                  "y": -2.1938741667781763e-7,
                  "z": -0.7111262167692541,
                  "w": -0.7030643667711794
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 0.9999999403953552,
                  "z": 1
                }
              }
            },
            {
              "_$override": "#11",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.37733083963394165,
                  "y": -0.00008134626841638237,
                  "z": 3.814621507558513e-9
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -8.48792680585575e-9,
                  "y": 1.857837794716488e-8,
                  "z": -0.0056994250044172245,
                  "w": -0.9999837581454105
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#12",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.10990432649850845,
                  "y": -0.0019666252192109823,
                  "z": -9.136083889416113e-9
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.44402366876602173,
                  "y": 0.013746960243285578,
                  "z": 0.0032902210600803815,
                  "w": -0.913845212789747
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999998807907104,
                  "y": 1,
                  "z": 0.9999998807907104
                }
              }
            },
            {
              "_$override": "#13",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.021877212449908257,
                  "y": -0.00018568515952210873,
                  "z": 0.0872485339641571
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.5683110356330872,
                  "y": 0.14378688497208467,
                  "z": 0.8024156296128323,
                  "w": 0.10883416126134521
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 0.9999998807907104
                }
              }
            },
            {
              "_$override": "#14",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.27624934911727905
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.006529959850013256,
                  "y": -0.09092349043393891,
                  "z": -0.19353593163711688,
                  "w": -0.9768062452654314
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999403953552,
                  "y": 1,
                  "z": 1
                }
              }
            },
            {
              "_$override": "#15",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.1805582046508789,
                  "y": 9.53674295089968e-9,
                  "z": -7.629394360719743e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 3.79655809013002e-8,
                  "y": -1.4542466786338082e-8,
                  "z": 0.6431908352099456,
                  "w": -0.7657059158070615
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999403953552,
                  "y": 1,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#16",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.15404410660266876,
                  "y": 3.814697180359872e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.7059301733970642,
                  "y": 0.20934951292986104,
                  "z": -0.32801192205820945,
                  "w": -0.5909605026106536
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999403953552,
                  "y": 0.9999998807907104,
                  "z": 0.9999998807907104
                }
              }
            },
            {
              "_$override": "#17",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.021877212449908257,
                  "y": -0.0001852083223639056,
                  "z": -0.08724849671125412
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.7072823643684387,
                  "y": 0.00834097879002843,
                  "z": 0.7127926558012021,
                  "w": 0.00028236118436459034
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 0.9999998807907104,
                  "z": 0.9999998211860657
                }
              }
            },
            {
              "_$override": "#18",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.27624940872192383,
                  "y": 4.76837147544984e-9
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.08068247884511948,
                  "y": 0.1736178164471049,
                  "z": 0.1983329255228084,
                  "w": -0.960591684678791
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1.0000001192092896,
                  "z": 1.0000001192092896
                }
              }
            },
            {
              "_$override": "#19",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.18055817484855652,
                  "y": -1.907348590179936e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -2.137198196194845e-9,
                  "y": 6.835385590875363e-8,
                  "z": 0.46949236176675535,
                  "w": -0.8829365335303944
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
              "_$override": "#20",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.15404415130615234
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -0.705779492855072,
                  "y": -0.038505463357650094,
                  "z": -0.04676841502483098,
                  "w": -0.6977899794457834
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999999403953552,
                  "y": 0.9999999403953552,
                  "z": 0.9999998807907104
                }
              }
            },
            {
              "_$override": "#21",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": -0.13645243644714355,
                  "y": 0.057237278670072556,
                  "z": -0.12197995185852051
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.22989976406097412,
                  "y": 0.9324390732793586,
                  "z": 0.17428500298797064,
                  "w": 0.24432940598536854
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999998807907104,
                  "y": 1,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#22",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.16817530989646912,
                  "y": -2.38418573772492e-9,
                  "z": 3.814697180359872e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": -6.310255429298195e-9,
                  "y": 4.1671679440469194e-8,
                  "z": 0.5925686139681664,
                  "w": -0.8055199797272842
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 0.9999998211860657,
                  "y": 1,
                  "z": 0.9999999403953552
                }
              }
            },
            {
              "_$override": "#23",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.15552619099617004,
                  "y": -9.53674295089968e-9,
                  "z": 1.907348590179936e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.056382764130830765,
                  "y": -0.23171329234690266,
                  "z": -0.29657378931805767,
                  "w": -0.9258427485369428
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1.000000238418579,
                  "y": 1.0000001192092896,
                  "z": 1.0000001192092896
                }
              }
            },
            {
              "_$override": "#24",
              "transform": {
                "localPosition": {
                  "_$type": "Vector3",
                  "x": 0.11467286944389343,
                  "y": 0.1618775874376297,
                  "z": 3.814697180359872e-8
                },
                "localRotation": {
                  "_$type": "Quaternion",
                  "x": 0.052256740629673004,
                  "y": -0.16124362805576173,
                  "z": -0.8313268380066718,
                  "w": -0.5286596287017856
                },
                "localScale": {
                  "_$type": "Vector3",
                  "x": 1.0000001192092896,
                  "y": 0.9999999403953552,
                  "z": 0.9999999403953552
                }
              }
            }
          ]
        }
      ]
    }
  ]
}