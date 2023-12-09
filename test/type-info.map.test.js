////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  MAP_EXISTS,
  typeInfo,
} from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for map objects', () => {
  if (MAP_EXISTS) {
    test('Map', () => {
      const expected = {
        type: 'object',
        subtype: 'Map',
        category: 'map',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Map,
      };
      expect(typeInfo(new Map())).toEqual(expected);
    });
  }
});
