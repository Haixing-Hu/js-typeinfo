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
});
