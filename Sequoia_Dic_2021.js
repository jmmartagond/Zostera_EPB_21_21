var MS0212_1 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_MS_NoAlpha/2021_12_02_EPB_MS_NoAlpha_1"),
    MS0212_2 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_MS_NoAlpha/2021_12_02_EPB_MS_NoAlpha_2"),
    MS0212_3 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_MS_NoAlpha/2021_12_02_EPB_MS_NoAlpha_3"),
    MS0212_4 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_MS_NoAlpha/2021_12_02_EPB_MS_NoAlpha_4"),
    RGB0212_1 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_RGB_GCPS_Metashape/EsteroPuntabanda2021-12-02_SequoiaRGB_N-0-1"),
    RGB0212_2 = ee.Image("users/martagond/Punta_Banda/2021-12-02_EPB_RGB_GCPS_Metashape/EPB_2021-12-02_SequoiaRGB_S-0-3"),
    NIR0312_10 = ee.Image("users/martagond/Punta_Banda/2021-12-03_EPB_NIR/2021-12-03_EPB_NIR_mosaic_group_10cm"),
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
    /* color: #1c9706 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62277667628639, 31.759290579097534]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62374421193422, 31.759016192370314]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6240062777632, 31.76332362443145]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62232859148686, 31.76582319281096]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62236882462209, 31.765782145016292]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62203891291325, 31.765754779809733]),
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
            ee.Geometry.Point([-116.62251098169988, 31.76514499394033]),
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
            ee.Geometry.Point([-116.62877765235395, 31.750778520256567]),
            {
              "clase": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62691083487958, 31.752801727336283]),
            {
              "clase": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62558520741533, 31.753514533722637]),
            {
              "clase": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62785084223108, 31.742025904296096]),
            {
              "clase": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6274216887887, 31.742892687389514]),
            {
              "clase": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62887008165674, 31.74059797551111]),
            {
              "clase": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63302807410832, 31.74337748890861]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63333786924954, 31.7435474221744]),
            {
              "clase": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63273839553472, 31.74368542144276]),
            {
              "clase": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63258550962087, 31.743486976149157]),
            {
              "clase": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61924876453001, 31.766705223062104]),
            {
              "clase": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63016056258274, 31.745681748267476]),
            {
              "clase": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63086196024014, 31.745096688189193]),
            {
              "clase": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63306137163235, 31.745995375442575]),
            {
              "clase": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62947683502533, 31.739485116995034]),
            {
              "clase": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62933199573853, 31.739959580708422]),
            {
              "clase": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62803165921619, 31.741527616910453],
                  [-116.62798740276745, 31.741606312449502],
                  [-116.62791230091503, 31.74178537306453],
                  [-116.62797667393139, 31.741799059211953],
                  [-116.62809469112804, 31.74154358412668]]]),
            {
              "clase": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62268392209988, 31.75971093984038],
                  [-116.62270001535397, 31.759810145154376],
                  [-116.62273354296666, 31.759810145154376],
                  [-116.62275500063878, 31.75974514858136],
                  [-116.62276170616131, 31.759672169918648]]]),
            {
              "clase": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61444658767368, 31.7758176804164]),
            {
              "clase": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62379805037872, 31.76303338313307]),
            {
              "clase": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61456637228284, 31.775803845955515],
                  [-116.61456637228284, 31.775777053759978],
                  [-116.61455027902875, 31.775777053759978],
                  [-116.61455027902875, 31.775803845955515]]], null, false),
            {
              "clase": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6212077205389, 31.768181153212502],
                  [-116.6212077205389, 31.76817089152703],
                  [-116.62120034446411, 31.76817089152703],
                  [-116.62120034446411, 31.768181153212502]]], null, false),
            {
              "clase": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62133981933289, 31.768068274609984]),
            {
              "clase": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62172270336364, 31.767162893110044],
                  [-116.62172270336364, 31.767137238611966],
                  [-116.6216610125563, 31.767137238611966],
                  [-116.6216610125563, 31.767162893110044]]], null, false),
            {
              "clase": 1,
              "system:index": "32"
            })]),
    zostera_m = 
    /* color: #1c9706 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62352358068581, 31.762924211891217],
                  [-116.6235208984768, 31.76298806598042],
                  [-116.62363489235993, 31.76299034648278],
                  [-116.62363221015092, 31.762927632647116]]]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62390177215691, 31.7625271690045],
                  [-116.62390177215691, 31.762588742855453],
                  [-116.62395541633721, 31.762588742855453],
                  [-116.62395541633721, 31.762530589775075]]]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6234446963532, 31.763176403018768],
                  [-116.62344737856222, 31.763222012962693],
                  [-116.62356137244535, 31.76321859221766],
                  [-116.62356137244535, 31.763178683516497]]]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62275753713504, 31.764529855323012],
                  [-116.62276021934406, 31.764577745063093],
                  [-116.62283330953971, 31.764576034715663],
                  [-116.6228306273307, 31.764528144974694]]]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62005275533274, 31.764209029894932],
                  [-116.62005141422823, 31.764246657680395],
                  [-116.62008494184091, 31.764246657680395],
                  [-116.62008427128866, 31.764211310367223]]]),
            {
              "clase": 1,
              "system:index": "4"
            })]),
    zostera_sumergida = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
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
                -116.62217367399025,
                31.76585380498518
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
                -116.61951118912943,
                31.767203979030064
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6195905928406,
                31.766828787353575
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
                -116.62210902829693,
                31.765528807549686
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62494234108792,
                31.764104646257746
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6233142695118,
                31.757444509658118
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62195452374722,
                31.75748466068541
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61962210063514,
                31.766433215772114
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62369372986419,
                31.75900229248684
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62491206781007,
                31.747167484367797
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62520038172899,
                31.76397035471643
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62094899559318,
                31.754586777014445
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62223486689516,
                31.76565455643692
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62510662670195,
                31.763971828696814
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62509388620913,
                31.763917667324776
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62268045466507,
                31.760626072310767
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6227133117255,
                31.760602696561623
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62256612550581,
                31.76065229875397
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62253710484576,
                31.760779772997747
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.6224365220077,
                31.76080485911933
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62237803641997,
                31.76074378233688
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.61954800195146,
                31.76694094624534
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62246586734398,
                31.756406350430865
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62252420539005,
                31.756412337175178
              ]
            },
            {
              "type": "Point",
              "coordinates": [
                -116.62255672717436,
                31.75644455155464
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
                [[[-116.63646396856775, 31.73447869700438],
                  [-116.63646598022451, 31.73450093874722],
                  [-116.63649749618047, 31.73449979814516],
                  [-116.63649615507595, 31.7344798376067]]]),
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
                [[[-116.6366153562038, 31.733255885717796],
                  [-116.63661200344124, 31.73327926844033],
                  [-116.63665827163557, 31.733288963686274],
                  [-116.63665827163557, 31.733267862207256]]]),
            {
              "clase": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63687176564841, 31.734483355232925]),
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
            ee.Geometry.Point([-116.62815978575249, 31.75240849927649]),
            {
              "clase": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62859185793428, 31.752234209501143]),
            {
              "clase": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62876435627786, 31.7521398243243]),
            {
              "clase": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62725059601503, 31.752828733096504]),
            {
              "clase": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62726903620201, 31.752903142624024]),
            {
              "clase": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62712530767993, 31.75290227488138]),
            {
              "clase": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6281605012192, 31.752628011681967]),
            {
              "clase": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63658514711288, 31.734807194724254]),
            {
              "clase": 3,
              "system:index": "15"
            })]),
    spartina = 
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
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62829064005685, 31.739071219601602]),
            {
              "clase": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6283711063273, 31.739479534094503]),
            {
              "clase": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62767641419244, 31.738500944951124]),
            {
              "clase": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62659237768936, 31.741068295923373]),
            {
              "clase": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62668919809005, 31.742007654453534]),
            {
              "clase": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62536944675404, 31.74465607092232]),
            {
              "clase": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62332290367267, 31.748986904543006]),
            {
              "clase": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63159941680503, 31.74737678311596]),
            {
              "clase": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6317013407476, 31.747180626624363]),
            {
              "clase": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62806605817224, 31.750579449610726]),
            {
              "clase": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62779783727075, 31.75102648692488]),
            {
              "clase": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6323703521436, 31.748320928688564]),
            {
              "clase": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63217455088551, 31.748756572642815]),
            {
              "clase": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63257688223774, 31.74797195587495]),
            {
              "clase": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63291275185146, 31.747228540816447]),
            {
              "clase": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63324668687382, 31.74651918110021]),
            {
              "clase": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63366580616652, 31.745384399932945]),
            {
              "clase": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61937236868428, 31.76391504473208],
                  [-116.61881446920918, 31.764257116033146],
                  [-116.61895930849599, 31.764453236342113],
                  [-116.61945819937276, 31.76409292196645]]]),
            {
              "clase": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61997766995, 31.761968021931892],
                  [-116.61998571657705, 31.762173839313117],
                  [-116.620067523952, 31.762164717222806],
                  [-116.62006417119073, 31.761960040085164]]]),
            {
              "clase": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61988871761042, 31.76146685834777],
                  [-116.61989609368521, 31.76161053224902],
                  [-116.62002551027018, 31.761607111444448],
                  [-116.6200194752999, 31.761467998617718]]]),
            {
              "clase": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62389360648136, 31.748329639586306],
                  [-116.62389964144425, 31.74844482291658],
                  [-116.62390165310427, 31.748590797913344],
                  [-116.62401698792837, 31.748589657489703],
                  [-116.6240089413063, 31.748328499139102]]]),
            {
              "clase": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62638696724915, 31.742845114128855],
                  [-116.62634539298378, 31.743240866790735],
                  [-116.62652375999312, 31.743251131246502],
                  [-116.62654387657312, 31.742853097628632]]]),
            {
              "clase": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62866459919408, 31.738005786822903],
                  [-116.62847684456304, 31.73837760828091],
                  [-116.62866996361211, 31.738425511550407],
                  [-116.62875042988256, 31.738306893885433],
                  [-116.62880407406286, 31.738037722466846]]]),
            {
              "clase": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62043148136796, 31.754049998172118],
                  [-116.62043148136796, 31.75389034745028],
                  [-116.62021690464677, 31.75389034745028],
                  [-116.62021690464677, 31.754049998172118]]], null, false),
            {
              "clase": 3,
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
            ee.Geometry.Point([-116.63249058218756, 31.74155091887317]),
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
            ee.Geometry.Point([-116.63067143483192, 31.751080373254357]),
            {
              "clase": 5,
              "system:index": "26"
            })]),
    arena = 
    /* color: #bd9a5b */
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
            ee.Geometry.Point([-116.6257363239252, 31.753634018235346]),
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
            ee.Geometry.Point([-116.62497043170171, 31.75548494344164]),
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
            ee.Geometry.Point([-116.62900437015347, 31.749992805302885]),
            {
              "clase": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62576525971471, 31.745983505465635]),
            {
              "clase": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62555068299352, 31.746603913991787]),
            {
              "clase": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62442415520727, 31.745801031578683]),
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
            ee.Geometry.Point([-116.61874405192479, 31.76625429461097]),
            {
              "clase": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61826604211917, 31.767143464762178]),
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
                [[[-116.6244702739722, 31.74818942577373],
                  [-116.62433012855116, 31.74843176757577],
                  [-116.62441864144866, 31.74846598048496],
                  [-116.62455811631743, 31.74822420898902]]]),
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
                [[[-116.6228730062761, 31.75998955029623],
                  [-116.62313318055054, 31.76116860072688],
                  [-116.62349527876755, 31.761091062088422],
                  [-116.62315463822266, 31.759905168935127]]]),
            {
              "clase": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6245478199346, 31.761071140574522],
                  [-116.62462091015816, 31.761245602523918],
                  [-116.62468595375158, 31.76123020883572],
                  [-116.62461487518554, 31.761052326030942]]]),
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
            })]),
    poly_0522 = ee.FeatureCollection("users/martagond/Punta_Banda/ROI_polimax_0522_mod"),
    poly_230422_PL = ee.FeatureCollection("users/martagond/Punta_Banda/ROI_poly_230422_PL"),
    zostera_122021 = 
    /* color: #2fff0a */
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
      },
      {
        "type": "rectangle"
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
            ee.Geometry.Point([-116.6212533863069, 31.768121703283015]),
            {
              "clase": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62116822617068, 31.76820835752597]),
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
            ee.Geometry.Point([-116.61472136416634, 31.77574079092261]),
            {
              "clase": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61456671496245, 31.775806673368862],
                  [-116.61456671496245, 31.77577646089339],
                  [-116.61455196281287, 31.77577646089339],
                  [-116.61455196281287, 31.775806673368862]]], null, false),
            {
              "clase": 1,
              "system:index": "39"
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
            ee.Geometry.Point([-116.61367428086143, 31.772941079396958]),
            {
              "clase": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62333884245488, 31.761334007881608]),
            {
              "clase": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6239308667309, 31.75750930144825]),
            {
              "clase": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62495712963602, 31.755507581646995]),
            {
              "clase": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62478910955954, 31.75476527117951]),
            {
              "clase": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62326364255807, 31.76106280622869],
                  [-116.62326364255807, 31.76020987665781],
                  [-116.62299542165658, 31.76020987665781],
                  [-116.62299542165658, 31.76106280622869]]], null, false),
            {
              "clase": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62458382847552, 31.761175492463728],
                  [-116.62458382847552, 31.761018134582436],
                  [-116.62453823092227, 31.761018134582436],
                  [-116.62453823092227, 31.761175492463728]]], null, false),
            {
              "clase": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62430788312354, 31.764043631691404],
                  [-116.62430788312354, 31.763665071836943],
                  [-116.62380362782874, 31.763665071836943],
                  [-116.62380362782874, 31.764043631691404]]], null, false),
            {
              "clase": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62333692346014, 31.76510632758547],
                  [-116.62333692346014, 31.764832673157127],
                  [-116.62288094792761, 31.764832673157127],
                  [-116.62288094792761, 31.76510632758547]]], null, false),
            {
              "clase": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62434687510873, 31.75620127847693],
                  [-116.62434687510873, 31.75554444329342],
                  [-116.62393381492043, 31.75554444329342],
                  [-116.62393381492043, 31.75620127847693]]], null, false),
            {
              "clase": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62969959074304, 31.738912427398493],
                  [-116.62969959074304, 31.738547451400954],
                  [-116.62952792936609, 31.738547451400954],
                  [-116.62952792936609, 31.738912427398493]]], null, false),
            {
              "clase": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63266311743503, 31.740616878767188],
                  [-116.63289378741031, 31.740644251405328],
                  [-116.63299034693485, 31.739896063051525],
                  [-116.63275431254154, 31.739827630888225]]]),
            {
              "clase": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62578729429165, 31.745929721444398]),
            {
              "clase": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62533668317715, 31.746504512172002]),
            {
              "clase": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62442791289916, 31.74570601364537]),
            {
              "clase": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62945516837006, 31.751825620820814]),
            {
              "clase": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62922449839478, 31.751977292395708]),
            {
              "clase": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63039639008835, 31.75172412616953]),
            {
              "clase": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62895487905443, 31.75010822243721]),
            {
              "clase": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62897633672655, 31.748938964577643]),
            {
              "clase": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62572837424398, 31.753634339612788]),
            {
              "clase": 6,
              "system:index": "21"
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
            })]);



