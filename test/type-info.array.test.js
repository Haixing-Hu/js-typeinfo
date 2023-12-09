////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
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
      constructor: Array,
    };
    expect(typeInfo([])).toEqual(expected);
    expect(typeInfo([1, 2, 3])).toEqual(expected);
    expect(typeInfo(new Array([1, 2, 3]))).toEqual(expected);
  });
});
