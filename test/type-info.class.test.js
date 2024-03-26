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
});
