export default function createSideImage(item, notification) {
   if (item.sideImage !== undefined) {
      const sideImage = document.createElement('img');
      sideImage.classList.add('notification__side-image');
      sideImage.setAttribute('src', item.sideImage);
      sideImage.setAttribute('alt', '');
      notification.appendChild(sideImage);
   };
}