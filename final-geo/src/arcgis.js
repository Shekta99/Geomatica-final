console.log("conectando con arcgis");

// eslint-disable-next-line import/no-amd
require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",
  "esri/widgets/Search",
  "esri/widgets/Locate",
  "esri/widgets/LayerList",
], function (
  esriConfig,
  WebMap,
  MapView,
  ScaleBar,
  Legend,
  Search,
  Locate,
  LayerList
) {
  esriConfig.apiKey =
    "AAPK4f18451e0d3b4afeb3f90223cc9fc48fcNi4oR3IWuK59Nyb9a7PMLGhhMEcqKuOLWtOzsXfGntnxbCcUNco1cC2BNYFVsSB";
  esriConfig.portalUrl = "https://udistritalfjc.maps.arcgis.com/";
  const webmap = new WebMap({
    portalItem: {
      id: "dac4b1f85da74231b2558e32523a0b68",
    },
  });
  const view = new MapView({
    map: webmap,
    zoom: 11,
    container: "viewDiv", // Div element
  });
  const search = new Search({
    //Add Search widget
    view: view,
  });
  view.ui.add(search, "top-right");
  let layerList = new LayerList({
    view: view,
  });
  // Adds widget below other elements in the top left corner of the view
  view.ui.add(layerList, {
    position: "top-left",
  });
  const locate = new Locate({
    view: view,
    useHeadingEnabled: false,
    goToOverride: function (view, options) {
      options.target.scale = 1500;
      return view.goTo(options.target);
    },
  });
  view.ui.add(locate, "top-left");
  const scalebar = new ScaleBar({
    view: view,
  });
  view.ui.add(scalebar, "bottom-left");
  const legend = new Legend({
    view: view,
  });
  view.ui.add(legend, "top-right");
});
