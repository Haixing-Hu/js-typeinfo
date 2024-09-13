////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { PROMISE_EXISTS } from '@haixing_hu/type-detect';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for promise object', () => {
  if (PROMISE_EXISTS) {
    test('Promise', () => {
      const expected = {
        type: 'object',
        subtype: 'Promise',
        category: 'promise',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Promise,
      };
      const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
      expect(typeInfo(myPromise)).toEqual(expected);
    });
  }
});
