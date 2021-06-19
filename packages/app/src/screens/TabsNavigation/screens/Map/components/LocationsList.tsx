import React, { FC, useEffect, useRef } from 'react'
import Text from 'components/Text'
import mapConfig from '../config'
import styled from '@emotion/native'
import { FlatList } from 'react-native'

type LocationsListProps = {
  activeItem?: Item['title']
  setActiveItem: (title: Item['title']) => void
}

type Item = ArrayElement<typeof mapConfig.markers>

const LocationsList: FC<LocationsListProps> = ({ activeItem, setActiveItem }) => {
  const ref = useRef<FlatList>(null)

  useEffect(() => {
    const index = mapConfig.markers.findIndex((marker) => marker.title === activeItem)
    if (ref.current && index !== -1) {
      ref.current.scrollToIndex({
        index,
        animated: true,
      })
    }
  }, [activeItem])

  const renderItem = ({ item }: { item: Item }) => {
    const isActive = item.title === activeItem
    return (
      <ListItem
        onPress={() => {
          setActiveItem(isActive ? '' : item.title)
        }}
      >
        <Button active={isActive}>
          <Text>{item.title}</Text>
          <Address>{item.address}</Address>
        </Button>
      </ListItem>
    )
  }

  return (
    <Container>
      <FlatList
        ref={ref}
        data={mapConfig.markers}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.title}
        extraData={activeItem}
        horizontal
        style={{ display: 'flex', flexGrow: 0 }}
        contentContainerStyle={{ paddingRight: 11 }}
      />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  flex-grow: 0;
  border: ${({ theme }) => `0px solid ${theme.map.borderColor}`};
  border-top-width: 1px;
`

const ListItem = styled.TouchableOpacity`
  padding: ${({ theme }) => `${theme.spacing.s}px`};
  padding-right: 0;
`

const Button = styled.View<{ active?: boolean }>`
  background: ${({ theme }) => theme.map.buttonBackground};
  padding: 9px 20px 11px;
  border-radius: ${({ theme }) => `${theme.borderRadius.m}px`};
  border: 1px solid black;
  border-color: ${({ theme, active }) =>
    active ? theme.map.buttonHighlight : theme.map.buttonBorder};
`

const Address = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.s}px`};
  color: ${({ theme }) => theme.color.gray};
`

export default LocationsList
