function isTextNode(node) {
    return node.nodeType == 3;
}

function checkValue(value, valueToRemove) {
    return value.includes(valueToRemove) && value.length <= 1;
}

function removeOut(value) {
    var bodyChilds = document.body.childNodes;
    
    for (var i = 0; i < bodyChilds.length; i++) {
        if (isTextNode(bodyChilds.item(i)) && checkValue(bodyChilds.item(i).textContent.trim(), value)) {
            document.body.removeChild(bodyChilds.item(i));
            break;
        }
    }
}

window.onload = function() {
    removeOut("s");
}