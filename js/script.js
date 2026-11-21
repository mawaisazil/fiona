/* ===========================================================
   LOGIC — CONFIG ko use karke page chalata hai
   (Usually isme change nahi karna)
   =========================================================== */
(function () {

  /* ---------- 1) Slider render ---------- */
  var sliderEl = document.getElementById('slider');
  if (sliderEl && CONFIG.slider && CONFIG.slider.images && CONFIG.slider.images.length) {
    CONFIG.slider.images.forEach(function (item, i) {
      var fig = document.createElement('figure');
      fig.className = 'slide';

      var imgWrap = document.createElement('div');
      imgWrap.className = 'slide-img';

      var img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || ('Show photo ' + (i + 1));
      img.loading = 'lazy';
      img.decoding = 'async';

      imgWrap.appendChild(img);
      fig.appendChild(imgWrap);

      var cap = document.createElement('figcaption');
      cap.textContent = item.caption || '';
      fig.appendChild(cap);

      sliderEl.appendChild(fig);
    });

    /* Arrows */
    function stepPx() {
      var first = sliderEl.querySelector('.slide');
      return first ? first.offsetWidth + 16 : 240;
    }
    function scrollByCard(dir) {
      var behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      sliderEl.scrollBy({ left: dir * stepPx(), behavior: behavior });
    }
    var prevBtn = document.querySelector('.slider-btn.prev');
    var nextBtn = document.querySelector('.slider-btn.next');
    if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });

    /* Drag-to-scroll (desktop) */
    var isDown = false, startX = 0, startLeft = 0;
    sliderEl.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch') return;
      isDown = true;
      startX = e.clientX;
      startLeft = sliderEl.scrollLeft;
      sliderEl.classList.add('dragging');
      if (sliderEl.setPointerCapture) sliderEl.setPointerCapture(e.pointerId);
    });
    sliderEl.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      sliderEl.scrollLeft = startLeft - (e.clientX - startX);
    });
    function endDrag(e) {
      if (!isDown) return;
      isDown = false;
      sliderEl.classList.remove('dragging');
      if (e && sliderEl.hasPointerCapture && sliderEl.hasPointerCapture(e.pointerId)) {
        sliderEl.releasePointerCapture(e.pointerId);
      }
    }
    sliderEl.addEventListener('pointerup', endDrag);
    sliderEl.addEventListener('pointercancel', endDrag);
    sliderEl.addEventListener('pointerleave', endDrag);
  }

  /* ---------- 2) Offer cards render ---------- */
  var offersEl = document.getElementById('offers');
  if (offersEl && CONFIG.offers && CONFIG.offers.length) {
    CONFIG.offers.forEach(function (o) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'offer';
      a.href = '#';
      a.setAttribute('data-link', o.link || 'tickets');

      if (o.badge) {
        var b = document.createElement('span');
        b.className = 'offer-badge' + (o.badgeClass ? ' ' + o.badgeClass : '');
        b.textContent = o.badge;
        a.appendChild(b);
      }
      var h = document.createElement('h3');
      h.textContent = o.title || '';
      a.appendChild(h);

      var p = document.createElement('p');
      p.textContent = o.text || '';
      a.appendChild(p);

      var more = document.createElement('span');
      more.className = 'offer-link';
      more.textContent = 'Book now ›';
      a.appendChild(more);

      li.appendChild(a);
      offersEl.appendChild(li);
    });
  }

  /* ---------- 3) Attach URLs from CONFIG.links ---------- */
  document.querySelectorAll('[data-link]').forEach(function (a) {
    var u = CONFIG.links[a.getAttribute('data-link')];
    if (u) {
      a.href = u;
      if (u.indexOf('mailto:') === 0) {
        a.removeAttribute('target');
      } else {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      }
    } else {
      a.href = '#';
      a.title = 'Link not set yet';
    }
  });

  /* ---------- 4) Avatar ---------- */
  if (CONFIG.avatar) {
    var av = document.getElementById('avatar');
    var avatarImg = new Image();
    avatarImg.alt = CONFIG.avatarAlt;
    avatarImg.src = CONFIG.avatar;
    avatarImg.onload = function () {
      var fb = document.getElementById('avatar-fallback');
      if (fb) fb.remove();
      av.appendChild(avatarImg);
    };
  }

  /* ---------- 5) Share button ---------- */
  var shareBtn = document.getElementById('share');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var url = location.href;
      function done() {
        shareBtn.textContent = 'Copied!';
        setTimeout(function () { shareBtn.textContent = 'Copy link'; }, 1800);
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, function () {
            shareBtn.textContent = 'Copy from address bar';
          });
        } else {
          shareBtn.textContent = 'Copy from address bar';
        }
      } catch (e) {
        shareBtn.textContent = 'Copy from address bar';
      }
    });
  }

  /* ---------- 6) Block empty "#" links ---------- */
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

})();
