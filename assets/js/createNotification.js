import createLink from "./createLink.js";
import createPrivateMessage from "./createPrivateMessage.js";
import createSideImage from "./createSideImage.js";
import styleUnreadNotifications from "./styleUnreadNotifications.js";

export { main };

const main = document.querySelector('[data-main]');

export default function createNotification(item, index) {
   const notification = document.createElement('article');
   notification.classList.add('notification');
   notification.setAttribute('data-notification', index);
   notification.innerHTML = `
      <img src="assets/${item.image}" alt="Image of ${item.author}" class="notification__image">
      <section data-notification-section>
         <p class="notification__text" data-notification-text>
            <span class="notification__author">${item.author}</span>
            ${item.text}
            
         </p>
         <span class="notification__date">${item.date}</span>
      </section>
   `;

   createLink(item, notification);
   styleUnreadNotifications(item, notification)
   createSideImage(item, notification);
   createPrivateMessage(item, notification);
   
   main.appendChild(notification);
}