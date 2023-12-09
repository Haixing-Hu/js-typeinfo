////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { WEAKREF_EXISTS, typeInfo } from '../src';

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
        category: 'weak-ref',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: WeakRef,
      };
      const obj = {};
      expect(typeInfo(new WeakRef(obj))).toEqual(expected);
    });
  }
});
