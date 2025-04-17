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
describe('Test the `typeInfo()` function for instances of user defined classes', () => {
  test('user defined class instance', () => {
    class Foo {}
    const expected = {
      type: 'object',
      subtype: 'Foo',
      category: 'class',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: Foo,
    };
    expect(typeInfo(new Foo())).toEqual(expected);
  });

  test('user defined class instance across realms', () => {
    const obj = runInNewContext('class Foo {}; new Foo()');
    const result = typeInfo(obj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Foo');
    expect(result.category).toBe('class');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('user defined class instance with no name', () => {
    const obj = new class {}();
    const expected = {
      type: 'object',
      subtype: '',
      category: 'class',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: obj.constructor,
    };
    expect(typeInfo(obj)).toEqual(expected);
  });

  test('user defined class instance with no name across realms', () => {
    const obj = runInNewContext('new class {}()');
    const result = typeInfo(obj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('');
    expect(result.category).toBe('class');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('object with toStringTag', () => {
    class Foo {
      get [Symbol.toStringTag]() {
        return 'Goo';
      }
    }
    const expected = {
      type: 'object',
      subtype: 'Goo',
      category: 'class',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: Foo,
    };
    const obj = new Foo();
    expect(typeInfo(obj)).toEqual(expected);
  });

  test('object with toStringTag across realms', () => {
    const obj = runInNewContext('class Foo { get [Symbol.toStringTag]() { return "Goo"; } }; new Foo()');
    const result = typeInfo(obj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('Goo');
    expect(result.category).toBe('class');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });

  test('object with toStringTag, should remove spaces between names', () => {
    class Foo {
      get [Symbol.toStringTag]() {
        return 'Foo Bar';
      }
    }
    const expected = {
      type: 'object',
      subtype: 'FooBar',
      category: 'class',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: false,
      constructor: Foo,
    };
    expect(typeInfo(new Foo())).toEqual(expected);
  });

  test('object with toStringTag and spaces across realms', () => {
    const obj = runInNewContext('class Foo { get [Symbol.toStringTag]() { return "Foo Bar"; } }; new Foo()');
    const result = typeInfo(obj);
    expect(result.type).toBe('object');
    expect(result.subtype).toBe('FooBar');
    expect(result.category).toBe('class');
    expect(result.isPrimitive).toBe(false);
    expect(result.isBuiltIn).toBe(false);
    expect(result.isWebApi).toBe(false);
    expect(result.constructor).toBeDefined();
  });
});
