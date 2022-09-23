export default function createPrivateMessage(item, notification) {
   if (item.privateMessage !== undefined) {
      const notificationSection = notification.querySelector('[data-notification-section]');
      const privateMessage = document.createElement('p');
      privateMessage.classList.add('notification__private-message');
      privateMessage.innerText = item.privateMessage;
      notificationSection.appendChild(privateMessage);
   }
}