// NDVI
var NDVI_ms = function(image) {
  var ndvi = image.normalizedDifference(['NIR', 'R']).rename('NDVI');
  return image.addBands(ndvi);
};

// EVI2
var EVI2_ms = function(image) {
  var NIR_ms = image.select('NIR'); 
  var RED_ms = image.select('R');
  var EVI2_ms = NIR_ms.subtract(RED_ms).divide(NIR_ms.add(RED_ms).add(1)).multiply(2.4).rename('EVI2');
  return image.addBands(EVI2_ms);
};

// Parámetros para visualizar EVI2
var evi2Vis = {
  bands:['EVI2'],
  min: -1,
  max: 1,
  palette: ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
          '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
          '012E01', '011D01', '011301']
};

// // Definir ROI donde el algoritmo va a realizar la clasificacion
// // Objeto para importar script de Planet con el cuerpo de agua
var imports_wtr_poly= require('users/martagond/Punta_Banda:PB_Planet_Polígono_de_Agua');

// // Clasificacion
// // Clasificacion No Supervisada
var classificationKmeans = function(image){
  var training = image.sample({
  region: pix_train,
  scale: 0.1,
  projection:'EPSG:32611',
  numPixels: 5000
  });
  var clusterer = ee.Clusterer.wekaKMeans(10).train(training);
  return image.cluster(clusterer);
};

