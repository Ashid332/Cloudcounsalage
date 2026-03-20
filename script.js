// Sticky Nav Shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', scrollY > 40);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Scroll Reveal Animation
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('v'), i * 55);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.r').forEach(el => obs.observe(el));

// ====== COUNTUP ANIMATION ======
function animateCountup(el) {
  const target  = parseFloat(el.dataset.countup);
  const suffix  = el.dataset.suffix || '';
  const useComma = el.dataset.comma === 'true';
  const duration = 2000; // ms
  const start    = performance.now();

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const current  = target * easeOut(progress);

    let display = target >= 100
      ? Math.floor(current)
      : parseFloat(current.toFixed(1));

    if (useComma) {
      display = Math.floor(current).toLocaleString();
    }

    el.textContent = display + suffix;

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = (useComma ? Math.round(target).toLocaleString() : target) + suffix;
  }

  requestAnimationFrame(step);
}

const countupObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCountup(e.target);
      countupObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-countup]').forEach(el => countupObs.observe(el));


// Founder Image Lightbox
const lightbox = document.getElementById('img-lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.fcard img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

// Count-Up Animation
const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      let current = 0;
      const increment = target / 30; 
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.innerText = target;
          clearInterval(timer);
        } else {
          el.innerText = Math.floor(current);
        }
      }, 30);
      countObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count').forEach(el => countObs.observe(el));

