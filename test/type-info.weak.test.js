////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  WEAKREF_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
} from '@qubit-ltd/type-detect';
import typeInfo from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for WeakRef object', () => {
  if (WEAKREF_EXISTS) {
    test('WeakRef', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakRef',
        category: 'weak',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: WeakRef,
      };
      const obj = {};
      expect(typeInfo(new WeakRef(obj))).toEqual(expected);
    });
  }
  if (WEAKMAP_EXISTS) {
    test('WeakMap', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakMap',
        category: 'weak',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: WeakMap,
      };
      expect(typeInfo(new WeakMap())).toEqual(expected);
    });
  }
  if (WEAKSET_EXISTS) {
    test('WeakSet', () => {
      const expected = {
        type: 'object',
        subtype: 'WeakSet',
        category: 'weak',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: WeakSet,
      };
      expect(typeInfo(new WeakSet())).toEqual(expected);
    });
  }
});
