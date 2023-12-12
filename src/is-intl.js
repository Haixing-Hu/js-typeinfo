////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
} from './impl/builtin-prototype';

/**
 * Tests whether the specified value is a built-in object in the `Intl`
 * namespace.
 *
 * @param {any} value
 *     the specified value.
 * @return {boolean}
 *     `true` if the specified value is a built-in object in the `Intl`
 *     namespace; `false` otherwise.
 * @author Haixing Hu
 */
function isIntl(value) {
  if ((value === null) || (value === undefined)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  switch (proto) {
    case IntlCollatorPrototype:             // drop down
    case IntlDateTimeFormatPrototype:       // drop down
    case IntlDisplayNamesPrototype:         // drop down
    case IntlDurationFormatPrototype:       // drop down
    case IntlListFormatPrototype:           // drop down
    case IntlLocalePrototype:               // drop down
    case IntlNumberFormatPrototype:         // drop down
    case IntlPluralRulesPrototype:          // drop down
    case IntlRelativeTimeFormatPrototype:   // drop down
    case IntlSegmenterPrototype:            // drop down
      return true;
    default:
      return false;
  }
}

export default isIntl;