// WHO WE ARE — Draggable Carousel
(function() {
  const carousel = document.getElementById('wc-carousel');
  const track = document.getElementById('wc-track');
  const dotsContainer = document.getElementById('wc-dots');
  if (!carousel || !track) return;

  const slides = track.querySelectorAll('.wc-slide');
  const total = slides.length;
  let current = 0;
  const GAP = 16;

  // Build dots
  const dots = [];
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'wc-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
    dots.push(d);
  });

  function getItemWidth() {
    return carousel.clientWidth - 32; // 16 padding * 2
  }

  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function getOffset(index) {
    return -(index * (getItemWidth() + GAP));
  }

  function apply3D(targetIndex) {
    slides.forEach((slide, i) => {
      const diff = i - targetIndex;
      const rotY = diff === 0 ? 0 : diff > 0 ? 90 : -90;
      const opacity = diff === 0 ? 1 : 0.5;
      slide.style.transform = `rotateY(${rotY}deg)`;
      slide.style.opacity = opacity;
      slide.style.transition = 'transform 0.45s cubic-bezier(.25,.46,.45,.94), opacity 0.45s';
    });
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    track.style.transition = 'transform 0.45s cubic-bezier(.25,.46,.45,.94)';
    track.style.transform = `translateX(${getOffset(current)}px)`;
    apply3D(current);
    updateDots();
  }

  // Set initial perspective on track
  track.style.perspective = '1000px';
  track.style.transformStyle = 'preserve-3d';
  slides.forEach((slide, i) => {
    slide.style.flexShrink = '0';
    slide.style.width = getItemWidth() + 'px';
    slide.style.transformOrigin = 'center center';
  });
  goTo(0);

  // Resize
  window.addEventListener('resize', () => {
    slides.forEach(slide => slide.style.width = getItemWidth() + 'px');
    track.style.transition = 'none';
    track.style.transform = `translateX(${getOffset(current)}px)`;
  });

  // Mouse drag
  let startX = 0, startOffset = 0, isDragging = false, dragVelocity = 0, lastX = 0, lastTime = 0;

  carousel.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    lastX = e.clientX;
    lastTime = Date.now();
    startOffset = getOffset(current);
    track.style.transition = 'none';
    carousel.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const now = Date.now();
    dragVelocity = (e.clientX - lastX) / (now - lastTime + 1) * 1000;
    lastX = e.clientX;
    lastTime = now;
    const dx = e.clientX - startX;
    track.style.transform = `translateX(${startOffset + dx}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = 'grab';
    const dx = e.clientX - startX;
    if (dx < -60 || dragVelocity < -500) goTo(current + 1);
    else if (dx > 60 || dragVelocity > 500) goTo(current - 1);
    else goTo(current);
  });

  // Touch drag
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    lastX = startX;
    lastTime = Date.now();
    startOffset = getOffset(current);
    track.style.transition = 'none';
  }, { passive: true });

  carousel.addEventListener('touchmove', e => {
    const now = Date.now();
    dragVelocity = (e.touches[0].clientX - lastX) / (now - lastTime + 1) * 1000;
    lastX = e.touches[0].clientX;
    lastTime = now;
    const dx = e.touches[0].clientX - startX;
    track.style.transform = `translateX(${startOffset + dx}px)`;
  }, { passive: true });

  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -50 || dragVelocity < -400) goTo(current + 1);
    else if (dx > 50 || dragVelocity > 400) goTo(current - 1);
    else goTo(current);
  });
})();

// Animated Testimonials (Founders)
const founders = [
  { name: "Tushar Topale", deg: "Founder & CEO", quote: '"Visionary leader driving the mission to eradicate unemployability globally."', src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Tushar%20Profile.png" },
  { name: "Harshada Topale", deg: "Co-Founder & Director", quote: '"Co-founding director helping scale the impact of our social cause."', src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Harshada%20Profile.png" },
  { name: "Subhi Shildhankar", deg: "Director", quote: '"Strategic leader focused on expanding our global ecosystem."', src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Subhi%20Profile.png" },
  { name: "Abhishek Ganguly", deg: "Director", quote: '"Committed to bridging the gap between industry and academia."', src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Abhishek%20Profile.png" },
  { name: "Sudin Baraokar", deg: "Global IT & AI Expert", quote: '"Enabling professional development for students across the world."', src: "https://www.cloudcounselage.com/hubfs/DTI%20-%20Sudin%20Profile.png" }
];

let atActive = 0;
const atStack = document.getElementById('at-stack');
const atName = document.getElementById('at-name');
const atDeg = document.getElementById('at-designation');
const atQuote = document.getElementById('at-quote');

function updateAT() {
  atStack.innerHTML = '';
  founders.forEach((f, i) => {
    const img = document.createElement('img');
    img.src = f.src;
    img.className = 'ats-img ' + (i === atActive ? 'active' : (i < atActive ? 'prev' : 'inactive'));
    img.style.rotate = i === atActive ? '0deg' : (Math.random() * 20 - 10) + 'deg';
    atStack.appendChild(img);
  });
  
  const active = founders[atActive];
  document.getElementById('at-content').style.opacity = 0;
  setTimeout(() => {
    atName.innerText = active.name;
    atDeg.innerText = active.deg;
    atQuote.innerText = active.quote;
    document.getElementById('at-content').style.opacity = 1;
  }, 300);
}

document.getElementById('at-next').onclick = () => {
  atActive = (atActive + 1) % founders.length;
  updateAT();
};
document.getElementById('at-prev').onclick = () => {
  atActive = (atActive - 1 + founders.length) % founders.length;
  updateAT();
};

updateAT();

// ══════════════════════════════════════
// SERVICE TESTIMONIAL SLIDER (Vanilla JS)
// ══════════════════════════════════════
(function () {
  const services = [
    {
      name: 'Consulting',
      cat: 'Our Services',
      desc: 'Democratising consulting to provide cost-effective services accessible to any organisation at every stage of growth.',
      link: '#',
      img: 'https://www.cloudcounselage.com/hubfs/V30%20Speaker%20Sessions-2.png'
    },
    {
      name: 'Branding',
      cat: 'Our Services',
      desc: 'Helping companies leverage purpose-driven branding to grab the attention of customers who matter most.',
      link: 'https://www.cloudcounselage.com/events',
      img: 'https://www.cloudcounselage.com/hubfs/IAEA%2024%20-%20Best%20Colleges.jpg'
    },
    {
      name: 'Hiring',
      cat: 'Our Services',
      desc: 'Working with organisations to build their growth story by attracting, recruiting, and retaining the right talent.',
      link: 'https://drive.google.com/file/d/1lwxHzYWG-vwkapsfM7Afwa5FwYg-bjy7/view',
      img: 'https://www.cloudcounselage.com/hubfs/IP%2019-20%20induction%20cropped.jpeg'
    },
    {
      name: 'Learning & Development',
      cat: 'Our Services',
      desc: 'Helping organisations build a leadership pipeline and ethical talent with startup mindset to speed up growth.',
      link: 'https://www.cloudcounselage.com/training',
      img: 'https://www.cloudcounselage.com/hs-fs/hubfs/Train%20The%20Trainer%20(1)-1-1.png?width=900&height=523'
    }
  ];

  let current = 0;
  const total = services.length;

  const imgInner  = document.getElementById('svc-img-inner');
  const catEl     = document.getElementById('svc-cat');
  const nameEl    = document.getElementById('svc-name');
  const descEl    = document.getElementById('svc-desc');
  const linkEl    = document.getElementById('svc-link');
  const currentEl = document.getElementById('svc-current');
  const totalEl   = document.getElementById('svc-total');
  const thumbsEl  = document.getElementById('svc-thumbs');
  const nextBtn   = document.getElementById('svc-next');
  const prevBtn   = document.getElementById('svc-prev');

  if (!imgInner) return;

  totalEl.textContent = String(total).padStart(2, '0');

  function buildThumbs() {
    thumbsEl.innerHTML = '';
    services.forEach((svc, i) => {
      if (i === current) return;
      const btn = document.createElement('button');
      btn.className = 'svc-thumb';
      btn.innerHTML = `<img src="${svc.img}" alt="${svc.name}">`;
      btn.title = svc.name;
      btn.addEventListener('click', () => goTo(i, i > current ? 'up' : 'down'));
      thumbsEl.appendChild(btn);
    });
  }

  function animateImage(newSrc, direction) {
    const exiting = document.createElement('div');
    exiting.style.cssText = 'position:absolute;inset:0;overflow:hidden;border-radius:inherit;';
    exiting.innerHTML = `<img src="${imgInner.querySelector('img').src}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
    imgInner.parentNode.appendChild(exiting);
    requestAnimationFrame(() => {
      exiting.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s';
      exiting.style.transform = direction === 'up' ? 'translateY(-100%)' : 'translateY(100%)';
      exiting.style.opacity = '0';
      setTimeout(() => exiting.remove(), 620);
    });
    const img = imgInner.querySelector('img');
    img.src = newSrc;
    imgInner.style.transition = 'none';
    imgInner.style.transform = direction === 'up' ? 'translateY(100%)' : 'translateY(-100%)';
    imgInner.style.opacity = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      imgInner.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s';
      imgInner.style.transform = 'translateY(0)';
      imgInner.style.opacity = '1';
    }));
  }

  function animateText(direction) {
    const cls = direction === 'up' ? 'svc-sl-anim' : 'svc-sl-anim-left';
    [catEl, nameEl, descEl, linkEl].forEach((el, i) => {
      el.classList.remove('svc-sl-anim', 'svc-sl-anim-left');
      el.style.animationDelay = `${i * 0.07}s`;
      void el.offsetWidth;
      el.classList.add(cls);
    });
  }

  function goTo(index, direction) {
    if (index === current) return;
    const dir = direction || (index > current ? 'up' : 'down');
    current = index;
    const svc = services[current];
    currentEl.textContent = String(current + 1).padStart(2, '0');
    animateImage(svc.img, dir);
    setTimeout(() => {
      catEl.textContent  = 'Cloud Counselage'; // Affiliation style
      nameEl.textContent = svc.name;
      descEl.innerHTML   = svc.desc; // Change desc to innerHTML for potential rich text
      linkEl.href        = svc.link;
      animateText(dir);
    }, 80);
    buildThumbs();
  }

  nextBtn.addEventListener('click', () => goTo((current + 1) % total, 'up'));
  prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total, 'down'));

  buildThumbs();
  if (imgInner.querySelector('img')) imgInner.querySelector('img').src = services[0].img;
})();
