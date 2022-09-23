export const notifications = [
   {
     author: 'Mark Webber',
     image: '/images/avatar-mark-webber.webp',
     text: 'reacted to your recent post',
     link: {
       type: 'post',
       text: 'My first tournament today!'
     },
     date: '1m ago',
     read: false
   },
   {
     author: 'Angela Gray',
     image: '/images/avatar-angela-gray.webp',
     text: 'followed you',
     date: '5m ago',
     read: false
   },
   {
     author: 'Jacob Thompson',
     image: '/images/avatar-jacob-thompson.webp',
     text: 'has joined your group',
     link: {
       type: 'group',
       text: 'Chess Club'
     },
     date: '1 day ago',
     read: false
   },
   {
     author: 'Rizky Hasanuddin',
     image: '/images/avatar-rizky-hasanuddin.webp',
     text: 'sent you a private message',
     date: '5 days ago',
     privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
     read: true
   },
   {
     author: 'Kimberly Smith',
     image: '/images/avatar-kimberly-smith.webp',
     text: 'commented on your picture',
     sideImage: 'assets/images/image-chess.webp',
     date: '1 week ago',
     read: true
   },
   {
     author: 'Nathan Peterson',
     image: '/images/avatar-nathan-peterson.webp',
     text: 'reacted to your recent post',
     link: {
       type: 'post',
       text: '5 end-game strategies to increase your win rate'
     },
     date: '2 weeks ago',
     read: true
   },
   {
     author: 'Anna Kim',
     image: '/images/avatar-anna-kim.webp',
     text: 'left the group',
     link: {
       type: 'group',
       text: 'Chess Club'
     },
     date: '2 weeks ago',
     read: true
   },
 
 ];