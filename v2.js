// call copyToClipboard when user copies text on page
document.addEventListener("copy", function (e) {
  var text = e.target.innerText;
  console.log(text);
  e.clipboardData.setData("text/plain", text);
  e.preventDefault();
});

chrome.contextMenus.create({
  title: "AB-Copy",
  id: "ab-gidde-copy-menu",
  contexts: ["all"],
  onclick: function (info, tab) {
    let baseUrl = "https://homefirstindia.com/investor-relations";
    let pageUrl = info.pageUrl;
    let selectionUrl = info.linkUrl;

    if (!pageUrl.includes("#")) {
      alert(
        "You are not on a Homefirst tab page.\nGo to Homefirstindia.com/investor-relations\n1. Right click on desired tab\n2. Choose 'Open in new tab'\n3. Then run AB-Copy by right clicking on the element you need a Jump Link to :)"
      );
    } else {
      if (!pageUrl.endsWith("/")) {
        pageUrl = pageUrl + "/";
      }
      pageUrl = pageUrl.split("#").pop();
      if(pageUrl.includes("/")){
        // remove the last part of the url after the first slash after the #
        pageUrl = pageUrl.split("/")[0];
        pageUrl = pageUrl+"/"
        
      }
      selectionUrl = selectionUrl.split("#").pop();
      let gidde = baseUrl + "/#" + pageUrl + selectionUrl;
      if(confirm(
        "The Direct Link is:\n\n" +
          gidde +
          "\n\nThis will open in a new tab as soon as you close this alert."
      )){
      chrome.tabs.create({ url: gidde });}
    }
  },
});

