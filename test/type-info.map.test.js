////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { MAP_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

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
        isWebApi: false,
        constructor: Map,
      };
      expect(typeInfo(new Map())).toEqual(expected);
    });

    test('Map across realms', () => {
      const map = runInNewContext('new Map()');
      const result = typeInfo(map);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('Map');
      expect(result.category).toBe('map');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
