////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2023.
//    Jon Schlinkert, Haixing Hu
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo from './type-info';
import {
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  BIGINT_EXISTS,
  REGEXP_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  AGGREGATEERROR_EXIST,
  INTERNALERROR_EXIST,
  MAP_EXISTS,
  SET_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
  INT8ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  UINT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  DATAVIEW_EXISTS,
  WEAKREF_EXISTS,
  PROMISE_EXISTS,
  MAP_ENTRIES_EXISTS,
  SET_ENTRIES_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  STRING_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  INTL_EXISTS,
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
  INTL_SEGMENTER_ITERATOR_EXISTS,
} from './feature-detect';

export default typeInfo;
export {
  typeInfo,
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  BIGINT_EXISTS,
  REGEXP_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  AGGREGATEERROR_EXIST,
  INTERNALERROR_EXIST,
  MAP_EXISTS,
  SET_EXISTS,
  WEAKMAP_EXISTS,
  WEAKSET_EXISTS,
  INT8ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  UINT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  ARRAYBUFFER_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  DATAVIEW_EXISTS,
  WEAKREF_EXISTS,
  PROMISE_EXISTS,
  MAP_ENTRIES_EXISTS,
  SET_ENTRIES_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  STRING_ITERATOR_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  INTL_EXISTS,
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
  INTL_SEGMENTER_ITERATOR_EXISTS,
};
