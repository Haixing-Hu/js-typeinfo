////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { typeInfo } from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for the `window.console` object', () => {
  if (window && window.console) {
    test('window.console', () => {
      const expected = {
        type: 'object',
        subtype: 'console',
        category: 'console',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
      };
      expected.constructor = window.console.constructor;
      const info = typeInfo(window.console);
      expect(info).toEqual(expected);
    });
  }
  if (console) {
    test('console', () => {
      const expected = {
        type: 'object',
        subtype: 'console',
        category: 'console',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: true,
      };
      expected.constructor = window.console.constructor;
      const info = typeInfo(console);
      expect(info).toEqual(expected);
    });
  }
});
