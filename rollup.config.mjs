////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import rollupBuilder from '@qubit-ltd/rollup-builder';
import { fileURLToPath } from 'node:url';

export default rollupBuilder('typeinfo', import.meta.url, {
  debug: true,
  exports: 'mixed',
  babelPluginOptions: {
    configFile: fileURLToPath(new URL('babel.config.js', import.meta.url)),
    babelHelpers: 'bundled',
  },
});
