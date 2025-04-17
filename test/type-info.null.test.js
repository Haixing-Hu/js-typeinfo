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
describe('Test the `typeInfo()` function for `null` value', () => {
  test('null', () => {
    expect(typeInfo(null)).toEqual({
      type: 'null',
      category: 'null',
      isPrimitive: true,
      isBuiltIn: true,
      isWebApi: false,
    });
  });

  test('null across realms', () => {
    const nullValue = runInNewContext('null');
    const result = typeInfo(nullValue);
    expect(result.type).toBe('null');
    expect(result.category).toBe('null');
    expect(result.isPrimitive).toBe(true);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
  });
});
