const path = require('path');

module.exports = function loader(...args) {
  let compiler = this._compiler
  const callback = this.async();
  let relativePath = path.relative(process.cwd(), this.resourcePath)
  if(!compiler.readmeOriginalMap){
    compiler.readmeOriginalMap = {}
    compiler.readmeOriginalMap[relativePath] = args[0]
  }else{
    compiler.readmeOriginalMap[relativePath] = args[0]
  }
  callback(null, ...args);
}