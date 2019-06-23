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
    var myResponse = {};
    myResponse['items'] = [].slice.call(clickedEl.children).map(option => option.innerText).filter(text => !text.indexOf("GMT") !== -1);
    myResponse['id'] = clickedEl.id;
    console.log(myResponse);
    sendResponse(myResponse);
  }
});
