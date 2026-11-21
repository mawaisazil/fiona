/* ===========================================================
   EDIT AREA — sirf yahan changes karo
   =========================================================== */
var CONFIG = {
  avatar: "https://tse1.explicit.bing.net/th/id/OIP.E7Y4x-ZLvCZMPgzOImdagQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",                      /* "images/fiona.jpg" ya URL. "" = FC sticker */
  avatarAlt: "Fiona Cauley",

  links: {
    tiktok:    "https://www.tiktok.com/@fionacauley",
    instagram: "",
    cameo:     "https://www.cameo.com/fionacauley",
    tickets:   "",
    email:     "mailto:booking@example.com",
    youtube:   "https://www.youtube.com"
  },

  /* ---- Image slider ----
     Har item: { src: "...", caption: "..." }
     Neeche demo images hain. Apni photos lagane ke liye
     src ko "images/show-01.jpg" etc. se replace kar de. */
  slider: {
    images: [
      { src: "https://picsum.photos/seed/fiona01/400/400", caption: "Live in Manchester" },
      { src: "https://picsum.photos/seed/fiona02/400/400", caption: "SOLD OUT — London" },
      { src: "https://picsum.photos/seed/fiona03/400/400", caption: "Leeds comedy club" },
      { src: "https://picsum.photos/seed/fiona04/400/400", caption: "Glasgow, night 2" },
      { src: "https://picsum.photos/seed/fiona05/400/400", caption: "Birmingham" },
      { src: "https://picsum.photos/seed/fiona06/400/400", caption: "Bristol — encore" },
      { src: "https://picsum.photos/seed/fiona07/400/400", caption: "Dublin crowd" },
      { src: "https://picsum.photos/seed/fiona08/400/400", caption: "Cardiff" },
      { src: "https://picsum.photos/seed/fiona09/400/400", caption: "Liverpool" },
      { src: "https://picsum.photos/seed/fiona10/400/400", caption: "Newcastle" },
      { src: "https://picsum.photos/seed/fiona11/400/400", caption: "Sheffield" },
      { src: "https://picsum.photos/seed/fiona12/400/400", caption: "On the road" }
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
