chrome.runtime.onInstalled.addListener(function() {
    console.log('Smart Coupon Finder installed');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'logCoupon') {
        console.log('Coupon applied:', request.code);
    }
});
