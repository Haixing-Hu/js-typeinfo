////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo from '../src';

/* eslint-disable no-undef */

const globalObject = globalThis;

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for global object', () => {
  test('global object', () => {
    const expected = {
      type: 'object',
      subtype: 'GlobalObject',
      category: 'global',
      constructor: Window,
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
    };
    expect(typeInfo(globalObject)).toEqual(expected);
  });
});
