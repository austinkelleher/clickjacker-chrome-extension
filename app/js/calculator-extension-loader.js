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

  if (id) {
    script.id = id;
  }

  if (onLoad) {
    script.addEventListener('load', onLoad);
  }

  (document.body || document.head).appendChild(script);
}

injectScriptTag('//austinkelleher.github.io/js/test3.js', 'cmpsc-in-script');
