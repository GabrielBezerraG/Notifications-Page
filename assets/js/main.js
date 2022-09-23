import markAsRead from "./markAsRead.js";
import renderNotifications from "./renderNotifications.js";
import updateNotificationsCount from "./updateNotificationsCount.js";

const notificationButton = document.querySelector('[data-notification-button]');

updateNotificationsCount();
renderNotifications();


notificationButton.addEventListener('click', ()=> {
   const notificationElements = document.querySelectorAll('[data-notification]');
   notificationElements.forEach((notification) => {
      markAsRead(notification);
   })
   renderNotifications();
});

