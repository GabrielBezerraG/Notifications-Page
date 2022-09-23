import createNotification from "./createNotification.js";
import { notifications } from "./notifications.js";
import updateNotificationsCount from "./updateNotificationsCount.js";


export default function markAsRead(notification) {
   const index = notification.dataset.notification;
   if (!notifications[index].read) {
      notifications[index].read = true;
      updateNotificationsCount();
   }

}