document.addEventListener('wheel', function (e) {
  if (!e.ctrlKey)
    return;
  e.preventDefault();
  chrome.runtime.sendMessage({action: "zoom", domain: e.shiftKey, amount: e.deltaY});
}, {passive: false});
