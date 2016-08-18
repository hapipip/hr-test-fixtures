const Path = require('path');

module.exports = {
  manifestPath () {
    return Path.join(__dirname, 'manisfest');
  },

  configPath () {
    return Path.join(__dirname, 'config');
  }
}
