////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  ABSTRACT_RANGE_EXISTS,
  DOM_EXCEPTION_EXISTS,
  DOM_IMPLEMENTATION_EXISTS,
  DOM_NODE_EXISTS,
  DOM_PARSER_EXISTS,
  DOM_POINT_READONLY_EXISTS,
  DOM_RECT_EXISTS,
  DOM_TOKEN_LIST_EXISTS,
  HTML_COLLECTION_EXISTS,
  MUTATION_OBSERVER_EXISTS,
  MUTATION_RECORD_EXISTS,
  NAMED_NODE_MAP_EXISTS,
  NODE_ITERATOR_EXISTS,
  NODE_LIST_EXISTS,
  TIME_RANGES_EXISTS,
  TREE_WALKER_EXISTS,
} from './feature-detect';

/**
 * Determines whether the specified object is a DOM object.
 *
 * @param {object} obj
 *     The object to be checked.
 * @returns {boolean}
 *     `true` if the specified object is a DOM object; `false` otherwise.
 */
function isDom(obj) {
  return (DOM_NODE_EXISTS && (obj instanceof Node))
    || (HTML_COLLECTION_EXISTS && (obj instanceof HTMLCollection))
    || (NODE_LIST_EXISTS && (obj instanceof NodeList))
    || (NAMED_NODE_MAP_EXISTS && (obj instanceof NamedNodeMap))
    || (NODE_ITERATOR_EXISTS && (obj instanceof NodeIterator))
    || (TREE_WALKER_EXISTS && (obj instanceof TreeWalker))
    || (ABSTRACT_RANGE_EXISTS && (obj instanceof AbstractRange))  // eslint-disable-line no-undef
    || (MUTATION_RECORD_EXISTS && (obj instanceof MutationRecord))
    || (MUTATION_OBSERVER_EXISTS && (obj instanceof MutationObserver))
    || (DOM_TOKEN_LIST_EXISTS && (obj instanceof DOMTokenList))
    || (DOM_RECT_EXISTS && (obj instanceof DOMRect))
    || (DOM_POINT_READONLY_EXISTS && (obj instanceof DOMPointReadOnly))
    || (DOM_PARSER_EXISTS && (obj instanceof DOMParser))
    || (DOM_IMPLEMENTATION_EXISTS && (obj instanceof DOMImplementation))
    || (DOM_EXCEPTION_EXISTS && (obj instanceof DOMException))
    || (TIME_RANGES_EXISTS && (obj instanceof TimeRanges));
}

export default isDom;
