// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mapboxgl from '!mapbox-gl'
import type mapboxType from 'mapbox-gl'
import React, { FC, useEffect, useRef } from 'react'
import config from 'utils/config'
import mapConfig from './config'
import 'mapbox-gl/dist/mapbox-gl.css'
import useDarkTheme from 'hooks/useDarkTheme'

const mapbox = mapboxgl as typeof mapboxType

mapbox.accessToken = config.mapboxToken

// centerCoordinate: config.map.center,
// zoomLevel: config.map.zoom,
// pitch: config.map.pitch,
// heading: config.map.heading,

const MapView: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxType.Map | null>(null)
  const isDark = useDarkTheme()
  // const [lng, setLng] = useState(-70.9)
  // const [lat, setLat] = useState(42.35)
  // const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    const instance = new mapbox.Map({
      container: mapContainer.current as HTMLDivElement,
      style: isDark ? mapConfig.darkStyleUrl : mapConfig.styleUrl,
      center: [mapConfig.center[0], mapConfig.center[1]],
      zoom: mapConfig.zoom,
      pitch: mapConfig.pitch,
    })

    // instance.on('move', () => {
    //   setLng(instance.getCenter().lng.toFixed(4))
    //   setLat(instance.getCenter().lat.toFixed(4))
    //   setZoom(instance.getZoom().toFixed(2))
    // })
    map.current = instance
  })

  return (
    <div style={{ flex: 1, display: 'flex' }}>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container" style={{ flex: 1 }} />
    </div>
  )
}

export default MapView
