// Handle Ctrl+scroll
document.addEventListener('wheel', function (e) {

    // Do nothing if Ctrl key is not pressed
    if (!e.ctrlKey) {
        return;
    }

    // Prevent default behavior
    e.preventDefault();

    // Pass to background script
    chrome.runtime.sendMessage({action: "zoom", domain: e.shiftKey, amount: e.deltaY});
}, {passive: false});

// Handle Ctrl+=/-
document.addEventListener('keyDown', function (e) {

    // Do nothing if Ctrl key is not pressed or key is not '=' or '-'
    if (!e.ctrlKey || (e.keycode != 187 && e.keycode != 189)) {
        chrome.runtime.sendMessage({error: "bad keyCode", shiftKey: e.shiftKey, keyCode: e.keyCode});
        return;
    }

    // Prevent default behavior
    e.preventDefault();

    // Pass to background script
    chrome.runtime.sendMessage({action: "zoom", domain: e.shiftKey, amount: e.keyCode == 187 ? 1 : -1});
});
