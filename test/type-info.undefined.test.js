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
});
