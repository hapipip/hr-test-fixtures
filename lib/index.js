const Path = require('path');

module.exports = {
  manifestPath () {
    return Path.join(__dirname, 'manifest');
  },

  configPath () {
    return Path.join(__dirname, 'config');
  }
}
