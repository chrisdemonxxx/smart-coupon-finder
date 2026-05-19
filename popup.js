document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('store-name').textContent = 'Loading...';
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
            var host = new URL(tabs[0].url).hostname;
            document.getElementById('store-name').textContent = host;
        }
    });
    
    document.getElementById('find-coupons').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'findCoupons'});
        });
    });
});
