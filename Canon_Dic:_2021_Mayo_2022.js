// Script de análisis de imágenes de los productos de la cámara CANON S110 NIR

//Puntos de muestreo e imagenes importadas en el script


var NIR1905_1 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_1_16"),
    NIR1905_2 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_2_16"),
    NIR1905_3 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_3_16"),
    NIR1905_4 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_4_16"),
    NIR1905_5 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_5_16"),
    NIR1905_6 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_6_16"),
    NIR1905_7 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_7_16"),
    NIR1905_8 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_8_16"),
    NIR1905_9 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_9_16"),
    NIR1905_10 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19_NIR_EPB_transparent_mosaic_group1_10_16"),
    NIR2005 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-20_NIR_EPB_transparent_mosaic_group1"),
    NIR1905_DSM_1 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_1"),
    NIR1905_DSM_2 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_2"),
    NIR1905_DSM_3 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_3"),
    NIR1905_DSM_4 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_4"),
    NIR1905_DSM_5 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_5"),
    NIR1905_DSM_6 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_6"),
    NIR1905_DSM_7 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_7"),
    NIR1905_DSM_8 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_8"),
    NIR1905_DSM_9 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_9"),
    NIR1905_DSM_10 = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-19_NIR_EPB_dsm_10"),
    NIR2005_DSM = ee.Image("users/martagond/Punta_Banda/2022-05-19-20_NIR_EPB/2022-05-19-20_NIR_EPB_DSM/2022-05-20_NIR_EPB_dsm"),
    NIR031221 = ee.Image("users/martagond/Punta_Banda/2021-12-03_EPB_NIR/2021-12-03_EPB_NIR_mosaic_group_10cm"),
  pix_train = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-116.62381963840811, 31.759793985292337],
          [-116.62381963840811, 31.756838304985678],
          [-116.61806898228018, 31.756838304985678],
          [-116.61806898228018, 31.759793985292337]]], null, false),
    zostera = 
    /* color: #188205 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62277667628639, 31.759290579097534]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6237227542621, 31.759016192370314]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62405019893582, 31.7632891319513]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62225248380607, 31.765830034108276]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62224946632092, 31.76581378602627]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62203556015199, 31.765754779809733]),
            {
              "clase": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62200940861409, 31.765702329807883]),
            {
              "clase": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62252808078235, 31.765142713491066]),
            {
              "clase": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62275597650402, 31.764589065092864]),
            {
              "clase": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62887008165674, 31.74059797551111]),
            {
              "clase": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6332399686205, 31.74325545610254]),
            {
              "clase": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63340894778844, 31.743493819097388]),
            {
              "clase": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63277728756543, 31.743701388286986]),
            {
              "clase": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6325546642172, 31.743510926465778]),
            {
              "clase": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61927391023953, 31.766739429217672]),
            {
              "clase": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63077344734265, 31.745664641300113]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63086196024014, 31.745096688189193]),
            {
              "clase": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63288836915089, 31.74598283037596]),
            {
              "clase": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62942453194954, 31.739368781771237]),
            {
              "clase": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62933199573853, 31.739959580708422]),
            {
              "clase": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62335582068111, 31.763383953176387],
                  [-116.6234604268327, 31.763314398124642],
                  [-116.62354022280691, 31.763219757506004],
                  [-116.62362806523879, 31.763127397329146],
                  [-116.6238037495866, 31.762944957301332],
                  [-116.62366427471783, 31.76288566419235],
                  [-116.62360459557519, 31.762919871775356],
                  [-116.62353552868511, 31.762908469238763],
                  [-116.62336386730816, 31.763209495324755]]]),
            {
              "clase": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6229844545308, 31.75918418236841],
                  [-116.62284565021427, 31.759191594305566],
                  [-116.62288856555851, 31.759255450970123],
                  [-116.62293282200726, 31.75923150472606],
                  [-116.6229596440974, 31.759220671899353],
                  [-116.62303139319968, 31.759200146550548],
                  [-116.62307095577152, 31.759206418178028],
                  [-116.62305620362194, 31.759142561479628],
                  [-116.62304312786105, 31.75917192416608]]]),
            {
              "clase": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62257877041729, 31.759363779139626],
                  [-116.62260425140293, 31.759433907308036],
                  [-116.62262939711412, 31.759447020703895],
                  [-116.6226525311652, 31.759436758045485],
                  [-116.62265521337422, 31.759351235884377]]]),
            {
              "clase": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62260211475801, 31.759625417961548],
                  [-116.62263966566937, 31.759671029563847],
                  [-116.62265173557894, 31.759724623275538],
                  [-116.62265575888635, 31.75968870411402],
                  [-116.62264637114109, 31.759648223779774],
                  [-116.62267118157696, 31.75962427766703],
                  [-116.62267989874759, 31.759586648039818]]]),
            {
              "clase": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62135493475093, 31.768035574870247],
                  [-116.62135493475093, 31.768030444019587],
                  [-116.62134118842972, 31.768030444019587],
                  [-116.62134118842972, 31.768035574870247]]], null, false),
            {
              "clase": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6298479915852, 31.743784724181523]),
            {
              "clase": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62914612572031, 31.74371705302868]),
            {
              "clase": 1,
              "system:index": "26"
            })]),
    zostera_m = 
    /* color: #188205 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62270744709804, 31.75920010408531],
                  [-116.62271448789552, 31.759255693586628],
                  [-116.62281641183309, 31.759239729425435],
                  [-116.62279998330051, 31.759213217503838],
                  [-116.62280031857978, 31.759175872753197],
                  [-116.62275120063596, 31.75920737349198]]]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62352358068581, 31.762924211891217],
                  [-116.6235208984768, 31.76298806598042],
                  [-116.62363489235993, 31.76299034648278],
                  [-116.62363221015092, 31.762927632647116]]]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62390177215691, 31.7625271690045],
                  [-116.62390177215691, 31.762588742855453],
                  [-116.62395541633721, 31.762588742855453],
                  [-116.62395541633721, 31.762530589775075]]]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6234446963532, 31.763176403018768],
                  [-116.62344737856222, 31.763222012962693],
                  [-116.62356137244535, 31.76321859221766],
                  [-116.62356137244535, 31.763178683516497]]]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62275753713504, 31.764529855323012],
                  [-116.62276021934406, 31.764577745063093],
                  [-116.62283330953971, 31.764576034715663],
                  [-116.6228306273307, 31.764528144974694]]]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62005275533274, 31.764209029894932],
                  [-116.62005141422823, 31.764246657680395],
                  [-116.62008494184091, 31.764246657680395],
                  [-116.62008427128866, 31.764211310367223]]]),
            {
              "clase": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61927155797912, 31.766698041253225],
                  [-116.61928161626292, 31.766684073735004],
                  [-116.61925211196376, 31.76668179332366],
                  [-116.61925211196376, 31.766699466510083]]]),
            {
              "clase": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62127212154759, 31.768079757183532]),
            {
              "clase": 1,
              "system:index": "7"
            })]),
    zostera_sumergida = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.Feature(
        ee.Geometry({
          "type": "GeometryCollection",
          "geometries": [
            {
              "type": "Point",
              "coordinates": [
                -116.62242933660097,
                31.75916043888496
              ]
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -116.6223585933382,
                    31.759187806041535
                  ],
                  [
                    -116.6223585933382,
                    31.759141338885502
                  ],
                  [
                    -116.62229522615023,
                    31.759141338885502
                  ],
                  [
                    -116.62229522615023,
                    31.759187806041535
                  ]
                ]
              ],
              "geodesic": false,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -116.62193245476458,
                    31.759092458790565
                  ],
                  [
                    -116.62193245476458,
                    31.75905368860979
                  ],
                  [
                    -116.62188015168879,
                    31.75905368860979
                  ],
                  [
                    -116.62188015168879,
                    31.759092458790565
                  ]
                ]
              ],
              "geodesic": false,
              "evenOdd": true
            },
            {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    -116.62131906020535,
                    31.768039565531694
                  ],
                  [
                    -116.62131906020535,
                    31.768037000106517
                  ],
                  [
                    -116.62130564916028,
                    31.768037000106517
                  ],
                  [
                    -116.62130564916028,
                    31.768039565531694
                  ]
                ]
              ],
              "geodesic": false,
              "evenOdd": true
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62109668216524,
                31.76822279037303
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62217166233349,
                31.76585722563276
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62216529208708,
                31.765762872723386
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62216395098257,
                31.765886586186124
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61944145169504,
                31.767153810249383
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61936896141478,
                31.76713751746043
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61938203718373,
                31.767124975258813
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61942400631865,
                31.767053338917982
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62106941672013,
                31.768250521802983
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6195195143017,
                31.76669110763333
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61952554927198,
                31.76672873440951
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62227041183003,
                31.765642120627426
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62204264362381,
                31.76556843018248
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62487796807156,
                31.76425088159403
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62242452883814,
                31.758990240591746
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62240173006151,
                31.75891384042968
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62277648660431,
                31.75762296948764
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62274966451416,
                31.757534024695484
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62197262865807,
                31.757488081642347
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62197195810582,
                31.75752685247893
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6219880513599,
                31.757486941323368
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61959863130626,
                31.766424094101662
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62369540624482,
                31.759002007411766
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62291702502489,
                31.75891818485405
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62485305921174,
                31.74702036670552
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62613932791133,
                31.745630452731408
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62504816636739,
                31.764177307880885
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6208993747264,
                31.75456653571622
              ]
            }
          ],
          "coordinates": []
        }),
        {
          "system:index": "0",
          "clase": 2
        }),
    ulva = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63627286117547, 31.734520899281147],
                  [-116.63627219062322, 31.73454770341992],
                  [-116.63631041210168, 31.73454656281841],
                  [-116.63630907099717, 31.734523750785613]]]),
            {
              "clase": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63644519310468, 31.734478697004366],
                  [-116.63644720476144, 31.73450093874722],
                  [-116.63647872071736, 31.734499798145148],
                  [-116.63647737961286, 31.7344798376067]]]),
            {
              "clase": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63660411398881, 31.7344479007362],
                  [-116.63660344343656, 31.734463298871557],
                  [-116.63662959497445, 31.734462728570293],
                  [-116.63663093607896, 31.734447330434836]]]),
            {
              "clase": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63679243242719, 31.734716141120636],
                  [-116.63679377353169, 31.73474807789866],
                  [-116.63682394838311, 31.734746937299615],
                  [-116.6368226072786, 31.734717281720034]]]),
            {
              "clase": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6367028707143, 31.73492785560987],
                  [-116.63670421181881, 31.734949526946625],
                  [-116.63672969280445, 31.734947564318595],
                  [-116.63672634004318, 31.73492589298138]]]),
            {
              "clase": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63663815500819, 31.733065402467997],
                  [-116.63663748445593, 31.733101331982667],
                  [-116.63668375256144, 31.733101902292304],
                  [-116.63668375256144, 31.733069394636974]]]),
            {
              "clase": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63689054111151, 31.73447879282369]),
            {
              "clase": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62809543816662, 31.752449661298257]),
            {
              "clase": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62815810937185, 31.75241676704226]),
            {
              "clase": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62844400116234, 31.75218973452685]),
            {
              "clase": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62869595994798, 31.752077388232983]),
            {
              "clase": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63045267771447, 31.75159456683711]),
            {
              "clase": 3,
              "system:index": "11"
            })]),
    spartina = 
    /* color: #00ca22 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62829064005685, 31.739071219601602]),
            {
              "clase": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6283711063273, 31.739479534094503]),
            {
              "clase": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62767641419244, 31.738500944951124]),
            {
              "clase": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62659237768936, 31.741068295923373]),
            {
              "clase": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6267884398236, 31.741999670885775]),
            {
              "clase": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62536944675404, 31.74465607092232]),
            {
              "clase": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62332290367267, 31.748986904543006]),
            {
              "clase": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63159941680503, 31.74737678311596]),
            {
              "clase": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6317013407476, 31.747180626624363]),
            {
              "clase": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62806605817224, 31.750579449610726]),
            {
              "clase": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62779783727075, 31.75102648692488]),
            {
              "clase": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6323703521436, 31.748320928688564]),
            {
              "clase": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63217455088551, 31.748756572642815]),
            {
              "clase": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63257688223774, 31.74797195587495]),
            {
              "clase": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63291275185146, 31.747228540816447]),
            {
              "clase": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63324534576931, 31.74653970927124]),
            {
              "clase": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63366446506201, 31.745399226016385]),
            {
              "clase": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61937236868428, 31.76391504473208],
                  [-116.61881446920918, 31.764257116033146],
                  [-116.61895930849599, 31.764453236342113],
                  [-116.61945819937276, 31.76409292196645]]]),
            {
              "clase": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61997766995, 31.761968021931892],
                  [-116.61998571657705, 31.762173839313117],
                  [-116.620067523952, 31.762164717222806],
                  [-116.62006417119073, 31.761960040085164]]]),
            {
              "clase": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61988871761042, 31.76146685834777],
                  [-116.61989609368521, 31.76161053224902],
                  [-116.62002551027018, 31.761607111444448],
                  [-116.6200194752999, 31.761467998617718]]]),
            {
              "clase": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6195218964547, 31.75844603882948],
                  [-116.6195232375592, 31.758699186672864],
                  [-116.61966941795052, 31.758719712143325],
                  [-116.61969489893616, 31.758455161286314]]]),
            {
              "clase": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62369914629713, 31.748360431161732],
                  [-116.62370585181966, 31.74865466199437],
                  [-116.62397139051214, 31.748646678999645],
                  [-116.6239633438851, 31.748385520649048]]]),
            {
              "clase": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62866459919408, 31.738005786822903],
                  [-116.62859217973909, 31.73829434762522],
                  [-116.62847684456304, 31.73837760828091],
                  [-116.62866996361211, 31.738425511550407],
                  [-116.62866996361211, 31.738300050553985],
                  [-116.62880407406286, 31.738037722466846]]]),
            {
              "clase": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62663861928515, 31.743117985248382]),
            {
              "clase": 4,
              "system:index": "23"
            })]),
    agua = 
    /* color: #5cd9ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62123511554145, 31.764290259914723]),
            {
              "clase": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62037680865669, 31.766753135072094]),
            {
              "clase": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6194970440998, 31.769909168148043]),
            {
              "clase": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62147114993476, 31.761444189204855]),
            {
              "clase": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62434647799873, 31.76182731920638]),
            {
              "clase": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62490437747383, 31.763487530884426]),
            {
              "clase": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61627839328193, 31.773948941121294]),
            {
              "clase": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61751220942878, 31.774988721183252]),
            {
              "clase": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61816666842842, 31.773611466132717]),
            {
              "clase": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62134930420177, 31.76584085110518]),
            {
              "clase": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62206839845284, 31.762865113220485]),
            {
              "clase": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62148668908948, 31.757611868444886]),
            {
              "clase": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62192657136792, 31.756061023738926]),
            {
              "clase": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62318961889166, 31.752815588642072]),
            {
              "clase": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62318961889166, 31.751766436298006]),
            {
              "clase": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6239567751589, 31.750015671171557]),
            {
              "clase": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62566613695316, 31.747458260086436]),
            {
              "clase": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62759732744388, 31.745368945843264]),
            {
              "clase": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6285869604377, 31.743401050754983]),
            {
              "clase": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63046450674813, 31.742944852642157]),
            {
              "clase": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63049997639438, 31.74084947842617]),
            {
              "clase": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63102055967502, 31.73964834925988]),
            {
              "clase": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63273734541693, 31.741678656493768]),
            {
              "clase": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62026401350438, 31.764447237782328],
                  [-116.62030692884862, 31.765751655392197],
                  [-116.62158902475774, 31.765760777128932],
                  [-116.62153538057744, 31.764474603375564]]]),
            {
              "clase": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61660200550362, 31.771208959555793],
                  [-116.61640352203652, 31.772027583558106],
                  [-116.6170123834829, 31.772143877745165],
                  [-116.61724305345818, 31.77131385328662]]]),
            {
              "clase": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62815596322719, 31.742035896613164],
                  [-116.62849928598109, 31.742975671495312],
                  [-116.63013006906215, 31.74205414475991],
                  [-116.6303553746194, 31.739955584316505]]]),
            {
              "clase": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63052495988828, 31.750971160011655],
                  [-116.6305289832018, 31.751122832986322],
                  [-116.63074892434102, 31.751127394575708],
                  [-116.63074902579271, 31.75096887921314]]]),
            {
              "clase": 5,
              "system:index": "26"
            })]),
    arena = 
    /* color: #322e26 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.63039604430298, 31.751720906829668]),
            {
              "clase": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62993336324791, 31.75187257857611]),
            {
              "clase": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62940248776546, 31.752013014198383]),
            {
              "clase": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62922814417949, 31.751977662213022]),
            {
              "clase": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62572961840266, 31.753636298968182]),
            {
              "clase": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62479877032476, 31.754709506519315]),
            {
              "clase": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62496238507467, 31.75550546962487]),
            {
              "clase": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62945316501934, 31.751824974250916]),
            {
              "clase": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63158139912045, 31.750307702294666]),
            {
              "clase": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63143119541562, 31.749443887466022]),
            {
              "clase": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6289629343349, 31.748941400170974]),
            {
              "clase": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62895340818218, 31.750101144312097]),
            {
              "clase": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62575587198316, 31.745916218261666]),
            {
              "clase": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62531129583894, 31.74648017475546]),
            {
              "clase": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.624420802446, 31.74568812568105]),
            {
              "clase": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62325125137873, 31.761362032458198]),
            {
              "clase": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62323810634354, 31.762649893913036]),
            {
              "clase": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62317373332718, 31.765190347997944]),
            {
              "clase": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62382079221729, 31.763865239720314]),
            {
              "clase": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62003840847488, 31.763875783994095]),
            {
              "clase": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61966826363083, 31.76478797170727]),
            {
              "clase": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61910346793279, 31.765841537325375]),
            {
              "clase": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61871722983464, 31.766397961079516]),
            {
              "clase": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61872929977521, 31.76625543482191]),
            {
              "clase": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61811583841434, 31.767132062761494]),
            {
              "clase": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61917531097522, 31.767373784874692]),
            {
              "clase": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62953095270589, 31.73853956685424],
                  [-116.6294424398084, 31.738918229455958],
                  [-116.6296757919927, 31.738936478216935],
                  [-116.62977235151723, 31.73856465900226]]]),
            {
              "clase": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63277478773348, 31.73983734812982],
                  [-116.63265140610663, 31.740608347573932],
                  [-116.63288207610464, 31.740640282323728],
                  [-116.63298400005723, 31.73988753172087]]]),
            {
              "clase": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62401303941643, 31.755626274344483],
                  [-116.62402376825248, 31.756185040188054],
                  [-116.62430003578102, 31.756185040188054],
                  [-116.62430003578102, 31.755633116395625]]]),
            {
              "clase": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62283545534989, 31.75998270856712],
                  [-116.62313318055054, 31.76116860072688],
                  [-116.62349527876755, 31.761091062088422],
                  [-116.62315463822266, 31.759905168935127]]]),
            {
              "clase": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62449015246837, 31.761035792078115],
                  [-116.62456324266402, 31.761210254027507],
                  [-116.62462828623264, 31.7611948603393],
                  [-116.62455720769374, 31.76101697753453]]]),
            {
              "clase": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62379540060041, 31.763728930010185],
                  [-116.62397913191793, 31.764137135771218],
                  [-116.62429295037268, 31.76404363628662],
                  [-116.62410519574163, 31.763652533759892]]]),
            {
              "clase": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6228487994302, 31.764828902560218],
                  [-116.6228850092519, 31.76511623970043],
                  [-116.62338658233769, 31.76510141677457],
                  [-116.62336110135205, 31.76483346347418]]]),
            {
              "clase": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61392469291684, 31.772794229931193]),
            {
              "clase": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61943308557628, 31.774150943417844]),
            {
              "clase": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62021897281764, 31.77446333402638]),
            {
              "clase": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62092975820659, 31.774568224067107]),
            {
              "clase": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62016898796026, 31.75672347167402]),
            {
              "clase": 6,
              "system:index": "37"
            })]),
    lodo = 
    /* color: #ab6550 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62340007696626, 31.76455008918798]),
            {
              "clase": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62536747121678, 31.764070724187615]),
            {
              "clase": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62457193234708, 31.76411095741286]),
            {
              "clase": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62007089042757, 31.759754238743835]),
            {
              "clase": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62277252685986, 31.758626176817568]),
            {
              "clase": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62272022378407, 31.75841750077814]),
            {
              "clase": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62235675987255, 31.75759872945602]),
            {
              "clase": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62352558779816, 31.754805892050072]),
            {
              "clase": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62961732160991, 31.74387596315642]),
            {
              "clase": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6293075264687, 31.743950094757356]),
            {
              "clase": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62909944898472, 31.744377190600176]),
            {
              "clase": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62580982120078, 31.74599758125989]),
            {
              "clase": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6253236075756, 31.7634571106081]),
            {
              "clase": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62450151191432, 31.761007429690594]),
            {
              "clase": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62837123634536, 31.75065543101478]),
            {
              "clase": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6284517026158, 31.750729557188492]),
            {
              "clase": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62554918747146, 31.746547593528902]),
            {
              "clase": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62444381689654, 31.745817271536023]),
            {
              "clase": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62299095416121, 31.76539405923197]),
            {
              "clase": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62028404079157, 31.756827429406492]),
            {
              "clase": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62447781100572, 31.748339605561945]),
            {
              "clase": 7,
              "system:index": "20"
            })]),
    linea_de_costa = 
    /* color: #0d38d6 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(
            [[-116.6244702502808, 31.74579052061953],
             [-116.62466122700766, 31.745789326930208],
             [-116.62606489661117, 31.74560137086888],
             [-116.61516242230866, 31.774222564329794],
             [-116.6151329180095, 31.773755116920217],
             [-116.61624313104332, 31.770300727013097],
             [-116.61924681308348, 31.7644511775535],
             [-116.61926726492722, 31.764491940880397],
             [-116.62333205354673, 31.762834455007095],
             [-116.62015380977245, 31.75855383528163],
             [-116.62033634386736, 31.756774974344964],
             [-116.62082533855593, 31.75430493061878],
             [-116.6207707407627, 31.754309787255757],
             [-116.62146291002672, 31.752667989815127],
             [-116.6213702564036, 31.752011564107146],
             [-116.62071899617015, 31.75455684269858],
             [-116.63638446620205, 31.732741905765295],
             [-116.63482358221172, 31.7351204818809],
             [-116.63010702423274, 31.742640126255825]]),
        {
          "system:index": "0",
          "clase": 8
        }),
    zostera_122021 = 
    /* color: #188205 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62277667628639, 31.759290579097534]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6237227542621, 31.759016192370314]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62405019893582, 31.7632891319513]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62225248380607, 31.765830034108276]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62224946632092, 31.76581378602627]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62203556015199, 31.765754779809733]),
            {
              "clase": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62200940861409, 31.765702329807883]),
            {
              "clase": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62252808078235, 31.765142713491066]),
            {
              "clase": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62275597650402, 31.764589065092864]),
            {
              "clase": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62887008165674, 31.74059797551111]),
            {
              "clase": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6332399686205, 31.74325545610254]),
            {
              "clase": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63340894778844, 31.743493819097388]),
            {
              "clase": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63277728756543, 31.743701388286986]),
            {
              "clase": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6325546642172, 31.743510926465778]),
            {
              "clase": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61926452250798, 31.76673600860269]),
            {
              "clase": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63077344734265, 31.745664641300113]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63086196024014, 31.745096688189193]),
            {
              "clase": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63288836915089, 31.74598283037596]),
            {
              "clase": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62933199573853, 31.739959580708422]),
            {
              "clase": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6229844545308, 31.75918418236841],
                  [-116.62284565021427, 31.759191594305566],
                  [-116.62288856555851, 31.759255450970123],
                  [-116.62293282200726, 31.75923150472606],
                  [-116.6229596440974, 31.759220671899353],
                  [-116.62303139319968, 31.759200146550548],
                  [-116.62307095577152, 31.759206418178028],
                  [-116.62305620362194, 31.759142561479628],
                  [-116.62304312786105, 31.75917192416608]]]),
            {
              "clase": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62257877041729, 31.759363779139626],
                  [-116.62260425140293, 31.759433907308036],
                  [-116.62262939711412, 31.759447020703895],
                  [-116.6226525311652, 31.759436758045485],
                  [-116.62265521337422, 31.759351235884377]]]),
            {
              "clase": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62260211475801, 31.759625417961548],
                  [-116.62263966566937, 31.759671029563847],
                  [-116.62265173557894, 31.759724623275538],
                  [-116.62265575888635, 31.75968870411402],
                  [-116.62264637114109, 31.759648223779774],
                  [-116.62267118157696, 31.75962427766703],
                  [-116.62267989874759, 31.759586648039818]]]),
            {
              "clase": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62135493475093, 31.768035574870247],
                  [-116.62135493475093, 31.768030444019587],
                  [-116.62134118842972, 31.768030444019587],
                  [-116.62134118842972, 31.768035574870247]]], null, false),
            {
              "clase": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62979837071842, 31.743787005157]),
            {
              "clase": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62498613629482, 31.762720820523445]),
            {
              "clase": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62122857587352, 31.768114292061107]),
            {
              "clase": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62116420285716, 31.768195245376]),
            {
              "clase": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6215188748742, 31.767938176217076]),
            {
              "clase": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62156715463647, 31.76794330707285]),
            {
              "clase": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62175363563065, 31.767878076701866]),
            {
              "clase": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62179588042264, 31.7678532775455]),
            {
              "clase": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62266539052214, 31.767048840369963]),
            {
              "clase": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62355730007067, 31.76320468628465],
                  [-116.62355730007067, 31.76314083234491],
                  [-116.62348622153178, 31.76314083234491],
                  [-116.62348622153178, 31.76320468628465]]], null, false),
            {
              "clase": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62386441300288, 31.763002862074686],
                  [-116.62386441300288, 31.762970935040684],
                  [-116.62380272219553, 31.762970935040684],
                  [-116.62380272219553, 31.763002862074686]]], null, false),
            {
              "clase": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62353181908503, 31.763043911102184],
                  [-116.62353181908503, 31.763001721823645],
                  [-116.62348488042727, 31.763001721823645],
                  [-116.62348488042727, 31.763043911102184]]], null, false),
            {
              "clase": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6236887283124, 31.76308039911137]),
            {
              "clase": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62927551463073, 31.74717207959959]),
            {
              "clase": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62924869254059, 31.747158394246185]),
            {
              "clase": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61471667030057, 31.775745921345628]),
            {
              "clase": 1,
              "system:index": "38"
            })]),
    zostera_sumergida_1221 = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62506662942774, 31.764208371614007]),
            {
              "clase": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62137765644601, 31.767560325713944]),
            {
              "clase": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62137765644601, 31.767573437953914]),
            {
              "clase": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62133766938555, 31.767616409336647]),
            {
              "clase": 2,
              "system:index": "3"
            })]),
    ulva_122021 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62804932452053, 31.752578886425066]),
            {
              "clase": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62822500921101, 31.752512174203986]),
            {
              "clase": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62824847853989, 31.752551517314544]),
            {
              "clase": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6281613067469, 31.752627922727857]),
            {
              "clase": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62809291041702, 31.752451734030554]),
            {
              "clase": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62818118456669, 31.75251496095127]),
            {
              "clase": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62830791894264, 31.75266834196436]),
            {
              "clase": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62830791894264, 31.752618165304042]),
            {
              "clase": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62813317394263, 31.752617156068958],
                  [-116.62813317394263, 31.752584085073043],
                  [-116.6280641070605, 31.752584085073043],
                  [-116.6280641070605, 31.752617156068958]]], null, false),
            {
              "clase": 3,
              "system:index": "8"
            })]),
    spartina_122021 = 
    /* color: #00ca22 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62999228685243, 31.75207507182784]),
            {
              "clase": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62982196657998, 31.75211612570186]),
            {
              "clase": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62991182058198, 31.752124108397513]),
            {
              "clase": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62991986720903, 31.75208191414146]),
            {
              "clase": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63020820467813, 31.752003227504506]),
            {
              "clase": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63041339366777, 31.752018052528157]),
            {
              "clase": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63055018632753, 31.752072791056523]),
            {
              "clase": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63074196427209, 31.751980419771137]),
            {
              "clase": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63077280967576, 31.75193480428755]),
            {
              "clase": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62004393049237, 31.76080218520571]),
            {
              "clase": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62004191883561, 31.760843235209354]),
            {
              "clase": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62765900191751, 31.75067292055015]),
            {
              "clase": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62803317007508, 31.750782399165132]),
            {
              "clase": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63161440089172, 31.747286124132536]),
            {
              "clase": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63154466345733, 31.74742753915833]),
            {
              "clase": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63167072728103, 31.747150411157264]),
            {
              "clase": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62847505133671, 31.73868053239868],
                  [-116.62847505133671, 31.73855849340401],
                  [-116.62834630530399, 31.73855849340401],
                  [-116.62834630530399, 31.73868053239868]]], null, false),
            {
              "clase": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62856968342541, 31.739183639612026],
                  [-116.62856968342541, 31.739140298914478],
                  [-116.628449654572, 31.739140298914478],
                  [-116.628449654572, 31.739183639612026]]], null, false),
            {
              "clase": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62832873127226, 31.739118318277175],
                  [-116.62832873127226, 31.739007685325724],
                  [-116.62824290058379, 31.739007685325724],
                  [-116.62824290058379, 31.739118318277175]]], null, false),
            {
              "clase": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63332892655988, 31.746453036012028],
                  [-116.63332892655988, 31.746393732338895],
                  [-116.63323370813985, 31.746393732338895],
                  [-116.63323370813985, 31.746453036012028]]], null, false),
            {
              "clase": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63292956863775, 31.74737124673519],
                  [-116.63292956863775, 31.747233252959347],
                  [-116.63285312568082, 31.747233252959347],
                  [-116.63285312568082, 31.74737124673519]]], null, false),
            {
              "clase": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6317074401955, 31.74727797438863],
                  [-116.6317074401955, 31.747189019657142],
                  [-116.63155187207263, 31.747189019657142],
                  [-116.63155187207263, 31.74727797438863]]], null, false),
            {
              "clase": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62688459911493, 31.741979304077056],
                  [-116.62688459911493, 31.74189034425579],
                  [-116.62677596964983, 31.74189034425579],
                  [-116.62677596964983, 31.741979304077056]]], null, false),
            {
              "clase": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6280816210895, 31.750604658342485],
                  [-116.6280816210895, 31.750556761372422],
                  [-116.62796494499736, 31.750556761372422],
                  [-116.62796494499736, 31.750604658342485]]], null, false),
            {
              "clase": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6301404414581, 31.75207203577367],
                  [-116.6301404414581, 31.751971681779445],
                  [-116.6300143776344, 31.751971681779445],
                  [-116.6300143776344, 31.75207203577367]]], null, false),
            {
              "clase": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6263161082003, 31.74450755312993],
                  [-116.6263161082003, 31.744402629016605],
                  [-116.62606800386642, 31.744402629016605],
                  [-116.62606800386642, 31.74450755312993]]], null, false),
            {
              "clase": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63215227650376, 31.748680933778193],
                  [-116.63215227650376, 31.748631895384936],
                  [-116.63206510471078, 31.748631895384936],
                  [-116.63206510471078, 31.748680933778193]]], null, false),
            {
              "clase": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63205705808373, 31.748745938119956]),
            {
              "clase": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63251370454857, 31.748315991482137]),
            {
              "clase": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63234874869416, 31.748336519254835]),
            {
              "clase": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61995680985142, 31.7608065458289],
                  [-116.61995680985142, 31.76074497079218],
                  [-116.619881707999, 31.76074497079218],
                  [-116.619881707999, 31.7608065458289]]], null, false),
            {
              "clase": 4,
              "system:index": "30"
            })]),
    agua_122021 = 
    /* color: #5cd9ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62633827300321, 31.747780754911613]),
            {
              "clase": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62542632193815, 31.74867485440656]),
            {
              "clase": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62506154151212, 31.749422971839564]),
            {
              "clase": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62563016982328, 31.7473428254785]),
            {
              "clase": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6277222928549, 31.74517139477892]),
            {
              "clase": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62320857370877, 31.751541843625816]),
            {
              "clase": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62349825228237, 31.752809951079303]),
            {
              "clase": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62403469408535, 31.74973544474226]),
            {
              "clase": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62194515782411, 31.755976585261248]),
            {
              "clase": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62146236020143, 31.757573044109744]),
            {
              "clase": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6243401686088, 31.76179628010986]),
            {
              "clase": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62135755218424, 31.7614587607928]),
            {
              "clase": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62189399398721, 31.762918294937815]),
            {
              "clase": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6212073484794, 31.76432195429202]),
            {
              "clase": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62125026382364, 31.765909147471117]),
            {
              "clase": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61755235960233, 31.774969029589908]),
            {
              "clase": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61629708578336, 31.773956612095386]),
            {
              "clase": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61820681860196, 31.773555290382145]),
            {
              "clase": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61604363060243, 31.77258215776008]),
            {
              "clase": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61948758697756, 31.769834832193773]),
            {
              "clase": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61993243462415, 31.769274099117776],
                  [-116.61993243462415, 31.767987974200274],
                  [-116.61948182350964, 31.767987974200274],
                  [-116.61948182350964, 31.769274099117776]]], null, false),
            {
              "clase": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61621396555122, 31.773690896853157],
                  [-116.61621396555122, 31.772915612476677],
                  [-116.61569898142037, 31.772915612476677],
                  [-116.61569898142037, 31.773690896853157]]], null, false),
            {
              "clase": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62155667919973, 31.762560785693875],
                  [-116.62155667919973, 31.761794530177678],
                  [-116.62069837231496, 31.761794530177678],
                  [-116.62069837231496, 31.762560785693875]]], null, false),
            {
              "clase": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62811980182187, 31.744548862402798],
                  [-116.62811980182187, 31.743736838266177],
                  [-116.62728295260922, 31.743736838266177],
                  [-116.62728295260922, 31.744548862402798]]], null, false),
            {
              "clase": 5,
              "system:index": "23"
            })]),
    arena_122021 = 
    /* color: #cebd9e */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "polygon"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.61988627693992, 31.774573729068322]),
            {
              "clase": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61925327561241, 31.774591970801307]),
            {
              "clase": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61367428086143, 31.772941079396958]),
            {
              "clase": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62333884245488, 31.761334007881608]),
            {
              "clase": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6239308667309, 31.75750930144825]),
            {
              "clase": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62495712963602, 31.755507581646995]),
            {
              "clase": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62478910955954, 31.75476527117951]),
            {
              "clase": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62326364255807, 31.76106280622869],
                  [-116.62326364255807, 31.76020987665781],
                  [-116.62299542165658, 31.76020987665781],
                  [-116.62299542165658, 31.76106280622869]]], null, false),
            {
              "clase": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62458382847552, 31.761175492463728],
                  [-116.62458382847552, 31.761018134582436],
                  [-116.62453823092227, 31.761018134582436],
                  [-116.62453823092227, 31.761175492463728]]], null, false),
            {
              "clase": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62430788312354, 31.764043631691404],
                  [-116.62430788312354, 31.763665071836943],
                  [-116.62380362782874, 31.763665071836943],
                  [-116.62380362782874, 31.764043631691404]]], null, false),
            {
              "clase": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62333692346014, 31.76510632758547],
                  [-116.62333692346014, 31.764832673157127],
                  [-116.62288094792761, 31.764832673157127],
                  [-116.62288094792761, 31.76510632758547]]], null, false),
            {
              "clase": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62434687510873, 31.75620127847693],
                  [-116.62434687510873, 31.75554444329342],
                  [-116.62393381492043, 31.75554444329342],
                  [-116.62393381492043, 31.75620127847693]]], null, false),
            {
              "clase": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62969959074304, 31.738912427398493],
                  [-116.62969959074304, 31.738547451400954],
                  [-116.62952792936609, 31.738547451400954],
                  [-116.62952792936609, 31.738912427398493]]], null, false),
            {
              "clase": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63266311743503, 31.740616878767188],
                  [-116.63289378741031, 31.740644251405328],
                  [-116.63299034693485, 31.739896063051525],
                  [-116.63275431254154, 31.739827630888225]]]),
            {
              "clase": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62578729429165, 31.745929721444398]),
            {
              "clase": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62533668317715, 31.746504512172002]),
            {
              "clase": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62442791289916, 31.74570601364537]),
            {
              "clase": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62945516837006, 31.751825620820814]),
            {
              "clase": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62922449839478, 31.751977292395708]),
            {
              "clase": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63039639008835, 31.75172412616953]),
            {
              "clase": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62895487905443, 31.75010822243721]),
            {
              "clase": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62897633672655, 31.748938964577643]),
            {
              "clase": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62572837424398, 31.753634339612788]),
            {
              "clase": 6,
              "system:index": "22"
            })]),
    lodo_122021 = 
    /* color: #ab6550 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62972138374192, 31.752013490982662]),
            {
              "clase": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62386994894283, 31.76429188496894],
                  [-116.62386994894283, 31.764204086821934],
                  [-116.6237036519839, 31.764204086821934],
                  [-116.6237036519839, 31.76429188496894]]], null, false),
            {
              "clase": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62414085205333, 31.764151635941133],
                  [-116.62414085205333, 31.76409348384288],
                  [-116.62397187288539, 31.76409348384288],
                  [-116.62397187288539, 31.764151635941133]]], null, false),
            {
              "clase": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62415158088939, 31.764013667177935],
                  [-116.62415158088939, 31.763958935710754],
                  [-116.62403356369273, 31.763958935710754],
                  [-116.62403356369273, 31.764013667177935]]], null, false),
            {
              "clase": 7,
              "system:index": "3"
            })]),
    filamentosa_122021 = 
    /* color: #ceff2e */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62547981657224, 31.764030006097702]),
            {
              "clase": 9,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62548786319928, 31.764208453229152]),
            {
              "clase": 9,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62550870323226, 31.76444198454102]),
            {
              "clase": 9,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6254884534078, 31.764137209090865]),
            {
              "clase": 9,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62548778285554, 31.76411611470322]),
            {
              "clase": 9,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62545559976024, 31.76385464223374]),
            {
              "clase": 9,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62544084761066, 31.76383297766131]),
            {
              "clase": 9,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62539994392318, 31.76374802968355]),
            {
              "clase": 9,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62537379739172, 31.763575812889904]),
            {
              "clase": 9,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62537357325061, 31.76339881701881]),
            {
              "clase": 9,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6253610164532, 31.763341922432982]),
            {
              "clase": 9,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62533654129594, 31.763297452795566]),
            {
              "clase": 9,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62531854724038, 31.763212018389698]),
            {
              "clase": 9,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62531586503137, 31.763188643293716]),
            {
              "clase": 9,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62531318282235, 31.76317182462346]),
            {
              "clase": 9,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.625244355611, 31.76307620124729]),
            {
              "clase": 9,
              "system:index": "15"
            })]),
    salicornia_122021 = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.625483310972, 31.76457404931618]),
            {
              "clase": 10,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62557987049654, 31.76449879399617]),
            {
              "clase": 10,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62496520236505, 31.76189483920609]),
            {
              "clase": 10,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62399021743599, 31.7584848455944]),
            {
              "clase": 10,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62433681319996, 31.758246480744777]),
            {
              "clase": 10,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6245607776527, 31.75817007996879]),
            {
              "clase": 10,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62463722060963, 31.758075434143937]),
            {
              "clase": 10,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62463722060963, 31.758075434143937]),
            {
              "clase": 10,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62524804916737, 31.755352029732745]),
            {
              "clase": 10,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62530035224316, 31.75550198501512]),
            {
              "clase": 10,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62512852421521, 31.755163694376222]),
            {
              "clase": 10,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62494891515628, 31.75506028377109]),
            {
              "clase": 10,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62501147118364, 31.75467760630225]),
            {
              "clase": 10,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62510132518564, 31.755063045011344]),
            {
              "clase": 10,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62564372678433, 31.754157728175255]),
            {
              "clase": 10,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62589853664075, 31.75406649933124]),
            {
              "clase": 10,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62638401647244, 31.753532808792365]),
            {
              "clase": 10,
              "system:index": "16"
            })]),
    cut_1221 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-116.6355299760497, 31.740472162232674],
          [-116.63328350397585, 31.73958324077779],
          [-116.63103439267117, 31.73870112310757],
          [-116.6304835196981, 31.7384862894346],
          [-116.63020741361309, 31.738377731148258],
          [-116.62992862594882, 31.738276015586816],
          [-116.62978872944927, 31.738226013006983],
          [-116.62975375534977, 31.738213654909195],
          [-116.62971744015366, 31.738205003609586],
          [-116.62964548033736, 31.73818513472863],
          [-116.62935529452632, 31.738108795391014],
          [-116.62906091834867, 31.73803031691567],
          [-116.6287578257124, 31.737950697405132],
          [-116.62861378130064, 31.737912419929092],
          [-116.62846973699374, 31.737883266771252],
          [-116.62817762534819, 31.73782724108408],
          [-116.6275947442177, 31.73771917969462],
          [-116.62729928095163, 31.737662866927888],
          [-116.62700381804662, 31.737607694043685],
          [-116.62671204361286, 31.7375525205293],
          [-116.6266524377915, 31.737541774392533],
          [-116.62664513504934, 31.737557261230346],
          [-116.62641863506985, 31.738023929312384],
          [-116.62631451098342, 31.7379819065426],
          [-116.62616287200463, 31.738246034955818],
          [-116.62613763190276, 31.738237570276976],
          [-116.62619189109094, 31.73812105104972],
          [-116.6261562962615, 31.7380826599933],
          [-116.6256910739164, 31.737967801823824],
          [-116.6256586231214, 31.737919496478227],
          [-116.62538222353726, 31.737846869952584],
          [-116.62510723120246, 31.737776197022583],
          [-116.62518196489563, 31.737561079098928],
          [-116.62513599914385, 31.73752331885052],
          [-116.62325190872792, 31.73725617966671],
          [-116.62334454100939, 31.736920133377904],
          [-116.61693690281604, 31.735736566591793],
          [-116.60432250883999, 31.776277167950596],
          [-116.61938579494624, 31.778539073791713],
          [-116.62745967504593, 31.760103455056903],
          [-116.63233216141816, 31.750429318674254]]]);

