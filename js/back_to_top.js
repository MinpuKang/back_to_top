function start(tab) {
   chrome.tabs.executeScript(tab.id, {code: 'window.scroll(0, 0);'});
}

// Set up a click handler so that we can merge all the windows.
chrome.browserAction.onClicked.addListener(start);
