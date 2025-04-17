////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ASYNC_FUNCTION_EXISTS } from '@qubit-ltd/type-detect/src/feature-detect';
import { runInNewContext } from 'node:vm';
import typeInfo from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for generator objects', () => {
  test('generator', () => {
    function* foo() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
    const x = foo();
    const expected = {
      type: 'object',
      subtype: 'Generator',
      category: 'generator',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: x.constructor,
    };
    expect(typeInfo(x)).toEqual(expected);
  });

  test('generator across realms', () => {
    const gen = runInNewContext('function* foo() { yield "a"; yield "b"; yield "c"; }; foo()');
    const result = typeInfo(gen);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Generator');
    expect(result.category).toBe('generator');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  if (ASYNC_FUNCTION_EXISTS) {
    test('async generator', () => {
      async function* foo() {
        yield await Promise.resolve('a');
        yield await Promise.resolve('b');
        yield await Promise.resolve('c');
      }
      const x = foo();
      const expected = {
        type: 'object',
        subtype: 'AsyncGenerator',
        category: 'generator',
        isPrimitive: false,
        isBuiltIn: false,
        isWebApi: false,
        constructor: x.constructor,
      };
      const info = typeInfo(x);
      expect(info).toEqual(expected);
    });

    test('async generator across realms', () => {
      const asyncGen = runInNewContext('async function* foo() { yield await Promise.resolve("a"); yield await Promise.resolve("b"); yield await Promise.resolve("c"); }; foo()');
      const result = typeInfo(asyncGen);
      expect(result.type).toBe('object');
      expect(result.subtype).toBe('AsyncGenerator');
      expect(result.category).toBe('generator');
      expect(result.isPrimitive).toBe(false);
      expect(result.isBuiltIn).toBe(false);
      expect(result.isWebApi).toBe(false);
      expect(result.constructor).toBeDefined();
    });
  }
});