// Función para unir NIR y DSM y enmascarar los datos alpha=0
var nir_dsm = function(nir, dsm){
  return nir.addBands(dsm).updateMask(nir.select('b4').neq(0));
} ;

// NDVI CANON
var NDVI_cn = function(image) {
  var ndvi = image.normalizedDifference(['NIR', 'R']).rename('NDVI');
  return image.addBands(ndvi);
};

// EVI2 CANON c/nombres
var EVI2_cn = function(image) {
  var NIR_cn = image.select('NIR'); 
  var RED_cn = image.select('R');
  var EVI2_cn = NIR_cn.subtract(RED_cn).divide(NIR_cn.add(RED_cn).add(1)).multiply(2.4).rename('EVI2');
  return image.addBands(EVI2_cn);
};

var evi2Vis = {
  bands:['EVI2'],
  min: -1,
  max: 1,
  palette: ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
          '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
          '012E01', '011D01', '011301']
};

// Clasificacion

// Clasificacion No Supervisada
var classificationKmeans = function(image){
  var training = image.sample({
  region: pix_train,
  scale: 0.5,
  projection:'EPSG:4326',
  numPixels: 5000
  });
  var clusterer = ee.Clusterer.wekaKMeans(10).train(training);
  return image.cluster(clusterer);
};

