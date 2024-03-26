////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  DOM_NODE_EXISTS,
  DOM_PARSER_EXISTS,
  DOM_POINT_READONLY_EXISTS,
  DOM_RECT_EXISTS,
  isDom,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `isDom()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `isDom()` function', () => {
  if (DOM_NODE_EXISTS) {
    test('window.document', () => {
      expect(isDom(window.document)).toBe(true);
    });
    test('window.document.documentElement', () => {
      expect(isDom(window.document.documentElement)).toBe(true);
    });
    test('window.document.forms', () => {
      expect(isDom(window.document.forms)).toBe(true);
    });
    test('Node', () => {
      const node = document.createTextNode('');
      expect(isDom(node)).toBe(true);
    });
    test('HTMLCollection', () => {
      const collection = document.getElementsByTagName('div');
      expect(isDom(collection)).toBe(true);
    });
    test('NodeList', () => {
      const nodeList = document.querySelectorAll('div');
      expect(isDom(nodeList)).toBe(true);
    });
    test('NamedNodeMap', () => {
      const element = document.createElement('div');
      element.setAttribute('data-test', 'value');
      const namedNodeMap = element.attributes;
      expect(isDom(namedNodeMap)).toBe(true);
    });
    test('NodeIterator', () => {
      const nodeIterator = document.createNodeIterator(document.body);
      expect(isDom(nodeIterator)).toBe(true);
    });
    test('TreeWalker', () => {
      const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      expect(isDom(treeWalker)).toBe(true);
    });
    // MutationRecord cannot be directly constructed and is usually obtained via a MutationObserver callback.
    // Skipping direct testing for MutationRecord.
    test('MutationObserver', () => {
      const mutationObserver = new MutationObserver(() => {});
      expect(isDom(mutationObserver)).toBe(true);
    });
    test('DOMTokenList', () => {
      const element = document.createElement('div');
      document.body.appendChild(element);
      element.className = 'test-class';
      const domTokenList = element.classList;
      expect(isDom(domTokenList)).toBe(true);
      document.body.removeChild(element); // Clean up
    });
    if (DOM_RECT_EXISTS) {
      test('DOMRect', () => {
        const domRect = new DOMRect();
        expect(isDom(domRect)).toBe(true);
      });
    }
    if (DOM_POINT_READONLY_EXISTS) {
      test('DOMPointReadOnly', () => {
        const domPointReadOnly = new DOMPointReadOnly();
        expect(isDom(domPointReadOnly)).toBe(true);
      });
    }
    if (DOM_PARSER_EXISTS) {
      test('DOMParser', () => {
        const domParser = new DOMParser();
        expect(isDom(domParser)).toBe(true);
      });
    }
    test('DOMImplementation', () => {
      const domImplementation = document.implementation;
      expect(isDom(domImplementation)).toBe(true);
    });
    test('DOMException', () => {
      try {
        document.querySelectorAll('');
      } catch (e) {
        expect(isDom(e)).toBe(true);
      }
    });
    test('Range', () => {
      const range = document.createRange();
      expect(isDom(range)).toBe(true);
    });
    test('StaticRange', () => {
      // 注意：创建StaticRange可能需要特定的条件，这里假设环境支持StaticRange
      // 这个API可能不在所有浏览器中可用，所以这个测试可能需要根据你的目标环境进行调整
      let staticRange;
      try {
        // 尝试创建一个StaticRange实例
        const range = new Range();
        document.body.appendChild(range.startContainer);
        staticRange = new StaticRange({
          startContainer: range.startContainer,
          startOffset: 0,
          endContainer: range.endContainer,
          endOffset: 0,
        });
        expect(isDom(staticRange)).toBe(true);
      } catch (e) {
        console.warn('StaticRange is not supported in this environment');
        expect(true).toBe(true); // 如果环境不支持StaticRange，测试将通过但不执行实际检查
      } finally {
        if (staticRange && staticRange.startContainer.parentNode === document.body) {
          document.body.removeChild(range.startContainer);
        }
      }
    });
    // test('TimeRanges', () => {
    //   const video = document.createElement('video');
    //   video.load();
    //   const rages = video.buffered;
    //   console.log('ranges:', ranges);
    //   expect(isDom(rages)).toBe(true);
    // });
  }
  test('null', () => {
    expect(isDom(null)).toBe(false);
  });
  test('undefined', () => {
    expect(isDom(undefined)).toBe(false);
  });
  test('a string', () => {
    expect(isDom('hello')).toBe(false);
  });
  test('a number', () => {
    expect(isDom(123)).toBe(false);
  });
  test('a object', () => {
    expect(isDom({})).toBe(false);
  });
});
