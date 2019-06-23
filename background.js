chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "tz",
    title: "View Timezones",
    type: "normal"
  });
});

function mycallback(info, tab) {
  chrome.tabs.sendMessage(tab.id, "getClickedEl", function(clickedEl) {
    console.log(clickedEl);
  });
}

chrome.contextMenus.onClicked.addListener(mycallback);
