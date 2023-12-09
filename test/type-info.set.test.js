////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  SET_EXISTS,
  typeInfo,
} from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for set objects', () => {
  if (SET_EXISTS) {
    test('Set', () => {
      const expected = {
        type: 'object',
        subtype: 'Set',
        category: 'set',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Set,
      };
      expect(typeInfo(new Set())).toEqual(expected);
    });
  }
});
