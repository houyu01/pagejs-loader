/**
 * use to generate a PageDefine wrapper
 * @author houyu(785798835@qq.com)
 */
module.exports = function (source, other) {
    var query = this.query.replace('?', '');
    var configPath = query.replace('configPath=', '');
    var config = require(configPath);
    var path = /workspace\/(.*).js$/;
    var queryStructure = path.exec(this.resourcePath.replace(/\\/ig, '/'));
    var queryPath = '';
    if (queryStructure) {
        queryPath = queryStructure[1];
    }
    else {
        return source;
    }
    var supplement = !!~config.pages.indexOf(queryPath) ? `window.require('${queryPath}');` : '';
    var startTpl = `window.define('${queryPath}', function (require, module, exports, define, Page, swan, getApp, window, document, frames, self, location, navigator, localStorage, history, Caches) {`;
    var endTpl = `});${supplement}`;
    return startTpl + source + endTpl;
};
