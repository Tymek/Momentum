import React, { useCallback, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useTheme } from '@emotion/react'
import Marker, { MarkerProps } from '../components/Marker'

type UseMarkerType = () =>
  | ((type?: MarkerProps['type'], isActive?: boolean) => HTMLDivElement)
  | undefined

const useMarkers: UseMarkerType = () => {
  const ref = useRef<HTMLDivElement[]>([])
  const theme = useTheme()

  const createMarker = useCallback(
    (type?: MarkerProps['type'], isActive?: boolean) => {
      const el = document.createElement('div')
      ReactDOM.render(
        <Marker fill={isActive ? theme.map.buttonHighlight : theme.map.markerColor} type={type} />,
        el,
      )
      ref.current = [...ref.current, el]

      return el
    },
    [ref, theme],
  )

  useEffect(() => {
    return () => {
      if (ref.current.length > 0) {
        ref.current.map((el) => el.remove())
        ref.current = []
      }
    }
  }, [])

  return theme ? createMarker : undefined
}

export default useMarkers
