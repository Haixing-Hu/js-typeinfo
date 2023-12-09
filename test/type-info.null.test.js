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
describe('Test the `typeInfo()` function for `null` value', () => {
  test('null', () => {
    expect(typeInfo(null)).toEqual({
      type: 'null',
      category: 'null',
      isPrimitive: true,
      isBuiltIn: true,
    });
  });
});
