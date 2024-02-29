
chrome.runtime.onMessage.addListener(function (
  message,
  _,
  sendResponse
) {
  console.log("popup receive: ", message);
  sendResponse("pong");
});