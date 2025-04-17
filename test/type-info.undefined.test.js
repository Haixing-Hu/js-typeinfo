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
describe('Test the `typeInfo()` function for `undefined` value', () => {
  test('undefined', () => {
    expect(typeInfo(undefined)).toEqual({
      type: 'undefined',
      category: 'undefined',
      isPrimitive: true,
      isBuiltIn: true,
      isWebApi: false,
    });
  });

  test('undefined across realms', () => {
    const undefinedValue = runInNewContext('undefined');
    const result = typeInfo(undefinedValue);
    expect(result.type).toBe('undefined');
    expect(result.category).toBe('undefined');
    expect(result.isPrimitive).toBe(true);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
  });
});
