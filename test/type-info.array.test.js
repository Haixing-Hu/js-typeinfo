////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for array object', () => {
  test('Array', () => {
    const expected = {
      type: 'object',
      subtype: 'Array',
      category: 'array',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: Array,
    };
    expect(typeInfo([])).toEqual(expected);
    expect(typeInfo([1, 2, 3])).toEqual(expected);
    expect(typeInfo(new Array([1, 2, 3]))).toEqual(expected);
  });

  test('Array across realms', () => {
    const arr1 = runInNewContext('[]');
    const result1 = typeInfo(arr1);
    expect(result1.type).toBe('object');
    expect(result1.subtype).toBe('Array');
    expect(result1.category).toBe('array');
    expect(result1.isPrimitive).toBe(false);
    expect(result1.isBuiltIn).toBe(true);
    expect(result1.isWebApi).toBe(false);
    expect(result1.constructor).toBeDefined();

    const arr2 = runInNewContext('[1, 2, 3]');
    const result2 = typeInfo(arr2);
    expect(result2.type).toBe('object');
    expect(result2.subtype).toBe('Array');
    expect(result2.category).toBe('array');
    expect(result2.isPrimitive).toBe(false);
    expect(result2.isBuiltIn).toBe(true);
    expect(result2.isWebApi).toBe(false);
    expect(result2.constructor).toBeDefined();

    const arr3 = runInNewContext('new Array([1, 2, 3])');
    const result3 = typeInfo(arr3);
    expect(result3.type).toBe('object');
    expect(result3.subtype).toBe('Array');
    expect(result3.category).toBe('array');
    expect(result3.isPrimitive).toBe(false);
    expect(result3.isBuiltIn).toBe(true);
    expect(result3.isWebApi).toBe(false);
    expect(result3.constructor).toBeDefined();
  });
});
