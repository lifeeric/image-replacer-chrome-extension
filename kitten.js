console.log('working');

const images = document.getElementsByTagName('img');

for (let img of images)
{
  // chrome getURL API
  img.src = chrome.extension.getURL('beauty.jpeg');
}
