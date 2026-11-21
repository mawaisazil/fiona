/* ===========================================================
   EDIT AREA — sirf yahan changes karo
   =========================================================== */
var CONFIG = {
  avatar: "https://tse1.explicit.bing.net/th/id/OIP.E7Y4x-ZLvCZMPgzOImdagQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",                      /* "images/fiona.jpg" ya URL. "" = FC sticker */
  avatarAlt: "Fiona Cauley",

  links: {
    tiktok:    "https://www.tiktok.com/@fionacauley",
    instagram: "https://www.instagram.com/fionacauley",
    cameo:     "https://www.cameo.com/fionacauley",
    tickets:   "",
    email:     "mailto:booking@example.com",
    youtube:   "https://www.youtube.com/@fionacauley",
    facebook:  "https://www.facebook.com/fionacauley", 
    snapchat:  "https://www.snapchat.com/add/fionacauley", 
  },

  /* ---- Image slider ----
     Har item: { src: "...", caption: "..." }
     Neeche demo images hain. Apni photos lagane ke liye
     src ko "images/show-01.jpg" etc. se replace kar de. */
  slider: {
    images: [
      { src: "slider1.jpg", caption: "Judge Judy" },
      { src: "slider2.jpg", caption: "Talking Judge" },
      { src: "slider3.jpg", caption: "Kim Impossible" },
      { src: "slider4.jpg", caption: "Love you New York" },
      { src: "slider5.jpg", caption: "I’m 30" },
      { src: "slider6.jpg", caption: "Just hit 700k!" },
      { src: "slider7.jpg", caption: "Big ole @netflixisajoke dump" },
      { src: "slider8.jpg", caption: "I love LA" },
      { src: "slider9.jpg", caption: "My lucky charm 🍀" },
      { src: "slider10.jpg", caption: "Learned a TON" },
      { src: "slider11.jpg", caption: "AUSTIN YOU’RE THE BEST!!" },
      { src: "slider12.jpg", caption: "I’ll see yall next year 😘" }
    ]
  },

  /* ---- Offer cards ----
     title, text, badge (ya "" agar nahi chahiye),
     badgeClass: "" (pink) | "mint" | "blue" | "orange"
     link: CONFIG.links ki koi key (jaise "tickets") */
  offers: [
    { title: "2 for 1",   text: "Bring a friend, pay for one",         badge: "HOT",   badgeClass: "",       link: "tickets" },
    { title: "Group 5+",  text: "20% off when you bring the crew",     badge: "GROUP", badgeClass: "mint",   link: "tickets" },
    { title: "Early bird",text: "First 50 tickets, cheaper price",     badge: "NEW",   badgeClass: "blue",   link: "tickets" },
    { title: "Student",   text: "Show your ID at the door",            badge: "",      badgeClass: "",       link: "tickets" }
  ]
};
