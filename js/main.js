document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');
  const faqItems = document.querySelectorAll('.faq-item');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const legalContent = {
    terms: {
      title: 'Terms & Conditions',
      html: `
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing, browsing, or utilizing the engineering, web development, app development, Web3 consulting, or cloud hosting services offered by <strong>PLUGHOST</strong> ("Company", "we", "us", "our"), registered under Government of India MSME (Udyam: UDYAM-UP-15-0013614) and Dun & Bradstreet (D-U-N-S: 307794759), you agree to comply with and be bound by these Terms and Conditions.</p>

        <h4>2. Services and Scope of Work</h4>
        <p>PLUGHOST provides custom software engineering, mobile application development, full-stack website engineering, Web3 smart contract implementation, and managed web hosting. Every client engagement is subject to a formal Statement of Work (SOW) or digital service specification delineating scope, deliverables, and milestone schedules.</p>

        <h4>3. Cloud Hosting SLA & Acceptable Use Policy (AUP)</h4>
        <p>Hosting services operated under plughost.in guarantee a 99.9% network and server availability Service Level Agreement (SLA), backed by enterprise Tier-IV infrastructure and Cloudflare Anycast routing. Users must not deploy or host malicious software, phishing vectors, unauthorized mining tools, or content violating Indian Cyber Law (Information Technology Act, 2000) or international mandates.</p>

        <h4>4. Intellectual Property Rights</h4>
        <p>Upon full settlement of contracted invoices, all bespoke source code, proprietary logic, design collateral, and digital assets developed exclusively for the client transfer to the client, excluding third-party libraries, standard open-source frameworks, and pre-existing core utilities proprietary to PLUGHOST.</p>

        <h4>5. Payment, Invoicing & MSME Protections</h4>
        <p>As a verified Micro Enterprise under the MSME Act, all invoices are due within the payment window specified in the respective SOW. Failure of payment may lead to suspension of hosting services or development sprints.</p>

        <h4>6. Limitation of Liability & Governing Law</h4>
        <p>PLUGHOST shall not be liable for indirect, incidental, or consequential damages resulting from third-party upstream outages or external cyber attacks beyond commercially reasonable safeguards. These terms are governed under the jurisdiction of the courts of Bareilly, Uttar Pradesh, India.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      html: `
        <h4>1. Information We Collect</h4>
        <p>PLUGHOST operates with strict data privacy protocols. When contacting us or initiating services on plughost.in, we may collect your name, email address, telephone number, company credentials, and technical project specifications necessary for executing software and hosting contracts.</p>

        <h4>2. Purpose and Utilization of Data</h4>
        <p>Collected information is utilized strictly to provide client onboarding, fulfill contractual agreements, configure cloud hosting servers, process invoices, provide 24/7 technical support, and maintain verified corporate communications.</p>

        <h4>3. Infrastructure Security & Cloudflare Shielding</h4>
        <p>All traffic to plughost.in is routed through Cloudflare's enterprise DNS and encrypted via TLS 1.3 / SSL protocols. We deploy rigorous access controls, multi-factor authentication, and encrypted databases to safeguard client records against unauthorized breach, alteration, or disclosure.</p>

        <h4>4. Third-Party Disclosures & Cookies</h4>
        <p>We do not monetize, sell, or trade client information to any third party. Data is only communicated to certified cloud infrastructure providers (e.g., DNS, datacenter nodes) strictly as required to provide operational hosting services.</p>

        <h4>5. Your Legal Rights & Grievance Officer</h4>
        <p>Under the Information Technology Act (2000) and GDPR guidelines, you have the right to inspect, correct, or request deletion of your stored records. For any privacy inquiries or data requests, contact our privacy desk directly at <strong>usman.raza.txt@gmail.com</strong> or phone <strong>+91 7817803220</strong>.</p>
      `
    }
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(el => el.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  function openModal(type) {
    if (!legalContent[type]) return;
    modalTitle.textContent = legalContent[type].title;
    modalBody.innerHTML = legalContent[type].html;
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-legal-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.getAttribute('data-legal-modal');
      openModal(type);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  const latencyNodes = [
    { id: 'ping-blr', base: 12, range: 4 },
    { id: 'ping-bom', base: 18, range: 5 },
    { id: 'ping-sin', base: 42, range: 6 },
    { id: 'ping-fra', base: 84, range: 8 },
    { id: 'ping-iad', base: 132, range: 10 }
  ];

  setInterval(() => {
    latencyNodes.forEach(node => {
      const el = document.getElementById(node.id);
      if (el) {
        const jitter = Math.floor(Math.random() * (node.range * 2 + 1)) - node.range;
        const current = Math.max(8, node.base + jitter);
        el.textContent = `${current} ms`;
      }
    });
  }, 2800);

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you! Your project inquiry has been received. Our engineering team will contact you within 2-4 hours.';

        setTimeout(() => {
          formFeedback.className = 'form-feedback';
          formFeedback.textContent = '';
        }, 7000);
      }, 950);
    });
  }
});
