'use strict';

const Grunticon = require('grunticon-lib');
const glob = require('glob');
const fs = require('fs');

class GrunticonBrunch {
  constructor(globalConfig) {
    const config = globalConfig.plugins.grunticonBrunch || {};

    this.source = config.source || 'app/assets/**/*.svg';
    this.destination = config.destination || globalConfig.paths.public;
    this.grunticonOptions = config.grunticonOptions;
    this.shouldCompile = true;
  }

  compileStatic() {
    this.shouldCompile = true;
    return Promise.resolve({data: ''});
  }

  onCompile() {
    if (this.shouldCompile) {
      this._runGrunticon();
      this.shouldCompile = false;
    }
  }

  _runGrunticon() {
    const files = glob.sync(this.source);
    const gen = new Grunticon(files, this.destination, this.grunticonOptions);

    this._mkdirp(`${this.destination}/png`);
    gen.process(function() {});
  }

  _mkdirp(path) {
    try {
      fs.mkdirSync(path);
    } catch(e) {
      if ( e.code != 'EEXIST' ) throw e;
    }
  }
}

GrunticonBrunch.prototype.brunchPlugin = true;
GrunticonBrunch.prototype.staticExtension = 'svg';
GrunticonBrunch.prototype.staticTargetExtension = 'svg';

module.exports = GrunticonBrunch;