// Clasificación supervisada
var classificationRForest = function(image,t_points){
  var training = image.sampleRegions({
    collection: t_points,
    properties: ['clase'],
    scale: 0.5
  });
  var trained = ee.Classifier.smileRandomForest(10).train({
    features: training, 
    classProperty: 'clase', 
    });
  return image.classify(trained);
};

// Matriz de confusión
var conf_matriz = function (image, v_points){
  var muestreo = image.sampleRegions({
  collection: v_points,
  properties: ['clase'],
  scale: 0.5,
  // projection:'EPSG:32611'
});
  return muestreo.errorMatrix('clase', 'classification');
};

// Extraer la capa clasificada como Zostera
var zostera_layer = function(image){
  var patch = image.eq(1); // Extraer la clase zostera, haciendo 1 donde se encuentra la clase zostera
  return image.updateMask(patch.eq(1)); // Enmascarar los lugares donde no hay zostera
};

// Calcular el area de la clase zostera
var area_t = function (image){
  var patch = image.eq(1);
  var area_pix = patch.multiply(ee.Image.pixelArea());
  var area = area_pix.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: imports_wtr_poly.max_poly_B8.geometry(),
  scale: 0.5,
  crs:'EPSG:32611',
  maxPixels: 1e12
  });
  var metros_area = ee.Number(area.get('classification'));
  var area_Km = metros_area.divide(1e6);
  return print('El area de la clase Zostera marina en km es', area_Km);
};

