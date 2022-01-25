chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg.action == "zoom") {
        chrome.tabs.setZoomSettings(sender.tab.id, {
            scope: msg.domain ? "per-origin" : "per-tab"
        });
        chrome.tabs.getZoom(sender.tab.id).then((curr_zoom) => {
            chrome.tabs.setZoom(sender.tab.id, curr_zoom + (msg.amount > 0 ? -0.1 : 0.1))
        });
    }
});
