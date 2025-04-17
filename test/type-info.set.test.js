////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { SET_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

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
        isWebApi: false,
        constructor: Set,
      };
      expect(typeInfo(new Set())).toEqual(expected);
    });

    test('Set across realms', () => {
      const set = runInNewContext('new Set()');
      const result = typeInfo(set);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('Set');
      expect(result.category).toBe('set');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
