import createNotification from "./createNotification.js";
import { notifications } from "./notifications.js";
import { main } from "./createNotification.js";

export default function renderNotifications() {
   main.innerHTML = '';
   notifications.forEach((item, index) => {
      createNotification(item, index);
   });
}