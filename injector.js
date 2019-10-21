function loadScript(script) {
  const s = document.createElement('script');
  // TODO: add "script.js" to web_accessible_resources in manifest.json
  s.src = chrome.runtime.getURL(script);
  s.onload = function() {
      this.remove();
  };
  (document.head || document.documentElement).appendChild(s);  
}

loadScript('leaders.js');
loadScript('ilmina_extension.js');
