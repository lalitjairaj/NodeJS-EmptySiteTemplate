/**
 * Created by a598519 on 20-02-2017.
 */
var menudata = require('../data/menu-data.json');
var _ = require('underscore-node');

module.exports.getMenu=function(req,res){
    var lang = req.params.lang;
    var menuItems = [];
_.each(menudata,function(menuItem){
    var langMenu = _.findWhere(menuItem.translations,{"language-code": lang});
    var displayText='unknown';
if(langMenu)
{
    displayText = langMenu.displaytext;
}
    menuItems.push(
                    {
                        "displayName": displayText,
                        "redirectionurl":menuItem["redirection-url"],
                        "cssclass": menuItem["css-class"],
                        "type" : menuItem["type"]
                    }
        );
});
res.status(200).json(menuItems);
};