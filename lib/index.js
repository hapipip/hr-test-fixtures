const Path = require('path');

module.export = {
  manifestPath () {
    return Path.join(__dirname, 'manisfest');
  },

  configPath () {
    return Path.join(__dirname, 'config');
  }
}
