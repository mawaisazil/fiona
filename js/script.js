/* ===========================================================
   LOGIC — CONFIG ko use karke page chalata hai
   (Usually isme change nahi karna)
   =========================================================== */
(function () {

  /* Har [data-link] wale anchor ko CONFIG.links se URL do */
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var u = CONFIG.links[a.getAttribute('data-link')];
    if (u) {
      a.href = u;
    } else {
      a.href = '#';
      a.title = 'Link not set yet';
    }
    /* mailto: par naya tab nahi khulna chahiye */
    if (u && u.indexOf('mailto:') === 0) {
      a.removeAttribute('target');
    }
  });

  /* Avatar image laga (agar CONFIG mein set hai) */
  if (CONFIG.avatar) {
    var av = document.getElementById('avatar');
    var img = new Image();
    img.alt = CONFIG.avatarAlt;
    img.src = CONFIG.avatar;
    img.onload = function () {
      var fb = document.getElementById('avatar-fallback');
      if (fb) fb.remove();
      av.appendChild(img);
    };
  }

  /* Share / Copy link button */
  var b = document.getElementById('share');
  b.addEventListener('click', function () {
    var url = location.href;
    function done() {
      b.textContent = 'Copied!';
      setTimeout(function () { b.textContent = 'Copy link'; }, 1800);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () {
          b.textContent = 'Copy from address bar';
        });
      } else {
        b.textContent = 'Copy from address bar';
      }
    } catch (e) {
      b.textContent = 'Copy from address bar';
    }
  });

  /* Khali "#" links ko click karne se rok (page top par jump na ho) */
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

})();
