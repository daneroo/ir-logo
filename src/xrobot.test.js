import React from 'react'
import XRobot from './xrobot'
import renderer from 'react-test-renderer'

test('Render an expandable robot', () => {
  const component = renderer.create(
    <XRobot />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
