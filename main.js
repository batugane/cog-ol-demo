import Map from 'ol/Map.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoTIFF from 'ol/source/GeoTIFF.js'

// Initial map setup
let source = new GeoTIFF({
  sources: [{ url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif' }],
})
let map = new Map({
  target: 'map',
  layers: [new TileLayer({ source: source })],
  view: source.getView(),
})

// Function to update map based on user input
function updateMap() {
  const url = document.getElementById('urlInput').value
  if (url) {
    source = new GeoTIFF({
      sources: [{ url: url }],
    })
    map.setLayers([new TileLayer({ source: source })])
    document.getElementById('displaying').innerText = `Displaying: ${url}`
  } else {
    document.getElementById('displaying').innerText = 'No URL entered.'
  }
}
window.updateMap = updateMap
