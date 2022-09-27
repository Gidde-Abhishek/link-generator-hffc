window.addEventListener('DOMContentLoaded', function() {
        // your button here
        var link = document.getElementById('btnOpenNewTab');
        // onClick's logic below:
        link.addEventListener('click', function() {
            var newURL = "https://www.homefirstindia.com/investor-relations/";
            chrome.tabs.create({ url: newURL });
        });
    });