var class_color =
'<RasterSymbolizer>' +
  '<ChannelSelection>' + //used when image has more than one band (to specify which band in which channel).
    '<GrayChannel>' + 
        '<SourceChannelName>1</SourceChannelName>' +
    '</GrayChannel>' +
  '</ChannelSelection>' +
  '<ColorMap type="values">' +
    '<ColorMapEntry color="#188205" quantity="1" />' +
    '<ColorMapEntry color="#1a7004" quantity="2" />' +
    '<ColorMapEntry color="#98ff00" quantity="3" />' +
    '<ColorMapEntry color="#00ca22" quantity="4" />' +
    '<ColorMapEntry color="#5cd9ff" quantity="5" />' +
    '<ColorMapEntry color="#cebd9e" quantity="6" />' +
    '<ColorMapEntry color="#ab6550" quantity="7" />' +
    '<ColorMapEntry color="#0d38d6" quantity="8" />' +
    '<ColorMapEntry color="#ceff2e" quantity="9" />' +
    '<ColorMapEntry color="#d63000" quantity="10" />' +
  '</ColorMap>' +
'</RasterSymbolizer>';


// Objeto para importar script de polígono de cuerpo de agua
var imports_wtr_poly= require('users/martagond/Punta_Banda:PB_Planet_Polígono_de_Agua');

