/**
 * use to generate a PageDefine wrapper
 * @author houyu(785798835@qq.com)
 */
module.exports = function (source, other) {
    var path = /(pages.*).js$/;
    var queryPath = path.exec(this.resourcePath.replace(/\\/ig, '/'));
	queryPath = queryPath ? queryPath[1] : '';
    var startTpl = `PageDefine('${queryPath}', function (Page, swan, getApp) {`;
    var endTpl = `});`;
    return startTpl + source + endTpl;
};
