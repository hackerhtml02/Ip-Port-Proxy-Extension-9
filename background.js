const proxyInfo = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "http",
      host: "107.175.119.46",
      port: 32321
    },
    bypassList: ["foobar.com"]
  }
};

chrome.proxy.settings.set({ value: proxyInfo, scope: "regular" }, function() {});