// 03 de Diciembre de 2021

//La imagen del 03 de Diciembre de 2021 incluye un segmento con algunos valores de 0, lo cual confunde demasiado
// a la clasificacion, arrojando un gran area como cierta clase, por ello se recorta a un poligono manualmente
NIR031221 = NIR031221.clip(cut_1221);
NIR031221 = NIR031221.select(['b1','b2','b3'],['NIR','R','G']); // Renombrar las bandas de NIR
NIR031221 = NDVI_cn(NIR031221); // Calculo de NDVI
NIR031221 = EVI2_cn(NIR031221); // Calculo de EVI2
var NIR031221_clip = NIR031221.clip(imports_wtr_poly.max_poly_B8);
// var NIR031221_clip_NS_Kmeans = classificationKmeans(NIR031221_clip);

var ground_t_diciembre = zostera_122021.merge(ulva_122021).merge(spartina_122021).merge(agua_122021).merge(arena_122021);
ground_t_diciembre = ground_t_diciembre.randomColumn();
var puntos_entrenamiento_diciembre = ground_t_diciembre.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion_diciembre = ground_t_diciembre.filter(ee.Filter.gte('random', 0.6));
var NIR031221_clip_class_RForest = classificationRForest(NIR031221_clip, puntos_entrenamiento_diciembre);
var conf_mat_NIR031221_clip_RForest = conf_matriz(NIR031221_clip_class_RForest, puntos_validacion_diciembre);
// print( 'El valor de overall accuracy de la clasificacion del 03/Diciembre/2021 es', conf_mat_NIR031221_clip_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 03/Diciembre/2021 es', conf_mat_NIR031221_clip_RForest.kappa());
var NIR031221_clip_class_RForest_layer = zostera_layer(NIR031221_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_NIR031221 = area_t(NIR031221_clip_class_RForest); // Calcular el área de la clase zostera
// Map.addLayer(NIR031221, {}, 'Dron 03/12/2021 CANON 10 cm Georef', false);
// Map.addLayer(NIR031221_clip, {}, 'Dron 03/12/2021 CANON 10 cm Georef', false);
// Map.addLayer(NIR031221, {bands:'NDVI'}, 'Dron 03/12/2021 CANON 10 cm Georef NDVI ', false);
// Map.addLayer(NIR031221, evi2Vis, 'Dron 03/12/2021 CANON 10 cm Georef EVI2 ', false);
// Map.addLayer(NIR031221_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest NIR 03/12/2021');
  // Map.addLayer(NIR031221_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera 03/Diciembre/2022');
exports.NIR031221_clip_class_RForest_layer = NIR031221_clip_class_RForest_layer;


// 19 y 20 de Mayo de 2022

// Aplicar funcion para unir cada tile de nir y dsm
NIR1905_1 = nir_dsm(NIR1905_1, NIR1905_DSM_1);
NIR1905_2 = nir_dsm(NIR1905_2, NIR1905_DSM_2);
NIR1905_3 = nir_dsm(NIR1905_3, NIR1905_DSM_3);
NIR1905_4 = nir_dsm(NIR1905_4, NIR1905_DSM_4);
NIR1905_5 = nir_dsm(NIR1905_5, NIR1905_DSM_5);
NIR1905_6 = nir_dsm(NIR1905_6, NIR1905_DSM_6);
NIR1905_7 = nir_dsm(NIR1905_7, NIR1905_DSM_7);
NIR1905_8 = nir_dsm(NIR1905_8, NIR1905_DSM_8);
NIR1905_9 = nir_dsm(NIR1905_9, NIR1905_DSM_9);
NIR1905_10 = nir_dsm(NIR1905_10, NIR1905_DSM_10);
NIR2005 = nir_dsm(NIR2005, NIR2005_DSM);

var nir_0522 = ee.ImageCollection([
  NIR1905_1,
  NIR1905_2,
  NIR1905_3,
  NIR1905_4,
  NIR1905_5,
  NIR1905_6,
  NIR1905_7,
  NIR1905_8,
  NIR1905_9,
  NIR1905_10,
  NIR2005
  ]).mosaic();



nir_0522 = nir_0522.select(['b1','b2','b3','b4','b1_1'],['NIR','R','G','Alpha','DSM']); //Renombrar las bandas
nir_0522 = NDVI_cn(nir_0522);
nir_0522 = EVI2_cn(nir_0522);
var nir_0522_clip = nir_0522.clip(imports_wtr_poly.max_poly_B8);

var nir_0522_clip_NS_Kmeans = classificationKmeans(nir_0522_clip);
var ground_t=zostera.merge(zostera_m).merge(spartina).merge(arena).merge(agua);
ground_t = ground_t.randomColumn(); // Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
var puntos_entrenamiento = ground_t.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion = ground_t.filter(ee.Filter.gte('random', 0.6));
var nir_0522_clip_class_RForest = classificationRForest(nir_0522_clip, puntos_entrenamiento);
var conf_mat_nir_0522_clip_class_RForest = conf_matriz(nir_0522_clip_class_RForest, puntos_validacion);
// print( 'El valor de overall accuracy de la clasificacion del 19-20/Mayo/2022 es', conf_mat_nir_0522_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 19-20/Mayo/2022 es', conf_mat_nir_0522_clip_class_RForest.kappa());
var nir_0522_clip_class_RForest_layer = zostera_layer(nir_0522_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_nir_0522 = area_t(nir_0522_clip_class_RForest); // Calcular el área de la clase zostera
// Map.addLayer(nir_0522, {bands:['NIR','R','G']}, 'Dron 05/2022 CANON NIR');
// Map.addLayer(nir_0522_clip, {bands:['NIR','R','G']}, 'Dron 05/2022 CANON NIR Cliped');
// Map.addLayer(nir_0522, {bands:'NDVI'}, 'Dron 05/2022 CANON 10 cm Georef NDVI ', false);
// Map.addLayer(nir_0522, evi2Vis, 'Dron 05/2022 CANON 10 cm Georef EVI2 ', false);
// Map.addLayer(nir_0522_clip_NS_Kmeans.randomVisualizer(), {}, 'Clusters KMeans NIR 0522', false);
// Map.addLayer(nir_0522_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest NIR 05 2022');
// Map.addLayer(nir_0522_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera Mayo/2022');
exports.nir_0522_clip_class_RForest_layer = nir_0522_clip_class_RForest_layer;
