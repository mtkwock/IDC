
// chrome.runtime.onInstalled.addListener((val) => {
//     // chrome.contextMenus.create({
//     //   "id": "sampleContextMenu",
//     //   "title": "Sample Context Menu",
//     //   "contexts": ["selection"]
//     // });
// });

// chrome.browserAction.onClicked.addListener((tab) => {
//   alert('icon clicked');
// });

chrome.runtime.onMessage.addListener((message, sender, reply) => {
  console.log(message);

  chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataUri) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      const actualWidth = img.width;
      const actualHeight = img.height;
      canvas.width = actualWidth * (message.width / message.windowWidth);
      canvas.height = actualHeight * (message.height / message.windowHeight);
      context.drawImage(
        img,
        actualWidth * (message.offsetX / message.windowWidth),
        actualHeight * (message.offsetY / message.windowHeight));
      const canvasData = canvas.toDataURL('image/png');
      console.log(canvasData);
      const link = document.createElement('a');
      link.setAttribute('href', canvasData);
      link.setAttribute('download', 'valeria-screenshot.png');
      link.click();
    };
    img.src = dataUri;
  });
  reply('Hello');
});