// Script de análisis de imágenes de PlanetScope

//Puntos de muestreo e imagenes de PlanetScope importadas en el script
var crp_agua = 
    /* color: #3bcfd6 */
    /* shown: false */
    /* locked: true */
    ee.Geometry.Polygon(
        [[[-116.63094504089945, 31.753318679898975],
          [-116.63997875424211, 31.72990610786843],
          [-116.64396490689386, 31.726986082542407],
          [-116.64846579542014, 31.724485691724105],
          [-116.65261238377263, 31.721264187367847],
          [-116.6538084968922, 31.720346953695948],
          [-116.65275687060401, 31.719849477370236],
          [-116.65091145700676, 31.719019006454186],
          [-116.65001826695737, 31.718590072023517],
          [-116.64918409383333, 31.718124626237284],
          [-116.64960254918505, 31.71723476436174],
          [-116.64987078182128, 31.716744199185065],
          [-116.65016046952437, 31.716490923586644],
          [-116.65037096032152, 31.716006633429277],
          [-116.65028104310808, 31.715522343243453],
          [-116.65016558224967, 31.713896640462238],
          [-116.65026725665041, 31.71124759780886],
          [-116.6467156374276, 31.70850487505899],
          [-116.64438198342408, 31.708082744813314],
          [-116.64234877924657, 31.70618192464346],
          [-116.6403316795789, 31.703840639446582],
          [-116.63580437788755, 31.69855541134863],
          [-116.63536922545354, 31.698445301818545],
          [-116.63493407439508, 31.698262163876596],
          [-116.6342354418532, 31.697421207812987],
          [-116.63334369741497, 31.69739267688962],
          [-116.63245195492911, 31.69721808420692],
          [-116.63165142306225, 31.696518602365213],
          [-116.63132297022516, 31.69552700406097],
          [-116.63049027097237, 31.695274819728173],
          [-116.62965757526287, 31.695132174076324],
          [-116.62773710833443, 31.6943288585738],
          [-116.62643891125367, 31.695223465536277],
          [-116.62824126249984, 31.70135756356493],
          [-116.63019394323275, 31.704424607147214],
          [-116.63080552830625, 31.706971290352023],
          [-116.63021547266298, 31.70763769124604],
          [-116.63407782318849, 31.709171088638396],
          [-116.63648114035298, 31.71172671945467],
          [-116.63656766546806, 31.719173687426043],
          [-116.631203753568, 31.72632859138345],
          [-116.62676197717974, 31.728382091311218],
          [-116.62232002318324, 31.73003391837286],
          [-116.6143474632863, 31.734377399734086],
          [-116.61455137043647, 31.73596258961447],
          [-116.61586037616826, 31.736507564627278],
          [-116.61770584655768, 31.737180295917547],
          [-116.61734120668376, 31.739860399573892],
          [-116.61326447966475, 31.744052702581715],
          [-116.61515265647944, 31.75047108235399],
          [-116.61458404619758, 31.751734788567347],
          [-116.61528678546854, 31.754483181990157],
          [-116.61525998482504, 31.757450522718347],
          [-116.60669777695398, 31.7644298234947],
          [-116.60716984869238, 31.775430183073063],
          [-116.61871411954499, 31.778877789029334],
          [-116.62372534591697, 31.76975155760288],
          [-116.62486000357426, 31.76663076873633],
          [-116.62538438786981, 31.76507037023513],
          [-116.6260589557705, 31.763528212534347],
          [-116.62521666267398, 31.761281996563397],
          [-116.62484372280255, 31.760263790844068],
          [-116.62447081119674, 31.758771198582345],
          [-116.62557037046818, 31.755676534366923],
          [-116.62527662102461, 31.754667948318165],
          [-116.62555149806641, 31.75441199280875],
          [-116.62646602428546, 31.753585346199152]]]),
    geometry = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-116.64439806618309, 31.73153072044956]),
    pb20211031_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20211031_183015_1105_3B_AnalyticMS_clip"),
    pb20211031_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20211031_183016_1105_3B_AnalyticMS_clip"),
    pb20211202_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20211202_180723_0f4e_3B_AnalyticMS_SR_clip"),
    pb20211202_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20211202_180724_0f4e_3B_AnalyticMS_SR_clip"),
    pb20220104_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220104_180247_1040_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220104_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220104_180248_1040_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220105_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220105_173447_79_2440_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220126_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220126_173346_0e26_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220126_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220126_173347_0e26_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220226_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220226_173451_28_245c_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220423_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220423_174516_85_225a_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220606_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220606_172916_05_2459_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220606_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220606_180529_29_24a3_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220619_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220619_173257_73_2459_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20221019_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20221019_180554_48_2477_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20221019_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20221019_180556_85_2477_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20221021_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20221021_180536_65_2470_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20230215_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20230215_180423_14_2480_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20230216_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20230216_180733_18_2479_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20230329_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20230329_180417_00_24a4_3B_AnalyticMS_SR_8b_harmonized_clip"),
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
            ee.Geometry.Point([-116.6240062777632, 31.76332362443145]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62225348963445, 31.765830034108276]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62221593870824, 31.765814071080356]),
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
            ee.Geometry.Point([-116.62244660868352, 31.765137012367617]),
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
            ee.Geometry.Point([-116.63315950235005, 31.743247472642334]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63340894778844, 31.743493819097388]),
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
            ee.Geometry.Point([-116.6192648577841, 31.76672802716723]),
            {
              "clase": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63016458589627, 31.745657798512262]),
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
                [[[-116.62332095196392, 31.763437544737986],
                  [-116.6234604268327, 31.763314398124642],
                  [-116.6238037495866, 31.762944957301332],
                  [-116.62366427471783, 31.76288566419235],
                  [-116.62353552868511, 31.762908469238763],
                  [-116.62336386730816, 31.763209495324755]]]),
            {
              "clase": 1,
              "system:index": "25"
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
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62297976066502, 31.759175630132514],
                  [-116.62284565021427, 31.759191594305566],
                  [-116.62288856555851, 31.759255450970123],
                  [-116.62293282200726, 31.75923150472606],
                  [-116.6229583029929, 31.759242907700195],
                  [-116.62307095577152, 31.759206418178028],
                  [-116.62305620362194, 31.759142561479628]]]),
            {
              "clase": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62257877041729, 31.759363779139626],
                  [-116.6225801115218, 31.759451581878686],
                  [-116.6226525311652, 31.759436758045485],
                  [-116.62265521337422, 31.759351235884377]]]),
            {
              "clase": 1,
              "system:index": "28"
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
              "system:index": "29"
            })]),
    zostera_enero = 
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
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62280886279457, 31.759313385029845]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62400091334517, 31.76332134393731]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62203891291325, 31.765754779809733]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62200940861409, 31.765702329807883]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62246069028085, 31.76515639618586]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62275731760853, 31.764592485787233]),
            {
              "clase": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62876357075662, 31.750803038888012]),
            {
              "clase": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62762955998735, 31.74192097737122]),
            {
              "clase": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62884191846209, 31.74057288391394]),
            {
              "clase": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63315950235005, 31.743247472642334]),
            {
              "clase": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63336200913068, 31.74346017459701]),
            {
              "clase": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63273839553472, 31.74368542144276]),
            {
              "clase": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63280947407361, 31.743459604351163]),
            {
              "clase": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61977447749693, 31.765537645369808]),
            {
              "clase": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63306137163235, 31.745995375442575]),
            {
              "clase": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62919386197426, 31.739928786262336]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62332095196392, 31.763437544737986],
                  [-116.6234604268327, 31.763314398124642],
                  [-116.6238037495866, 31.762944957301332],
                  [-116.62366427471783, 31.76288566419235],
                  [-116.62353552868511, 31.762908469238763],
                  [-116.62336386730816, 31.763209495324755]]]),
            {
              "clase": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62296903183004, 31.759189313704027],
                  [-116.62283492135944, 31.75920527787707],
                  [-116.62287783671005, 31.759269134541633],
                  [-116.62292209316533, 31.759245188297577],
                  [-116.62294757415475, 31.759256591271704],
                  [-116.62306022695002, 31.759220101749538],
                  [-116.62304547479825, 31.759156245051134]]]),
            {
              "clase": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62257877041729, 31.759363779139626],
                  [-116.6225801115218, 31.759451581878686],
                  [-116.6226525311652, 31.759436758045485],
                  [-116.62265521337422, 31.759351235884377]]]),
            {
              "clase": 1,
              "system:index": "18"
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
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62287473323623, 31.75932146511154]),
            {
              "clase": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62785155795922, 31.741583750005997]),
            {
              "clase": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61964888706886, 31.765665331763675]),
            {
              "clase": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62209906347029, 31.758351658636364],
                  [-116.62209906347029, 31.75811675482373],
                  [-116.62203334934942, 31.75811675482373],
                  [-116.62203334934942, 31.758351658636364]]], null, false),
            {
              "clase": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62228974521616, 31.758490509835987],
                  [-116.62228974521616, 31.758305779980425],
                  [-116.62222537219981, 31.758305779980425],
                  [-116.62222537219981, 31.758490509835987]]], null, false),
            {
              "clase": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61975455089787, 31.765548578192185],
                  [-116.61975455089787, 31.76544367792498],
                  [-116.61965799137333, 31.76544367792498],
                  [-116.61965799137333, 31.765548578192185]]], null, false),
            {
              "clase": 1,
              "system:index": "25"
            })]),
    zostera_mayo = 
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
    zostera_junio = 
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
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62226322902984, 31.76615511314299]),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62246100232241, 31.765514340924017]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62198893353579, 31.765921398594045]),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62239394709704, 31.765860967176373]),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62265624962119, 31.764652544194234]),
            {
              "clase": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62251275143889, 31.76519374175032]),
            {
              "clase": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62206044173588, 31.766598787690796]),
            {
              "clase": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6196373103203, 31.765697544137453]),
            {
              "clase": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62401650170929, 31.76258393421666]),
            {
              "clase": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62386629800446, 31.7629624984938],
                  [-116.62386629800446, 31.762823387704426],
                  [-116.62351224641449, 31.762823387704426],
                  [-116.62351224641449, 31.7629624984938]]], null, false),
            {
              "clase": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62329936019525, 31.763282678981184]),
            {
              "clase": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62249248150272, 31.759341053518963]),
            {
              "clase": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62257562998218, 31.759347895295505]),
            {
              "clase": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62204455259723, 31.75823495966019]),
            {
              "clase": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62211697224063, 31.758321623161432]),
            {
              "clase": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62369751795448, 31.759026161693978]),
            {
              "clase": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62196079255119, 31.75797273152888]),
            {
              "clase": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63307457784919, 31.744959295995802]),
            {
              "clase": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6331743514652, 31.744391858763244]),
            {
              "clase": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63336747051427, 31.74397672301398]),
            {
              "clase": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63089444189846, 31.74502207594434]),
            {
              "clase": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62887132048435, 31.740582903922974]),
            {
              "clase": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6204744996539, 31.75662943409443]),
            {
              "clase": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62054322029704, 31.756088295996882]),
            {
              "clase": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62517225329742, 31.763656022647012]),
            {
              "clase": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62199221962452, 31.765672806512352]),
            {
              "clase": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62268970556137, 31.764272014867853]),
            {
              "clase": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62296360369388, 31.761322728896285]),
            {
              "clase": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62261694074077, 31.767168164785943]),
            {
              "clase": 1,
              "system:index": "28"
            })]),
    zostera_sumergida_mayo = 
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
            })]),
    ulva_enero = 
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
                [[[-116.63720761105607, 31.73426198232072],
                  [-116.63721230492318, 31.734305895572025],
                  [-116.63723711530407, 31.73430190345747],
                  [-116.63723443309239, 31.73426141201935]]]),
            {
              "clase": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63712502626475, 31.735083413335868],
                  [-116.63712636737452, 31.735115350113894],
                  [-116.63715654234562, 31.735114209514855],
                  [-116.63715520123577, 31.735084553935263]]]),
            {
              "clase": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6368812375741, 31.735183348896157],
                  [-116.63688123757807, 31.73522212913624],
                  [-116.6369295174153, 31.7352213071014],
                  [-116.63692750574866, 31.73518252686099]]]),
            {
              "clase": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63687016604919, 31.733192011140655],
                  [-116.636869495496, 31.73323136250979],
                  [-116.63691576366644, 31.73323193281941],
                  [-116.63691710477094, 31.733192581455352]]]),
            {
              "clase": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62806135359924, 31.752650512961107]),
            {
              "clase": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62781013904832, 31.752624530102796]),
            {
              "clase": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62841453304807, 31.752489201462772]),
            {
              "clase": 3,
              "system:index": "8"
            })]),
    ulva_mayo = 
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
            ee.Geometry.Point([-116.62816280323763, 31.75240821418111]),
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
    ulva_junio = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.62514122376422, 31.755917637210054]),
            {
              "clase": 3,
              "system:index": "0"
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
            ee.Geometry.Point([-116.6323703521436, 31.748320928688564]),
            {
              "clase": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63217455088551, 31.748756572642815]),
            {
              "clase": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63257688223774, 31.74797195587495]),
            {
              "clase": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63291275185146, 31.747228540816447]),
            {
              "clase": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63324534576931, 31.74653970927124]),
            {
              "clase": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63366446506201, 31.745399226016385]),
            {
              "clase": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61937236868428, 31.76391504473208],
                  [-116.61881446920918, 31.764257116033146],
                  [-116.61895930849599, 31.764453236342113],
                  [-116.61945819937276, 31.76409292196645]]]),
            {
              "clase": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61997766995, 31.761968021931892],
                  [-116.61998571657705, 31.762173839313117],
                  [-116.620067523952, 31.762164717222806],
                  [-116.62006417119073, 31.761960040085164]]]),
            {
              "clase": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.61988871761042, 31.76146685834777],
                  [-116.61989609368521, 31.76161053224902],
                  [-116.62002551027018, 31.761607111444448],
                  [-116.6200194752999, 31.761467998617718]]]),
            {
              "clase": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6195218964547, 31.75844603882948],
                  [-116.6195232375592, 31.758699186672864],
                  [-116.61966941795052, 31.758719712143325],
                  [-116.61969489893616, 31.758455161286314]]]),
            {
              "clase": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62369914629713, 31.748360431161732],
                  [-116.62370585181966, 31.74865466199437],
                  [-116.62397139051214, 31.748646678999645],
                  [-116.6239633438851, 31.748385520649048]]]),
            {
              "clase": 4,
              "system:index": "19"
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
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62663861928515, 31.743117985248382]),
            {
              "clase": 4,
              "system:index": "21"
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
            ee.Geometry.Point([-116.61632130862617, 31.77369355475678]),
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
            ee.Geometry.Point([-116.62321241766828, 31.752821290524505]),
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
    /* color: #cebd9e */
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
            ee.Geometry.Point([-116.6248792365952, 31.754720910050555]),
            {
              "clase": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62495702065664, 31.755332137267906]),
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
            ee.Geometry.Point([-116.62575587198316, 31.745916218261666]),
            {
              "clase": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62531129583894, 31.74648017475546]),
            {
              "clase": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62434570059358, 31.745626540587956]),
            {
              "clase": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62317373332718, 31.765190347997944]),
            {
              "clase": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61966826363083, 31.76478797170727]),
            {
              "clase": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61910346793279, 31.765841537325375]),
            {
              "clase": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61871722983464, 31.766397961079516]),
            {
              "clase": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61872929977521, 31.76625543482191]),
            {
              "clase": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61811583841434, 31.767132062761494]),
            {
              "clase": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61917531097522, 31.767373784874692]),
            {
              "clase": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62953095270589, 31.73853956685424],
                  [-116.6294424398084, 31.738918229455958],
                  [-116.6296757919927, 31.738936478216935],
                  [-116.62977235151723, 31.73856465900226]]]),
            {
              "clase": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63277478773348, 31.73983734812982],
                  [-116.63265140610663, 31.740608347573932],
                  [-116.63288207610464, 31.740640282323728],
                  [-116.63298400005723, 31.73988753172087]]]),
            {
              "clase": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62401303941643, 31.755626274344483],
                  [-116.62402376825248, 31.756185040188054],
                  [-116.62430003578102, 31.756185040188054],
                  [-116.62430003578102, 31.755633116395625]]]),
            {
              "clase": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62467053104997, 31.76100158384045],
                  [-116.6247436212186, 31.76117604578984],
                  [-116.62480866476315, 31.76116065210163],
                  [-116.62473758625055, 31.760982769296866]]]),
            {
              "clase": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.6228487994302, 31.764828902560218],
                  [-116.6228850092519, 31.76511623970043],
                  [-116.62338658233769, 31.76510141677457],
                  [-116.62336110135205, 31.76483346347418]]]),
            {
              "clase": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61392469291684, 31.772794229931193]),
            {
              "clase": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61943308557628, 31.774150943417844]),
            {
              "clase": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62021897281764, 31.77446333402638]),
            {
              "clase": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62092975820659, 31.774568224067107]),
            {
              "clase": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.6202481131262, 31.756739436269985]),
            {
              "clase": 6,
              "system:index": "30"
            })]),
    lodo = 
    /* color: #ab6550 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(
            [[-116.62340007696626, 31.76455008918798],
             [-116.62536747121678, 31.764070724187615],
             [-116.62457193234708, 31.76411095741286],
             [-116.62007089042757, 31.759754238743835],
             [-116.62277252685986, 31.758626176817568],
             [-116.62272022378407, 31.75841750077814],
             [-116.62235675987255, 31.75759872945602],
             [-116.62352558779816, 31.754805892050072],
             [-116.62961732160991, 31.74387596315642],
             [-116.6293075264687, 31.743950094757356],
             [-116.62909944898472, 31.744377190600176],
             [-116.62580982120078, 31.74599758125989],
             [-116.6253236075756, 31.7634571106081],
             [-116.62450151191432, 31.761007429690594],
             [-116.62837123634536, 31.75065543101478],
             [-116.6284517026158, 31.750729557188492],
             [-116.62554918747146, 31.746547593528902],
             [-116.62444381689654, 31.745817271536023],
             [-116.62299095416121, 31.76539405923197],
             [-116.62028404079157, 31.756827429406492],
             [-116.62447781100572, 31.748339605561945]]),
        {
          "system:index": "0",
          "clase": 7
        }),
    poly_max_0522_mod = ee.FeatureCollection("users/martagond/Punta_Banda/ROI_polimax_0522_mod"),
    poly_230422_PL = ee.FeatureCollection("users/martagond/Punta_Banda/ROI_poly_230422_PL"),
    zostera_marzo23 = 
    /* color: #188205 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
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
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.63346735065778, 31.743285645722494],
                  [-116.63346735065778, 31.74318186071997],
                  [-116.6333091003259, 31.74318186071997],
                  [-116.6333091003259, 31.743285645722494]]], null, false),
            {
              "clase": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63339224880536, 31.743303893623008]),
            {
              "clase": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62430018028502, 31.762989419283922],
                  [-116.62430018028502, 31.762937537840543],
                  [-116.62423647782092, 31.762937537840543],
                  [-116.62423647782092, 31.762989419283922]]], null, false),
            {
              "clase": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62279986039837, 31.766504716657035],
                  [-116.62279986039837, 31.766183177479867],
                  [-116.62270464197834, 31.766183177479867],
                  [-116.62270464197834, 31.766504716657035]]], null, false),
            {
              "clase": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-116.62228928385153, 31.766829958963964],
                  [-116.62228928385153, 31.766641825135913],
                  [-116.62209616480246, 31.766641825135913],
                  [-116.62209616480246, 31.766829958963964]]], null, false),
            {
              "clase": 1,
              "system:index": "4"
            })]);


// Definición de funciones
// Calculo del indice NDVI para Planet 4-Bandas
var NDVI_4 = function(image) {
  var ndvi = image.normalizedDifference(['b4', 'b3']).rename('NDVI');
return image.addBands(ndvi);
};

// Calculo del indice NDVI para Planet 8-Bandas
var NDVI = function(image) {
  var ndvi = image.normalizedDifference(['b8', 'b6']).rename('NDVI');
return image.addBands(ndvi);
};

// Calculo del indice EVI2 para Planet 4-Bandas
var EVI2_4 = function(image) {
  var NIR = image.select('b4');
  var RED = image.select('b3');
  var EVI2 = NIR.subtract(RED).divide(NIR.add(RED).add(1)).multiply(2.4).rename('EVI2');
return image.addBands(EVI2);
};

// Calculo del indice EVI2 para Planet 8-Bandas
var EVI2 = function(image) {
  var NIR = image.select('b8');
  var RED = image.select('b6');
  var EVI2 = NIR.subtract(RED).divide(NIR.add(RED).add(1)).multiply(2.4).rename('EVI2');
return image.addBands(EVI2);
};

// Importar el polígono para realizar el recorte de la Zona de Interés
var imports_wtr_poly= require('users/martagond/Punta_Banda:PB_Planet_Polígono_de_Agua');

// Clasificación
// Clasificación No Supervisada
var clus_kMeans = function(image){
  var training = image.sample({
    region: pix_train,
    scale: 3,
    // projection:'EPSG:32611',
    numPixels: 5000});
  var clusterer = ee.Clusterer.wekaKMeans(10).train(training);
  return image.cluster(clusterer);
};

// Clasificación Supervisada
// Función de entrenamiento y clasificación
var classificationRForest = function(image,t_points){
  var training = image.sampleRegions({
    collection: t_points,
    properties: ['clase'],
    scale: 3,
    // projection:'EPSG:32611'
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
  scale: 3,
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
  scale: 3,
  crs:'EPSG:32611'
  // maxPixels: 1e12
  });
  var metros_area = ee.Number(area.get('classification'));
  // var area_Km = metros_area.divide(1e6);
  var area_ha = metros_area.divide(1e4);
  return print('El area de la clase Zostera marina en km es', area_ha);
};

// Parámetros de visualización en RGB 8 bandas
var visParamsRGB_8 = {bands: ['b6', 'b4', 'b2'], min: 100, max: 8000 ,gamma:3.0};

// Parámetros de visualización en Falso Infrarrojo 8 bandas
var visParamsInfra_8 = {bands: ['b8', 'b6', 'b4'], min: 100, max: 8000 ,gamma:3.0};

// Parámetros para visualizar EVI2
var evi2Vis = {
  bands:['EVI2'],
  min: -1,
  max: 1,
  palette: ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
          '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
          '012E01', '011D01', '011301']
};

// Parámetros para colorear las clases
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
  '</ColorMap>' +
'</RasterSymbolizer>';


// 31 de Octubre de 2021
// Unir imagenes de 31 de Octubre de 2021
var pb20211031_Pl = ee.ImageCollection([
  pb20211031_Pl_1,
  pb20211031_Pl_2
  ]).mosaic();
  
pb20211031_Pl= NDVI_4(pb20211031_Pl);
pb20211031_Pl = EVI2_4(pb20211031_Pl);
var pb20211031_Pl_clip = pb20211031_Pl.clip(imports_wtr_poly.max_poly_B8);
var pb20211031_Pl_clip_NS_Kmeans = clus_kMeans(pb20211031_Pl_clip);
var ground_t=zostera.merge(spartina).merge(arena).merge(agua);// Une todos los puntos de ground truth
ground_t = ground_t.randomColumn(); // Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
var puntos_entrenamiento = ground_t.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion = ground_t.filter(ee.Filter.gte('random', 0.6));
var pb20211031_Pl_clip_class_RForest = classificationRForest(pb20211031_Pl_clip, puntos_entrenamiento);
var pb20211031_Pl_clip_class_RForest_layer = zostera_layer(pb20211031_Pl_clip_class_RForest);
// var area_z_m_pb20211031_Pl = area_t(pb20211031_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20211031_Pl_clip_class_RForest = conf_matriz(pb20211031_Pl_clip_class_RForest, puntos_validacion); //Calcula la matriz de confusión
// print( 'El valor de overall accuracy de la clasificacion del 31/Octubre/2021 es', conf_mat_pb20211031_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 31/Octubre/2021 es', conf_mat_pb20211031_Pl_clip_class_RForest.kappa());
// Map.addLayer(pb20211031_Pl, {bands: ['b3', 'b2', 'b1'], min: 100, max: 8000 ,gamma:3.0}, 'RGB 31/Octubre/2021 Planet', false);
// Map.addLayer(pb20211031_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'KMeans 31/Octubre/2021  Planet', false);
// Map.addLayer(pb20211031_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 31/Octubre/2021 Planet');
// Map.addLayer(pb20211031_Pl_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera 31/Octubre/2021');
exports.pb20211031_Pl_clip_class_RForest_layer = pb20211031_Pl_clip_class_RForest_layer;


// 26 de Enero de 2022
// Unir imagenes de 26 de Enero de 2022
var pb20220126_Pl = ee.ImageCollection([
  pb20220126_Pl_1,
  pb20220126_Pl_2
  ]).mosaic();
  
pb20220126_Pl =NDVI_4(pb20220126_Pl); //Calcular Índice NDVI
pb20220126_Pl = EVI2_4(pb20220126_Pl); // Calcular índice EVI2
var pb20220126_Pl_clip = pb20220126_Pl.clip(imports_wtr_poly.max_poly_B8); // Recorte de la Zona de Interés
var pb20220126_Pl_clip_NS_Kmeans = clus_kMeans(pb20220126_Pl_clip); //Realiza la clasificación no supervisada de kMeans
var ground_t_enero=zostera_enero.merge(ulva_enero).merge(spartina).merge(arena).merge(agua);// Une todos los puntos de ground truth
ground_t_enero = ground_t_enero.randomColumn(); // Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
var puntos_entrenamiento_enero = ground_t_enero.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion_enero = ground_t_enero.filter(ee.Filter.gte('random', 0.6));
var pb20220126_Pl_clip_class_RForest = classificationRForest(pb20220126_Pl_clip, puntos_entrenamiento_enero); //Realiza la clasificación Supervisada
var pb20220126_Pl_clip_class_RForest_layer = zostera_layer(pb20220126_Pl_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_pb20220126_Pl = area_t(pb20220126_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20220126_Pl_clip_class_RForest = conf_matriz(pb20220126_Pl_clip_class_RForest, puntos_validacion_enero); //Calcula la matriz de confusión
// print( 'El valor de overall accuracy de la clasificacion del 26/Enero/2022 es', conf_mat_pb20220126_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 26/Enero/2022 es', conf_mat_pb20220126_Pl_clip_class_RForest.kappa());
// Map.addLayer(pb20220126_Pl, {bands: ['b3', 'b2', 'b1'], min: 100, max: 8000 ,gamma:3.0}, 'RGB 26/Enero/2022 Planet');
// Map.addLayer(pb20220126_Pl, {bands:'NDVI'}, 'NDVI 26/Enero/2022', false);
// Map.addLayer(pb20220126_Pl, evi2Vis, 'EVI2 26/Enero/2022', false);
// Map.addLayer(pb20220126_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'KMeans 26/Enero/2022 Planet', false);
// Map.addLayer(pb20220126_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 26/Enero/2022 Planet');
// Map.addLayer(pb20220126_Pl_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera 26/Enero/2022');
exports.pb20220126_Pl_clip_class_RForest_layer = pb20220126_Pl_clip_class_RForest_layer;

// 26 de Febrero de 2022
pb20220226_Pl = NDVI(pb20220226_Pl); //Calcular Índice NDVI
pb20220226_Pl = EVI2(pb20220226_Pl); // Calcular índice EVI2
var pb20220226_Pl_clip = pb20220226_Pl.clip(imports_wtr_poly.max_poly_B8); // Recorte de la Zona de Interés
var pb20220226_Pl_clip_NS_Kmeans = clus_kMeans(pb20220226_Pl_clip); //Realiza la clasificación no supervisada de kMeans
var pb20220226_Pl_clip_class_RForest = classificationRForest(pb20220226_Pl_clip, puntos_entrenamiento); //Realiza la clasificación Supervisada
var pb20220226_Pl_clip_class_RForest_layer = zostera_layer(pb20220226_Pl_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_pb20220226_Pl = area_t(pb20220226_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20220226_Pl_clip_class_RForest = conf_matriz(pb20220226_Pl_clip_class_RForest, puntos_validacion);
// print( 'El valor de overall accuracy de la clasificacion del 26/Febrero/2022 es', conf_mat_pb20220226_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 26/Febrero/2022 es', conf_mat_pb20220226_Pl_clip_class_RForest.kappa());
// Map.addLayer(pb20220226_Pl, {bands: ['b3', 'b2', 'b1'], min: 100, max: 8000 ,gamma:3.0}, 'RGB 26/Febrero/2022 Planet', false);
// Map.addLayer(pb20220226_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'KMeans 26/Febrero/2022 Planet', false);
// Map.addLayer(pb20220226_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 26/Febrero/2022 Planet');
// Map.addLayer(pb20220226_Pl_clip_class_RForest_layer, {palette: [ 'green']}, 'Parche de Zostera 26/Febrero/2022');
exports.pb20220226_Pl_clip_class_RForest_layer = pb20220226_Pl_clip_class_RForest_layer;

// 23 de Abril de 2022
pb20220423_Pl = NDVI(pb20220423_Pl); //Calcular Índice NDVI
pb20220423_Pl = EVI2(pb20220423_Pl); // Calcular índice EVI2
// var pb20220423_Pl_clip = pb20220423_Pl.clip(imports_wtr_poly.max_poly_B8); // Recorte de la Zona de Interés
var pb20220423_Pl_clip = pb20220423_Pl.clip(poly_230422_PL); // Recorte de la Zona de Interés
var pb20220423_Pl_clip_NS_Kmeans = clus_kMeans(pb20220423_Pl_clip); //Realiza la clasificación no supervisada de kMeans
var ground_t_mayo=zostera_mayo.merge(ulva_mayo).merge(spartina).merge(arena).merge(agua); // Une todos los puntos de ground truth
ground_t_mayo = ground_t_mayo.randomColumn(); // Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
var puntos_entrenamiento_mayo = ground_t_mayo.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion_mayo = ground_t_mayo.filter(ee.Filter.gte('random', 0.6));
var pb20220423_Pl_clip_class_RForest = classificationRForest(pb20220423_Pl_clip, puntos_entrenamiento_mayo); //Realiza la clasificación Supervisada
var pb20220423_Pl_clip_class_RForest_layer = zostera_layer(pb20220423_Pl_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_pb20220423_Pl = area_t(pb20220423_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20220423_Pl_clip_class_RForest = conf_matriz(pb20220423_Pl_clip_class_RForest, puntos_validacion_mayo);
// print( 'El valor de overall accuracy de la clasificacion del 23/Abril/2022 es', conf_mat_pb20220423_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 23/Abril/2022 es', conf_mat_pb20220423_Pl_clip_class_RForest.kappa());
// Map.addLayer(pb20220423_Pl, visParamsRGB_8, 'RGB 23/Abril/2022', false);
// Map.addLayer(pb20220423_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'K Means 23/Abril/2022', false);
// Map.addLayer(pb20220423_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 23/Abril/2022', false);
// Map.addLayer(pb20220423_Pl_clip_class_RForest_layer ,{palette: [ 'green']}, 'Parche de Zostera 23 de Abril de 2022');
exports.pb20220423_Pl_clip_class_RForest_layer = pb20220423_Pl_clip_class_RForest_layer; 

// 06 de Junio de 2022
var pb20220606_Pl = NDVI(pb20220606_Pl_1); //Calcular Índice NDVI
pb20220606_Pl= EVI2(pb20220606_Pl); // Calcular índice EVI2
pb20220606_Pl_1=NDVI(pb20220606_Pl_1)
pb20220606_Pl_1=EVI2(pb20220606_Pl_1)
pb20220606_Pl_2=NDVI(pb20220606_Pl_2)
pb20220606_Pl_2=EVI2(pb20220606_Pl_2)
var pb20220606_Pl_clip = pb20220606_Pl.clip(imports_wtr_poly.max_poly_B8); // Recorte de la Zona de Interés
var pb20220606_Pl_clip_NS_Kmeans = clus_kMeans(pb20220606_Pl_clip); //Realiza la clasificación no supervisada de kMeans
var ground_t_junio=zostera_junio.merge(ulva_junio).merge(spartina).merge(arena).merge(agua);// Une todos los puntos de ground truth
ground_t_junio = ground_t.randomColumn(); // Agregar una columna aleatoria y dividir los puntos en dos conjuntos de entrenamiento y validación
var puntos_entrenamiento_junio = ground_t_junio.filter(ee.Filter.lt('random', 0.6));
var puntos_validacion_junio = ground_t_junio.filter(ee.Filter.gte('random', 0.6));
var pb20220606_Pl_clip_class_RForest = classificationRForest(pb20220606_Pl_clip, puntos_entrenamiento_mayo); //Realiza la clasificación supervisada
var pb20220606_Pl_clip_class_RForest_layer = zostera_layer(pb20220606_Pl_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_pb20220606_Pl = area_t(pb20220606_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20220606_Pl_clip_class_RForest =conf_matriz(pb20220606_Pl_clip_class_RForest, puntos_validacion_mayo);
// print( 'El valor de overall accuracy de la clasificacion del 06/Junio/2022 es', conf_mat_pb20220606_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 06/Junio/2022 es', conf_mat_pb20220606_Pl_clip_class_RForest.kappa());
// Map.addLayer(pb20220606_Pl_1, visParamsRGB_8, 'RGB 06/Junio/2022_1', false);
// Map.addLayer(pb20220606_Pl_1, {"opacity":1,"bands":["b8"],"min":493.2,"max":2622.8,"gamma":1} , 'B8 06/Junio/2022_1', false);
// Map.addLayer(pb20220606_Pl_1, {"opacity":1,"bands":["EVI2"],"min":-0.6373138961306357,"max":2.015847522162645,"gamma":1} , 'EVI2 06/Junio/2022_1', false);
// Map.addLayer(pb20220606_Pl_2, visParamsRGB_8, 'RGB 06/Junio/2022_2', false);
// Map.addLayer(pb20220606_Pl_2, {"opacity":1,"bands":["b8"],"min":585.7,"max":2975.3,"gamma":1} , 'B8 06/Junio/2022_2', false);
// Map.addLayer(pb20220606_Pl_2, {"opacity":1,"bands":["EVI2"],"min":-0.6373138961306357,"max":2.015847522162645,"gamma":1} , 'EVI2 06/Junio/2022_2', false);
// Map.addLayer(pb20220606_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'K Means 06/Junio/2022', false);
// Map.addLayer(pb20220606_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 06/Junio/2022', false);
// Map.addLayer(pb20220606_Pl_clip_class_RForest_layer ,{palette: [ 'green']}, 'Parche de Zostera 06 de Junio de 2022');
exports.pb20220606_Pl_clip_class_RForest_layer = pb20220606_Pl_clip_class_RForest_layer; 

//19 de Junio de 2022
pb20220619_Pl = NDVI(pb20220619_Pl); //Calcular Índice NDVI
pb20220619_Pl = EVI2(pb20220619_Pl); // Calcular índice EVI2
var pb20220619_Pl_clip = pb20220619_Pl.clip(imports_wtr_poly.max_poly_B8); // Recorte de la Zona de Interés
var pb20220619_Pl_clip_NS_Kmeans = clus_kMeans(pb20220619_Pl_clip); //Realiza la clasificación no supervisada de kMeans
var pb20220619_Pl_clip_class_RForest = classificationRForest(pb20220619_Pl_clip, puntos_entrenamiento_mayo); //Realiza la clasificación supervisada
var pb20220619_Pl_clip_class_RForest_layer = zostera_layer(pb20220619_Pl_clip_class_RForest); //Crea una capa de los pixeles clasificados como zostera
// var area_z_m_pb20220619_Pl = area_t(pb20220619_Pl_clip_class_RForest); // Calcular el área de la clase zostera
// var conf_mat_pb20220619_Pl_clip_class_RForest = conf_matriz(pb20220619_Pl_clip_class_RForest, puntos_validacion_mayo);
// print( 'El valor de overall accuracy de la clasificacion del 19/Junio/2022 es', conf_mat_pb20220619_Pl_clip_class_RForest.accuracy());
// print( 'El valor kappa de la clasificacion del 19/Junio/2022 es', conf_mat_pb20220619_Pl_clip_class_RForest.kappa());
// print( 'El valor de producers accuracy de la clasificacion del 19/Junio/2022 es', conf_mat_pb20220619_Pl_clip_class_RForest.producersAccuracy());
// Map.addLayer(pb20220619_Pl, visParamsRGB_8, 'RGB 19/Junio/2022', false);
// Map.addLayer(pb20220619_Pl, {"opacity":1,"bands":["b8"],"min":495.40000000000003,"max":3298.6,"gamma":1}, 'B8 19/Junio/2022', false);
// Map.addLayer(pb20220619_Pl, {"opacity":1,"bands":["EVI2"],"min":-0.43868286727173766,"max":1.7384783983760168,"gamma":1}, 'EVI2 19/Junio/2022', false);
// Map.addLayer(pb20220619_Pl_clip_NS_Kmeans.randomVisualizer(), {}, 'KMeans 19/Junio/2022', false);
// Map.addLayer(pb20220619_Pl_clip_class_RForest.sldStyle(class_color), {}, 'Random Forest 19/Junio/2022', false);
// Map.addLayer(pb20220619_Pl_clip_class_RForest_layer ,{palette: [ 'green']}, 'Parche de Zostera 19 de Junio de 2022');


// Mapa de Probabilidad

// 2022
// Coleccion de capas aisladas de zostera de 2022
var zostera_2022_Pl = ee.ImageCollection([
  pb20220126_Pl_clip_class_RForest_layer,
  pb20220226_Pl_clip_class_RForest_layer,
  pb20220423_Pl_clip_class_RForest_layer,
  pb20220606_Pl_clip_class_RForest_layer,
  pb20220619_Pl_clip_class_RForest_layer
  ]);
  
// Sumar la clase zostera
var suma_zostera_2022_Pl = zostera_2022_Pl.sum();
// Map.addLayer(suma_zostera_2022_Pl ,{palette: [ 'green']}, 'Suma de Zostera 2022');
exports.suma_zostera_2022_Pl = suma_zostera_2022_Pl;


// Coleccion completa de Planet
var zostera_total_Pl = ee.ImageCollection([
  pb20211031_Pl_clip_class_RForest_layer,
  pb20220126_Pl_clip_class_RForest_layer,
  pb20220226_Pl_clip_class_RForest_layer,
  pb20220423_Pl_clip_class_RForest_layer,
  pb20220606_Pl_clip_class_RForest_layer,
  pb20220619_Pl_clip_class_RForest_layer
  ]);

var suma_zostera_t_Pl = zostera_total_Pl.sum();
// Map.addLayer(suma_zostera_t_Pl ,{palette: [ 'green']}, 'Suma de Zostera Total');
exports.suma_zostera_t_Pl = suma_zostera_t_Pl;
