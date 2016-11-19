'use strict';

class GrunticonCompiler {
  onCompile({allSourceFiles, sourceFiles, type}) {
    console.log(allSourceFiles, sourceFiles, type)
  }
}

console.log("in module")

GrunticonCompiler.prototype.brunchPlugin = true;

module.exports GrunticonCompiler;