////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  typeInfo,
} from '../src';

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for objects under the Intl namespace', () => {
  if (INTL_COLLATOR_EXISTS) {
    test('Intl.Collator', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Collator',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Collator,
      };
      expect(typeInfo(new Intl.Collator('zh'))).toEqual(expected);
    });
  }
  if (INTL_DATETIMEFORMAT_EXISTS) {
    test('Intl.DateTimeFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DateTimeFormat',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DateTimeFormat,
      };
      expect(typeInfo(new Intl.DateTimeFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_DISPLAYNAMES_EXISTS) {
    test('Intl.DisplayNames', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DisplayNames',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DisplayNames,
      };
      expect(typeInfo(new Intl.DisplayNames('zh', { type: 'region' })))
        .toEqual(expected);
    });
  }
  if (INTL_DURATIONFORMAT_EXISTS) {
    test('Intl.DurationFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.DurationFormat',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.DurationFormat,
      };
      expect(typeInfo(new Intl.DurationFormat('zh', { style: 'long' })))
        .toEqual(expected);
    });
  }
  if (INTL_LISTFORMAT_EXISTS) {
    test('Intl.ListFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.ListFormat',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.ListFormat,
      };
      expect(typeInfo(new Intl.ListFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_LOCALE_EXISTS) {
    test('Intl.Locale', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Locale',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Locale,
      };
      expect(typeInfo(new Intl.Locale('zh'))).toEqual(expected);
    });
  }
  if (INTL_NUMBERFORMAT_EXISTS) {
    test('Intl.NumberFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.NumberFormat',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.NumberFormat,
      };
      expect(typeInfo(new Intl.NumberFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_PLURALRULES_EXISTS) {
    test('Intl.PluralRules', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.PluralRules',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.PluralRules,
      };
      expect(typeInfo(new Intl.PluralRules('zh'))).toEqual(expected);
    });
  }
  if (INTL_RELATIVETIMEFORMAT_EXISTS) {
    test('Intl.RelativeTimeFormat', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.RelativeTimeFormat',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.RelativeTimeFormat,
      };
      expect(typeInfo(new Intl.RelativeTimeFormat('zh'))).toEqual(expected);
    });
  }
  if (INTL_SEGMENTER_EXISTS) {
    test('Intl.Segmenter', () => {
      const expected = {
        type: 'object',
        subtype: 'Intl.Segmenter',
        category: 'intl',
        isPrimitive: false,
        isBuiltIn: true,
        constructor: Intl.Segmenter,
      };
      expect(typeInfo(new Intl.Segmenter('zh'))).toEqual(expected);
    });
  }
});
