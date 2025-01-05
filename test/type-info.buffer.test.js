////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
} from '@qubit-ltd/type-detect';
import typeInfo from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for buffer objects', () => {
  if (ARRAYBUFFER_EXISTS) {
    test('ArrayBuffer', () => {
      const expected = {
        type: 'object',
        subtype: 'ArrayBuffer',
        category: 'buffer',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: ArrayBuffer,
      };
      expect(typeInfo(new ArrayBuffer(2))).toEqual(expected);
    });
  }
  if (SHAREDARRAYBUFFER_EXISTS) {
    test('SharedArrayBuffer', () => {
      const expected = {
        type: 'object',
        subtype: 'SharedArrayBuffer',
        category: 'buffer',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: SharedArrayBuffer,
      };
      expect(typeInfo(new SharedArrayBuffer(2))).toEqual(expected);
    });
  }
});
