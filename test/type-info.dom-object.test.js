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
    // 注意：不添加跨领域测试，因为document是DOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });

  test('div element', () => {
    const div = document.createElement('div');
    div.innerHTML = 'Hello, world!';
    const info = typeInfo(div);
    expect(info).toEqual({
      type: 'object',
      subtype: 'HTMLDivElement',
      category: 'DOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: HTMLDivElement,
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
    // 注意：不添加跨领域测试，因为HTMLHtmlElement是DOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
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
    // 注意：不添加跨领域测试，因为HTMLCollection是DOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
});
