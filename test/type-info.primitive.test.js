////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BIGINT_EXISTS,
  SYMBOL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  typeInfo,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for primitive values', () => {
  test('primitive boolean', () => {
    const expected = {
      type: 'boolean',
      category: 'primitive',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo(true)).toEqual(expected);
    expect(typeInfo(false)).toEqual(expected);
  });
  test('primitive number', () => {
    const expected = {
      type: 'number',
      category: 'primitive',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo(0)).toEqual(expected);
    expect(typeInfo(+0)).toEqual(expected);
    expect(typeInfo(-0)).toEqual(expected);
    expect(typeInfo(1)).toEqual(expected);
    expect(typeInfo(-1)).toEqual(expected);
    expect(typeInfo(1.5)).toEqual(expected);
    expect(typeInfo(-1.5)).toEqual(expected);
    expect(typeInfo(Infinity)).toEqual(expected);
    expect(typeInfo(-Infinity)).toEqual(expected);
    expect(typeInfo(NaN)).toEqual(expected);
  });
  test('primitive string', () => {
    const expected = {
      type: 'string',
      category: 'primitive',
      isPrimitive: true,
      isBuiltIn: true,
    };
    expect(typeInfo('')).toEqual(expected);
    expect(typeInfo('abc')).toEqual(expected);
  });
  if (SYMBOL_EXISTS) {
    test('primitive symbol', () => {
      const expected = {
        type: 'symbol',
        category: 'primitive',
        isPrimitive: true,
        isBuiltIn: true,
      };
      expect(typeInfo(Symbol(''))).toEqual(expected);
      expect(typeInfo(Symbol('xyz'))).toEqual(expected);
      if (SYMBOL_TO_STRING_TAG_EXISTS) {
        expect(typeInfo(Symbol.toStringTag)).toEqual(expected);
      }
    });
  }
  if (BIGINT_EXISTS) {
    test('primitive bigint', () => {
      const expected = {
        type: 'bigint',
        category: 'primitive',
        isPrimitive: true,
        isBuiltIn: true,
      };
      expect(typeInfo(1n)).toEqual(expected);
      expect(typeInfo(BigInt(1))).toEqual(expected);
    });
  }
});
