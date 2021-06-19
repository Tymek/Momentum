// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mapboxgl from '!mapbox-gl'
import type mapboxType from 'mapbox-gl'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import config from 'utils/config'
import mapConfig from './config'
import 'mapbox-gl/dist/mapbox-gl.css'
import useDarkTheme from 'hooks/useDarkTheme'
import useMarkers from './hooks/useMarkers'
import LocationsList from './components/LocationsList'
import Toggle3D from './components/3dToggle'
import Navigate from './components/Navigate'
import systemNavigate from './utils/systemNavigate'
import useAsyncStorage from 'hooks/useAsyncStorage'

const mapbox = mapboxgl as typeof mapboxType

mapbox.accessToken = config.mapboxToken

const MapView: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxType.Map | null>(null)
  const isDark = useDarkTheme()
  const createMarker = useMarkers()
  const [activeItem, setActiveItem] = useState<string>('')
  const markers = useRef<mapboxType.Marker[]>([])
  const [is3D, setIs3D] = useAsyncStorage('no')

  useEffect(() => {
    if (map.current || !createMarker) return // initialize map only once
    const instance = new mapbox.Map({
      container: mapContainer.current as HTMLDivElement,
      style: isDark ? mapConfig.darkStyleUrl : mapConfig.styleUrl,
      center: [mapConfig.center[0], mapConfig.center[1]],
      zoom: mapConfig.zoom,
      minZoom: mapConfig.minZoom,
      pitch: 0,
    })
    map.current = instance
  }, [createMarker, isDark])

  useEffect(() => {
    if (map.current && createMarker) {
      markers.current.map((marker) => marker.remove())

      markers.current = mapConfig.markers.map((marker) => {
        const mapMarker = (
          new mapboxgl.Marker({
            element: createMarker(marker.type, marker.title === activeItem),
            anchor: 'bottom',
          }) as mapboxType.Marker
        )
          .setLngLat(marker.coordinates)
          .addTo(map.current as mapboxType.Map)

        mapMarker.getElement().addEventListener('click', () => {
          setActiveItem(activeItem === marker.title ? '' : marker.title)
        })

        return mapMarker
      })
    }
  }, [createMarker, activeItem])

  useEffect(() => {
    if (activeItem) {
      const { coordinates } = mapConfig.markers.find(({ title }) => title === activeItem) || {}
      map.current?.flyTo({
        center: coordinates,
        essential: true,
      })
    }
  }, [activeItem])

  const navigate = useCallback(() => {
    if (activeItem) {
      const { coordinates, navigation } =
        mapConfig.markers.find(({ title }) => title === activeItem) || {}
      if (coordinates) {
        systemNavigate(coordinates[1], coordinates[0], navigation)
      }
    }
  }, [activeItem])

  const toggle3D = useCallback(() => {
    if (is3D === 'yes') {
      map.current?.flyTo({
        pitch: 0,
        zoom: 13.5,
      })
      setIs3D('no')
    } else {
      map.current?.flyTo({
        pitch: 60,
        zoom: 15.5,
      })
      setIs3D('yes')
    }
  }, [is3D, setIs3D])

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div ref={mapContainer} className="map-container" style={{ flex: 1 }} />
      <LocationsList activeItem={activeItem} setActiveItem={setActiveItem} />
      <Toggle3D onPress={toggle3D} active={is3D === 'yes'} />
      <Navigate onPress={navigate} visible={!!activeItem} />
    </div>
  )
}

export default MapView
