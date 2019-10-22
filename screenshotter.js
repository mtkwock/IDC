
// chrome.runtime.onInstalled.addListener((val) => {
//     // chrome.contextMenus.create({
//     //   "id": "sampleContextMenu",
//     //   "title": "Sample Context Menu",
//     //   "contexts": ["selection"]
//     // });
// });

chrome.runtime.onMessage.addListener((message, sender, reply) => {
  console.log(message);

  chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataUri) => {
    // console.log(dataUri);

    // var BASE64_MARKER = ';base64,';

    // function convertDataURIToBinary(dataURI) {
    //   const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    //   const base64 = dataURI.substring(base64Index);
    //   const raw = window.atob(base64);
    //   const rawLength = raw.length;
    //   const array = new Uint8Array(new ArrayBuffer(rawLength));

    //   for(i = 0; i < rawLength; i++) {
    //     array[i] = raw.charCodeAt(i);
    //   }
    //   return array;
    // }
    // const binaryData = convertDataURIToBinary(dataUri);

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
    // document.appendChild(img);
    // console.log(binaryData);
  });
  reply('Hello');
});