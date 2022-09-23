import markAsRead from "./markAsRead.js";
import renderNotifications from "./renderNotifications.js";

export default function styleUnreadNotifications(item, notification) {
   if (!item.read) {
      const notificationText = notification.querySelector('[data-notification-text]');
      const unreadIcon = document.createElement('i');
      unreadIcon.classList.add('notification__unread-icon');
      notificationText.appendChild(unreadIcon);

      notification.classList.add('notification--unread');

      notification.addEventListener('click', ()=> {
         markAsRead(notification);
         renderNotifications();
      });
   }
}