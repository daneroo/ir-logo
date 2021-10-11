import React from 'react'
import Square from './square'
import renderer from 'react-test-renderer'

test('Render a square', () => {
  const component = renderer.create(
    <Square />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
