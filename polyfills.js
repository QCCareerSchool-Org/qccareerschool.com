/* eslint no-extend-native: 0 */

// https://github.com/zeit/next.js/tree/canary/examples/with-polyfills

// core-js comes with Next.js. So, you can import it like below
import arrayIncludes from 'core-js/features/array/virtual/includes';
import assign from 'core-js/features/object/assign';
import stringIncludes from 'core-js/features/string/virtual/includes';
import repeat from 'core-js/features/string/virtual/repeat';
import startsWith from 'core-js/features/string/virtual/starts-with';

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
String.prototype.includes = stringIncludes;
String.prototype.repeat = repeat;
String.prototype.startsWith = startsWith;
Array.prototype.includes = arrayIncludes;
Object.assign = assign;
