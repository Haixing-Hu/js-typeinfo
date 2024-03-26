////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  FONT_FACE_EXISTS,
  isCssom,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isCssom()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isCssom()` function', () => {
  it('CSSRule', () => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule('body {background: black;}', 0);
    const cssRule = styleElement.sheet.cssRules[0];
    expect(isCssom(cssRule)).toBe(true);
    document.head.removeChild(styleElement);
  });

  // it('CSSRuleList', () => {
  //   const styleElement = document.createElement('style');
  //   document.head.appendChild(styleElement);
  //   styleElement.sheet.insertRule('body {background: black;}', 0);
  //   const cssRuleList = styleElement.sheet.cssRules;
  //   console.log('cssRuleList:', cssRuleList);
  //   expect(isCssom(cssRuleList)).toBe(true);
  //   document.head.removeChild(styleElement);
  // });

  it('CSSStyleSheet', () => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;
    expect(isCssom(styleSheet)).toBe(true);
    document.head.removeChild(styleElement);
  });

  it('StyleSheet', () => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = document.styleSheets[0];
    console.log('styleSheet:', styleSheet);
    expect(isCssom(styleSheet)).toBe(true);
  });

  it('StyleSheetList', () => {
    const styleSheetList = document.styleSheets;
    expect(isCssom(styleSheetList)).toBe(true);
  });

  it('CSSStyleDeclaration', () => {
    const styleDeclaration = document.createElement('div').style;
    expect(isCssom(styleDeclaration)).toBe(true);
  });
  if (FONT_FACE_EXISTS) {
    it('FontFace', async () => {
      const fontFace = new FontFace('Roboto', 'url(https://example.com/roboto.woff2)');
      await fontFace.load();
      expect(isCssom(fontFace)).toBe(true);
    });
  }
  if (typeof window.matchMedia === 'function') {
    it('MediaQueryList', () => {
      const mediaQueryList = window.matchMedia('(max-width: 600px)');
      expect(isCssom(mediaQueryList)).toBe(true);
    });
  }
  it('non-CSSOM object', () => {
    const nonCssom = {};
    expect(isCssom(nonCssom)).toBe(false);
  });
});
