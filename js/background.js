const KeepAliveOn = true
const time = 25 * 1000

function sendMessage() {
  console.log("send to popup: ", "ping")
  chrome.runtime.sendMessage("ping", function (response) {
    console.log("receive from popup:  ", response)
  })
}

let n = 1
function changeStorage() {
  chrome.storage.onChanged.addListener(async function (changed) {
    console.log("存储更新: ", changed)
    const n = await chrome.storage.local.get("n");
    setTimeout(() => {
      n++;
      chrome.storage.local.set({
        n
      });
    }, time)
  })
  chrome.storage.sync.set({
    n
  })
}

if (KeepAliveOn) {
  setInterval(() => {
    // sendMessage()

    changeStorage()
  }, time);
}

setInterval(() => {
  console.log("每隔 40s 输出一条消息")
}, 40 * 1000);