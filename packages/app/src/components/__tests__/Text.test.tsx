import React from 'react'
import renderer from 'utils/testRenderer'

import Text from '../Text'

describe('component StyledText', () => {
  it(`renders correctly`, () => {
    expect.assertions(1)
    const tree = renderer(<Text>Snapshot test!</Text>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
