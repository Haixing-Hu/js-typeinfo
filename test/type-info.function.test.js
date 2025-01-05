////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ASYNC_FUNCTION_EXISTS } from '@qubit-ltd/type-detect';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for function values', () => {
  test('function', () => {
    const expected = {
      type: 'function',
      subtype: 'Function',
      category: 'function',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
    };
    expect(typeInfo(() => {})).toEqual(expected);
  });
  test('generator function', () => {
    const expected = {
      type: 'function',
      subtype: 'GeneratorFunction',
      category: 'function',
      isPrimitive: false,
      isBuiltIn: true,
      isWebApi: false,
    };
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    expect(typeInfo(foo)).toEqual(expected);
  });
  if (ASYNC_FUNCTION_EXISTS) {
    test('async function', async () => {
      const expected = {
        type: 'function',
        subtype: 'AsyncFunction',
        category: 'function',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
      };
      async function myFunc() {
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('foo');
          }, 300);
        });
      }
      expect(typeInfo(myFunc)).toEqual(expected);
    });
    test('async generator function', () => {
      const expected = {
        type: 'function',
        subtype: 'AsyncGeneratorFunction',
        category: 'function',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
      };
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      expect(typeInfo(foo)).toEqual(expected);
    });
  }
});
