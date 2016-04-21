var strippedHeaders = {
  'x-frame-options': true,
  'frame-ancestors': true
};

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  for (var i = 0; i < details.responseHeaders.length; ++i) {
    var header = details.responseHeaders[i].name.toLowerCase();
    if (strippedHeaders[header]) {
      details.responseHeaders.splice(i, 1);
      return {
        responseHeaders: details.responseHeaders
      };
    }
  }
}, {
  urls: ['<all_urls>']
}, ['blocking', 'responseHeaders']);
