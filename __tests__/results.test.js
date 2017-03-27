import React from 'react';
import Results from '../src/components/Results';
import renderer from 'react-test-renderer';

it('Results renders correctly', () => {
  const tree = renderer.create(
    <Results />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});