//////////////////////////////////////////////////////////////////
////////                                                 /////////
////////   FILE RESERVED FOR CONFIGURING SEARCH MODULE   /////////
////////                                                 /////////
//////////////////////////////////////////////////////////////////

/////////////////////////////// SERVER ////////////////////////////////////////

//Server address for REST API
export const BASIC_URL =
  "https://services5.arcgis.com/UoRAQmXv3KtNImPl/ArcGIS/rest/services/adresss/FeatureServer/0/query?";

//////////////////////////////// MAP //////////////////////////////////////////

//Level of zoom after clicking on result
export const MAP_ZOOM = 21;

/////////////////////////////// LABELS ////////////////////////////////////////

///Attention - works for both labels for inputs and column names in results
export const LABEL_FIRST = "Ulica";
export const LABEL_SECOND = "Numer";

/////////////////////////////// QUERIES ////////////////////////////////////////

//////////////// WHERE QUERY ///////////////

//Number of inputs (available 1 or 2)
export const INPUTS_NUMBER = 2;

//Name of first input (careful, it's not label/alias)
export const Q1 = "ulica";
//How to compare matches
export const Q1_COMPARISON = "=";

//Name of second input (if not needed, ignore)
export const Q2 = "numerPorza";
//How to compare matches
export const Q2_COMPARISON = "like";

//Operator connecting Q1 and Q2 (if not needed, ignore)
export const Q_OPERATOR = "and";

/////////////// OTHER QUERIES ////////////////

export const OTHER_QUERIES = {
  //Object IDs
  objectIds: "",
  //Time
  time: "",
  //Input Geometry
  geometry: "",
  //Geometry Type
  geometryType: "esriGeometryEnvelope",
  //Input Spatial Reference
  inSR: "",
  //Spatial Relationship
  spatialRel: "esriSpatialRelIntersects",
  //Result Type
  resultType: "none",
  //Distance
  distance: "0.0",
  //Units
  units: "esriSRUnit_Meter",
  //Return Geodetic
  returnGeodetic: false,
  //Out Fields (if 2 inputs, connect queries with ',')
  outFields: INPUTS_NUMBER === 2 ? `${Q1}%2C${Q2}` : Q1,
  //Return Geometry
  returnGeometry: true,
  //Feature Encoding
  featureEncoding: "esriDefault",
  //Geometry MultiPatch Option
  multipatchOption: "none",
  //Max Allowable Offset
  maxAllowableOffset: "",
  //Geometry Precision
  geometryPrecision: "",
  //Output Spatial Reference
  outSR: 4326,
  //Datum Transformation
  datumTransformation: "",
  //Apply VCS Projection
  applyVCSProjection: false,
  //Return IDs Only
  returnIdsOnly: false,
  //Return Unique IDs Only
  returnUniqueIdsOnly: false,
  //Return Count Only
  returnCountOnly: false,
  //Return Extent Only
  returnExtentOnly: false,
  //Return Query Geometry
  returnQueryGeometry: false,
  //Return Distinct Values
  returnDistinctValues: false,
  //Cache Hint
  cacheHint: false,
  //Order By Fields
  orderByFields: "",
  //Group by Fields(For Statistics)
  groupByFieldsForStatistics: "",
  //Output Statistics
  outStatistics: "",
  //Having
  having: "",
  //Result Offset
  resultOffset: "",
  //Result Record Count
  resultRecordCount: "",
  //ReturnZ
  returnZ: false,
  //ReturnM
  returnM: false,
  //Return Exceeded Limit Features
  returnExceededLimitFeatures: true,
  //Quantization Parameters
  quantizationParameters: "",
  //SQL Format
  sqlFormat: "none",
  //Format
  f: "json",
  //Token
  token: "",
};
