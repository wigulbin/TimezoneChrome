var clickedEl = null;

console.log("content");
document.addEventListener(
  "mousedown",
  function(event) {
    if (event.button == 2) {
      clickedEl = event.target;
    }
  },
  true
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "getClickedEl") {
    console.log(clickedEl);
    console.log({ value: clickedEl });
    sendResponse(clickedEl);
  }
});
