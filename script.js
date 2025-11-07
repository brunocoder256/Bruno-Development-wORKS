/* script.js — responsive nav, contact bubble + EmailJS contact handler
   Notes:
   - EmailJS public key, service and template ids can be replaced below.
   - If you provided other EmailJS credentials earlier, replace them here.
*/

/* ========== NAV TOGGLE (mobile) ========== */
document.addEventListener('DOMContentLoaded', function(){
  // create mobile toggle button if not present
  const nav = document.querySelector('nav');
  if(nav){
    let toggle = document.querySelector('.nav-toggle');
    if(!toggle){
      toggle = document.createElement('button');
      toggle.className = 'nav-toggle';
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Toggle navigation');
      toggle.innerHTML = '☰';
      nav.insertBefore(toggle, nav.firstChild);
    }
    const ul = nav.querySelector('ul');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(ul){
        ul.style.display = expanded ? 'none' : 'flex';
        ul.style.flexDirection = 'column';
        ul.style.position = 'absolute';
        ul.style.right = '16px';
        ul.style.top = '64px';
        ul.style.background = 'var(--panel)';
        ul.style.padding = '12px';
        ul.style.borderRadius = '10px';
        ul.style.gap = '0.4rem';
      }
    });
  }

  /* ========== Lazy-load images: set loading attr if missing ========== */
  document.querySelectorAll('img').forEach(img=>{
    if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
  });

  /* ========== Floating Contact Bubble ========== */
  const bubble = document.createElement('button');
  bubble.className = 'contact-bubble';
  bubble.setAttribute('aria-label','Open contact form');
  bubble.innerHTML = '<span class="icon">✉</span>';
  document.body.appendChild(bubble);

  // create small function to spawn particles
  function spawnParticle(x, y){
    const p = document.createElement('div');
    p.className = 'bubble-particle';
    const size = Math.floor(Math.random()*22) + 8; // 8 - 30px
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = (x) + 'px';
    p.style.top = (y) + 'px';
    // choose color between blue and gold shades
    p.style.background = Math.random() > 0.5 ? 'rgba(14,165,255,0.18)' : 'rgba(212,175,55,0.14)';
    document.body.appendChild(p);
    // remove after animation
    setTimeout(()=> p.remove(), 2200);
  }

  // particles on hover and click
  bubble.addEventListener('pointermove', (e)=> {
    // spawn a few small particles near pointer
    for(let i=0;i<1;i++){
      spawnParticle(e.clientX + (Math.random()*20-10), e.clientY + (Math.random()*12-6));
    }
  });

  bubble.addEventListener('click', (e)=>{
    // spawn extra particles
    for(let i=0;i<6;i++){
      spawnParticle(e.clientX + (Math.random()*120-60), e.clientY + (Math.random()*80-40));
    }
    // scroll to contact section
    const contactSection = document.querySelector('#contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior:'smooth', block:'start'});
      // focus the first form input for keyboard users
      const firstInput = document.querySelector('#contact-form input, #contact-form textarea');
      if(firstInput) firstInput.focus({preventScroll:true});
    }
  });

  /* ========== EmailJS form handling ========== */
  // Only init EmailJS if library is present
  if (typeof emailjs !== 'undefined') {
    try {
      // Replace with your values if different.
      const EMAILJS_SERVICE = 'service_prdo83s';
      const EMAILJS_TEMPLATE = 'template_2rilelu';
      const EMAILJS_PUBLIC_KEY = '29RRfIFwZKq6LY7ea';

      emailjs.init(EMAILJS_PUBLIC_KEY);

      const form = document.getElementById('contact-form');
      const responseEl = document.getElementById('form-response');

      if(form){
        form.addEventListener('submit', function(e){
          e.preventDefault();
          const submitBtn = form.querySelector('button[type="submit"]');
          if(submitBtn) submitBtn.disabled = true;

          const data = {
            from_name: form.name.value || 'No name',
            from_email: form.email.value || 'no-reply@example.com',
            message: form.message.value || ''
          };

          emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, data)
            .then(function(){
              if(responseEl) responseEl.innerHTML = '<p style="color:var(--accent-blue);font-weight:700">Message sent — thank you! I will reply soon.</p>';
              form.reset();
            }, function(err){
              console.error('EmailJS error:', err);
              if(responseEl) responseEl.innerHTML = '<p style="color:#f66;font-weight:700">Could not send message. Please email brunocoder13@gmail.com directly.</p>';
            })
            .finally(()=>{
              if(submitBtn) submitBtn.disabled = false;
            });
        });
      }
    } catch (err) {
      console.warn('EmailJS init failed', err);
    }
  } else {
    // EmailJS not loaded — show fallback message on form submit
    const form = document.getElementById('contact-form');
    const responseEl = document.getElementById('form-response');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if(responseEl){
          responseEl.innerHTML = '<p style="color:var(--accent-gold);font-weight:700">Email service unavailable. Please email brunocoder13@gmail.com directly.</p>';
        }
      });
    }
  }

  /* ========== Small accessibility: focus outlines for keyboard users ========== */
  (function(){
    let usingKeyboard = false;
    window.addEventListener('keydown', function(e){
      if(e.key === 'Tab') usingKeyboard = true;
    });
    window.addEventListener('mousedown', function(){ usingKeyboard = false });
    document.body.addEventListener('focusin', function(e){
      if(usingKeyboard){
        e.target.classList.add('focus-visible');
      }
    });
    document.body.addEventListener('focusout', function(e){
      e.target.classList.remove('focus-visible');
    });
  })();

}); // DOMContentLoaded end
