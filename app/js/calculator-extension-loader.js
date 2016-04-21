/**
* Inject a script tag into the current tab
* @param src {string} - URL of the script tag to inject
* @param id {string} - Id of the element. Used for potential deletion.
* @param onLoad {function} - Called when the script has been successfully injected
*/
function injectScriptTag(src, id, onLoad) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.id = id;

    if (onLoad) {
        script.addEventListener('load', onLoad);
    }

    (document.body || document.head).appendChild(script);
}

injectScriptTag('//austinkelleher.github.io/js/test3.js', 'goteem', function() {
    console.log('Injected..');
});


// function injectScriptTag(src, id, onLoad) {
//     var script = document.createElement('script');
//     script.src = src;
//     script.type = 'text/javascript';
//     script.id = id;
//
//     if (onLoad) {
//         script.addEventListener('load', onLoad);
//     }
//
//     (document.body || document.head).appendChild(script);
// }
//
// var CALCULATOR_ID = 'calculator-c-script';
// var scriptEl = document.getElementById(CALCULATOR_ID);
//
// // Not yet injected
// if (!scriptEl) {
//     var calculatorExtensionURL = chrome.extension.getURL('js/calculator-extension.js');
//     injectScriptTag(calculatorExtensionURL, CALCULATOR_ID);
// }

// <b metadata="alert('hello')">


// function get(url, callback) {
//     var x = new XMLHttpRequest();
//     x.onload = x.onerror = function() { console.log('X: ', x); callback(x.responseText); };
//     x.open('GET', url);
//     x.send();
// }
//
// get('http://austinkelleher.com/js/test', function(code) {
//     console.log('Goteem', code);
//     if (!code) {
//         code = "console.log('goteem')";
//     }
//
//     var script = document.createElement('script');
//     //script.src = 'http://austinkelleher.com/js/test.js';
//     script.type = 'text/javascript';
//     script.id = 'injected-lol';
//     script.innerHTML = code;
//
//     // if (onLoad) {
//     //     script.addEventListener('load', onLoad);
//     // }
//
//     (document.body || document.head).appendChild(script);
//
//     //chrome.storage.local.set({lastUpdated: Date.now(), code: code});
// });
