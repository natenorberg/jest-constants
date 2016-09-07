import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Constants from 'constants';
import * as RelativeConstants from './constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('loads constants', () => {
  //console.log(Constants);
  expect(Constants.TEST_CONSTANT).toBe('HELLO_WORLD');
});

it('loads constants from relative path', () => {
  //console.log(RelativeConstants);
  expect(RelativeConstants.TEST_CONSTANT).toBe('HELLO_WORLD');
});
