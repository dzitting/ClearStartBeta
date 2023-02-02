chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.browserAction.setPopup({popup: "setup.html"});
  }
});
  