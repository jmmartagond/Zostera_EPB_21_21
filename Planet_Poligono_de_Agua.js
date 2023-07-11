// Script de análisis de imágenes de PlanetScope para determinar el cuerpo de agua

//Poligono definido para recortar la imágen e imagenes de PlanetScope importadas en el script

var crp_agua = 
    /* color: #3bcfd6 */
    /* shown: false */
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
    pb20220104_Pl_1 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220104_180247_1040_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220104_Pl_2 = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220104_180248_1040_3B_AnalyticMS_SR_harmonized_clip"),
    pb20220105_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220105_173447_79_2440_3B_AnalyticMS_SR_8b_harmonized_clip"),
    pb20220423_Pl = ee.Image("users/martagond/Punta_Banda/PlanetPB/20220423_174516_85_225a_3B_AnalyticMS_SR_8b_harmonized_clip");

// -- Método que usa la banda b8 (NIR)--//
// Cuerpo de agua en una marea máxima del 05 de Enero de 2022
//Definir umbral de la banda B8: 
// Cuando la banda 8 toma valores menores a 950, se hacen 1
var B8_thres = pb20220105_Pl.select(['b8'],['NIR']).lt(950);

// Enmasacara todos los valores de la banda B8
B8_thres = B8_thres.updateMask(B8_thres.neq(0));

// Forma un conjunto de vectores (FeatureCollection) de los pixeles dentro del umbral de B8
var vectors_B8 = B8_thres.addBands(B8_thres.select('NIR')).reduceToVectors({
  geometry: crp_agua,
  // crs: B8_thres.projection(),
  scale: 3,
  geometryType: 'polygon',
  eightConnected: false,
  labelProperty: 'zone',
  reducer: ee.Reducer.mean()
});

// Muestra los poligonos en el mapa
// var displaycB8 = ee.Image(0).updateMask(0).paint(vectors_B8, '000000', 1);
// Map.addLayer(displaycB8, {palette: '000000'}, 'Vectors B8', false);

// Funcion para calcular el area de cada uno de los poligonos cubiertos por agua
var Areas = function(feature) {
  return feature.set({Areas: feature.geometry().area(10)});
};

// Aplicar calculo de areas a los polígonos del umbral de B8
var area_de_poligonos_B8 = ee.Number(vectors_B8.map(Areas));

// Formar arreglo (Tabla/FeatureCollection) de los poligonos con el area calculada
var arr_areas_B8 = ee.FeatureCollection(area_de_poligonos_B8);

// Buscar el area maxima de todas las areas
var max_area_poly_B8 = arr_areas_B8.aggregate_max('Areas');
// print(max_area_poly_B8)

// Encontrar la feature con el area maxima
var max_poly_B8 = arr_areas_B8.filter(ee.Filter.eq("Areas", max_area_poly_B8));
exports.max_poly_B8=max_poly_B8;


// Mostrar el polígono con el area máxima en el mapa
var display_max_poly_B8 = ee.Image(0).updateMask(0).paint(max_poly_B8, '000000', 1);
// Map.addLayer(display_max_poly_B8, {palette: '40d61a'}, 'Poly B8');

Map.centerObject(max_poly_B8, 14);
exports.display_max_poly_B8 = display_max_poly_B8;


//Cuerpo de agua en una marea mínima del 23 de Abril de 2022
// Map.addLayer(pb20220423_Pl.select('b8'), {min: 100, max: 8000 , gamma:3.0}, 'PB 20220423 B8', false);

//Definir umbral de la banda B8: 
// Cuando la banda 8 toma valores menores a 950, se hacen 1
// var B8_thres = pb20220423_Pl.select(['b8'],['NIR']).lt(510);
// var B8_thres = pb20220104_Pl.select(['b4'],['NIR']).lt(950);
// Enmasacara todos los valores de la banda B8
// B8_thres = B8_thres.updateMask(B8_thres.neq(0));

// Forma un conjunto de vectores (FeatureCollection) de los pixeles dentro del umbral de B8
// var vectors_B8 = B8_thres.addBands(B8_thres.select('NIR')).reduceToVectors({
//   geometry: crp_agua,
//   // crs: B8_thres.projection(),
//   scale: 3,
//   geometryType: 'polygon',
//   eightConnected: false,
//   labelProperty: 'zone',
//   reducer: ee.Reducer.mean()
// });

// Muestra los poligonos en el mapa
// var displaycB8 = ee.Image(0).updateMask(0).paint(vectors_B8, '000000', 1);
// Map.addLayer(displaycB8, {palette: '000000'}, 'Vectors B8', false);

// Funcion para calcular el area de cada uno de los poligonos cubiertos por agua
// var Areas = function(feature) {
//   return feature.set({Areas: feature.geometry().area(10)});
// };

// Aplicar calculo de areas a los polígonos del umbral de B8
// var area_de_poligonos_B8 = ee.Number(vectors_B8.map(Areas));

// Formar arreglo (Tabla/FeatureCollection) de los poligonos con el area calculada
// var arr_areas_B8 = ee.FeatureCollection(area_de_poligonos_B8);

// Buscar el area maxima de todas las areas
// var max_area_poly_B8 = arr_areas_B8.aggregate_max('Areas');
// print(max_area_poly_B8)

// Encontrar la feature con el area maxima
// var max_poly_B8 = arr_areas_B8.filter(ee.Filter.eq("Areas", max_area_poly_B8));
// exports.max_poly_B8=max_poly_B8;


// Mostrar el polígono con el area máxima en el mapa
// var display_max_poly_B8 = ee.Image(0).updateMask(0).paint(max_poly_B8, '000000', 1);
// Map.addLayer(display_max_poly_B8, {palette: '40d61a'}, 'Poly B8 23Abril22');

// Map.centerObject(max_poly_B8, 14);

