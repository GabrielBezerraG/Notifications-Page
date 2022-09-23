import { notifications } from "./notifications.js";

export default function updateNotificationsCount() {
   const notificationsCount = document.querySelector('[data-count]');
   let counter = 0;
   
   notifications.forEach(item => {
      if (!item.read) counter++;
   });
   
   notificationsCount.innerText = counter; 
}


