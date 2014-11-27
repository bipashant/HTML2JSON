var json = "";
var mainwrapper = document.getElementsByTagName('div')[0];
parseHTML(mainwrapper);
console.log(json);

function parseHTML(currentnode) {
    json += ("{");
    json += ('tag: "' + currentnode.tagName + '"');
    
    for (var j = 0; j < currentnode.attributes.length; j++) {
        json += (',' + currentnode.attributes[j].name + ': "' + currentnode.attributes[j].value + '"');
    }
    
    if (currentnode.children.length > 1) {
        json += (', "children" : [');
        for (var i = 0; i < currentnode.children.length; i++) {
            if (i > 0)
                json += (",");
            parseHTML(currentnode.children[i]);
        }
        json += ("]");
    }

    json += ("}");

}
