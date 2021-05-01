import * as React from 'react'
import renderer from 'react-test-renderer'

import { MonoText } from '../StyledText'

describe('component StyledText', () => {
  it(`renders correctly`, () => {
    expect.assertions(1)
    const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
