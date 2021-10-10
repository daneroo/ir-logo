import React from 'react'
import Losange from './losange'
import renderer from 'react-test-renderer'

test('Render a losange', () => {
  const component = renderer.create(
    <Losange />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
