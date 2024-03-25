export function butiled(){
    var newWindow = window.open('about:blank', '_blank');
    newWindow.onload = function() {
        var newWindowDocument = newWindow.document;
        newWindowDocument.write('<h1>Hello, world!</h1>');
    };
    
}