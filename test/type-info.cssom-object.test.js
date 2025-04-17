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
describe('Test the `typeInfo()` function for CSSOM API objects', () => {
  test('CSSRule', () => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule('body {background: black;}', 0);
    const cssRule = styleElement.sheet.cssRules[0];
    const info = typeInfo(cssRule);
    document.head.removeChild(styleElement);
    expect(info).toEqual({
      type: 'object',
      subtype: 'CSSStyleRule',
      category: 'CSSOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: CSSStyleRule,
    });
    // 注意：不添加跨领域测试，因为CSSStyleRule是CSSOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
  test('CSSStyleSheet', () => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;
    const info = typeInfo(styleSheet);
    document.head.removeChild(styleElement);
    expect(info).toEqual({
      type: 'object',
      subtype: 'CSSStyleSheet',
      category: 'CSSOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: CSSStyleSheet,
    });
    // 注意：不添加跨领域测试，因为CSSStyleSheet是CSSOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
  test('CSSStyleDeclaration', () => {
    const styleDeclaration = document.createElement('div').style;
    const info = typeInfo(styleDeclaration);
    expect(info).toEqual({
      type: 'object',
      subtype: 'CSSStyleDeclaration',
      category: 'CSSOM',
      isPrimitive: false,
      isBuiltIn: false,
      isWebApi: true,
      constructor: CSSStyleDeclaration,
    });
    // 注意：不添加跨领域测试，因为CSSStyleDeclaration是CSSOM API对象，
    // 在Node.js的vm模块创建的新上下文中不可用。
    // 这类测试需要在真实的浏览器环境中进行。
  });
  if (window && window.matchMedia) {
    test('MediaQueryList', () => {
      const mediaQueryList = window.matchMedia('(max-width: 600px)');
      const info = typeInfo(mediaQueryList);
      expect(info)
        .toEqual({
          type: 'object',
          subtype: 'MediaQueryList',
          category: 'CSSOM',
          isPrimitive: false,
          isBuiltIn: false,
          isWebApi: true,
          constructor: MediaQueryList,
        });
      // 注意：不添加跨领域测试，因为MediaQueryList是CSSOM API对象，
      // 在Node.js的vm模块创建的新上下文中不可用。
      // 这类测试需要在真实的浏览器环境中进行。
    });
  }
});
