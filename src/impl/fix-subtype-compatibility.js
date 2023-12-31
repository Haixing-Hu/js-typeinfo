////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Fixes the compatibility of subtype names of objects.
 *
 * @param {string} subtype
 *     the name of a subtype to be fixed.
 * @return {string}
 *     the fixed name of the subtype.
 * @author Haixing Hu
 * @private
 */
function fixSubtypeCompatibility(subtype) {
  // in es6 target, babel translate the anonymous class as a function of the
  // name ''
  if (subtype === '') {
    return '';
  }
  // in es5 target, babel translate the anonymous class as a function of the
  // name '_class'
  if (subtype === '_class') {
    return '';
  }
  // in es5 and es6 targets, babel translate the async generator object to
  // an object built with a function named '_AsyncGenerator()'
  if (subtype === '_AsyncGenerator') {
    return 'AsyncGenerator';
  }
  // otherwise, return the original name
  return subtype;
}

export default fixSubtypeCompatibility;
