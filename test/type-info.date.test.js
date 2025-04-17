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
describe('Test the `typeInfo()` function for `Date` object', () => {
  test('Date', () => {
    const expected = {
      type: 'object',
      subtype: 'Date',
      category: 'date',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
      constructor: Date,
    };
    expect(typeInfo(new Date())).toEqual(expected);
  });

  test('Date across realms', () => {
    const date = runInNewContext('new Date()');
    const result = typeInfo(date);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Date');
    expect(result.category).toBe('date');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(true);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });
});
