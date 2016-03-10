'use strict';

function needsEnv() {
  var missing = [].filter.call(arguments, function(name) {
    return !process.env[name];
  });
  if (missing.length) { throw new Error('env missing: ' + missing.join(', ')); }
  return {
    inProd: function() {
      if (process.env.NODE_ENV !== 'production') { return; }
      return needsEnv.apply(null, arguments);
    }
  };
}

module.exports = needsEnv;
