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

var CALCULATOR_ID = 'calculator-c-script';
var scriptEl = document.getElementById(CALCULATOR_ID);

// Not yet injected
if (!scriptEl) {
    var calculatorExtensionURL = chrome.extension.getURL('js/calculator-extension.js');
    injectScriptTag(calculatorExtensionURL, CALCULATOR_ID);
}
