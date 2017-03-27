import React from 'react';
import Question from '../src/components/Question';
import renderer from 'react-test-renderer';

it('Question renders correctly', () => {
  const tree = renderer.create(
    <Question />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
