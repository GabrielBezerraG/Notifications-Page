export default function createLink(item, notification) {
   if (item.link !== undefined) {
      const notificationText = notification.querySelector('[data-notification-text]');
      const link = document.createElement('a');
      link.setAttribute('href', '#');
      link.classList.add(`notification__text--${item.link.type}`);
      link.innerText = item.link.text;
      notificationText.appendChild(link);
   }
}