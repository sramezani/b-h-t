/* eslint-disable no-undef */
'use strict';

import 'react-native';
import React from 'react';

import Util from '../Util';
  
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

test('email check', () => {
    const value = Util.validateEmail('assa@zf');
    expect(value).toBe(false);
});
