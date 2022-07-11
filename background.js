const zoomIncrement = 0.1;

chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.action === "zoom") { // only message right now

        // If shift is pressed, change domain zoom
        // Otherwise, change tab zoom
        chrome.tabs.setZoomSettings(sender.tab.id, {
            scope: msg.domain ? "per-origin" : "per-tab"
        });

        console.log("zoom", msg.amount);

        // Zoom zoom :)
        chrome.tabs.getZoom(sender.tab.id).then((curr_zoom) => {
            chrome.tabs.setZoom(sender.tab.id, curr_zoom + (msg.amount > 0 ? -zoomIncrement : zoomIncrement))
        });
    }
    if (msg.error === "bad keyCode") {
        console.log("bad keyCode", msg.shiftKey, msg.keyCode);
    }
});
