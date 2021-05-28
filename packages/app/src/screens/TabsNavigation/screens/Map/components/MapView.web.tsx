// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mapboxgl from '!mapbox-gl'
import type mapboxType from 'mapbox-gl'
import React, { FC, useEffect, useRef, useState } from 'react'
import Constants from 'expo-constants'

const mapbox = mapboxgl as typeof mapboxType

mapbox.accessToken = Constants.extra.mapboxToken

const MapView: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    const instance = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })

    instance.on('move', () => {
      setLng(instance.getCenter().lng.toFixed(4))
      setLat(instance.getCenter().lat.toFixed(4))
      setZoom(instance.getZoom().toFixed(2))
    })
    map.current = instance
  })

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapView
