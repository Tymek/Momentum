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
import styled from '@emotion/native'

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

  const navigate = useCallback(() => {
    if (activeItem) {
      const { coordinates, navigation } =
        mapConfig.markers.find(({ title }) => title === activeItem) || {}
      if (coordinates) {
        systemNavigate(coordinates[1], coordinates[0], navigation)
      }
    }
  }, [activeItem])

  useEffect(() => {
    if (map.current || !createMarker) return // initialize map only once
    const instance = new mapbox.Map({
      container: mapContainer.current as HTMLDivElement,
      style: isDark ? mapConfig.darkStyleUrl : mapConfig.styleUrl,
      center: [mapConfig.center[0], mapConfig.center[1]],
      zoom: mapConfig.zoom,
      minZoom: mapConfig.minZoom,
      pitch: 0,
      attributionControl: false,
    })
    instance.addControl(new mapboxgl.AttributionControl(), 'top-left')

    // instance.on('click', function (e) {
    //   console.log(e)
    //   // var coordinates = e.features[0].geometry.coordinates.slice()
    //   // var description = e.features[0].properties.description

    //   // // Ensure that if the map is zoomed out such that multiple
    //   // // copies of the feature are visible, the popup appears
    //   // // over the copy being pointed to.
    //   // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    //   // }

    //   // new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map)
    // })

    map.current = instance
  }, [createMarker, isDark])

  useEffect(() => {
    if (map.current && createMarker) {
      markers.current.map((marker) => marker.remove())
      // const activeMarker = mapConfig.markers.find(({ title }) => activeItem === title)

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

      // const popup: mapboxType.Marker | undefined = activeMarker
      //   ? new mapboxgl.Popup()
      //       .setLngLat(activeMarker.coordinates)
      //       .setHTML(`${activeMarker.title}<br /><a href="#">Nawigacja</a>`)
      //       .addTo(map.current)
      //   : undefined

      // return () => {
      //   if (popup) {
      //     popup.remove()
      //   }
      // }
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
    <Wrapper>
      <MapContent>
        <div ref={mapContainer} className="map-container" style={{ flex: 1 }} />
        <Navigate onPress={navigate} visible={!!activeItem} />
        <Toggle3D onPress={toggle3D} active={is3D === 'yes'} />
      </MapContent>
      <LocationsList activeItem={activeItem} setActiveItem={setActiveItem} />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MapContent = styled.View`
  position: relative;
  flex-grow: 1;
`

export default MapView
