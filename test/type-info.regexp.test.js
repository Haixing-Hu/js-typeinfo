////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { REGEXP_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

/* eslint-disable prefer-regex-literals */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for regular expression object', () => {
  if (REGEXP_EXISTS) {
    test('RegExp', () => {
      const expected = {
        type: 'object',
        subtype: 'RegExp',
        category: 'regexp',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: RegExp,
      };
      expect(typeInfo(/^[0-9]+[a-z]+$/)).toEqual(expected);
      expect(typeInfo(new RegExp('^[0-9]+[a-z]+$', 'i'))).toEqual(expected);
      expect(typeInfo(new RegExp(/^[0-9]+[a-z]+$/, 'i'))).toEqual(expected);
    });

    test('RegExp across realms', () => {
      const regex1 = runInNewContext('/^[0-9]+[a-z]+$/');
      const result1 = typeInfo(regex1);
      expect(result1.type).toBe('object');
      expect(result1.subtype).toBe('RegExp');
      expect(result1.category).toBe('regexp');
      expect(result1.isPrimitive).toBe(false);
      expect(result1.isBuiltIn).toBe(true);
      expect(result1.isWebApi).toBe(false);
      expect(result1.constructor).toBeDefined();

      const regex2 = runInNewContext('new RegExp("^[0-9]+[a-z]+$", "i")');
      const result2 = typeInfo(regex2);
      expect(result2.type).toBe('object');
      expect(result2.subtype).toBe('RegExp');
      expect(result2.category).toBe('regexp');
      expect(result2.isPrimitive).toBe(false);
      expect(result2.isBuiltIn).toBe(true);
      expect(result2.isWebApi).toBe(false);
      expect(result2.constructor).toBeDefined();
    });
  }
});
