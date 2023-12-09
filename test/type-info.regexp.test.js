////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { REGEXP_EXISTS, typeInfo } from '../src';

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
        constructor: RegExp,
      };
      expect(typeInfo(/^[0-9]+[a-z]+$/)).toEqual(expected);
      expect(typeInfo(new RegExp('^[0-9]+[a-z]+$', 'i'))).toEqual(expected);
      expect(typeInfo(new RegExp(/^[0-9]+[a-z]+$/, 'i'))).toEqual(expected);
    });
  }
});