// Clasificación supervisada
// Grounds Truth Points: Definir poligonos de pixeles donde se ha identificado las cubiertas
// Une todos los puntos de ground truth
var ground_t=zostera.merge(zostera_m).merge(spartina).merge(arena).merge(agua).merge(ulva);
// var ground_t=zostera_122021.merge(ulva_122021).merge(spartina_122021).merge(arena_122021).merge(agua_122021);


// Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
ground_t = ground_t.randomColumn();

var puntos_entrenamiento = ground_t.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion = ground_t.filter(ee.Filter.gte('random', 0.6));

var classificationRForest = function(image){
  var training = image.sampleRegions({
    collection: puntos_entrenamiento,
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
  tileScale: 2,
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
  // crs:'EPSG:32611',
  maxPixels: 1e12,
  bestEffort: true
  // tileScale: 16
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

// Unir las imágenes en MS del 02/Diciembre/2021
var MS_0212 = ee.ImageCollection([
  MS0212_1,
  MS0212_2,
  MS0212_3,
  MS0212_4
  ]).mosaic();

// Renombrar las bandas
MS_0212 = MS_0212.select(['b1','b2','b3','b4'],['G','R','RE','NIR']);

// Calculo de indices
MS_0212 = NDVI_ms(MS_0212);
MS_0212 = EVI2_ms(MS_0212);

// Definir el poligono de marea maxima como objeto tipo ee.Geometry
var poly_max_B8 = imports_wtr_poly.max_poly_B8.geometry()

// Recortar la imagen al poligono
var MS_0212_clip = MS_0212.clip(poly_max_B8);

// var MS_0212_clip_NS_Kmeans = classificationKmeans(MS_0212_clip);
var MS_0212_clip_class_RForest = classificationRForest(MS_0212_clip);
var MS_0212_clip_class_RForest_layer = zostera_layer(MS_0212_clip_class_RForest);

var conf_mat_MS_0212_clip_class_RForest = conf_matriz(MS_0212_clip_class_RForest, puntos_validacion);

// var area_z_m_MS_0212_clip_class_RForest = area_t(MS_0212_clip_class_RForest);

// print( 'El valor de overall accuracy de la clasificacion del 02/Diciembre/2021 es', conf_mat_MS_0212_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 02/Diciembre/2021 es', conf_mat_MS_0212_clip_class_RForest.kappa());
// print( 'El orden de las clases en la Matriz de oOnfusión del 02/Diciembre/2021 es', conf_mat_MS_0212_clip_class_RForest.getInfo());
// print( 'El valor de la Exactitud del  Productor de la clasificacion del 02/Diciembre/2021 es', conf_mat_MS_0212_clip_class_RForest.producersAccuracy());
// print( 'El valor de la Exactitud del  Usuario de la clasificacion del 02/Diciembre/2021 es', conf_mat_MS_0212_clip_class_RForest.consumersAccuracy());
// Map.addLayer(RGB0212_clip, {bands:['R','G','B']}, 'Sequoia 02/12/2022 RGB Cliped');
// Map.addLayer(NIR0312_clip, {bands:['NIR','R','G']}, 'Canon 03/12/2022 NIR Cliped');
// Map.addLayer(MS_0212_clip, {bands:['NIR','R','G'], min: -0.003, max: 0.15}, 'Sequoia 02/12/2022 MS Cliped');
// Map.addLayer(MS_0212_clip_NS_Kmeans.randomVisualizer(), {}, 'Clusters KMeans MS 02 12 2021', false);
// Map.addLayer(MS_0212_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest MS 02/12/2021', false);
// Map.addLayer(MS_0212_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera 02/Diciembre/2021');
exports.MS_0212_clip_class_RForest_layer = MS_0212_clip_class_RForest_layer;
