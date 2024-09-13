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

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for DOM API objects', () => {
  test('document', () => {
    const info = typeInfo(document);
    expect(info).toEqual({
      type: 'object',
      subtype: 'Document',
      category: 'DOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: Document,
    });
  });
  test('document.documentElement', () => {
    const info = typeInfo(document.documentElement);
    expect(info).toEqual({
      type: 'object',
      subtype: 'HTMLHtmlElement',
      category: 'DOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: HTMLHtmlElement,
    });
  });
  test('document.forms', () => {
    const info = typeInfo(document.forms);
    expect(info).toEqual({
      type: 'object',
      subtype: 'HTMLCollection',
      category: 'DOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: HTMLCollection,
    });
  });
});
