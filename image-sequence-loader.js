let cloudImage360 = document.querySelector('.cloudimage-360');
const imagesData = cloudImage360.getAttribute('data-folder');
const images = JSON.parse(imagesData);

// Create image elements and append them to the body
let imageElements = []
images.forEach(base64 => {
    imageElements.push('data:image/jpeg;base64,' + base64);
});
imageElements = JSON.stringify(imageElements)
cloudImage360.setAttribute('data-folder', imageElements);