function loadScript(script) {
  const s = document.createElement('script');
  // TODO: add "script.js" to web_accessible_resources in manifest.json
  s.src = chrome.runtime.getURL(script);
  s.onload = function() {
      this.remove();
  };
  (document.head || document.documentElement).appendChild(s);  
}

const screenShotter = document.createElement('button');
screenShotter.id = 'idc-screenshot-button';
screenShotter.style.display = 'none';
screenShotter.innerText = 'Save Team Screenshot';
screenShotter.onclick = () => {
  const teamBuilder = document.getElementById('team-builder');
  const rect = teamBuilder.getBoundingClientRect();
  chrome.runtime.sendMessage({
    width: rect.width,
    height: rect.height,
    offsetX: -1 * rect.left,
    offsetY: -1 * rect.top,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  }, (response) => {});
}
document.body.appendChild(screenShotter);
loadScript('leaders.js');
loadScript('ilmina_extension.js');