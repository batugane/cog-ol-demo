import Map from 'ol/Map.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoTIFF from 'ol/source/GeoTIFF.js'

// Initial map setup
let source = new GeoTIFF({
  sources: [{ url: 'https://oin-hotosm.s3.amazonaws.com/56f9b5a963ebf4bc00074e70/0/56f9c2d42b67227a79b4faec.tif' }],
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
    map.setView(source.getView())
    document.getElementById('displaying').innerText = `Displaying: ${url}`
  } else {
    document.getElementById('displaying').innerText = 'No URL entered.'
  }
}
window.updateMap = updateMap
