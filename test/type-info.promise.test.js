////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { PROMISE_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import vm from 'node:vm';
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

    test('Promise across realms', () => {
      const context = {
        setTimeout,  // 显式传入 setTimeout
        Promise,     // 显式传入 Promise（Node 14+ 其实已默认有）
      };
      const promise = vm.runInNewContext('new Promise((resolve) => { setTimeout(() => { resolve("foo"); }, 300); })', context);
      const result = typeInfo(promise);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('Promise');
      expect(result.category).toBe('promise');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(true);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
